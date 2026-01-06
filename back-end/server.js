const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const memberRoutes = require('./routes/memberRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/members', memberRoutes);
app.use('/api/enquiries', enquiryRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'BCC Backend is running' });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
