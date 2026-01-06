const Member = require('../models/Member');
const { sendWelcomeEmail, notifyAdmin } = require('../utils/emailService');

exports.createMember = async (req, res) => {
  try {
    const { name, email, campus, interest } = req.body;
    
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const member = new Member({ name, email, campus, interest });
    await member.save();

    // Send emails without blocking the response
    sendWelcomeEmail(member).catch(err => console.log('Email error:', err.message));
    notifyAdmin('Member', member).catch(err => console.log('Admin notification error:', err.message));

    res.status(201).json({ message: 'Successfully joined BCC!', member });
  } catch (error) {
    res.status(500).json({ message: 'Error joining BCC', error: error.message });
  }
};

exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find().sort({ joinedAt: -1 });
    res.json({ count: members.length, members });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching members', error: error.message });
  }
};
