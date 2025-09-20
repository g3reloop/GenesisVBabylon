'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import GlassCard from '../components/GlassCard';
import { getAllImages, getSectionDisplayName, ImageMetadata } from '@/lib/image-registry';

const sections = [
  'ontology',
  'history', 
  'surgical-analysis',
  'collapse-protocol',
  'ai',
  'genesis-protocol',
  'memetics',
  'esoteric',
  'growth',
  'why-wins',
  'platform'
];

export default function GalleryPage() {
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<ImageMetadata | null>(null);

  const allImages = getAllImages();

  const filteredImages = useMemo(() => {
    let filtered = allImages;

    if (selectedSection !== 'all') {
      filtered = filtered.filter(img => img.section === selectedSection);
    }

    if (searchTerm) {
      filtered = filtered.filter(img => 
        img.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.section.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [allImages, selectedSection, searchTerm]);

  return (
    <div className="bg-gallery bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="mb-8" fullScreen={true}>
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg text-center">
              The Visual Language of Genesis
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md text-center">
              A Recursive Fractal Mythic Tech Gallery
            </p>

            <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-400/30 backdrop-blur-sm mb-8">
              <p className="text-white/90 mb-4 text-center">
                <strong>Visual Documentation:</strong> This gallery contains all visual elements used throughout the Genesis v Babylon website, 
                organized by section and purpose. Each image represents a specific aspect of the Genesis parallel civilization's 
                operational protocols and recursive ontology.
              </p>
              <p className="text-emerald-200 text-sm italic text-center">
                Total Images: {allImages.length} | Filtered: {filteredImages.length}
              </p>
            </div>
          </GlassCard>

          {/* Search and Filter Controls */}
          <GlassCard className="mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-white/90 mb-2">
                  Search Images
                </label>
                <input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title, purpose, or section..."
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm"
                />
              </div>

              {/* Section Filter */}
              <div className="lg:w-64">
                <label htmlFor="section" className="block text-sm font-medium text-white/90 mb-2">
                  Filter by Section
                </label>
                <select
                  id="section"
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm"
                >
                  <option value="all">All Sections</option>
                  {sections.map(section => (
                    <option key={section} value={section}>
                      {getSectionDisplayName(section)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </GlassCard>

          {/* Image Grid */}
          <GlassCard>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-xl bg-white/5 backdrop-blur-sm">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-sm font-semibold mb-1 line-clamp-2">
                        {image.alt}
                      </h3>
                      <p className="text-xs text-white/80 mb-2 line-clamp-2">
                        {image.purpose}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded">
                          {getSectionDisplayName(image.section)}
                        </span>
                        <span className="text-xs text-white/60">
                          {image.usedInBody ? 'Used in Body' : 'Gallery Only'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/60 text-lg">No images found matching your criteria.</p>
              </div>
            )}
          </GlassCard>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div 
                className="relative max-w-4xl max-h-[90vh] bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-2 transition-all duration-200"
                  aria-label="Close lightbox"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="mb-4">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">{selectedImage.alt}</h3>
                  <p className="text-white/80 mb-4">{selectedImage.purpose}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-green-400/20 text-green-300 px-3 py-1 rounded">
                      {getSectionDisplayName(selectedImage.section)}
                    </span>
                    <span className="text-white/60 text-sm">
                      {selectedImage.usedInBody ? 'Used in Body Content' : 'Gallery Only'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}