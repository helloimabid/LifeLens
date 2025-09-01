# LifeLens 🔍

[![Deployed on Appwrite Sites](https://img.shields.io/badge/Deployed%20on-Appwrite%20Sites-f02e65?style=for-the-badge&logo=appwrite)](https://lifelens.appwrite.network)
[![Appwrite Sites Hackathon](https://img.shields.io/badge/Appwrite%20Sites-Hackathon%20Entry-f02e65?style=for-the-badge&logo=appwrite)](https://appwrite.io/blog/post/announcing-appwrite-sites-hackathon)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/nBMR9iL6sHG)
[![Next.js](https://img.shields.io/badge/Next.js-18-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

> **Your AI-powered first step to better healthcare.**

**🏆 Appwrite Sites Hackathon Entry**

**🌐 Live Demo: [lifelens.appwrite.network](https://lifelens.appwrite.network)**

LifeLens is a comprehensive health-tech platform built for the **Appwrite Sites Hackathon** that combines artificial intelligence with location-based services to provide users with intelligent health triage, symptom analysis, and healthcare facility discovery. Built with modern web technologies and powered by AI, LifeLens helps users make informed healthcare decisions while showcasing the power of Appwrite Sites for hosting modern web applications.

## ✨ Features

### 🤖 AI-Powered Symptom Checker
- Intelligent symptom analysis using Groq's advanced language models
- Personalized health insights and recommendations
- Medical disclaimer and safety guidelines
- Educational information about when to seek professional care

### 🗺️ Interactive Healthcare Facility Finder
- Real-time OpenStreetMap integration with Leaflet
- Location-based healthcare facility discovery
- Symptom-specific provider recommendations
- Comprehensive facility information including:
  - Contact details and operating hours
  - Specialties and treatment areas
  - Ratings and reviews
  - Direct calling and navigation features

### 🚨 Location-Aware Emergency Services
- Automatic location detection for relevant emergency contacts
- Country-specific emergency numbers and protocols
- Comprehensive emergency information database
- Quick-access emergency calling features
- First aid guidance and emergency preparedness tips

### 🌍 Global Coverage
- Multi-country support with localized emergency information
- International healthcare facility database
- Geolocation-based content adaptation
- Support for major countries including US, UK, Bangladesh, India, and more

### 🎨 Modern User Experience
- Responsive design optimized for all devices
- Dark/Light theme toggle
- Clean, healthcare-focused UI design
- Accessibility-compliant interface
- Fast loading and smooth interactions

## 🛠️ Tech Stack

### Frontend
- **Next.js 18** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern utility-first styling
- **Shadcn/ui** - High-quality component library
- **Leaflet** - Interactive maps integration

### AI & Backend
- **Groq AI** - Fast AI inference for symptom analysis
- **AI SDK** - Streamlined AI integration
- **Next.js API Routes** - Serverless backend functions

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Geist Font** - Modern typography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Groq API key (for AI features)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/helloimabid/lifelens.git
   cd lifelens
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your Groq API key:
   \`\`\`env
   GROQ_API_KEY=your_groq_api_key_here
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
lifelens/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── analyze-symptoms/     # AI symptom analysis endpoint
│   ├── emergency/                # Emergency services page
│   ├── nearby-clinics/           # Healthcare facility finder
│   ├── symptom-checker/          # AI symptom checker
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── ui/                       # Shadcn/ui components
│   ├── footer.tsx                # App footer
│   ├── mode-toggle.tsx           # Theme toggle
│   ├── navigation.tsx            # Main navigation
│   └── theme-provider.tsx        # Theme context
├── lib/                          # Utility functions
│   └── utils.ts                  # Common utilities
└── public/                       # Static assets
\`\`\`

## 🔧 Configuration

### Environment Variables
- `GROQ_API_KEY` - Required for AI symptom analysis
- `NEXT_PUBLIC_APP_URL` - App URL for production builds

### Theme Configuration
The app supports both light and dark themes with automatic system preference detection. Theme settings are persisted in localStorage.

## 🌐 API Integration

### Groq AI Integration
LifeLens uses Groq's fast AI inference for symptom analysis:
- Model: `llama-3.3-70b-versatile`
- Optimized prompts for medical triage
- Safety guidelines and disclaimers
- Rate limiting and error handling

### Geolocation Services
- Browser Geolocation API for user location
- Reverse geocoding for country detection
- Location-based content adaptation

## 🚀 Deployment

### Appwrite Sites (Current Deployment)
This project is currently deployed on **Appwrite Sites** as part of the Appwrite Sites Hackathon:
- **Live URL**: [lifelens.appwrite.network](https://lifelens.appwrite.network)
- **Platform**: Appwrite Sites - Modern static site hosting
- **Performance**: Optimized for global CDN delivery
- **SSL**: Automatic HTTPS with custom domain support

### Alternative Deployment Options

#### Vercel
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

#### Manual Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

## 🏆 Hackathon Information

This project was created for the **Appwrite Sites Hackathon** to demonstrate:
- Modern web application deployment on Appwrite Sites
- AI-powered healthcare solutions
- Global accessibility and performance
- Real-world utility in healthcare technology

**Hackathon Theme**: Building innovative web applications with Appwrite Sites
**Submission Date**: January 2025
**Live Demo**: [lifelens.appwrite.network](https://lifelens.appwrite.network)

## 🙏 Acknowledgments

- **Appwrite Sites** - Modern static site hosting platform
- Built with [v0.app](https://v0.app) - AI-powered development platform
- Powered by [Groq](https://groq.com) - Fast AI inference
- Maps by [OpenStreetMap](https://openstreetmap.org) - Open source mapping
- UI components by [Shadcn/ui](https://ui.shadcn.com) - Beautiful components
- Icons by [Lucide](https://lucide.dev) - Beautiful icons

---

<div align="center">
  <p>🏆 <strong>Appwrite Sites Hackathon Entry</strong> 🏆</p>
  <p>Made with ❤️ for better healthcare accessibility</p>
  <p><strong>LifeLens - Your AI-powered first step to better healthcare</strong></p>
  <p><a href="https://lifelens.appwrite.network">🌐 Visit Live Demo</a></p>
</div>
