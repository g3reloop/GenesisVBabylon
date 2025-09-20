'use client';

import { useState, useEffect, useCallback } from 'react';
import { getVideoConfig, VideoConfig } from '@/lib/video-config';

interface UseBackgroundVideoOptions {
  sectionId: string;
  enableLazyLoading?: boolean;
  preloadDistance?: number;
}

interface UseBackgroundVideoReturn {
  videoConfig: VideoConfig | null;
  isVideoReady: boolean;
  shouldLoadVideo: boolean;
  loadVideo: () => void;
}

export function useBackgroundVideo({
  sectionId,
  enableLazyLoading = true,
  preloadDistance = 1000
}: UseBackgroundVideoOptions): UseBackgroundVideoReturn {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(!enableLazyLoading);

  const videoConfig = getVideoConfig(sectionId);

  const loadVideo = useCallback(() => {
    setShouldLoadVideo(true);
  }, []);

  useEffect(() => {
    if (!enableLazyLoading || !videoConfig) {
      setShouldLoadVideo(true);
      return;
    }

    // Lazy loading based on scroll position
    const handleScroll = () => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight + preloadDistance && rect.bottom > -preloadDistance;
      
      if (isInViewport && !shouldLoadVideo) {
        setShouldLoadVideo(true);
      }
    };

    // Check initial position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionId, enableLazyLoading, preloadDistance, shouldLoadVideo, videoConfig]);

  useEffect(() => {
    if (shouldLoadVideo && videoConfig) {
      // Preload video metadata
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = videoConfig.videoSrc;
      
      video.addEventListener('loadedmetadata', () => {
        setIsVideoReady(true);
      });

      video.addEventListener('error', () => {
        console.log(`Failed to load video for ${sectionId}, will use fallback image`);
        setIsVideoReady(false);
      });

      return () => {
        video.remove();
      };
    }
  }, [shouldLoadVideo, videoConfig, sectionId]);

  return {
    videoConfig,
    isVideoReady,
    shouldLoadVideo,
    loadVideo
  };
}
