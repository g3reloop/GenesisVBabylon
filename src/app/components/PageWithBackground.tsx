'use client';

import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import { getVideoConfig } from '@/lib/video-config';

interface PageWithBackgroundProps {
  children: React.ReactNode;
  sectionId: string;
  className?: string;
}

export default function PageWithBackground({ 
  children, 
  sectionId, 
  className = '' 
}: PageWithBackgroundProps) {
  const videoConfig = getVideoConfig(sectionId);

  return (
    <div className={`min-h-screen relative ${className}`}>
      {/* Background Video */}
      {videoConfig && (
        <BackgroundVideo
          videoSrc={videoConfig.videoSrc}
          fallbackImage={videoConfig.fallbackImage}
          sectionId={sectionId}
          priority={videoConfig.priority}
        />
      )}
      
      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
