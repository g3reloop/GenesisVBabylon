'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 80,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Generate optimized image sources
  const getOptimizedSrc = (originalSrc: string) => {
    // Try WebP first, then compressed PNG as fallback
    const webpSrc = originalSrc.replace('/images/', '/images/webp/').replace(/\.(png|jpg|jpeg)$/, '.webp');
    const fallbackSrc = originalSrc.replace('/images/', '/images/optimized/').replace(/\.(png|jpg|jpeg)$/, '_compressed.$1');
    
    return { webpSrc, fallbackSrc };
  };

  const { webpSrc, fallbackSrc } = getOptimizedSrc(src);

  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width, height }}
        aria-label={alt}
      />
    );
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <Image
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          sizes={sizes}
          priority={priority}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            // Fallback to original if optimized versions fail
            const target = e.target as HTMLImageElement;
            target.src = src;
          }}
        />
      </picture>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;

