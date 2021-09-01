const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb"); // or ObjectID

const Project = require("../../models/Project");
const Service = require("../../models/Service");
const Action = require("../../models/Action");

router.post("/get-latest", async (req, res) => {
    Action.find({ user_id: req.body.user_id })
    .sort({ date: -1 })
    .exec(async (err, actions) => {
        let results = [];
        for (let i = 0; i < actions.length; i ++) {
            let title = "";
            let link = "";
            if (actions[i].action_model === "CHAT") {
                const service = await Service.findOne({ _id: actions[i].model_id });
                if (actions[i].action === "RECEIVED_MESSAGES_FROM_ADMIN") {
                    title = `There is a new message from admin in ${service.name}`;
                    link = `projects/view-briefing/${service._id}`;
                }
            }
            else if (actions[i].action_model === "PROJECT") {
                const project = await Project.findOne({ _id: actions[i].model_id });
                if (actions[i].action === "STATUS_CHANGE") {
                    title = `${project.name} status has been changed to ${project.status}`;
                    link = `projects/details/${project._id}`;
                }
            }
            else if (actions[i].action_model === "SERVICE") {
                const service = await Service.findOne({_id: actions[i].model_id});
                if (actions[i].action === "RECEIVED_FILE_FROM_ADMIN") {
                    title = `There is a new backups from admin in ${service.name}`;
                    link = `projects/view-briefing/${project._id}`;
                }
            }
            results.push({
                title,
                link,
                date: doc.date
            });
        }
        return res.status(200).json(results);
    });
});

module.exports = router;
