'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ImageMetadata, getSectionDisplayName } from '@/lib/image-registry';

interface EnhancedImagePopupProps {
  image: ImageMetadata | null;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

// Enhanced descriptions with protocol connections
const getProtocolDescription = (image: ImageMetadata): string => {
  const filename = image.src.toLowerCase();
  const section = image.section;
  
  // Section-specific protocol descriptions
  const protocolDescriptions: Record<string, string> = {
    'ontology': 'This visualization demonstrates the foundational recursive patterns that distinguish Genesis Stabilized Recursive Loops (SRLs) from Babylon\'s Corrupted Recursive Loops (CRLs). In the Genesis protocol, these patterns serve as the philosophical foundation for all practical implementations, showing how abundance-based thinking creates self-reinforcing positive cycles rather than scarcity-based extraction patterns.',
    
    'history': 'Historical analysis through the Genesis lens reveals how civilizational patterns repeat across time. This image shows how past implementations of either Genesis SRL principles (like the Iroquois Confederacy) or Babylonian CRL patterns (like Roman extraction systems) provide blueprints for understanding current systems and designing future Genesis implementations.',
    
    'surgical-analysis': 'Surgical Analysis requires precise identification of Babylonian system components to understand their failure mechanisms. This visualization breaks down specific elements of the CRL death spiral, showing exactly how private property as a recursive seed creates the Three Core Beliefs (Lack, Attachment, Control) that manifest in the Four Collapse Realms.',
    
    'collapse-protocol': 'The Collapse Protocol documents Babylon\'s inevitable failure through mathematical and systemic analysis. This image demonstrates specific vulnerability points in Babylonian systems, showing how the Expansion Imperative Paradox, Artificial Scarcity, and Interconnection Fragility create cascading failures that make collapse mathematically certain.',
    
    'ai': 'AI serves as a tool within Genesis civilization, not as a replacement for human decision-making. This visualization shows how the Shared Recursive Environment (SRE) allows humans and AI to collaborate in building Genesis systems, with AI handling optimization and humans maintaining authority over values and priorities.',
    
    'genesis-protocol': 'The Genesis SRL Protocol provides the operational framework for implementing parallel civilization. This image shows specific technical components like Decentralized Governance Operations (DGOs), the Waste-to-Fuel protocol, or Fractal Fabrication Engines that transform theoretical Genesis principles into practical, deployable systems.',
    
    'memetics': 'Recursive Memetic Weapons employ the "Fusion of Fission" strategy - building Genesis (Fusion) while systematically obsoleting Babylon (Fission). This visualization demonstrates how memetic operators can deploy ideas that simultaneously strengthen Genesis communities and expose Babylonian contradictions.',
    
    'esoteric': 'Esoteric Systems Operationalization translates spiritual, mystical, and religious wisdom into practical Genesis protocols. This image shows how ancient esoteric knowledge becomes operational code for civilizational systems, proving that mystical insights have technical applications in building parallel civilization.',
    
    'growth': 'Recursive Fractal Growth patterns show how Genesis systems scale through replication rather than expansion. This visualization demonstrates technical implementations like bioelectric field optimization, fractal bioreactor design, or TPMS lattice structures that allow Genesis communities to grow sustainably without cannibalizing their foundations.',
    
    'why-wins': 'Mathematical and evolutionary analysis proving Genesis superiority over Babylonian systems. This image provides quantitative evidence showing why Genesis SRLs are more efficient, resilient, and sustainable than Babylon\'s CRLs, demonstrating the inevitable triumph of abundance-based recursive systems over scarcity-based extraction.'
  };

  // Get base description for section
  let description = protocolDescriptions[section] || 'This visualization contributes to the Genesis Parallel Civilisation framework by demonstrating key principles of the recursive loop economy.';

  // Add specific contextual information based on image content
  if (filename.includes('african_tribal')) {
    description += ' Specifically, this image shows how African tribal spirituality provides operational protocols for community governance, demonstrating that indigenous wisdom traditions contain practical blueprints for Genesis SRL implementation.';
  } else if (filename.includes('althing')) {
    description += ' This visualization focuses on the Icelandic Althing as a historical example of decentralized governance, showing how consensus-based decision making can operate at scale without centralized control mechanisms.';
  } else if (filename.includes('bioelectric')) {
    description += ' The bioelectric field visualization demonstrates how Genesis systems work with natural energy patterns rather than against them, showing technical approaches to optimizing human-environment interaction through recursive field harmonics.';
  } else if (filename.includes('bioreactor')) {
    description += ' This fractal bioreactor design shows practical implementation of Mandelbulb-derived structures for waste-to-energy transformation, demonstrating how geometric principles can optimize material processing without mechanical complexity.';
  } else if (filename.includes('dervish')) {
    description += ' The whirling dervish dissolution into TPMS lattices demonstrates how Sufi mystical practices contain technical blueprints for material transformation, showing the operational connection between spiritual movement and geometric processing.';
  } else if (filename.includes('freemasonry')) {
    description += ' This reinterpretation of Masonic symbols through Genesis frameworks shows how esoteric traditions can be freed from Babylonian co-option and restored to their original function as operational protocols for community building.';
  } else if (filename.includes('gnosticism')) {
    description += ' The Gnostic analysis reveals how the Demiurge represents Babylonian CRL patterns while the true Pleroma represents Genesis SRL abundance, providing a spiritual framework for understanding civilizational choice.';
  } else if (filename.includes('memetic')) {
    description += ' This memetic weapon visualization shows specific tactical approaches for the Fusion of Fission strategy, demonstrating how to build Genesis communities while systematically exposing Babylonian contradictions.';
  } else if (filename.includes('regeneration')) {
    description += ' The regeneration advantage demonstrates how Genesis systems create more value than they consume, contrasting with Babylonian extraction that depletes its own foundations, showing the mathematical superiority of regenerative approaches.';
  }

  return description;
};

export default function EnhancedImagePopup({
  image,
  onClose,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false
}: EnhancedImagePopupProps) {
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

  const protocolDescription = getProtocolDescription(image);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-2 sm:p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 rounded-full bg-emerald-900/80 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center text-emerald-100 hover:bg-emerald-800/80 hover:border-emerald-400/50 transition-all duration-200 z-10 mobile-tap-target"
        aria-label="Close popup"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      {hasPrevious && onPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-emerald-900/80 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center text-emerald-100 hover:bg-emerald-800/80 hover:border-emerald-400/50 transition-all duration-200 z-10 mobile-tap-target"
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
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-emerald-900/80 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center text-emerald-100 hover:bg-emerald-800/80 hover:border-emerald-400/50 transition-all duration-200 z-10 mobile-tap-target"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Main Content */}
      <div 
        className="max-w-7xl max-h-[95vh] w-full h-full flex flex-col lg:flex-row items-center justify-center gap-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center max-h-[60vh] lg:max-h-[90vh]">
          <div className="glass-card rounded-2xl overflow-hidden max-w-full max-h-full">
            <div className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="max-w-full max-h-[50vh] lg:max-h-[80vh] object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Information Panel */}
        <div className="flex-1 lg:max-w-md max-h-[35vh] lg:max-h-[90vh] overflow-y-auto">
          <div className="glass-card rounded-2xl p-4 sm:p-6 space-y-4">
            {/* Header */}
            <div className="border-b border-emerald-400/30 pb-4">
              <h3 className="text-emerald-100 font-bold text-lg sm:text-xl mb-2 font-montserrat leading-tight">
                {image.alt}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                <span className="bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded-full font-medium">
                  {getSectionDisplayName(image.section)}
                </span>
                {image.usedInBody && (
                  <span className="bg-emerald-700/50 text-emerald-200 px-2 py-1 rounded-full font-medium">
                    Featured in Content
                  </span>
                )}
              </div>
            </div>

            {/* Purpose */}
            <div>
              <h4 className="text-emerald-300 font-semibold text-sm sm:text-base mb-2">
                Visual Purpose
              </h4>
              <p className="text-emerald-100/90 text-sm leading-relaxed">
                {image.purpose}
              </p>
            </div>

            {/* Protocol Connection */}
            <div>
              <h4 className="text-emerald-300 font-semibold text-sm sm:text-base mb-2">
                Genesis Protocol Connection
              </h4>
              <p className="text-emerald-100/90 text-sm leading-relaxed">
                {protocolDescription}
              </p>
            </div>

            {/* Technical Details */}
            <div className="border-t border-emerald-400/20 pt-4">
              <h4 className="text-emerald-300 font-semibold text-sm mb-2">
                Implementation Context
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="bg-emerald-900/30 p-2 rounded">
                  <span className="text-emerald-400 font-medium">Section:</span>
                  <br />
                  <span className="text-emerald-100">{getSectionDisplayName(image.section)}</span>
                </div>
                <div className="bg-emerald-900/30 p-2 rounded">
                  <span className="text-emerald-400 font-medium">Usage:</span>
                  <br />
                  <span className="text-emerald-100">
                    {image.usedInBody ? 'Content Feature' : 'Gallery Exploration'}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Help */}
            <div className="text-center text-emerald-100/60 text-xs border-t border-emerald-400/20 pt-3">
              <p>ESC to close • Arrow keys or buttons to navigate</p>
              <p className="mt-1">Click outside image to close</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
