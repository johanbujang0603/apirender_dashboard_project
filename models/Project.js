const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },
  category: {
    type: String,
    required: true
  },
  project_name: {
    type: String,
    required: true
  },
  unique_id: {
    type: String,
    require: true,
  },
  project_description: {
    type: String,
  },
  is_paid: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    required: true,
  },
  total_amount: {
    type: Number,
    required: true,
    default: 0,
  },
  delivery_option: {
    type: String,
  },
  delivery_address: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("projects", ProjectSchema);
