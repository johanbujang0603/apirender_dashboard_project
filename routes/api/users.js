const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const crypto = require('crypto');
const multer = require('multer');
const path = require('path');
const AWS = require('aws-sdk');
const sgMail = require("@sendgrid/mail");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Load User model
const User = require("../../models/User");

router.post("/register", async (req, res) => {
    let avatarPath = await crypto.pseudoRandomBytes(16);
    if (req.body.avatar != null ) {
        let base64Data = req.body.avatar.replace(/^data:image\/png;base64,/, "");
        avatarPath = 'uploads/avatar/' + avatarPath.toString('hex') + Date.now() + '.png';
        require("fs").writeFile(avatarPath, base64Data, 'base64', function(err) {
        if (err) 
            throw err;
        });
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({message: "Email already exists"});
        } else {
            const formData = {
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                phone_number: req.body.phoneNumber ? req.body.phoneNumber : null,
                password: req.body.password,
                job_title: req.body.jobTitle ? req.body.jobTitle : null,
                company_name: req.body.companyName ? req.body.companyName : null,
                country: req.body.country ? req.body.country : null,
                role: req.body.role,
                avatar: req.body.avatar ? avatarPath : null,
            }
            const newUser = new User(formData);

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(async user => {
                        const link = `${process.env.BASE_URL}/user/login`;
                        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                        const msg = {
                            from: process.env.VERIFIED_SENDER_EMAIL,
                            personalizations: [
                            {
                                to: [
                                {
                                    email: "russeldevsmart1998@gmail.com",
                                },
                                ],
                                dynamic_template_data: {
                                    "link": link,
                                    "username": user.email,
                                    "password":  req.body.password
                                },
                            },
                            ],
                            templateId: process.env.SENDGRID_REGISTER_EMAIL_TEMPLATE_ID,
                        };

                        try {
                            await sgMail.send(msg);
                            return res.json(user)
                        } catch (e) {
                            console.log(e);
                            return res.status(400).send("Something went wrong!");
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).json(err);
                    });
                });
            });
        }
    });
});


router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: "Email not found" });
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.first_name + ' ' + user.last_name
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 90000 // 15 mins in seconds
                    },
                    (err, token) => {
                        // console.log(user);
                        res.json({
                        user,
                        token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ message: "Password incorrect" });
            }
        });
    });
});


router.post("/list", async (req, res) => {
    const resPerPage = parseInt(req.query.pageSize) || 8; // results per page
    const page = parseInt(req.query.currentPage) || 1; // Page 
    try {
        // Count how many users were found
        let numOfUsers = 0;
        numOfUsers = await User.countDocuments();
        if (req.query.search) {
            regex = new RegExp(req.query.search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
            // Find Demanded users - Skipping page values, limit results       per page
            const foundUsers = User.find({name:regex, role: "admin"})
                .skip((resPerPage * page) - resPerPage)
                .limit(resPerPage)
                .exec((err, doc) => {
                    const result = {
                        data: doc,
                        currentPage: page,
                        totalPage: Math.ceil(numOfUsers / resPerPage),
                        totalItem: numOfUsers
                    }
                    return res.json(result);
                });
        }
        else {
            const query={}
            const foundUsers = User.find(query)
                .skip((resPerPage * page) - resPerPage)
                .limit(resPerPage)
                .exec((err, doc) => {
                    const result = {
                        data: doc,
                        currentPage: page,
                        totalPage: Math.ceil(numOfUsers / resPerPage),
                        totalItem: numOfUsers
                    }
                    return res.json(result);
            });
        }
    } catch (err) {
        throw new Error(err);
    }
});


router.post("/detail", async (req, res) => {
  try {
    const user = await User.findById(req.query.id);
    return res.json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
});


router.post("/update-admin", upload.single('avatar'), async (req, res) => {
  
  const user = await User.findById(req.body.id);

  User.findOne({ email: req.body.email }).then(async user => {
    if (user && req.body.email != user.email) {
      return res.status(400).json({message: "Email already exists"});
    } else {
      
      if (req.body.password === "") {
        let newValues = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
        }
        if (req.body.is_new === 'true')
          newValues.avatar = req.file.path;
        User.findOneAndUpdate({ email: req.body.email }, { $set: { ...newValues } }, {new: true}, (err, doc) => {
          return res.status(200).json(doc);
        });
      }
      else {

        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.email = req.body.email;
        user.password = req.body.password;
        if (req.body.is_new == 'true') {
          user.avatar = req.file.path;
        }
      
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then((user) => {return res.status(200).json(user)})
              .catch(err => console.log(err));
          });
        });
      }

    }
  });
  
});


router.post("/update-customer", upload.single('avatar'), async (req, res) => {
  User.findOne({ email: req.body.email }).then(async user => {
    if (user && req.body.email != user.email) {
      return res.status(400).json({message: "Email already exists"});
    } else {
      let newValues = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        job_title: req.body.job_title,
        company_name: req.body.company_name,
        country: req.body.country,
      }
      if (req.body.is_new === 'true') {
        const file = req.file;
        const rawBytes = await crypto.pseudoRandomBytes(16);
        const fileName = 'avatar/' + rawBytes.toString('hex') + Date.now() + path.extname(file.originalname);
        const params = {
          Bucket: 'apirender-dashboard-bucket-2020-sep',
          Key: fileName,
          ContentType: file.mimetype,
          Body: file.buffer
        };
        try {
          const stored = await s3.upload(params).promise();
          newValues.avatar = stored.Location;
        } catch (err) {
          return res.status(400).json(err);
        }
      }
      User.findOneAndUpdate({ email: req.body.email }, { $set: { ...newValues } }, {new: true}, (err, doc) => {
        if (err) console.log(err)
        return res.status(200).json(doc);
      });
    }
  });
  
});


router.post("/change-password", async (req, res) => {
  User.findById(req.body.userId).then(user => {
    user.password = req.body.password;
    
    // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) throw err;
        user.password = hash;
        user
          .save()
          .then((user) => { return res.status(200).json(user) })
          .catch(err => console.log(err));
      });
    });
  });
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  console.log(email)
  User.findOne({ email })
  .then(async (user) => {
    if (!user) return res.status(403).send('email not in database');
    const token = crypto.randomBytes(20).toString('hex');
    await User.findByIdAndUpdate(user._id, {
      $set: {
        reset_password_token: token,
        reset_password_expires: Date.now() + 3600000
      }
    });
  })
  .catch((err) => {
    console.log(err);
  })
})

module.exports = router;
