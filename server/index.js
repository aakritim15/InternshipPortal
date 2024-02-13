const express = require('express');
const { app } = require('./connection');
const InternshipRoutes = require('./routes/InternshipRoutes');
const PORT = 5000;
const cors = require('cors');
app.use(cors());

app.use('/api',InternshipRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });