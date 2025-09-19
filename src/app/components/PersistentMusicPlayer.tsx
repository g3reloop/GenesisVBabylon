'use client';

import React, { useState, useEffect, useRef, createContext, useContext } from 'react';

interface Song {
  songNumber: number;
  songName: string;
  description: string;
  linkToWebsite: string;
  lyrics: string;
  audioFile: string;
}

interface MusicPlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playSong: (song: Song) => void;
  togglePlayPause: () => void;
  playNext: () => void;
  playPrevious: () => void;
  setVolume: (volume: number) => void;
  seekTo: (time: number) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | null>(null);

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};

interface PersistentMusicPlayerProps {
  songs: Song[];
  children: React.ReactNode;
}

export function MusicPlayerProvider({ songs, children }: PersistentMusicPlayerProps) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMinimized, setIsMinimized] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sort songs by song number
  const sortedSongs = [...songs].sort((a, b) => a.songNumber - b.songNumber);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(false); // Don't auto-play, let user control
    setIsMinimized(false);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.log('Audio playback failed:', error.message);
          // Show user-friendly message
          alert('Audio file not available. This is a demo version with placeholder audio files.');
          setIsPlaying(false);
        });
        if (audioRef.current.readyState >= 2) {
          setIsPlaying(true);
        }
      }
    }
  };

  const playNext = () => {
    if (!currentSong) return;
    const currentIndex = sortedSongs.findIndex(song => song.songNumber === currentSong.songNumber);
    const nextIndex = (currentIndex + 1) % sortedSongs.length;
    playSong(sortedSongs[nextIndex]);
  };

  const playPrevious = () => {
    if (!currentSong) return;
    const currentIndex = sortedSongs.findIndex(song => song.songNumber === currentSong.songNumber);
    const prevIndex = currentIndex === 0 ? sortedSongs.length - 1 : currentIndex - 1;
    playSong(sortedSongs[prevIndex]);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      playNext();
    };
    const handleError = () => {
      console.log('Audio error, stopping playback');
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [currentSong]);

  // Update audio source when song changes
  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.audioFile;
      audioRef.current.load();
    }
  }, [currentSong]);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const contextValue: MusicPlayerContextType = {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    playSong,
    togglePlayPause,
    playNext,
    playPrevious,
    setVolume: handleVolumeChange,
    seekTo,
  };

  return (
    <MusicPlayerContext.Provider value={contextValue}>
      {children}
      
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        preload="metadata"
        volume={volume}
      />
      
      {/* Persistent Music Player UI */}
      {currentSong && (
        <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMinimized ? 'transform translate-y-full' : 'transform translate-y-0'
        }`}>
          <div className="bg-emerald-900/95 backdrop-blur-sm border-t border-emerald-700/50 p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Song Info */}
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-300 font-bold text-sm">
                    {currentSong.songNumber}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-emerald-100 font-semibold text-sm truncate">
                    {currentSong.songName}
                  </h3>
                  <p className="text-emerald-300/70 text-xs truncate">
                    Track {currentSong.songNumber} - RMW Discography
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={playPrevious}
                  className="w-8 h-8 rounded-full bg-emerald-800/50 hover:bg-emerald-700/50 border border-emerald-400/30 flex items-center justify-center text-emerald-100 hover:text-emerald-300 transition-all duration-200"
                  aria-label="Previous track"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={togglePlayPause}
                  className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-400 text-emerald-900 flex items-center justify-center transition-all duration-200"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
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
                  onClick={playNext}
                  className="w-8 h-8 rounded-full bg-emerald-800/50 hover:bg-emerald-700/50 border border-emerald-400/30 flex items-center justify-center text-emerald-100 hover:text-emerald-300 transition-all duration-200"
                  aria-label="Next track"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Progress Bar */}
                <div className="flex items-center space-x-2 min-w-0 flex-1 max-w-xs">
                  <span className="text-emerald-300 text-xs w-8">
                    {formatTime(currentTime)}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={(e) => seekTo(parseFloat(e.target.value))}
                    className="flex-1 h-1 bg-emerald-900/50 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <span className="text-emerald-300 text-xs w-8">
                    {formatTime(duration)}
                  </span>
                </div>

                {/* Volume Control */}
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-16 h-1 bg-emerald-900/50 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Minimize Button */}
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-8 h-8 rounded-full bg-emerald-800/50 hover:bg-emerald-700/50 border border-emerald-400/30 flex items-center justify-center text-emerald-100 hover:text-emerald-300 transition-all duration-200"
                  aria-label={isMinimized ? 'Show player' : 'Minimize player'}
                >
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isMinimized ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MusicPlayerContext.Provider>
  );
}
