const express = require("express");
const router = express.Router();

const Coupon = require("../../models/Coupon");

router.post("/new", async (req, res) => {
  const newCoupon = new Coupon({
    code: req.body.code,
    value: parseInt(req.body.value)
  });
  await newCoupon.save();
  return res.json({ success: true });
});

router.post("/update", async (req, res) => {
  await Coupon.findByIdAndUpdate(req.body.id, {
    $set: {
      code: req.body.code,
      value: parseInt(req.body.value)
    }
  });
  return res.json({ success: true });
});

router.get("/list", async (req, res) => {
  const items = await Coupon.find({});
  return res.json({ data: items, success: true });
});

router.delete("/remove", async (req, res) => {
  await Coupon.findOneAndDelete({ _id: req.query.id });
  return res.json({ success: true });
});

module.exports = router;
