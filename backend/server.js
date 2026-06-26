require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
if (!MONGO_URI) {
  console.error('CRITICAL ERROR: MONGO_URI is not defined in the environment variables.');
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Mongoose Schema & Model
const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { bufferCommands: false });

const Enquiry = mongoose.model('Enquiry', EnquirySchema);

// POST Endpoint for Enquiry
app.post('/api/enquiry', async (req, res) => {
  const { name, email, phone } = req.body;

  // Simple Validation
  if (!name || !email || !phone) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields (name, email, phone) are required.' 
    });
  }

  try {
    // Create and save the enquiry in MongoDB
    const newEnquiry = new Enquiry({ name, email, phone });
    await newEnquiry.save();

    console.log('New Enquiry Saved to DB:', newEnquiry);

    // Success Response
    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully!',
      data: newEnquiry
    });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Failed to submit enquiry.',
      error: error.message
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
