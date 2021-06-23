const express = require("express");
const router = express.Router();
const {ObjectId} = require('mongodb'); // or ObjectID 

const Project = require("../../models/Project");
const Payment = require("../../models/Payment");
const Service = require("../../models/Service");

router.post("/admin-statistics", async (req, res) => {
    const totalProjectsInProgress = await Project.find({status: "IN PROGRESS"}).count();
    const totalProjectsAwaiting = await Project.find({status: "WAITING FOR FILES"}).count();
    const totalProjectsCompleted = await Project.find({status: "COMPLETED"}).count();
    const paymentStatus = ["IN PROGRESS", "REVIEW", "COMPLETED"];
    let totalPayments = 0;
    const paymentProjects = await Service.find({status: {$in: paymentStatus}});
    paymentProjects.map((project) => {
        totalPayments += project.total_price;
    });
    return res.status(200).json({totalProjectsInProgress, totalPayments, totalProjectsAwaiting, totalProjectsCompleted});
});

module.exports = router;
