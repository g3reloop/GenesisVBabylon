'use client';

import React from 'react';
import DisclaimerBanner from '../components/DisclaimerBanner';
import GlassCard from '../components/GlassCard';
import { musicTracks } from '../../lib/music-data';

export default function RMWDiscographyPage() {
  const handlePlaySong = (song: typeof musicTracks[0]) => {
    // The music player will handle this automatically
    console.log('Playing song:', song.title);
  };

  return (
    <div className="bg-homepage bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <DisclaimerBanner />
        
        <GlassCard className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg text-center">
            RMW Discography
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md text-center">
            The complete musical implementation of Genesis Recursive Fractal Mythic Tech civilization.
            Each track operationalizes key Genesis principles through recursive lyrical patterns,
            demonstrating the Fusion of Fission strategy in musical form.
          </p>
          
          <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-400/30 backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 text-center">Genesis Musical Protocol</h2>
            <p className="text-white/90 text-center mb-4">
              The RMW Discography represents the first complete musical implementation of Genesis principles.
              Each song serves as both entertainment and education, operationalizing civilizational concepts
              through recursive lyrical patterns that simultaneously collapse Babylon's memetic systems
              while building Genesis Stabilized Recursive Loops.
            </p>
            <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-400/30">
              <p className="text-yellow-200 text-center text-sm">
                <strong>Demo Notice:</strong> This is a demonstration version. Audio files are placeholder files. 
                The complete RMW Discography with full audio tracks will be available in the production release.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Song Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {musicTracks.map((track, index) => (
            <div key={track.id} className="glass-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{track.title}</h3>
                  <p className="text-white/70 text-sm">{track.artist}</p>
                  <p className="text-white/50 text-xs">{track.duration}</p>
                </div>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Track {index + 1} of the Genesis Protocol music collection. 
                This track is automatically available in the persistent music player.
              </p>
              <button
                onClick={() => handlePlaySong(track)}
                className="btn btn-primary w-full"
              >
                Play Track
              </button>
            </div>
          ))}
        </div>

        {/* Genesis Protocol Integration */}
        <GlassCard className="mb-8">
          <h2 className="text-3xl font-bold text-emerald-400 mb-6 font-montserrat text-center">
            Recursive Navigation Integration
          </h2>
          
          <p className="text-white/90 text-center mb-6">
            Each track in the RMW Discography connects to specific sections of the Genesis Parallel Civilisation website,
            creating a recursive navigation system that allows users to explore the complete Genesis framework
            through both musical and textual analysis.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="glass-container rounded-lg p-4">
              <h3 className="text-emerald-300 font-semibold mb-2">Musical Analysis</h3>
              <p className="text-emerald-100/80 text-sm">
                Each song's lyrics are analyzed for Genesis protocol references,
                automatically generating navigation links to relevant sections.
              </p>
            </div>
            
            <div className="glass-container rounded-lg p-4">
              <h3 className="text-emerald-300 font-semibold mb-2">Recursive Learning</h3>
              <p className="text-emerald-100/80 text-sm">
                Users can explore the complete Genesis framework through
                both musical and textual content, creating deeper understanding.
              </p>
            </div>
            
            <div className="glass-container rounded-lg p-4">
              <h3 className="text-emerald-300 font-semibold mb-2">Operational Implementation</h3>
              <p className="text-emerald-100/80 text-sm">
                The discography serves as both entertainment and education,
                operationalizing Genesis principles through musical form.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Technical Specifications */}
        <GlassCard className="mb-8">
          <h2 className="text-3xl font-bold text-emerald-400 mb-6 font-montserrat text-center">
            Technical Specifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-4">Audio Format</h3>
              <ul className="space-y-2 text-emerald-100/80 text-sm">
                <li>• High-quality MP3 encoding</li>
                <li>• Optimized for web streaming</li>
                <li>• Mobile and desktop compatible</li>
                <li>• Progressive download support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-4">Player Features</h3>
              <ul className="space-y-2 text-emerald-100/80 text-sm">
                <li>• Universal persistent player across site</li>
                <li>• Click any song to switch tracks</li>
                <li>• Volume control and progress bar</li>
                <li>• Minimizable player interface</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
