# Quick Start Guide

## 🚀 Get Your Portfolio Live in 5 Minutes

### Option 1: One-Click Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ai-agents-portfolio.git
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Command Line Deploy

```bash
# Make the script executable (if needed)
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

### Option 3: Manual Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts
```

## 🎨 Customization Checklist

### Personal Information
- [ ] Update name in `components/HeroSection.tsx`
- [ ] Update title and description in `app/layout.tsx`
- [ ] Update email in `components/ContactSection.tsx`
- [ ] Add LinkedIn URL in `components/ContactSection.tsx`
- [ ] Add GitHub URL in `components/ContactSection.tsx`

### AI Agents
- [ ] Review and update agent details in `lib/agents.ts`
- [ ] Add real demo URLs
- [ ] Add real GitHub repository URLs
- [ ] Update project status (live/beta/development)
- [ ] Add actual metrics and achievements

### Content
- [ ] Update About section in `components/AboutSection.tsx`
- [ ] Add real achievements and statistics
- [ ] Update skills and technologies
- [ ] Add actual work experience details

### Design
- [ ] Customize colors in `tailwind.config.js`
- [ ] Update fonts if needed
- [ ] Adjust animations and timing
- [ ] Add your profile photo (optional)

## 🌐 After Deployment

### Custom Domain (Optional)
1. Go to Vercel dashboard
2. Select your project
3. Go to "Settings" > "Domains"
4. Add your custom domain
5. Update DNS records as instructed

### SEO Optimization
1. Update meta tags in `app/layout.tsx`
2. Add Open Graph images
3. Submit to Google Search Console
4. Add Google Analytics (optional)

### Performance
- The site is optimized for Vercel deployment
- Automatic CDN distribution
- Image optimization
- Code splitting enabled

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📱 Testing

Test your portfolio on:
- [ ] Desktop (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices
- [ ] Tablet devices
- [ ] Different screen sizes
- [ ] Accessibility (keyboard navigation, screen readers)

## 🎯 Next Steps

1. **Content**: Add real project details and links
2. **Analytics**: Set up Google Analytics
3. **SEO**: Optimize for search engines
4. **Domain**: Get a custom domain
5. **Marketing**: Share on LinkedIn, Twitter, etc.

## 📞 Support

If you need help:
- Check the main README.md file
- Review the component documentation
- Test locally before deploying

---

**Ready to showcase your AI agents? Deploy now! 🚀**