const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
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
  department: {
    type: String,
    required: true
  }
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;