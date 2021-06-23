const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Create Schema
const ServiceSchema = new Schema({
  project: {
    type: Schema.Types.ObjectId,
    ref: 'projects',
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  orders: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    require: true,
  },
  total_price: {
    type: Number,
    require: true,
  },
  is_paid: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("services", ServiceSchema);
