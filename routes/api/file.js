const express = require("express");
const stream = require("stream");
const crypto = require('crypto');
const path = require('path');
const router = express.Router();
const AWS = require('aws-sdk');
const multer = require('multer');

const File = require("../../models/File");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

router.get("/download", async (req, res) => {
  const key_name = req.query.path;
  const params = {
    Bucket: 'apirender-dashboard-bucket-2020-sep',
    Key: key_name,
  };
  s3.getObject( params, function (error, data) {
    if (error != null) return res.status(400)
    let buffer = Buffer.from(data.Body);
    let arraybuffer = Uint8Array.from(buffer).buffer;
    // console.log(arraybuffer);
    res.json({Body: buffer, type: data.ContentType});
  });
});


router.post("/upload", upload.single('file'), async (req, res) => {
  let file = req.file;
  let serviceId = req.query.service_id;
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
        service_option: 'basic',
        original_name: file.originalname,
        key_name: fileName,
        path: data.Location,
        file_size: file.size,
        extension: path.extname(file.originalname)
      });
      fileObj.save();
      res.send(file);
    })
  } catch (err) {
    return res.status(400).json(err)
  }
});

module.exports = router;
