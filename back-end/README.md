# BCC Backend API

Backend API for BlockChain on Campus (BCC) website built with Node.js, Express, and MongoDB.

## Features

- Member registration with email notifications
- Enquiry/Contact form submissions
- Email notifications for admins and users
- MongoDB database storage
- Input validation

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Update `.env` with your credentials:
- MongoDB URI
- Email credentials (Gmail recommended)
- Admin email
- Frontend URL

4. Start the server:
```bash
npm run dev  # Development with nodemon
npm start    # Production
```

## API Endpoints

### Members
- `POST /api/members` - Register new member
- `GET /api/members` - Get all members

### Enquiries
- `POST /api/enquiries` - Submit enquiry
- `GET /api/enquiries` - Get all enquiries

### Health Check
- `GET /api/health` - Check server status

## Email Setup (Gmail)

1. Enable 2-Factor Authentication
2. Generate App Password
3. Use App Password in `.env` file

## Database

MongoDB collections:
- `members` - Stores member registrations
- `enquiries` - Stores contact form submissions

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer for emails
- Express Validator for input validation
