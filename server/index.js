const express = require('express');
const { app } = require('./connection');
const PORT = 5000;
const cors = require('cors');
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });