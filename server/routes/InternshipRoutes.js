const express = require('express');
const router = express.Router();
const Internship = require('../models/Internship');

router.get('/getInternship',async (req,res) => {
  try{
    const internships = await Internship.find();
    res.status(200).json(internships);
  }
  catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})
router.post('/addInternship', async (req, res) => {
  try {
    // Extract data from the request body
    const {
      title,
      company,
      location,
      description,
      skillsRequired,
      startDate,
      endDate,
      applicationDeadline,
      eligibilityCriteria,
      maxApplicants,
    } = req.body;

    // Save the new internship directly to the database
    const newInternship = await Internship.create({
      title,
      company,
      location,
      description,
      skillsRequired,
      startDate,
      endDate,
      applicationDeadline,
      eligibilityCriteria,
      maxApplicants,
    });

    res.status(201).json({ message: 'Internship added successfully', internship: newInternship });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add more routes and functionality as needed

module.exports = router;
