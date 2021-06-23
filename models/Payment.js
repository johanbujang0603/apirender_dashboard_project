const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PaymentSchema = new Schema({
  service_id: {
    type: Schema.Types.ObjectId,
    ref: 'services',
    required: true
  },
  token_id: {
    type: String,
  },
  option: {
    type: String,
    requried: true,
  },
  order_id: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("payments", PaymentSchema);
