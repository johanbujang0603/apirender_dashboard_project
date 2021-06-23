const express = require("express");
const router = express.Router();
// Load Project model
const Project = require("../../models/Project");
const Service = require("../../models/Service");
const User = require("../../models/User");
const { ObjectId } = require("mongodb"); // or ObjectID

const makeid = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toUpperCase();
};

router.post("/my-list", async (req, res) => {
  const resPerPage = parseInt(req.query.pageSize) || 8; // results per page
  const page = parseInt(req.query.currentPage) || 1; // Page
  const orderBy = req.query.orderBy || "project_name";
  const user_id = req.query.userID;
  try {
    // Count how many projects were found
    let numOfProjects = 0;
    numOfProjects = await Project.countDocuments({});
    if (req.query.search) {
      regex = new RegExp(
        req.query.search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
        "gi"
      );
      // Find Demanded Projects - Skipping page values, limit results per page
      Project.find({ project_name: regex, user_id: user_id })
        .skip(resPerPage * page - resPerPage)
        .limit(resPerPage)
        .sort({ [orderBy]: -1 })
        .exec((err, doc) => {
          if (err) return res.status(400).json(err);
          const result = {
            data: doc,
            currentPage: page,
            totalPage: Math.ceil(numOfProjects / resPerPage),
            totalItem: numOfProjects,
          };
          return res.json(result);
        });
    } else {
      const query = { user_id: user_id };
      Project.find(query)
        .skip(resPerPage * page - resPerPage)
        .limit(resPerPage)
        .sort({ [orderBy]: 1 })
        .exec((err, doc) => {
          const result = {
            data: doc,
            currentPage: page,
            totalPage: Math.ceil(numOfProjects / resPerPage),
            totalItem: numOfProjects,
          };
          return res.json(result);
        });
    }
  } catch (err) {
    throw new Error(err);
  }
});

router.post("/list", async (req, res) => {
  const resPerPage = parseInt(req.query.pageSize) || 8; // results per page
  const page = parseInt(req.query.currentPage) || 1; // Page
  const orderBy = req.query.orderBy || "project_name";
  try {
    // Count how many projects were found
    let numOfProjects = 0;
    numOfProjects = await Project.countDocuments({});
    if (req.query.search) {
      regex = new RegExp(
        req.query.search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
        "gi"
      );
      // Find Demanded Projects - Skipping page values, limit results       per page

      Project.aggregate(
        [
          { $match: { project_name: regex } },
          {
            $lookup: {
              from: "users",
              localField: "user_id",
              foreignField: "_id",
              as: "user_details",
            },
          },
          { $skip: resPerPage * page - resPerPage },
          { $limit: resPerPage },
          { $sort: { [orderBy]: 1 } },
        ],
        function (err, doc) {
          const result = {
            data: doc,
            currentPage: page,
            totalPage: Math.ceil(numOfProjects / resPerPage),
            totalItem: numOfProjects,
          };
          return res.json(result);
        }
      );
    } else {
      Project.aggregate(
        [
          {
            $lookup: {
              from: "users",
              localField: "user_id",
              foreignField: "_id",
              as: "user_details",
            },
          },
          { $skip: resPerPage * page - resPerPage },
          { $limit: resPerPage },
          { $sort: { [orderBy]: 1 } },
        ],
        function (err, doc) {
          const result = {
            data: doc,
            currentPage: page,
            totalPage: Math.ceil(numOfProjects / resPerPage),
            totalItem: numOfProjects,
          };
          return res.json(result);
        }
      );
    }
  } catch (err) {
    throw new Error(err);
  }
});

router.post("/create", (req, res) => {
  const newProject = new Project({
    unique_id: makeid(8),
    category: req.body.category,
    project_name: req.body.project_name,
    description: req.body.project_description,
    is_paid: req.body.is_paid,
    total_amount: 0,
    status: req.body.status,
    user_id: req.body.user_id,
  });
  newProject
    .save()
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json({message: err}));
});

