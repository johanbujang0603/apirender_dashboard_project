const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BriefingSchema = new Schema({
  service_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  content: {
    type: Object,
  },
  option: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Briefing = mongoose.model("briefing", BriefingSchema);
