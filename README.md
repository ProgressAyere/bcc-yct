# BlockChain on Campus (BCC) Website

A modern, responsive website for BlockChain on Campus - a student-focused blockchain education community dedicated to making Web3 concepts simple, practical, and accessible.

## 🌟 Project Overview

The BCC Website is a comprehensive web application built with React that showcases the organization's mission, programs, partnerships, community impact, and provides pathways for students to join and connect with the blockchain education ecosystem.

## 🎨 Brand Identity

### Color Palette
- **Primary Green**: `#0FA958` - Main brand color for CTAs and highlights
- **Secondary Green**: `#0B7E43` - Footer, hover states, section emphasis
- **Accent Yellow**: `#F2B705` - Highlights, stats, badges
- **White**: `#FFFFFF` - Backgrounds, text contrast
- **Dark**: `#0E0E0E` - Headings, body text
- **Light Grey**: `#F4F6F5` - Section backgrounds, cards

## 📁 Project Structure

```
bcc-website/
├── public/                      # Static assets
│   ├── index.html              # HTML template
│   ├── logo-short.png          # Short logo
│   ├── logo192.png             # PWA icon
│   ├── logo512.png             # PWA icon
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots file
├── src/
│   ├── assets/
│   │   └── images/             # All image assets
│   │       ├── anniversary/    # Anniversary event images
│   │       ├── classes/        # Physical class images
│   │       ├── filecoin/       # Filecoin event images
│   │       ├── logo/           # Brand logos
│   │       ├── partnerships/   # Partnership banners
│   │       ├── stellar/        # Stellar event images
│   │       ├── web3unilag/     # Web3UniLag event images
│   │       └── mission-image.png
│   ├── components/
│   │   ├── header/
│   │   │   └── header.jsx      # Navigation header
│   │   └── footer/
│   │       └── footer.jsx      # Site footer
│   ├── pages/
│   │   ├── home/
│   │   │   └── home.jsx        # Homepage
│   │   ├── about/
│   │   │   └── about.jsx       # About page
│   │   ├── mission/
│   │   │   └── mission.jsx     # Mission & Vision page
│   │   ├── partners/
│   │   │   └── partners.jsx    # Partners page
│   │   ├── community/
│   │   │   └── community.jsx   # Community & Impact page
│   │   └── contact/
│   │       └── contact.jsx     # Join & Connect page
│   ├── App.js                  # Main app component with routing
│   ├── App.css                 # App styles
│   ├── index.js                # Entry point
│   ├── index.css               # Global styles with Tailwind
│   └── reportWebVitals.js      # Performance monitoring
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## 🚀 Features

### Pages

#### 1. **Home Page** (`/`)
- Hero section with dual CTAs
- "What We Do" section with 5 program cards
- Partner logos showcase (7 organizations)
- Impact statistics (500+ students, 7 partnerships, 25+ events)
- 1-Year Anniversary milestone highlight
- Final CTA section

#### 2. **About Page** (`/about`)
- Organization introduction
- "Who We Are" section
- "Why BCC Exists" with 2 value propositions
- Journey timeline (4 milestones)
- Campus focus with expansion vision
- Community CTA

#### 3. **Mission & Vision Page** (`/mission`)
- Mission statement with image
- Vision statement
- 5 Core Values (Education, Simplicity, Community, Integrity, Innovation)
- Get Involved CTA

#### 4. **Partners Page** (`/partners`)
- Partnership introduction
- 7 partner cards with images and descriptions
- Partnership impact section (Joint Events, Knowledge Sharing, Community Expansion)
- Partnership enquiry CTA

#### 5. **Community & Impact Page** (`/community`)
- Community statistics overview
- 8-milestone journey timeline
- 6 community activity cards
- Event highlights with image galleries:
  - Filecoin Workshop Series (7 images)
  - Stellar Blockchain Education (3 images)
  - Web3UniLag Collaboration (1 image)
  - Physical Blockchain Classes (11 images)
- 1-Year Anniversary section with image
- Image modal for gallery viewing
- Membership CTA

#### 6. **Join & Connect Page** (`/contact`)
- "Why Join BCC" benefits section
- Join BCC membership form (name, email, campus, interest)
- Connect With Us enquiry form (partnerships, events, media)
- Social media links (X/Twitter, WhatsApp, Telegram)
- Final CTA

### Components

#### Header
- Sticky navigation bar
- BCC logo (short on mobile, long on desktop)
- Navigation links: Home, About, What We Do, Partners, Community, Milestones, Gallery, Contact
- "Join BCC" CTA button
- Mobile hamburger menu
- React Router integration

#### Footer
- BCC logo and tagline
- About BCC section
- Quick Links
- Community & Events links
- Social media icons (FontAwesome)
- Dynamic copyright year
- 4-column responsive grid

## 🛠️ Technologies Used

### Frontend
- **React** (v19.2.3) - UI library
- **React Router DOM** (v7.11.0) - Client-side routing
- **Tailwind CSS** (v3.4.19) - Utility-first CSS framework
- **Lucide React** (v0.562.0) - Icon library
- **FontAwesome** (v7.1.0) - Social media icons
- **PostCSS** (v8.5.6) - CSS processing
- **Autoprefixer** (v10.4.23) - CSS vendor prefixing
- **React Scripts** (v5.0.1) - Build tooling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email service integration
- **Express Validator** - Request validation middleware
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

### Frontend Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd bcc-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

### Backend Setup

1. **Navigate to backend directory**
```bash
cd back-end
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the `back-end/` directory:

