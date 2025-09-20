'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MusicTrack } from '@/lib/music-data';

interface MusicPlayerProps {
  tracks: MusicTrack[];
  initialTrackIndex?: number;
  autoplay?: boolean;
}

export default function MusicPlayer({ 
  tracks, 
  initialTrackIndex = 0, 
  autoplay = true 
}: MusicPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(initialTrackIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showQueue, setShowQueue] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  // Initialize audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      
      const handleLoadedMetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
          setIsLoading(false);
        }
      };

      const handleTimeUpdate = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      };

      const handleEnded = () => {
        nextTrack();
      };

      const handleError = () => {
        setIsLoading(false);
        console.error('Audio loading error');
      };

      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('ended', handleEnded);
      audioRef.current.addEventListener('error', handleError);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.removeEventListener('ended', handleEnded);
          audioRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, [currentTrackIndex, volume]);

  // Autoplay on mount
  useEffect(() => {
    if (autoplay && audioRef.current) {
      setIsLoading(true);
      audioRef.current.load();
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  }, [autoplay]);

  const playPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsLoading(true);
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      }
    }
  };

  const previousTrack = () => {
    const prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
    setIsLoading(true);
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && audioRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;
      
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (volumeRef.current && audioRef.current) {
      const rect = volumeRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newVolume = Math.max(0, Math.min(1, clickX / width));
      
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  const volumePercentage = volume * 100;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-5">
            {/* Now Playing */}
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={currentTrack.coverArt}
                  alt={currentTrack.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
                {isLoading && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-white truncate text-sm">
                  {currentTrack.title}
                </h4>
                <p className="text-white/70 text-xs truncate">
                  {currentTrack.artist}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
              <div className="flex items-center gap-4">
                <button
                  onClick={previousTrack}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-200"
                  aria-label="Previous track"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                  </svg>
                </button>
                
                <button
                  onClick={playPause}
                  className="w-12 h-12 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
                
                <button
                  onClick={nextTrack}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-200"
                  aria-label="Next track"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                  </svg>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full">
                <div className="flex justify-between text-xs text-white/70 mb-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <div
                  ref={progressRef}
                  className="w-full h-1 bg-white/10 rounded-full cursor-pointer relative group"
                  onClick={handleProgressClick}
                >
                  <div
                    className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-100"
                    style={{ width: `${progressPercentage}%` }}
                  />
                  <div
                    className="absolute top-1/2 w-3 h-3 bg-primary rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ left: `${progressPercentage}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                  />
                </div>
              </div>
            </div>

            {/* Volume & Queue */}
            <div className="flex items-center gap-4 min-w-0 flex-1 justify-end">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
                <div
                  ref={volumeRef}
                  className="w-20 h-1 bg-white/10 rounded-full cursor-pointer relative"
                  onClick={handleVolumeClick}
                >
                  <div
                    className="absolute left-0 top-0 h-full bg-primary rounded-full"
                    style={{ width: `${volumePercentage}%` }}
                  />
                </div>
              </div>
              
              <button
                onClick={() => setShowQueue(!showQueue)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-200"
                aria-label="Toggle queue"
              >
                <svg className="w-5 h-5 text-white/70 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Queue Panel */}
      {showQueue && (
        <div className="fixed bottom-20 right-4 w-80 max-h-96 bg-black/90 backdrop-blur-md rounded-2xl border border-primary/20 shadow-2xl z-40 overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <h3 className="text-white font-semibold">Queue</h3>
          </div>
          <div className="overflow-y-auto max-h-80">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                onClick={() => {
                  setCurrentTrackIndex(index);
                  setIsLoading(true);
                  if (audioRef.current) {
                    audioRef.current.load();
                    if (isPlaying) {
                      audioRef.current.play().catch(console.error);
                    }
                  }
                }}
                className={`p-3 cursor-pointer transition-all duration-200 flex items-center gap-3 ${
                  index === currentTrackIndex
                    ? 'bg-primary/20 text-primary'
                    : 'hover:bg-white/5 text-white/80'
                }`}
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <Image
                    src={track.coverArt}
                    alt={track.title}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate text-sm">{track.title}</p>
                  <p className="text-xs text-white/60 truncate">{track.artist}</p>
                </div>
                <span className="text-xs text-white/60">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Audio Element */}
      <audio
        ref={audioRef}
        preload="metadata"
        src={currentTrack.audioUrl}
      />
    </>
  );
}