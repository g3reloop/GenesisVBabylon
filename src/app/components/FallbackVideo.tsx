'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface FallbackVideoProps {
  sectionId: string;
  onVideoError: () => void;
}

const FallbackVideo: React.FC<FallbackVideoProps> = ({ sectionId, onVideoError }) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Show fallback after 3 seconds if video doesn't load
    const timer = setTimeout(() => {
      setShowFallback(true);
      onVideoError();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onVideoError]);

  const fallbackImages = {
    'ontology': '/images/backgrounds/ontology-bg.jpg',
    'history': '/images/backgrounds/history-bg.jpg',
    'genesis-protocol': '/images/backgrounds/genesis-protocol-bg.jpg',
    'surgical-analysis': '/images/backgrounds/surgical-analysis-bg.jpg',
    'esoteric-systems': '/images/backgrounds/esoteric-systems-bg.jpg',
    'ai-as-tool-within-genesis': '/images/backgrounds/ai-tool-bg.jpg',
    'collapse-protocol': '/images/backgrounds/collapse-protocol-bg.jpg',
    'fractal-growth': '/images/backgrounds/fractal-growth-bg.jpg',
    'memetic-weapons': '/images/backgrounds/memetic-weapons-bg.jpg',
    'recursive-memetic-weapons': '/images/backgrounds/recursive-memetic-weapons-bg.jpg',
    'why-genesis-wins': '/images/backgrounds/why-genesis-wins-bg.jpg',
    'home': '/images/backgrounds/genesis-default-bg.jpg',
    'gallery': '/images/backgrounds/genesis-default-bg.jpg',
    'platform': '/images/backgrounds/genesis-default-bg.jpg'
  };

  const fallbackImage = fallbackImages[sectionId as keyof typeof fallbackImages] || '/images/backgrounds/genesis-default-bg.jpg';

  if (!showFallback) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <Image
        src={fallbackImage}
        alt={`${sectionId} background`}
        fill
        className="object-cover mix-blend-multiply"
        priority
        onError={() => {
          // Ultimate fallback to a solid color
          const fallbackDiv = document.createElement('div');
          fallbackDiv.className = 'fixed top-0 left-0 w-full h-full bg-gradient-to-br from-deep-black via-electric-violet/20 to-plasma-green/20 z-[-1]';
          document.body.appendChild(fallbackDiv);
        }}
      />
      {/* Animated fractal pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-electric-violet/10 to-plasma-green/10 animate-pulse-slow" />
    </div>
  );
};

export default FallbackVideo;
