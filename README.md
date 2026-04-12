# AI Agents Portfolio - Raman Thakur

An advanced animated portfolio website showcasing autonomous AI agents built by Raman Thakur, Senior AI Engineer. Features interactive mindmap navigation, glassmorphic design, and professional dark theme with neon accents.

## Features

- **Interactive Mindmap**: Hover over AI agent nodes to explore detailed information
- **Advanced Animations**: Smooth transitions powered by Framer Motion
- **Glassmorphic Design**: Modern frosted glass effects with backdrop blur
- **Dark Theme**: Professional dark background with neon accent colors
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js 15 and modern web technologies
- **SEO Ready**: Optimized metadata and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (UI) + JetBrains Mono (Code)
- **Deployment**: Vercel (recommended)

## AI Agents Showcase

1. **AI Call Receiver** - 24/7 Autonomous Voice Agent
2. **Universal Web Scraper** - Firecrawl Alternative
3. **Vision AI Agent** - Computer Vision Platform
4. **NEXUS GUARD** - Enterprise Cybersecurity Platform
5. **Pentesting AI Agent** - Automated Security Testing
6. **Live Trading System** - Cryptocurrency Automation
7. **Research Paper Explainer** - Multi-Agent Research System
8. **Secure Messaging App** - P2P Encrypted Communication
9. **S.I.Y.A Enhanced** - AI Assistant Platform
10. **Agentic Vision** - Multi-Model CV System

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ai-agents-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the portfolio.

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Deployment

### Vercel (Recommended)

1. **Connect GitHub Repository**:
   - Push your code to GitHub
   - Connect your repository to Vercel

2. **Deploy**:
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Login and deploy
   vercel
   
   # Follow the prompts to deploy
   ```

3. **Custom Domain** (Optional):
   - Add your custom domain in Vercel dashboard
   - Configure DNS records as instructed

### Netlify

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**:
   - Connect GitHub repository to Netlify
   - Set build settings and deploy

### GitHub Pages

1. **Configure**:
   ```bash
   # Install gh-pages
   npm install --save-dev gh-pages
   
   # Add to package.json scripts:
   "deploy": "npm run build && gh-pages -d .next"
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

## Customization

### Colors

The color system is defined in `tailwind.config.js`:

```javascript
colors: {
  'neon-cyan': '#00FFFF',
  'neon-purple': '#9400FF',
  'neon-green': '#00FF7F',
  'neon-blue': '#007BFF',
  // ... more colors
}
```

### AI Agents

Modify the agents data in `lib/agents.ts`:

```typescript
export const aiAgents: AIAgent[] = [
  {
    id: 'agent-id',
    name: 'Agent Name',
    tagline: 'Short description',
    description: 'Detailed description',
    icon: 'IconName',
    color: 'cyan' | 'purple' | 'green' | 'blue',
    position: { x: 200, y: 150 },
    techStack: ['Tech1', 'Tech2'],
    features: ['Feature 1', 'Feature 2'],
    status: 'live' | 'beta' | 'development'
  }
]
```

### Personal Information

Update the following files:

- `app/layout.tsx` - SEO metadata
- `components/HeroSection.tsx` - Name and title
- `components/AboutSection.tsx` - Experience and education
- `components/ContactSection.tsx` - Contact information

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and fonts
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── HeroSection.tsx      # Animated hero section
│   ├── MindMap.tsx          # Main mindmap container
│   ├── AgentNode.tsx        # Interactive agent nodes
│   ├── ConnectionLines.tsx  # Animated connections
│   ├── ParticleBackground.tsx # Background particles
│   ├── AboutSection.tsx     # About and skills
│   └── ContactSection.tsx   # Contact form and info
├── lib/
│   ├── agents.ts            # AI agents data
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized with code splitting

## Accessibility

- **WCAG 2.1 AA** compliant
- **Keyboard navigation** support
- **Screen reader** compatible
- **Reduced motion** preferences respected
- **High contrast** color scheme

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- **Email**: raman1801thakur@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/raman-thakur-24095022a/
- **GitHub**: https://github.com/R1M1N

---
