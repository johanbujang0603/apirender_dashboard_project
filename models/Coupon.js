const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CouponSchema = new Schema({
  code: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
});

module.exports = Coupon = mongoose.model("coupons", CouponSchema);
