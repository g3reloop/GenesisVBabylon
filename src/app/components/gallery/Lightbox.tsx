'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ImageMetadata } from '@/lib/image-registry';

interface LightboxProps {
  image: ImageMetadata | null;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

export default function Lightbox({
  image,
  onClose,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false
}: LightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft' && hasPrevious && onPrevious) {
      onPrevious();
    } else if (e.key === 'ArrowRight' && hasNext && onNext) {
      onNext();
    }
  }, [onClose, onPrevious, onNext, hasPrevious, hasNext]);

  useEffect(() => {
    if (image) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [image, handleKeyDown]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 hover:border-green-400/50 transition-all duration-200 z-10"
        aria-label="Close lightbox"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      {hasPrevious && onPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 hover:border-green-400/50 transition-all duration-200 z-10"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next Button */}
      {hasNext && onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 hover:border-green-400/50 transition-all duration-200 z-10"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image Container */}
      <div 
        className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div className="glass-card rounded-2xl overflow-hidden max-w-full max-h-full">
          <div className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              className="max-w-full max-h-[80vh] object-contain"
              priority
            />
            
            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
              <h3 className="text-white font-bold text-lg mb-2 font-montserrat">
                {image.alt}
              </h3>
              <p className="text-green-300 text-sm mb-2">
                {image.purpose}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-xs uppercase tracking-wide">
                  {image.section.replace('-', ' ')}
                </span>
                <span className="text-white/50 text-xs">
                  Press ESC to close • Use arrow keys to navigate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

