#!/bin/bash

echo "🚀 Quick optimization for Genesis website..."

# Create optimized directories
mkdir -p public/images/webp
mkdir -p public/audio/compressed

# Quick image optimization - convert largest PNGs to WebP
echo "📸 Converting largest PNGs to WebP..."
find public/images -name "*.png" -size +1M -type f | head -20 | while read file; do
    filename=$(basename "$file" .png)
    dir=$(dirname "$file")
    relative_dir=${dir#public/images/}
    
    mkdir -p "public/images/webp/$relative_dir"
    
    echo "Converting $file to WebP..."
    nix-shell -p imagemagick --run "convert '$file' -quality 80 -define webp:lossless=false 'public/images/webp/$relative_dir/${filename}.webp'" 2>/dev/null
done

# Quick audio optimization - compress largest MP3s
echo "🎵 Compressing largest MP3s..."
find public/audio -name "*.mp3" -size +2M -type f | while read file; do
    filename=$(basename "$file" .mp3)
    dir=$(dirname "$file")
    relative_dir=${dir#public/audio/}
    
    mkdir -p "public/audio/compressed/$relative_dir"
    
    echo "Compressing $file..."
    nix-shell -p ffmpeg --run "ffmpeg -i '$file' -codec:a libmp3lame -b:a 96k -ar 44100 'public/audio/compressed/$relative_dir/${filename}_96k.mp3' -y" 2>/dev/null
done

echo "✅ Quick optimization complete!"
echo "📊 File size comparison:"
echo "Original images: $(du -sh public/images | cut -f1)"
echo "WebP images: $(du -sh public/images/webp 2>/dev/null | cut -f1 || echo '0')"
echo "Original audio: $(du -sh public/audio | cut -f1)"
echo "Compressed audio: $(du -sh public/audio/compressed 2>/dev/null | cut -f1 || echo '0')"
