const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BackupSchema = new Schema({
  service_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  notes: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Backup = mongoose.model("backup", BackupSchema);
