const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// POST request to save contact form data
router.post('/', async (req, res) => {
  try {
    // Create a new Contact document from the incoming data
    const newContact = new Contact(req.body);
    
    // Save it to the database
    await newContact.save();
    
    // Send a response back indicating success
    res.status(201).json({ message: 'Message saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
