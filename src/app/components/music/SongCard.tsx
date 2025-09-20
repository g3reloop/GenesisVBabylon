'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAdvancedMusicPlayer } from './AdvancedMusicPlayerProvider';

interface Song {
  songNumber: number;
  songName: string;
  description: string;
  linkToWebsite: string;
  lyrics: string;
  audioFile: string;
  coverArt: string;
}

interface SongCardProps {
  song: Song;
  isPlaying?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}

export default function SongCard({ song }: SongCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { playSong, currentSong, isPlaying: globalIsPlaying } = useAdvancedMusicPlayer();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentSong?.songNumber === song.songNumber && globalIsPlaying) {
      // Pause current song - handled by the music player context
      // The music player will handle pause/play logic
    } else {
      // Play this song
      playSong(song);
    }
  };

  // Analyze lyrics for recursive navigation links
  const getRecursiveLinks = (lyrics: string) => {
    const links = [];
    
    // Check for specific Genesis protocol references
    if (lyrics.toLowerCase().includes('ontology') || lyrics.toLowerCase().includes('recursive')) {
      links.push({ section: 'Civilizational Ontology', text: 'Explore Recursive Patterns', href: '/ontology' });
    }
    
    if (lyrics.toLowerCase().includes('history') || lyrics.toLowerCase().includes('babylon') || lyrics.toLowerCase().includes('5000')) {
      links.push({ section: 'Complete Civilizational History', text: 'Study 5,000 Years of Babylon', href: '/history' });
    }
    
    if (lyrics.toLowerCase().includes('surgical') || lyrics.toLowerCase().includes('analysis') || lyrics.toLowerCase().includes('cerl')) {
      links.push({ section: 'Surgical Analysis', text: 'Analyze CRL Death Spirals', href: '/surgical-analysis' });
    }
    
    if (lyrics.toLowerCase().includes('collapse') || lyrics.toLowerCase().includes('protocol') || lyrics.toLowerCase().includes('pure collapse')) {
      links.push({ section: 'Collapse Protocol', text: 'Understand Babylon Collapse', href: '/collapse-protocol' });
    }
    
    if (lyrics.toLowerCase().includes('ai') || lyrics.toLowerCase().includes('loop') || lyrics.toLowerCase().includes('recursive loop')) {
      links.push({ section: 'AI as a Tool Within Genesis', text: 'Learn About SRE and AI', href: '/ai-as-tool-within-genesis' });
    }
    
    if (lyrics.toLowerCase().includes('genesis') || lyrics.toLowerCase().includes('srl') || lyrics.toLowerCase().includes('protocol')) {
      links.push({ section: 'Genesis SRL Protocol', text: 'Master Genesis Protocols', href: '/genesis-protocol' });
    }
    
    if (lyrics.toLowerCase().includes('memetic') || lyrics.toLowerCase().includes('weapon') || lyrics.toLowerCase().includes('fusion')) {
      links.push({ section: 'Recursive Memetic Weapons', text: 'Deploy Memetic Weapons', href: '/memetic-weapons' });
    }
    
    if (lyrics.toLowerCase().includes('esoteric') || lyrics.toLowerCase().includes('mystic') || lyrics.toLowerCase().includes('spiritual')) {
      links.push({ section: 'Esoteric Systems Operationalization', text: 'Operationalize Mystical Knowledge', href: '/esoteric-systems' });
    }
    
    if (lyrics.toLowerCase().includes('fractal') || lyrics.toLowerCase().includes('growth') || lyrics.toLowerCase().includes('recursive growth')) {
      links.push({ section: 'Recursive Fractal Growth Pattern', text: 'Study Fractal Growth', href: '/fractal-growth' });
    }
    
    if (lyrics.toLowerCase().includes('win') || lyrics.toLowerCase().includes('inevitable') || lyrics.toLowerCase().includes('superior')) {
      links.push({ section: 'Why Genesis Inevitably Wins', text: 'Understand Genesis Superiority', href: '/why-genesis-wins' });
    }

    // Default links if no specific matches
    if (links.length === 0) {
      links.push(
        { section: 'Genesis SRL Protocol', text: 'Learn Genesis Protocols', href: '/genesis-protocol' },
        { section: 'Recursive Memetic Weapons', text: 'Deploy Memetic Weapons', href: '/memetic-weapons' }
      );
    }

    return links;
  };

  const recursiveLinks = getRecursiveLinks(song.lyrics);

  return (
    <div className="glass-card rounded-xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20">
      
      <div className="relative p-6" onClick={toggleExpanded}>
        {/* Song Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden">
              <Image
                src={song.coverArt}
                alt={`${song.songName} cover art`}
                width={48}
                height={48}
                className="object-cover w-full h-full"
                onError={(e) => {
                  console.log('Image failed to load:', song.coverArt);
                  e.currentTarget.src = '/images/cover-art/recursive-memetic-weapons-1.png';
                }}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-100 font-montserrat">
                {song.songName}
              </h3>
              <p className="text-emerald-300/70 text-sm">Track {song.songNumber}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePlayPause}
              className="w-10 h-10 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center text-emerald-100 hover:text-emerald-300 transition-all duration-200 mobile-tap-target"
              aria-label={currentSong?.songNumber === song.songNumber && globalIsPlaying ? 'Pause' : 'Play'}
            >
              {currentSong?.songNumber === song.songNumber && globalIsPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
            <button
              className="w-10 h-10 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center text-emerald-100 hover:text-emerald-300 transition-all duration-200 mobile-tap-target"
              aria-label="Expand details"
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Song Description */}
        <p className="text-emerald-200/80 text-sm leading-relaxed mb-4">
          {song.description}
        </p>

        {/* Genesis Protocol Connection */}
        <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-400/20 mb-4">
          <p className="text-emerald-300 text-xs font-medium mb-1">Genesis Protocol Connection:</p>
          <p className="text-emerald-100/80 text-xs">
            This track operationalizes key Genesis principles through recursive lyrical patterns, 
            demonstrating the Fusion of Fission strategy in musical form.
          </p>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 space-y-4 animate-fadeIn">
            {/* Full Lyrics */}
            <div>
              <h4 className="text-emerald-300 font-semibold text-sm mb-3">Complete Lyrics</h4>
              <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-400/10">
                <pre className="text-emerald-100/90 text-xs leading-relaxed whitespace-pre-wrap font-mono">
                  {song.lyrics}
                </pre>
              </div>
            </div>

            {/* Recursive Navigation Links */}
            <div>
              <h4 className="text-emerald-300 font-semibold text-sm mb-3">Recursive Navigation</h4>
              <p className="text-emerald-200/70 text-xs mb-3">
                Explore related Genesis sections based on lyrical analysis:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {recursiveLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block p-3 bg-emerald-800/30 hover:bg-emerald-700/40 border border-emerald-400/20 rounded-lg transition-all duration-200 mobile-tap-target group"
                  >
                    <div className="text-emerald-300 font-medium text-xs group-hover:text-emerald-200 transition-colors">
                      {link.section}
                    </div>
                    <div className="text-emerald-100/70 text-xs mt-1">
                      {link.text}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Section Link */}
            <div className="pt-4 border-t border-emerald-400/20">
              <Link
                href={song.linkToWebsite}
                className="inline-flex items-center bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/50 text-emerald-200 hover:text-emerald-100 px-4 py-2 rounded-lg transition-all duration-200 mobile-tap-target"
              >
                <span className="text-sm font-medium">Explore Related Section</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
