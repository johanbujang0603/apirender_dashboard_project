const mongoose = require("mongoose");
const { string } = require("prop-types");
const Schema = mongoose.Schema;

// Create Schema
const ChatSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    required: true
  },
  service_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  text: {
    type: String,
    require: true,
  },
  is_read: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Chat = mongoose.model("chats", ChatSchema);
