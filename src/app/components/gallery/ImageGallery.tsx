'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ImageMetadata } from '@/lib/image-registry';

interface ImageGalleryProps {
  images: ImageMetadata[];
  title?: string;
  showSectionFilter?: boolean;
  className?: string;
}

export default function ImageGallery({ 
  images, 
  title, 
  showSectionFilter = false, 
  className = '' 
}: ImageGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      containScroll: 'trimSnaps',
      inViewThreshold: 0.5,
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-green-400 mb-6 text-center font-montserrat">
          {title}
        </h2>
      )}
      
      <div className="glass-container rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((image, index) => (
              <div key={image.id} className="embla__slide min-w-0 w-[85%] sm:w-[45%] md:w-[30%] lg:w-[23%] xl:w-[19%] pl-4">
                <div className="relative group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-sm font-semibold mb-1 line-clamp-2">
                        {image.alt}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-2">
                        {image.purpose}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        {scrollSnaps.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {scrollSnaps.map((_, index) => (
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
        )}

        {/* Navigation Arrows */}
        {scrollSnaps.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next image"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}