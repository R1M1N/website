#!/bin/bash

# AI Agents Portfolio Deployment Script
# This script helps deploy the portfolio to Vercel

echo "🚀 Deploying AI Agents Portfolio to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
echo "🔐 Checking Vercel authentication..."
if ! vercel whoami &> /dev/null; then
    echo "Please log in to Vercel first:"
    vercel login
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "📝 Don't forget to:"
echo "   - Add your custom domain in Vercel dashboard"
echo "   - Update contact links in components"
echo "   - Add your GitHub/LinkedIn URLs"
echo ""
echo "🎉 Your portfolio is now live!"