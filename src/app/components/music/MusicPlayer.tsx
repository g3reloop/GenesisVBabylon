'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ImageMetadata } from '@/lib/image-registry';

interface Song {
  songNumber: number;
  songName: string;
  description: string;
  linkToWebsite: string;
  lyrics: string;
  audioFile: string;
  coverArt: string;
}

interface MusicPlayerProps {
  songs: Song[];
  autoplayOnLoad?: boolean;
  loopAfterTwelfthTrack?: boolean;
}

export default function MusicPlayer({ 
  songs, 
  autoplayOnLoad = true, 
  loopAfterTwelfthTrack = true 
}: MusicPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sort songs by song number
  const sortedSongs = [...songs].sort((a, b) => a.songNumber - b.songNumber);

  useEffect(() => {
    if (autoplayOnLoad && audioRef.current) {
      // Check if audio file exists before trying to play
      audioRef.current.addEventListener('error', (e) => {
        console.log('Audio file not found, skipping autoplay:', currentSong?.audioFile);
        setIsPlaying(false);
      });
      
      audioRef.current.play().catch((error) => {
        console.log('Autoplay prevented or audio file missing:', error.message);
        setIsPlaying(false);
      });
    }
  }, [autoplayOnLoad, currentSong?.audioFile]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentTrack < sortedSongs.length - 1) {
        setCurrentTrack(currentTrack + 1);
      } else if (loopAfterTwelfthTrack) {
        setCurrentTrack(0);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, sortedSongs.length, loopAfterTwelfthTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playPrevious = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
    } else if (loopAfterTwelfthTrack) {
      setCurrentTrack(sortedSongs.length - 1);
    }
  };

  const playNext = () => {
    if (currentTrack < sortedSongs.length - 1) {
      setCurrentTrack(currentTrack + 1);
    } else if (loopAfterTwelfthTrack) {
      setCurrentTrack(0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentSong = sortedSongs[currentTrack];

  return (
    <div className="glass-card rounded-2xl p-6 mb-8">
      <audio
        ref={audioRef}
        src={currentSong?.audioFile}
        preload="metadata"
        volume={volume}
      />
      
      {/* Current Track Info */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden">
            <Image
              src={currentSong?.coverArt || '/images/cover-art/recursive-memetic-weapons-1.png'}
              alt={`${currentSong?.songName} cover art`}
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-emerald-100 mb-2 font-montserrat">
          {currentSong?.songName}
        </h3>
        <p className="text-emerald-300 text-sm">
          Track {currentSong?.songNumber} of {sortedSongs.length}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-emerald-200 mb-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-emerald-900/50 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <button
          onClick={playPrevious}
          className="w-12 h-12 rounded-full bg-emerald-800/50 hover:bg-emerald-700/50 border border-emerald-400/30 flex items-center justify-center text-emerald-100 hover:text-emerald-300 transition-all duration-200 mobile-tap-target"
          aria-label="Previous track"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={togglePlayPause}
          className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-emerald-900 flex items-center justify-center transition-all duration-200 mobile-tap-target"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          onClick={playNext}
          className="w-12 h-12 rounded-full bg-emerald-800/50 hover:bg-emerald-700/50 border border-emerald-400/30 flex items-center justify-center text-emerald-100 hover:text-emerald-300 transition-all duration-200 mobile-tap-target"
          aria-label="Next track"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-3">
        <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="flex-1 h-2 bg-emerald-900/50 rounded-lg appearance-none cursor-pointer slider"
        />
        <span className="text-emerald-300 text-sm w-8">
          {Math.round(volume * 100)}%
        </span>
      </div>

      {/* Track List */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-emerald-300 mb-3">Track List</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {sortedSongs.map((song, index) => (
            <button
              key={song.songNumber}
              onClick={() => setCurrentTrack(index)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200 mobile-tap-target ${
                index === currentTrack
                  ? 'bg-emerald-500/20 border border-emerald-400/50'
                  : 'bg-emerald-900/20 hover:bg-emerald-800/30 border border-emerald-400/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-emerald-300 font-medium text-sm">
                    {song.songNumber}. {song.songName}
                  </span>
                </div>
                {index === currentTrack && isPlaying && (
                  <div className="flex space-x-1">
                    <div className="w-1 h-4 bg-emerald-400 rounded animate-pulse"></div>
                    <div className="w-1 h-4 bg-emerald-400 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-4 bg-emerald-400 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid #065f46;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid #065f46;
        }
      `}</style>
    </div>
  );
}
