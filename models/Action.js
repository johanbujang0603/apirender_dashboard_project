const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ActionSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  action_model: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    requried: true,
  },
  model_id: {
    type: Schema.Types.ObjectId,
    requried: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Action = mongoose.model("actions", ActionSchema);
