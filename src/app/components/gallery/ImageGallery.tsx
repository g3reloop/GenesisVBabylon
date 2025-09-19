'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ImageMetadata } from '@/lib/image-registry';
import EnhancedImagePopup from './EnhancedImagePopup';

interface ImageGalleryProps {
  images: ImageMetadata[];
  title?: string;
  showSectionFilter?: boolean;
  className?: string;
}

export default function ImageGallery({ 
  images, 
  title = "Visual Explorations", 
  showSectionFilter = false,
  className = ""
}: ImageGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
    loop: false,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [popupImage, setPopupImage] = useState<ImageMetadata | null>(null);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  const openPopup = (image: ImageMetadata) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  const goToPreviousPopup = () => {
    if (!popupImage) return;
    const currentIndex = images.findIndex(img => img.id === popupImage.id);
    if (currentIndex > 0) {
      setPopupImage(images[currentIndex - 1]);
    }
  };

  const goToNextPopup = () => {
    if (!popupImage) return;
    const currentIndex = images.findIndex(img => img.id === popupImage.id);
    if (currentIndex < images.length - 1) {
      setPopupImage(images[currentIndex + 1]);
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Gallery Header */}
      <div className="glass-container rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-green-400 mb-2 font-montserrat">
          {title}
        </h2>
        <p className="text-white/70 text-sm">
          Explore the visual language of Genesis Recursive Fractal Mythic Tech
        </p>
      </div>

      {/* Embla Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 ${
            prevBtnDisabled 
              ? 'opacity-30 cursor-not-allowed' 
              : 'opacity-80 hover:opacity-100 hover:bg-black/70 hover:border-green-400/50'
          }`}
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          aria-label="Previous images"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 ${
            nextBtnDisabled 
              ? 'opacity-30 cursor-not-allowed' 
              : 'opacity-80 hover:opacity-100 hover:bg-black/70 hover:border-green-400/50'
          }`}
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          aria-label="Next images"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-x touch-pinch-zoom">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="min-w-0 w-[85%] sm:w-[45%] md:w-[30%] lg:w-[23%] xl:w-[19%] pl-4 first:pl-0"
              >
                <div 
                  className="glass-card rounded-xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 mobile-tap-target"
                  onClick={() => openPopup(image)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 85vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 23vw, 19vw"
                    />
                    
                    {/* Overlay Info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-4">
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                          {image.alt}
                        </h3>
                        <p className="text-green-300 text-xs line-clamp-2">
                          {image.purpose}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === selectedIndex
                  ? 'bg-green-400 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Image Popup */}
      <EnhancedImagePopup
        image={popupImage}
        onClose={closePopup}
        onPrevious={popupImage && images.findIndex(img => img.id === popupImage.id) > 0 ? goToPreviousPopup : undefined}
        onNext={popupImage && images.findIndex(img => img.id === popupImage.id) < images.length - 1 ? goToNextPopup : undefined}
        hasPrevious={popupImage ? images.findIndex(img => img.id === popupImage.id) > 0 : false}
        hasNext={popupImage ? images.findIndex(img => img.id === popupImage.id) < images.length - 1 : false}
      />
    </div>
  );
}
