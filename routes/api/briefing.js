const express = require("express");
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const AWS = require('aws-sdk');
const formidable = require("formidable");

const File = require("../../models/File");
const Briefing = require("../../models/Briefing");
const Service = require("../../models/Service");
const Project = require("../../models/Project");
const User = require("../../models/User");
const Backup = require("../../models/Backup");
const checkProjectStatus = require("../../utils");


const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

router.post("/save", async (req, res) => {
  const form = new formidable.IncomingForm({ maxFileSize: 4096 * 1024 * 1024 });
  let reqBody = null;
  let files = [];
  form.parse(req, function (err, fields, files) {
    if (err) console.log(err);
    reqBody = fields;
  });
  
  form.on("fileBegin", async (name, file) => {
    file.path = __dirname + '/../../uploads/temp/' + file.name;
    files.push({
      name: name,
      file_name: file.name,
      size: file.size,
      path: __dirname + '/../../uploads/temp/' + file.name
    });
  });

  form.on("file", function (name, file) {});

  form.on("end", async () => {
    let reqData = [];
    for (let i = 0 ; i < files.length ; i ++) {
      const fileSize = fs.statSync(files[i].path).size;
      const rawBytes = await crypto.pseudoRandomBytes(16);
      const fileName = rawBytes.toString('hex') + Date.now() + path.extname(files[i].name);
      reqData.push({
        service_id: reqBody.serviceId,
        service_option: files[i].name,
        original_name: files[i].file_name,
        key_name: fileName,
        file_size: fileSize,
        extension: path.extname(files[i].file_name),
        temp_path: `/uploads/temp/${files[i].file_name}`,
        is_uploaded: false,
        progress: 0,
      });
    }

    await File.insertMany(reqData);

    try {
      let briefingObj = new Object();
      let { serviceId, content } = reqBody;
      content = JSON.parse(content);
      Object.keys(content).map(function (key, index) {
        briefingObj[key] = content[key];
      });

      const newBriefing = new Briefing({
        service_id: serviceId,
        content: briefingObj
      });
      await newBriefing.save();
  
      const newvalues = { $set: {status: "IN PROGRESS"} };
      await Service.updateOne({ _id: serviceId }, newvalues);
  
      const serviceObj = await Service.findOne({_id: serviceId});
      await checkProjectStatus(serviceObj.project);
      return res.status(200).json({message: 'succcess'});
  
    } catch (err) {
      console.log(err)
      return res.status(400).json(err)
    }
  });
});

router.get("/file-status", async (req, res) => {
  const serviceId = req.query.service_id;
  File.find({ service_id: serviceId }, function (err, docs) {
    let totalProgress = 0;
    docs.map((d) => {
      totalProgress += d.progress;
    });
    return res.json({ progress: docs.length > 0 ? parseFloat(totalProgress/docs.length) : 100 })
  })
})


router.post("/get-briefing", async (req, res) => {
  const _id = req.query._id;
  try {
      const briefing = await Briefing.findOne({service_id: _id});
      const files = await File.find({service_id: _id});
      const service = await Service.findOne({_id: _id});
      const project = await Project.findOne({_id: service.project});
      const customer = await User.findOne({_id: project.user_id});
      
      const backupNotes = await Backup.find({service_id: _id});
      if (briefing.length == 0) return res.status(404).json({message: "No briefing found!"})
      const result = {
          service: {value: service.value, is_paid: service.is_paid, _id: service._id},
          orders: JSON.parse(service.orders),
          content: briefing.content,
          customer: customer,
          files: files,
          project: project,
          backupNotes: backupNotes,
      }
      return res.json(result);
  } catch(error) {
    return res.status(400).json(error);
  }
});


router.post("/confirm-service", async (req, res) => {
  const query = { _id: req.query._id };
  const newvalues = { $set: {status: "COMPLETED"} };
  Service.updateOne(query, newvalues, async function(err1, response) {
    const serviceObj = await Service.findOne({_id: req.query._id});
    checkProjectStatus(serviceObj.project);
    if (err1) return res.status(404).json({ message: "Something went wrong!" });
    return res.status(200).send({ message: "Success!" });
  });
  
});

router.post("/save-backup", async (req, res) => {
  
  const form = new formidable.IncomingForm();
  let reqBody = null;
  let files = [];
  form.parse(req, function (err, fields, files) {
    reqBody = fields;
  });
  
  form.on("fileBegin", async (name, file) => {
    file.path = __dirname + '/../../uploads/temp/' + file.name;
    files.push({
      name: name,
      file_name: file.name,
      size: file.size,
      path: __dirname + '/../../uploads/temp/' + file.name
    });
  });

  form.on("file", function (name, file) {

  });

  form.on("end", async () => {
    let reqData = [];
    for (let i = 0 ; i < files.length ; i ++) {
      const fileContent = fs.readFileSync(files[i].path);
      const fileSize = fs.statSync(files[i].path).size;
      const rawBytes = await crypto.pseudoRandomBytes(16);
      const fileName = rawBytes.toString('hex') + Date.now() + path.extname(files[i].name);
      reqData.push({
        service_option: files[i].name,
        original_name: files[i].file_name,
        key_name: fileName,
        file_size: fileSize,
        extension: path.extname(files[i].name),
        param: {
          Bucket: 'apirender-dashboard-bucket-2020-sep',
          Key: fileName,
          Body: fileContent
        }
      });
      fs.unlinkSync(files[i].path);
    }

    let { serviceId, notes } = reqBody;

    const s3Responses = await Promise.all(
      reqData.map(async data => {
        return {
          service_option: data.service_option,
          original_name: data.original_name,
          key_name: data.key_name,
          file_size: data.file_size,
          extension: data.extension,
          data: await s3.upload(data.param).promise()
        }
      })
    );
    
    for (let i = 0 ; i < s3Responses.length; i ++) {
      const newFile = new File({
        service_id: serviceId,
        service_option: s3Responses[i].service_option,
        original_name: s3Responses[i].original_name,
        key_name: s3Responses[i].key_name,
        path: s3Responses[i].data.Location,
        file_size: s3Responses[i].file_size,
        extension: s3Responses[i].extension
      });
      await newFile.save();
    }

    try {
      const newBackup = new Backup({ service_id: serviceId, notes });
      await newBackup.save();

      const files = await File.find({service_id: serviceId});

      return res.status(200).json({downloads: files});
    } catch (err) {
      console.log(err)
      return res.status(400).json(err)
    }
  });
});

module.exports = router;
