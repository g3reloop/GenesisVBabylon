'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { imageRegistry, getAllSections, getSectionDisplayName, ImageMetadata } from '@/lib/image-registry';
import DisclaimerBanner from '../components/DisclaimerBanner';
import GlassCard from '../components/GlassCard';
import EnhancedImagePopup from '../components/gallery/EnhancedImagePopup';

export default function GalleryPage() {
  const [selectedSection, setSelectedSection] = useState<ImageMetadata['section'] | 'all'>('all');
  const [lightboxImage, setLightboxImage] = useState<ImageMetadata | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const sections = getAllSections();

  const filteredImages = useMemo(() => {
    let images = selectedSection === 'all' 
      ? imageRegistry 
      : imageRegistry.filter(img => img.section === selectedSection);

    if (searchTerm) {
      images = images.filter(img => 
        img.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.section.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return images;
  }, [selectedSection, searchTerm]);

  const openLightbox = (image: ImageMetadata) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const goToPrevious = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    if (currentIndex > 0) {
      setLightboxImage(filteredImages[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    if (currentIndex < filteredImages.length - 1) {
      setLightboxImage(filteredImages[currentIndex + 1]);
    }
  };

  const currentImageIndex = lightboxImage ? filteredImages.findIndex(img => img.id === lightboxImage.id) : -1;

  return (
    <>
    <div className="bg-homepage bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <DisclaimerBanner />
        
        {/* Hero Section */}
        <GlassCard className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
            The Visual Language of Genesis
          </h1>
          <p className="text-xl text-white/90 leading-relaxed mb-4 drop-shadow-md">
            A Recursive Fractal Mythic Tech Gallery
          </p>
          <p className="text-lg text-white/80">
            Explore the complete visual ontology of Genesis Parallel Civilisation through {imageRegistry.length} curated images 
            that demonstrate the transition from Babylon's Corrupted Recursive Loops to Genesis' Stabilized Recursive Loops.
          </p>
        </GlassCard>

        {/* Controls */}
        <GlassCard className="mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-1/3">
              <label htmlFor="search" className="block text-sm font-medium text-white/80 mb-2">
                Search Images
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search by title, purpose, or section..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 backdrop-blur-sm"
              />
            </div>

            {/* Section Filter */}
            <div className="w-full lg:w-2/3">
              <label className="block text-sm font-medium text-white/80 mb-2">
                Filter by Section
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSection('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedSection === 'all'
                      ? 'bg-green-400 text-black'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  All ({imageRegistry.length})
                </button>
                {sections.map(section => {
                  const sectionImages = imageRegistry.filter(img => img.section === section);
                  return (
                    <button
                      key={section}
                      onClick={() => setSelectedSection(section)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedSection === section
                          ? 'bg-green-400 text-black'
                          : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {getSectionDisplayName(section)} ({sectionImages.length})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-white/70 text-sm">
            Showing {filteredImages.length} of {imageRegistry.length} images
            {selectedSection !== 'all' && ` in ${getSectionDisplayName(selectedSection)}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-400/20"
              onClick={() => openLightbox(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Used in Body Indicator */}
                {image.usedInBody && (
                  <div className="absolute top-2 right-2 bg-green-400 text-black text-xs px-2 py-1 rounded-full font-semibold z-20">
                    In Content
                  </div>
                )}
                
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full"
                  onError={(e) => {
                    console.log('Gallery image failed to load:', image.src);
                    e.currentTarget.src = '/images/sections/recursive-memetic-weapons-1.png';
                  }}
                />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                      {image.alt}
                    </h3>
                    <p className="text-green-300 text-xs line-clamp-2 mb-1">
                      {image.purpose}
                    </p>
                    <span className="text-white/70 text-xs uppercase tracking-wide">
                      {getSectionDisplayName(image.section)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <GlassCard className="text-center py-12">
            <h3 className="text-xl font-semibold text-white/80 mb-2">No Images Found</h3>
            <p className="text-white/60">
              Try adjusting your search terms or selecting a different section.
            </p>
          </GlassCard>
        )}
      </div>

    </div>

    {/* Enhanced Image Popup - Rendered outside main container */}
    <EnhancedImagePopup
      image={lightboxImage}
      onClose={closeLightbox}
      onPrevious={currentImageIndex > 0 ? goToPrevious : undefined}
      onNext={currentImageIndex < filteredImages.length - 1 ? goToNext : undefined}
      hasPrevious={currentImageIndex > 0}
      hasNext={currentImageIndex < filteredImages.length - 1}
    />
    </>
  );
}