```env
# Server Configuration
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/bcc-website
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bcc-website

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Admin Configuration
ADMIN_EMAIL=admin@bcc.com

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

4. **Start backend server**
```bash
npm start
```

The backend API will run at `http://localhost:5000`

## 🔌 Backend API

### Architecture

The backend follows a modular MVC architecture:

```
back-end/
├── controllers/
│   ├── memberController.js      # Member registration logic
│   └── enquiryController.js     # Enquiry handling logic
├── models/
│   ├── Member.js                # Member schema
│   └── Enquiry.js               # Enquiry schema
├── routes/
│   ├── memberRoutes.js          # Member API endpoints
│   └── enquiryRoutes.js         # Enquiry API endpoints
├── utils/
│   └── emailService.js          # Email notification service
├── server.js                    # Express server setup
├── .env.example                 # Environment variables template
└── package.json                 # Backend dependencies
```

### API Endpoints

#### Health Check
```
GET /api/health
```
Returns server status and timestamp.

#### Member Registration
```
POST /api/members
```
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "campus": "University of Lagos",
  "interest": "Smart Contracts Development"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Successfully joined BCC! Check your email for confirmation.",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "campus": "University of Lagos",
    "interest": "Smart Contracts Development",
    "joinedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

#### Get All Members
```
GET /api/members
```
Returns list of all registered members (sorted by join date).

#### Submit Enquiry
```
POST /api/enquiries
```
**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Partnership Opportunity",
  "message": "I would like to discuss a potential partnership..."
}
```
**Response:**
```json
{
  "success": true,
  "message": "Enquiry submitted successfully! We'll get back to you soon.",
  "data": {
    "_id": "...",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "subject": "Partnership Opportunity",
    "message": "I would like to discuss a potential partnership...",
    "status": "pending",
    "createdAt": "2024-01-15T11:00:00.000Z"
  }
}
```

#### Get All Enquiries
```
GET /api/enquiries
```
Returns list of all enquiries (sorted by creation date).

### Database Models

#### Member Schema
```javascript
{
  name: String (required),
  email: String (required, unique, validated),
  campus: String (required),
  interest: String (required),
  joinedAt: Date (default: Date.now)
}
```

#### Enquiry Schema
```javascript
{
  name: String (required),
  email: String (required, validated),
  subject: String (required),
  message: String (required),
  status: String (enum: ['pending', 'in-progress', 'resolved'], default: 'pending'),
  createdAt: Date (default: Date.now)
}
```

### Email Notifications

The backend automatically sends email notifications:

1. **Welcome Email** - Sent to new members upon registration
2. **Enquiry Confirmation** - Sent to users who submit enquiries
3. **Admin Notifications** - Sent to admin for new members and enquiries

### Data Validation

- Email format validation
- Required field validation
- Duplicate email prevention for members
- Input sanitization with express-validator

### Error Handling

- Comprehensive error messages
- HTTP status codes (200, 201, 400, 500)
- Validation error details
- Database connection error handling

### CORS Configuration

Configured to accept requests from:
- `http://localhost:3000` (development)
- Production frontend URL (configurable via environment variable)

