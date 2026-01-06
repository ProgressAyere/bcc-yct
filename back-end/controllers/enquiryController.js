const Enquiry = require('../models/Enquiry');
const { sendEnquiryConfirmation, notifyAdmin } = require('../utils/emailService');

exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const enquiry = new Enquiry({ name, email, subject, message });
    await enquiry.save();

    await sendEnquiryConfirmation(enquiry);
    await notifyAdmin('Enquiry', enquiry);

    res.status(201).json({ message: 'Enquiry submitted successfully!', enquiry });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting enquiry', error: error.message });
  }
};

exports.getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ count: enquiries.length, enquiries });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enquiries', error: error.message });
  }
};
