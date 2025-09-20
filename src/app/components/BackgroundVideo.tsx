'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface BackgroundVideoProps {
  videoSrc: string;
  fallbackImage?: string;
  sectionId: string;
  className?: string;
  priority?: boolean;
}

export default function BackgroundVideo({
  videoSrc,
  fallbackImage = '/images/backgrounds/genesis-default-bg.jpg',
  sectionId,
  className = '',
  priority = false
}: BackgroundVideoProps) {
  const [isVideoSupported, setIsVideoSupported] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if video is supported and autoplay is allowed
    const checkVideoSupport = async () => {
      if (!videoRef.current) return;

      try {
        // Test if video can play
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsVideoSupported(true);
          setIsVideoLoaded(true);
        }
      } catch (error) {
        console.log('Video autoplay not supported, using fallback image');
        setIsVideoSupported(false);
        setHasError(true);
      }
    };

    // Small delay to ensure video element is ready
    const timer = setTimeout(checkVideoSupport, 100);
    return () => clearTimeout(timer);
  }, [videoSrc]);

  const handleVideoError = () => {
    console.log('Video failed to load, using fallback image');
    setHasError(true);
    setIsVideoSupported(false);
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setHasError(false);
  };

  return (
    <div className={`video-container ${className}`}>
      {/* Background Video */}
      {isVideoSupported && !hasError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1] opacity-80"
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
          preload={priority ? 'auto' : 'metadata'}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback Image */}
      {(hasError || !isVideoSupported || !isVideoLoaded) && (
        <div className="fixed top-0 left-0 w-full h-full z-[-1]">
          <Image
            src={fallbackImage}
            alt={`${sectionId} background`}
            fill
            className="object-cover opacity-80"
            priority={priority}
            onError={() => {
              console.log('Fallback image also failed, using default');
            }}
          />
        </div>
      )}

      {/* Overlay for better text readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-[-1] pointer-events-none" />
    </div>
  );
}

// CSS for additional styling
const styles = `
  .video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }

  .video-container video {
    mix-blend-mode: multiply;
    filter: contrast(1.1) brightness(0.8);
  }

  .video-container img {
    mix-blend-mode: multiply;
    filter: contrast(1.1) brightness(0.8);
  }

  /* Dark mode adjustments */
  @media (prefers-color-scheme: dark) {
    .video-container video,
    .video-container img {
      filter: contrast(1.2) brightness(0.7);
    }
  }

  /* Performance optimization */
  .video-container video {
    will-change: transform;
    transform: translateZ(0);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