## 🏗️ Build & Deployment

### Frontend Production Build
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Build Output
- Minified JavaScript and CSS
- Optimized images
- Service worker for PWA support
- Static files ready for deployment

### Backend Deployment

1. **Set production environment variables**
2. **Deploy to hosting service** (Heroku, Railway, AWS, etc.)
3. **Update FRONTEND_URL** in backend `.env`
4. **Update API endpoints** in frontend (if different from localhost:5000)

## 🌐 Deployment

### Frontend Deployment

#### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

#### Other Platforms
- **Netlify**: Drag and drop `build/` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `build/` folder to S3 bucket

### Backend Deployment

#### Railway
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically on push

#### Heroku
```bash
heroku create bcc-backend
heroku config:set MONGODB_URI=<your-mongodb-uri>
heroku config:set EMAIL_USER=<your-email>
git push heroku main
```

#### AWS EC2
1. Launch EC2 instance
2. Install Node.js and MongoDB
3. Clone repository and configure
4. Use PM2 for process management

### Database Deployment

#### MongoDB Atlas (Recommended)
1. Create free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Whitelist IP addresses
3. Create database user
4. Get connection string
5. Update `MONGODB_URI` in backend `.env`

## 📱 Responsive Design

The website is fully responsive across all devices:
- **Mobile**: < 768px (single column layouts)
- **Tablet**: 768px - 1023px (2-column layouts)
- **Desktop**: 1024px+ (multi-column layouts)

## ♿ Accessibility

- WCAG AA color contrast compliance
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- Alt text on all images

## 🎯 Key Features

### Interactive Elements
- Smooth scroll navigation
- Hover effects on cards and buttons
- Image gallery with modal viewer
- Form validation and feedback
- Mobile-friendly hamburger menu
- Sticky header navigation
- Auto-sliding content cards (5-10 second intervals)
- 3D carousel image sliders
- Scroll-triggered animations
- Confetti effects on milestones

### Backend Features
- RESTful API architecture
- MongoDB database integration
- Automated email notifications
- Form data validation
- Duplicate prevention
- Error handling and logging
- CORS security
- Environment-based configuration

### Performance Optimizations
- Lazy loading for images
- Code splitting with React Router
- Optimized image formats
- Minified production builds
- CSS purging with Tailwind
- Database indexing for faster queries
- Async/await for non-blocking operations

## 📊 Analytics & Monitoring

### Frontend Monitoring
The project includes `reportWebVitals.js` for performance monitoring:

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

reportWebVitals(console.log);
```

### Backend Monitoring
- Health check endpoint for uptime monitoring
- Console logging for requests and errors
- MongoDB connection status tracking

### Data Management
- View members and enquiries via MongoDB Compass
- Export data for analysis
- Track registration trends
- Monitor enquiry response times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is private and proprietary to BlockChain on Campus (BCC).

## 📞 Contact

**BlockChain on Campus (BCC)**
- Website: [Coming Soon]
- Email: [Contact Form on Website]
- Social: X/Twitter, WhatsApp, Telegram

## 🎉 Acknowledgments

### Partners
- Filecoin
- Stellar
- Web3UniLag
- O3FinanceSchool
- Inspirya
- Blockchain Club (RSU)
- Beyond the Box

### Special Thanks
To all students, mentors, and partners who have contributed to making blockchain education accessible.

---

**Built with ❤️ by Progress Ayere (Co-founder of BCC)**

*Simplifying blockchain education for students*
