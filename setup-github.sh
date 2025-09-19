#!/bin/bash

# Genesis V Babylon - GitHub Setup Script
# This script helps you set up the GitHub repository

echo "🚀 Genesis V Babylon - GitHub Setup"
echo "=================================="
echo ""

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    echo "Please run this script from the project root directory"
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: You have uncommitted changes"
    echo "Please commit your changes first:"
    echo "  git add ."
    echo "  git commit -m 'Your commit message'"
    echo ""
fi

echo "📋 Next Steps:"
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named 'genesis-v-babylon'"
echo "3. Copy the repository URL (HTTPS or SSH)"
echo "4. Run the following commands:"
echo ""
echo "   # Add remote repository (replace YOUR_USERNAME and URL)"
echo "   git remote add origin https://github.com/YOUR_USERNAME/genesis-v-babylon.git"
echo ""
echo "   # Push to GitHub"
echo "   git push -u origin main"
echo ""
echo "5. Verify all files are uploaded to GitHub"
echo ""

# Check if remote already exists
if git remote get-url origin >/dev/null 2>&1; then
    echo "✅ Remote repository already configured:"
    git remote get-url origin
    echo ""
    echo "To push your changes:"
    echo "  git push origin main"
else
    echo "ℹ️  No remote repository configured yet"
fi

echo ""
echo "📁 Important files to verify after upload:"
echo "  - src/app/components/music/AdvancedMusicPlayer.tsx"
echo "  - src/app/components/music/AdvancedMusicPlayerProvider.tsx"
echo "  - public/audio/ (11 MP3 files)"
echo "  - public/images/ (all images)"
echo "  - package.json"
echo "  - next.config.js"
echo ""
echo "🎵 Your advanced Spotify-like music player is ready to go!"


