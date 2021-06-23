const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb"); // or ObjectID

const Project = require("../../models/Project");
const Service = require("../../models/Service");
const Action = require("../../models/Action");

router.post("/get-latest", async (req, res) => {
  Action.find({ user_id: req.body.user_id })
    .sort({ date: -1 })
    .exec(async (err, docs) => {
      let results = await Promise.all(
        docs.map(async (doc) => {
          let title = "";
          let link = "";
          if (doc.action_model === "CHAT") {
            let service = await Service.findOne({_id: doc.model_id});
            if (doc.action === "RECEIVED_MESSAGES_FROM_ADMIN") {
              title = "There is a new message from admin in " + service.name;
              link = "projects/view-briefing/" + service._id;
            }
          }
          else if (doc.action_model === "PROJECT") {
            let project = await Project.findOne({_id: doc.model_id});
            if (doc.action === "STATUS_CHANGE") {
              title = project.name + " status has been changed to " + project.status;
              link = "projects/details/" + project._id;
            }
          }
          else if (doc.action_model === "SERVICE") {
            let service = await Service.findOne({_id: doc.model_id});
            if (doc.action === "RECEIVED_FILE_FROM_ADMIN") {
              title = "There is a new backups from admin in " + service.name;
              link = "projects/view-briefing/" + service._id;
            }
          }
          return {
            title: title,
            link: link,
            date: doc.date,
          };
        })
      );
      return res.status(200).json(results);
    });
});

module.exports = router;
