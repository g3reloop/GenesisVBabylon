#!/bin/bash

echo "🚀 Starting Genesis website optimization..."

# Create optimized directories
mkdir -p public/images/optimized
mkdir -p public/audio/optimized

# Function to optimize images
optimize_images() {
    echo "📸 Optimizing images..."
    
    # Optimize PNG files to WebP with 85% quality
    find public/images -name "*.png" -type f | while read file; do
        filename=$(basename "$file" .png)
        dir=$(dirname "$file")
        relative_dir=${dir#public/images/}
        
        # Create directory structure in optimized folder
        mkdir -p "public/images/optimized/$relative_dir"
        
        echo "Converting $file to WebP..."
        nix-shell -p imagemagick --run "convert '$file' -quality 85 -define webp:lossless=false 'public/images/optimized/$relative_dir/${filename}.webp'"
        
        # Also create a compressed PNG version as fallback
        echo "Creating compressed PNG fallback..."
        nix-shell -p imagemagick --run "convert '$file' -strip -quality 85 'public/images/optimized/$relative_dir/${filename}_compressed.png'"
    done
    
    # Optimize JPG files
    find public/images -name "*.jpg" -o -name "*.jpeg" -type f | while read file; do
        filename=$(basename "$file" | sed 's/\.[^.]*$//')
        dir=$(dirname "$file")
        relative_dir=${dir#public/images/}
        
        mkdir -p "public/images/optimized/$relative_dir"
        
        echo "Optimizing $file..."
        nix-shell -p imagemagick --run "convert '$file' -strip -quality 85 -define webp:lossless=false 'public/images/optimized/$relative_dir/${filename}.webp'"
        nix-shell -p imagemagick --run "convert '$file' -strip -quality 85 'public/images/optimized/$relative_dir/${filename}_compressed.jpg'"
    done
}

# Function to optimize audio files
optimize_audio() {
    echo "🎵 Optimizing audio files..."
    
    # Check if ffmpeg is available
    if ! nix-shell -p ffmpeg --run "which ffmpeg" > /dev/null 2>&1; then
        echo "Installing ffmpeg..."
        nix-shell -p ffmpeg --run "echo 'ffmpeg ready'"
    fi
    
    find public/audio -name "*.mp3" -type f | while read file; do
        filename=$(basename "$file" .mp3)
        dir=$(dirname "$file")
        relative_dir=${dir#public/audio/}
        
        mkdir -p "public/audio/optimized/$relative_dir"
        
        echo "Optimizing $file..."
        # Create optimized MP3 with lower bitrate but good quality
        nix-shell -p ffmpeg --run "ffmpeg -i '$file' -codec:a libmp3lame -b:a 128k -ar 44100 'public/audio/optimized/$relative_dir/${filename}_optimized.mp3' -y"
        
        # Create OGG version for better compression
        nix-shell -p ffmpeg --run "ffmpeg -i '$file' -codec:a libvorbis -b:a 128k -ar 44100 'public/audio/optimized/$relative_dir/${filename}.ogg' -y"
    done
}

# Function to create responsive image sizes
create_responsive_images() {
    echo "📱 Creating responsive image sizes..."
    
    find public/images -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -type f | while read file; do
        filename=$(basename "$file" | sed 's/\.[^.]*$//')
        dir=$(dirname "$file")
        relative_dir=${dir#public/images/}
        
        # Create different sizes for responsive loading
        for size in 400 800 1200; do
            mkdir -p "public/images/optimized/$relative_dir/${size}w"
            echo "Creating ${size}w version of $file..."
            nix-shell -p imagemagick --run "convert '$file' -resize ${size}x -quality 85 -define webp:lossless=false 'public/images/optimized/$relative_dir/${size}w/${filename}.webp'"
        done
    done
}

# Run optimizations
optimize_images
optimize_audio
create_responsive_images

echo "✅ Optimization complete!"
echo "📊 Checking file size reductions..."

echo "Original images size:"
du -sh public/images

echo "Optimized images size:"
du -sh public/images/optimized

echo "Original audio size:"
du -sh public/audio

echo "Optimized audio size:"
du -sh public/audio/optimized

echo "🎉 Optimization complete! Check the optimized folders for compressed assets."

