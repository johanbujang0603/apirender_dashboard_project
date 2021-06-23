const File = require("./models/File");
const Briefing = require("./models/Briefing");
const Service = require("./models/Service");
const Project = require("./models/Project");
const User = require("./models/User");
const Backup = require("./models/Backup");
const Action = require("./models/Action");

const checkProjectStatus = async (project_id) => {

  // check the project is ongoing.
  let project = await Project.findOne({_id: project_id});
  let numOfServices = await Service.countDocuments({project: project_id});
  let ongoingServices = await Service.countDocuments({project: project_id, status: "IN PROGRESS"});
  let reviewServices = await Service.countDocuments({project: project_id, status: "REVIEW"});
  let completedServices = await Service.countDocuments({project: project_id, status: "COMPLETED"});
  let status = null;
  if (numOfServices == ongoingServices) status = "IN PROGRESS"
  if (reviewServices != 0) status = "REVIEW"
  if (completedServices == numOfServices) status = "COMPLETED"

  if (status != null) {
    const query = { _id: project_id };
    const newvalues = { $set: {status: status} };
    const newAction = new Action();
    newAction.user_id = project.user_id;
    newAction.action_model = 'PROJECT';
    newAction.action = 'STATUS_CHANGE';
    newAction.model_id = project_id;
    newAction.save();
    Project.updateOne(query, newvalues);
  }

};

module.exports = checkProjectStatus