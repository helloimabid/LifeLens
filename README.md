# LifeLens 🔍

[![Deployed on Appwrite Sites](https://img.shields.io/badge/Deployed%20on-Appwrite%20Sites-f02e65?style=for-the-badge&logo=appwrite)](https://lifelens.appwrite.network)
[![Appwrite Sites Hackathon](https://img.shields.io/badge/Appwrite%20Sites-Hackathon%20Entry-f02e65?style=for-the-badge&logo=appwrite)](https://hackathon.appwrite.network)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/nBMR9iL6sHG)
[![Next.js](https://img.shields.io/badge/Next.js-18-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Open Source](https://img.shields.io/badge/Open%20Source-MIT-green?style=for-the-badge&logo=github)](https://github.com/helloimabid/lifelens)

> **Your AI-powered first step to better healthcare.**

**🏆 Appwrite Sites Hackathon Entry (August 29 - September 12, 2025)**

**🌐 Live Demo: [lifelens.appwrite.network](https://lifelens.appwrite.network)**

LifeLens is a comprehensive health-tech platform built for the **Appwrite Sites Hackathon** that combines artificial intelligence with location-based services to provide users with intelligent health triage, symptom analysis, and healthcare facility discovery. This project demonstrates the power of modern web technologies deployed on Appwrite Sites, showcasing creativity, technical execution, and real-world impact in healthcare accessibility.

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

### Appwrite Sites Hackathon 2025
**📅 Duration**: August 29, 2025 (12:00 AM UTC) - September 12, 2025 (11:59 PM UTC)
**🌐 Platform**: [hackathon.appwrite.network](https://hackathon.appwrite.network)

### Project Highlights
This project was created to demonstrate:

#### 💡 **Impact of the Idea**
- Addresses real-world healthcare accessibility challenges
- Provides AI-powered health triage for underserved communities
- Combines multiple health services in one comprehensive platform
- Offers location-aware emergency services for global users

#### 🎨 **Creativity in Design**
- Innovative combination of AI symptom analysis with location services
- Seamless integration of OpenStreetMap with healthcare facility discovery
- Location-aware emergency information adapting to user's country
- Modern, accessible UI design optimized for healthcare contexts

#### ⚙️ **Technical Execution**
- Built with modern Next.js 18 and TypeScript
- AI integration using Groq's fast inference models
- Real-time geolocation and mapping with Leaflet
- Responsive design with dark/light theme support
- Deployed on Appwrite Sites with custom .appwrite.network domain

### Hackathon Requirements Met
✅ **Deployed on Appwrite Sites**: [lifelens.appwrite.network](https://lifelens.appwrite.network)  
✅ **Open Source**: MIT License on [GitHub](https://github.com/helloimabid/lifelens)  
✅ **Built During Hackathon**: Created within the competition timeframe  
✅ **AI Integration**: Leverages AI/LLM for symptom analysis  
✅ **No Theme Restrictions**: Healthcare innovation chosen freely  
✅ **Public Repository**: Fully open source with proper attribution  

### Judging Criteria Alignment
- **Impact**: Addresses healthcare accessibility globally
- **Creativity**: Unique combination of AI health triage with location services  
- **Technical Execution**: Modern tech stack with seamless integrations
- **Bonus Points**: Secured premium .appwrite.network domain! 🎯

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Developed by [Sadman Abid](https://github.com/helloimabid)**
- GitHub: [@helloimabid](https://github.com/helloimabid)
- Project Repository: [lifelens](https://github.com/helloimabid/lifelens)

## 🙏 Acknowledgments

- **Appwrite Sites** - Modern static site hosting platform and hackathon host
- **Appwrite Team** - For organizing an amazing hackathon experience
- Built with [v0.app](https://v0.app) - AI-powered development platform
- Powered by [Groq](https://groq.com) - Fast AI inference for symptom analysis
- Maps by [OpenStreetMap](https://openstreetmap.org) - Open source mapping data
- UI components by [Shadcn/ui](https://ui.shadcn.com) - Beautiful, accessible components
- Icons by [Lucide](https://lucide.dev) - Beautiful, consistent iconography

---

<div align="center">
  <p>🏆 <strong>Appwrite Sites Hackathon 2025 Entry</strong> 🏆</p>
  <p><strong>August 29 - September 12, 2025</strong></p>
  <p>Made with ❤️ for better healthcare accessibility worldwide</p>
  <p><strong>LifeLens - Your AI-powered first step to better healthcare</strong></p>
  <p><a href="https://lifelens.appwrite.network">🌐 Visit Live Demo</a> | <a href="https://github.com/helloimabid/lifelens">📱 View Source</a></p>
</div>
