// const express = require('express');
// const Contact = require('../models/Contact');

// const router = express.Router();

// // POST request to save contact form data
// router.post('/', async (req, res) => {
//   try {
//     // Create a new Contact document from the incoming data
//     const newContact = new Contact(req.body);
    
//     // Save it to the database
//     await newContact.save();
    
//     // Send a response back indicating success
//     res.status(201).json({ message: 'Message saved successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhoneNumber = (number) => /^\d{10}$/.test(number);

router.post('/', async (req, res) => {
  try {
    const { username, text, rating } = req.body;

    if (!username || !text || !rating) {
      return res.status(400).json({ message: 'Username, review text, and rating are required.' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5.' });
    }

    const newReview = new Review({ username, text, rating });
    await newReview.save();

    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET - Fetch all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch contact messages' });
  }
});
router.get('/get', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;