router.post("/get-latest", async (req, res) => {
  let query = {};
  if (req.body.role == "customer") query = { user_id: req.body.user_id };
  let user = await User.findOne({ _id: req.body.user_id });
  Project.find(query)
    .limit(10)
    .sort({ date: -1 })
    .exec(async (err, docs) => {
      if (err) return res.status(400).json({ mesage: err });
      let projects = docs;
      numOfProjects = await Project.countDocuments(query);
      Project.aggregate(
        [
          { $match: { user_id: ObjectId(req.body.user_id) } },
          {
            $lookup: {
              from: "services",
              localField: "_id",
              foreignField: "project",
              as: "service_details",
            },
          },
          { $unwind: "$service_details" },
          {
            $project: {
              _id: 1,
              user_id: 1,
              project_name: 1,
              service_id: "$service_details._id",
              is_paid: "$service_details.is_paid",
            },
          },
          { $match: { is_paid: true } },
          {
            $lookup: {
              from: "chats",
              localField: "service_id",
              foreignField: "service_id",
              as: "chat_details",
            },
          },
          { $unwind: "$chat_details" },
          {
            $project: {
              _id: 1,
              project_name: 1,
              service_id: 1,
              sender: "$chat_details.sender",
              message: "$chat_details.text",
              date: "$chat_details.date",
            },
          },
          { $match: { sender: { $ne: ObjectId(req.body.user_id) } } },
          {
            $lookup: {
              from: "users",
              localField: "sender",
              foreignField: "_id",
              as: "user_details",
            },
          },
          { $unwind: "$user_details" },
          { $limit: 10 },
          { $sort: { date: -1 } },
        ],
        function (err, doc) {
          return res
            .status(200)
            .json({
              projects: projects,
              num: numOfProjects,
              messages: doc,
              user: user,
            });
        }
      );
    });
});


router.get("/detail", async (req, res) => {
  const _id = req.query._id;

  const resPerPage = parseInt(req.query.pageSize) || 8; // results per page
  const page = parseInt(req.query.currentPage) || 1; // Page
  const orderBy = req.query.orderBy || "project_name";
  const query = { project: _id };

  const project = await Project.findOne({ _id: _id }).populate("user_id");

  try {
    // Count how many services were found
    const numOfServices = await Service.countDocuments({ ...query });
    if (req.query.search) {
      regex = new RegExp(
        req.query.search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
        "gi"
      );
      // Find Demanded Services - Skipping page values, limit results       per page
      Service.find({ ...query, desc: regex })
        .skip(resPerPage * page - resPerPage)
        .limit(resPerPage)
        .sort({ [orderBy]: -1 })
        .exec((err, services) => {
          if (err) throw new Error(err);
          const result = {
            services,
            currentPage: page,
            totalPage: Math.ceil(numOfServices / resPerPage),
            totalItem: numOfServices,
            project: project,
          };
          return res.json(result);
        });
    } else {
      Service.find(query)
        .skip(resPerPage * page - resPerPage)
        .limit(resPerPage)
        .sort({ [orderBy]: 1 })
        .exec((err, services) => {
          const result = {
            services,
            currentPage: page,
            totalPage: Math.ceil(numOfServices / resPerPage),
            totalItem: numOfServices,
            project: project,
          };
          return res.json(result);
        });
    }
  } catch (err) {
    return res.status(400).json({err});
  }
});

router.post("/get-info", async (req, res) => {
  const _id = req.query._id;
  try {
    const project = await Project.findById(_id);
    const services = await Service.find({ project: _id });
    const result = {
      project: project,
      services: services,
    };
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/delete", (req, res) => {
  Project.findOneAndDelete({ _id: req.query._id }, function (err, doc) {
    if (err) return res.status(400).json(err);
    return res.status(200).json({ message: "success" });
  });
});

module.exports = router;
