const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = 5000;
const uri = process.env.MONGODB_URI;
const corsOptions = {
  origin: 'http://localhost:3000',
  // Other CORS options if needed
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

//models
const Internship = require("./models/Internship.js");
const Students = require("./models/Students.js");
const Faculty = require("./models/Faculty.js");

module.exports ={
    app,
    Internship,
    Students,
    Faculty
}