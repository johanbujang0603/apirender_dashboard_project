const express = require("express");
const router = express.Router();
// Load Project model
const Project = require("../../models/Project");
const Service = require("../../models/Service");
const Payment = require("../../models/Payment");

router.post("/add", async (req, res) => {
  const _id = req.body.id;
  const services = JSON.parse(req.body.services);
  try {
    await Service.deleteMany({ project: _id });
    let totalAmount = 0;
    const newServices = services.map((service) => {
      
      totalAmount += service.orders.reduce(
        (a, b) => a + (b["totalPrice"] || 0),
        0
      );

      return {
        name: service.name,
        value: service.value,
        orders: JSON.stringify(service.orders),
        project: _id,
        total_price: service.orders.reduce(
          (a, b) => a + (b["totalPrice"] || 0),
          0
        ),
        quantity: service.orders.reduce((a, b) => a + (b["quantity"] || 0), 0),
        status: "WAITING FOR FILES",
      };
    });
    await Service.insertMany(newServices);
    await Project.updateOne(
      { _id: _id },
      { $set: { total_amount: totalAmount } }
    );
    return res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

router.get("/order-list", async (req, res) => {
  Payment.find()
    .populate("service_id")
    .populate({
      path: "service_id",
      populate: {
        path: "project",
        model: "projects",
        populate: {
          path: "user_id",
          model: "users",
        },
      },
    })
    .then((items) => {
      res.json(items);
    });
});

router.post("/update", (req, res) => {
  let query = { _id: req.body._id };
  if (req.body.quantity == 0) {
    Service.findOneAndDelete(query, function (err, response) {
      if (err) {
        return res.status(400).json({ message: err });
      }
      return res.status(200).json({ message: "success" });
    });
  } else {
    let newService = {
      $set: {
        ...req.body,
      },
    };
    Service.findOneAndUpdate(query, newService, function (err, response) {
      if (err) {
        return res.status(400).json({ message: err });
      }
      return res.status(200).json({ message: "success" });
    });
  }
});

router.get("/detail", async (req, res) => {
  const _id = req.query._id;
  try {
    const service = await Service.findOne({ _id: _id }).populate("project");
    const project = await Project.findOne({ _id: service.project });
    const result = {
      project: project,
      service,
      orders: JSON.parse(service.orders),
    };
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
