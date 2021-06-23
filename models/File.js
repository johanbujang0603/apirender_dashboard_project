const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FileSchema = new Schema({
  service_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  service_option: {
    type: String,
  },
  key_name: {
    type: String,
    required: true,
  },
  original_name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true
  },
  file_size: {
    type: Number,
    required: true,
  },
  extension: {
    type: String,
    require: true,
  },
  owner_id: {
    type: Schema.Types.ObjectId,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = File = mongoose.model("files", FileSchema);
