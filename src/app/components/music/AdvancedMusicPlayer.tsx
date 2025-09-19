'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface Song {
  songNumber: number;
  songName: string;
  description: string;
  linkToWebsite: string;
  lyrics: string;
  audioFile: string;
  coverArt: string;
}

interface AdvancedMusicPlayerProps {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSeek: (time: number) => void;
  currentTime: number;
  duration: number;
  volume: number;
  onVolumeChange: (volume: number) => void;
  onSongSelect: (song: Song) => void;
  isShuffled: boolean;
  onShuffleToggle: () => void;
  isRepeating: boolean;
  onRepeatToggle: () => void;
  isFullscreen: boolean;
  onFullscreenToggle: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filteredSongs: Song[];
  onSongReorder: (fromIndex: number, toIndex: number) => void;
  onDownload: (song: Song) => void;
  showLyrics: boolean;
  onToggleLyrics: () => void;
  currentLyricLine: string;
  skin: string;
  onSkinChange: (skin: string) => void;
}

export default function AdvancedMusicPlayer({
  songs,
  currentSong,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  onSeek,
  currentTime,
  duration,
  volume,
  onVolumeChange,
  onSongSelect,
  isShuffled,
  onShuffleToggle,
  isRepeating,
  onRepeatToggle,
  isFullscreen,
  onFullscreenToggle,
  searchTerm,
  onSearchChange,
  filteredSongs,
  onSongReorder,
  onDownload,
  showLyrics,
  onToggleLyrics,
  currentLyricLine,
  skin,
  onSkinChange,
}: AdvancedMusicPlayerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const playlistRef = useRef<HTMLDivElement>(null);

  // Global keyboard event listener
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Only handle if no input is focused
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }
      
      switch (e.key) {
        case ' ':
          e.preventDefault();
          onPlayPause();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          onNext();
          break;
        case 'ArrowUp':
          e.preventDefault();
          onVolumeChange(Math.min(1, volume + 0.1));
          break;
        case 'ArrowDown':
          e.preventDefault();
          onVolumeChange(Math.max(0, volume - 0.1));
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          onFullscreenToggle();
          break;
        case 'l':
        case 'L':
          e.preventDefault();
          onToggleLyrics();
          break;
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, [onPlayPause, onPrevious, onNext, onVolumeChange, volume, onFullscreenToggle, onToggleLyrics]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !duration) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickTime = (clickX / width) * duration;
    
    onSeek(clickTime);
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setIsDragging(true);
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      onSongReorder(draggedIndex, dropIndex);
    }
    setIsDragging(false);
    setDraggedIndex(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case ' ':
        e.preventDefault();
        onPlayPause();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        onPrevious();
        break;
      case 'ArrowRight':
        e.preventDefault();
        onNext();
        break;
      case 'ArrowUp':
        e.preventDefault();
        onVolumeChange(Math.min(1, volume + 0.1));
        break;
      case 'ArrowDown':
        e.preventDefault();
        onVolumeChange(Math.max(0, volume - 0.1));
        break;
      case 'f':
        e.preventDefault();
        onFullscreenToggle();
        break;
      case 'l':
        e.preventDefault();
        onToggleLyrics();
        break;
    }
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  if (!currentSong) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-emerald-900/20 backdrop-blur-xl border-t border-emerald-400/30 shadow-2xl transition-all duration-300 ${
        isFullscreen ? 'top-0 h-screen' : 'h-auto'
      }`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Music Player"
    >
      <div className={`max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-3 ${isFullscreen ? 'h-full flex flex-col' : ''}`}>
        {/* Main Player Controls - Mobile Optimized */}
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Song Info - Mobile Optimized */}
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={currentSong.coverArt}
                alt={`${currentSong.songName} cover art`}
                width={56}
                height={56}
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.currentTarget.src = '/images/cover-art/recursive-memetic-weapons-1.png';
                }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-semibold text-xs sm:text-sm truncate">
                {currentSong.songName}
              </h3>
              <p className="text-emerald-300 text-xs truncate">
                Track {currentSong.songNumber} of {songs.length}
              </p>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-emerald-300 hover:text-white transition-colors p-1"
              aria-label={isExpanded ? 'Minimize player' : 'Expand player'}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isExpanded ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                )}
              </svg>
            </button>
          </div>

          {/* Center: Controls - Mobile Optimized */}
          <div className="flex items-center space-x-1 sm:space-x-4">
            {/* Hide shuffle/repeat on mobile, show on desktop */}
            <button
              onClick={onShuffleToggle}
              className={`hidden sm:block p-2 rounded-full transition-colors ${
                isShuffled ? 'text-emerald-400' : 'text-emerald-300 hover:text-white'
              }`}
              aria-label="Shuffle"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
              </svg>
            </button>

            <button
              onClick={onPrevious}
              className="p-1 sm:p-2 text-emerald-300 hover:text-white transition-colors mobile-tap-target"
              aria-label="Previous track"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>

            <button
              onClick={onPlayPause}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-emerald-900 rounded-full flex items-center justify-center hover:scale-105 transition-transform mobile-tap-target"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>

            <button
              onClick={onNext}
              className="p-1 sm:p-2 text-emerald-300 hover:text-white transition-colors mobile-tap-target"
              aria-label="Next track"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>

            <button
              onClick={onRepeatToggle}
              className={`hidden sm:block p-2 rounded-full transition-colors ${
                isRepeating ? 'text-emerald-400' : 'text-emerald-300 hover:text-white'
              }`}
              aria-label="Repeat"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
              </svg>
            </button>
          </div>

          {/* Right: Volume and More - Mobile Optimized */}
          <div className="flex items-center space-x-1 sm:space-x-4 min-w-0 flex-1 justify-end">
            {/* Hide volume on mobile, show on desktop */}
            <div className="hidden sm:flex items-center space-x-2">
              <svg className="w-4 h-4 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                className="w-20 h-1 bg-emerald-700 rounded-lg appearance-none cursor-pointer slider"
                aria-label="Volume"
              />
            </div>
            
            <button
              onClick={onToggleLyrics}
              className="p-1 sm:p-2 text-emerald-300 hover:text-white transition-colors mobile-tap-target"
              aria-label="Toggle lyrics"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </button>
            
            <button
              onClick={onFullscreenToggle}
              className="p-1 sm:p-2 text-emerald-300 hover:text-white transition-colors mobile-tap-target"
              aria-label="Toggle fullscreen"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Bar - Mobile Optimized */}
        <div className="mt-2 sm:mt-3">
          <div
            ref={progressRef}
            className="w-full h-1.5 sm:h-2 bg-emerald-700 rounded-full cursor-pointer group mobile-tap-target"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-emerald-400 rounded-full transition-all duration-100 group-hover:bg-emerald-300"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full -mt-1 float-right opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="flex justify-between text-xs text-emerald-300 mt-1">
            <span className="text-xs">{formatTime(currentTime)}</span>
            <span className="text-xs">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Expanded View with Playlist and Lyrics */}
        {isExpanded && (
          <div className="mt-4 flex-1 flex flex-col lg:flex-row gap-6">
            {/* Playlist */}
            <div className="flex-1 bg-emerald-900/20 backdrop-blur-xl border border-emerald-400/30 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Playlist</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Search tracks..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="px-3 py-1 bg-emerald-800/50 border border-emerald-600/50 rounded-lg text-white text-sm placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                  />
                  <select
                    value={skin}
                    onChange={(e) => onSkinChange(e.target.value)}
                    className="px-3 py-1 bg-emerald-800/50 border border-emerald-600/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                  >
                    <option value="genesis">Genesis Theme</option>
                    <option value="dark">Dark Mode</option>
                    <option value="emerald">Emerald</option>
                  </select>
                </div>
              </div>
              
              <div 
                ref={playlistRef}
                className="space-y-2 max-h-64 overflow-y-auto"
              >
                {filteredSongs.map((song, index) => (
                  <div
                    key={song.songNumber}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      currentSong?.songNumber === song.songNumber
                        ? 'bg-emerald-600/30 border border-emerald-400/50'
                        : 'bg-emerald-800/30 hover:bg-emerald-700/30'
                    } ${isDragging && draggedIndex === index ? 'opacity-50' : ''}`}
                    onClick={() => onSongSelect(song)}
                  >
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={song.coverArt}
                        alt={`${song.songName} cover art`}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          e.currentTarget.src = '/images/cover-art/recursive-memetic-weapons-1.png';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm truncate">
                        {song.songName}
                      </h4>
                      <p className="text-emerald-300 text-xs truncate">
                        Track {song.songNumber}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDownload(song);
                      }}
                      className="p-1 text-emerald-300 hover:text-white transition-colors"
                      aria-label="Download track"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Lyrics Display */}
            {showLyrics && (
              <div className="flex-1 bg-emerald-900/20 backdrop-blur-xl border border-emerald-400/30 p-6 rounded-2xl shadow-2xl">
                <h3 className="text-white font-semibold text-lg mb-4">Lyrics</h3>
                <div className="bg-emerald-800/30 rounded-lg p-4 max-h-64 overflow-y-auto">
                  <div className="text-emerald-100 text-sm whitespace-pre-wrap font-mono">
                    {currentLyricLine || currentSong.lyrics}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Keyboard Shortcuts Help */}
        <div className="mt-4 text-xs text-emerald-300/70 text-center">
          Keyboard shortcuts: Space (play/pause), ← → (prev/next), ↑ ↓ (volume), F (fullscreen), L (lyrics)
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
