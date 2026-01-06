const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendWelcomeEmail = async (memberData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: memberData.email,
    subject: 'Welcome to BlockChain on Campus!',
    html: `
      <h1>Welcome to BCC, ${memberData.name}!</h1>
      <p>Thank you for joining BlockChain on Campus. We're excited to have you in our community.</p>
      <p><strong>Your Details:</strong></p>
      <ul>
        <li>Campus: ${memberData.campus}</li>
        <li>Interest: ${memberData.interest}</li>
      </ul>
      <p>Stay tuned for updates on workshops, events, and learning opportunities!</p>
    `
  };
  await transporter.sendMail(mailOptions);
};

const sendEnquiryConfirmation = async (enquiryData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: enquiryData.email,
    subject: 'We received your enquiry - BCC',
    html: `
      <h1>Thank you for reaching out, ${enquiryData.name}!</h1>
      <p>We've received your enquiry and will respond shortly.</p>
      <p><strong>Your Enquiry:</strong></p>
      <p><strong>Type:</strong> ${enquiryData.subject}</p>
      <p><strong>Message:</strong> ${enquiryData.message}</p>
    `
  };
  await transporter.sendMail(mailOptions);
};

const notifyAdmin = async (type, data) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New ${type} - BCC Website`,
    html: `<h2>New ${type}</h2><pre>${JSON.stringify(data, null, 2)}</pre>`
  };
  await transporter.sendMail(mailOptions);
};

module.exports = { sendWelcomeEmail, sendEnquiryConfirmation, notifyAdmin };
