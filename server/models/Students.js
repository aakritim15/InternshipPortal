const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  // Define your user schema fields here
  name: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  department: {
    type: String,
    required: true
  },
  yearOfStudy: {
    type: Number,
    required: true
  },
  skills: {
    type: [String]
  },
  resumeUrl: {
    type: String
  },
  internshipApplications: [{
    internshipId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Internship'
    },
    status: {
      type: String,
      enum: ['applied', 'accepted', 'rejected'],
      default: 'applied'
    }
  }],
});

const Students = mongoose.model('Students', studentSchema);

module.exports = Students;