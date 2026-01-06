const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const memberController = require('../controllers/memberController');

router.post('/', [
  body('name').notEmpty().trim(),
  body('email').isEmail().normalizeEmail(),
  body('campus').notEmpty().trim(),
  body('interest').notEmpty()
], memberController.createMember);

router.get('/', memberController.getAllMembers);

module.exports = router;
