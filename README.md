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
├── compress-images.js          # Image compression utility
├── convert-images.js           # HEIC to PNG converter
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

### Core
- **React** (v19.2.3) - UI library
- **React Router DOM** (v7.11.0) - Client-side routing
- **Tailwind CSS** (v3.4.19) - Utility-first CSS framework

### UI & Icons
- **Lucide React** (v0.562.0) - Icon library
- **FontAwesome** (v7.1.0) - Social media icons

### Image Processing
- **Sharp** (v0.34.5) - Image compression
- **HEIC Convert** (v2.1.0) - HEIC to PNG conversion

### Development Tools
- **PostCSS** (v8.5.6) - CSS processing
- **Autoprefixer** (v10.4.23) - CSS vendor prefixing
- **React Scripts** (v5.0.1) - Build tooling

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

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

## 🖼️ Image Utilities

### Convert HEIC to PNG
```bash
node convert-images.js
```
Converts all HEIC images in the assets folder to PNG format.

### Compress Images
```bash
node compress-images.js
```
Compresses images larger than 500KB while preserving maximum quality:
- Resizes to max width 1920px
- JPEG quality: 85%
- PNG quality: 90%

## 🏗️ Build & Deployment

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Build Output
- Minified JavaScript and CSS
- Optimized images
- Service worker for PWA support
- Static files ready for deployment

## 🌐 Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

### Other Platforms
- **Netlify**: Drag and drop `build/` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `build/` folder to S3 bucket

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

### Performance Optimizations
- Lazy loading for images
- Code splitting with React Router
- Optimized image formats
- Minified production builds
- CSS purging with Tailwind

## 📊 Analytics & Monitoring

The project includes `reportWebVitals.js` for performance monitoring. Integrate with analytics services:

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

reportWebVitals(console.log);
```

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

**Built with ❤️ by the BCC Team**

*Simplifying blockchain education for students*
