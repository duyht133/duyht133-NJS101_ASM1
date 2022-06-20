const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
  },
  doB: {
    type: Date,
    default: Date.now,
  },
  salaryScale: {
    type: String,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  Image: {
    type: String,
  },
  annualLeave: {
    type: String,
  },
  department: {
    type: String,
  },
  employment: {
    type: String,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  work: {
    type: Boolean,
  },
  hourWork: {
    type: Number,
  },
  registerAnnualLeave: {
    type: Number,
  },
  endTime: {
    type: Date,
  },
  checkout: {
    type: Boolean,
  },
  hypothermia: {
    type: Date,
  },
  temperature: {
    type: Number,
  },
  vaccine1: {
    type: Date,
  },
  vaccinename1: {
    type: String,
  },
  vaccine2: {
    type: Date,
  },
  vaccinename2: {
    type: String,
  },
  positive: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Staff", staffSchema);
