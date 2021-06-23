const express = require("express");
const router = express.Router();
const {ObjectId} = require('mongodb'); // or ObjectID 

const Backup = require("../../models/Backup");
const File = require("../../models/File");
const Service = require("../../models/Service");
const Project = require("../../models/Project");
const Action = require("../../models/Action");
const checkProjectStatus = require("../../utils");

// @route POST api/backup/save?service_id=
// @desc save backup of service
// @access Public
router.post("/save", async (req, res) => {
  const service_id = req.query.service_id;
  const notes = req.body.notes;
  
  let service = await Service.findOne({_id: req.query.service_id});
  let project = await Project.findOne({_id: service.project});

  const newAction = new Action();
  newAction.user_id = project.user_id;
  newAction.action_model = 'SERVICE';
  newAction.action = 'RECEIVED_FILE_FROM_ADMIN';
  newAction.model_id = req.query.service_id;
  newAction.save();

  if (notes == '') {
    const files = await File.find({service_id: service_id});
    return res.status(200).send({ downloads: files });
  }
  const newBackup = new Backup({
    service_id :service_id,
    notes: notes,
  });
  newBackup.save(function(err, obj) {
    if (err) return res.status(404).json({ message: "Something went wrong!" });
    const query = { _id: service_id };
    const newvalues = { $set: {status: "REVIEW"} };
    Service.updateOne(query, newvalues, async function(err1, response) {
      if (err1) return res.status(404).json({ message: "Something went wrong!" });
      const serviceObj = await Service.findOne({_id: service_id});
      checkProjectStatus(serviceObj.project);

      const files = await File.find({service_id: service_id});
      return res.status(200).send({ downloads: files });
    });
    
  });
});

module.exports = router;
