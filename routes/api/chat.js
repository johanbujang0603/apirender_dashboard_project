const express = require("express");
const router = express.Router();
const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');
const AWS = require('aws-sdk');
const path = require('path')
const {ObjectId} = require('mongodb'); // or ObjectID 

const File = require("../../models/File");
const Briefing = require("../../models/Briefing");
const Service = require("../../models/Service");
const Project = require("../../models/Project");
const Chat = require("../../models/Chat");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// @route POST api/chats/send-meesage
// @desc save meesage
// @access Public
router.post("/send-message", async (req, res) => {
  
  let service = await Service.findOne({_id: req.body.service_id});
  let project = await Project.findOne({_id: service.project});

  const chatObj = new Chat({
    sender: req.body.sender_id,
    service_id: req.body.service_id,
    text: req.body.message,
  });
  chatObj.save(function (err, obj) {

    if (project.user_id != req.body.sender_id) {
      const newAction = new Action();
      newAction.user_id = project.user_id;
      newAction.action_model = 'CHAT';
      newAction.action = 'RECEIVED_MESSAGES_FROM_ADMIN';
      newAction.model_id = req.body.service_id;
      newAction.save();
    }
    
    if (err) return res.status(404).json({ message: "Something went wrong!" });
    return res.status(200).json({ message: 'success' });
  });
});


const storage = multer.memoryStorage();
const upload = multer({ storage });



router.post("/upload-file", upload.single('file'), async (req, res) => {
  let file = req.file;
  let serviceId = req.body.service_id;
  let owner_id = req.body.user_id;
  const rawBytes = await crypto.pseudoRandomBytes(16);
  const fileName = rawBytes.toString('hex') + Date.now() + path.extname(file.originalname);
  const params = {
    Bucket: 'apirender-dashboard-bucket-2020-sep',
    Key: fileName,
    ContentType: file.mimetype,
    Body: file.buffer
  };
  try {
    s3.upload(params).on('httpUploadProgress', function (evt) {
    }) 
    .send(function (err, data) {
      let fileObj = new File({
        service_id: serviceId,
        service_option: 'attachment',
        owner_id: owner_id,
        original_name: file.originalname,
        key_name: fileName,
        path: data.Location,
        file_size: file.size,
        extension: path.extname(file.originalname)
      });
      fileObj.save();
      return res.status(200).send(file);
    })
  } catch (err) {
    return res.status(400).json(err)
  }
});

// router.post("/upload-file", upload.single('file'), (req, res) => {
//   const fileObj = new File({
//     service_id: req.body.service_id,
//     service_option: 'attachment',
//     owner_id: req.body.user_id,
//     original_name: req.file.originalname,
//     file_path: req.file.path,
//     file_size: req.file.size,
//     extension: path.extname(req.file.originalname)
//   });
//   fileObj.save(function (err, obj) {
//     if (err) return res.status(404).json({ message: "Something went wrong!" });
//     return res.status(200).send(req.file);
//   });
// });


router.post("/conversations", async (req, res) => {
  Chat.aggregate([
      { $match : { 
        $and : [
          { "service_id":ObjectId(req.body.service_id) }
        ]
       } },
      { $lookup:
        {
          from: 'users',
          localField: 'sender',
          foreignField: '_id',
          as: 'sender_details'
        },
      },
      { $sort : { date : 1 } }
  ], function(err, conversations) {
    return res.status(200).json(conversations);
  });
});

router.post("/attachments", async (req, res) => {
  File.aggregate([
      { $match : { 
        $and : [
          { "service_id":ObjectId(req.body.service_id) },
          { "service_option":'attachment' }
        ]
       } },
      { $lookup:
        {
          from: 'users',
          localField: 'owner_id',
          foreignField: '_id',
          as: 'owner_details'
        },
      },
      { $sort : { date : 1 } }
  ], function(err, files) {
    return res.status(200).json(files);
  });
});

module.exports = router;
