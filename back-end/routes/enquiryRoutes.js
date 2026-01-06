const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const enquiryController = require('../controllers/enquiryController');

router.post('/', [
  body('name').notEmpty().trim(),
  body('email').isEmail().normalizeEmail(),
  body('subject').notEmpty(),
  body('message').notEmpty().trim()
], enquiryController.createEnquiry);

router.get('/', enquiryController.getAllEnquiries);

module.exports = router;
