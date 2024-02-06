const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  skillsRequired: {
    type: [String]
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  applicationDeadline: {
    type: Date,
    required: true
  },
  eligibilityCriteria: {
    type: String
  },
  maxApplicants: {
    type: Number
  },
  currentApplicants: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open'
  },
});

const Internship = mongoose.model('Internship', internshipSchema);

module.exports = Internship;
