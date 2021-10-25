const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const sgMail = require("@sendgrid/mail");

const User = require("../../models/User");
const Token = require("../../models/Token");

router.post("/", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).send("user with given email doesn't exist");
        let token = await Token.findOne({ user: user._id });
        if (!token) {
            token = await new Token({
                user: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }

        const link = `${process.env.BASE_URL}/user/password-reset/${user._id}/${token.token}`;

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            from: process.env.VERIFIED_SENDER_EMAIL,
            personalizations: [
              {
                to: [
                  {
                    email: req.body.email,
                  },
                ],
                dynamic_template_data: {
                    "link": link,
                },
              },
            ],
            templateId: process.env.SENDGRID_PASSWORD_RESET_EMAIL_TEMPLATE_ID,
        };

        try {
            await sgMail.send(msg);
            res.send("password reset link sent to your email account");
        } catch (e) {
            console.log(e.response.body.errors);
            return res.status(400).send("Something went wrong!");
        }

    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

router.post("/:userId/:token", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send("invalid link or expired");

        const token = await Token.findOne({
            user: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send("Invalid link or expired");

        // Hash password before saving in database
        bcrypt.genSalt(10, async (err, salt) => {
            bcrypt.hash(req.body.password, salt, async (err, hash) => {
                if (err) throw err;
                user.password = hash;
                await user.save();
                await token.delete();
                res.send("password reset sucessfully.");
            });
        });

    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

module.exports = router;