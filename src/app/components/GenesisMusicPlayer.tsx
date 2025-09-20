'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Track {
  id: number;
  name: string;
  src: string;
  duration: string;
}

const GenesisMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // RMW Discography tracks
  const tracks: Track[] = [
    { id: 1, name: "G3 Bedouin Blind Plays RSCC For Kronos' Eulogy", src: "/audio/G3 Bedouin Blind Plays RSCC For Kronos' Eulogy - ESM.mp3", duration: "4:39" },
    { id: 2, name: "G3 Saturn Step", src: "/audio/G3 Saturn Step - EM - SoundLoadMate.com.mp3", duration: "3:45" },
    { id: 3, name: "Protocol HXH", src: "/audio/Protocol_ HXH - EM - SoundLoadMate.com.mp3", duration: "2:30" },
    { id: 4, name: "LoopTheLoop", src: "/audio/Protocol_ LoopTheLoop - EM - SoundLoadMate.com.mp3", duration: "3:15" },
    { id: 5, name: "Loopmind", src: "/audio/Protocol_ LoopMind_小恐怖 - EM - SoundLoadMate.com.mp3", duration: "2:45" },
    { id: 6, name: "PCG3", src: "/audio/PCG3 - EM - SoundLoadMate.com.mp3", duration: "3:20" },
    { id: 7, name: "G3PP", src: "/audio/G3PP - EM - SoundLoadMate.com.mp3", duration: "4:10" },
    { id: 8, name: "Unclenching The White Grasp", src: "/audio/Unclenching The White Grasp - EM - SoundLoadMate.com.mp3", duration: "5:25" },
    { id: 9, name: "Memetic Archive", src: "/audio/Memetic Archive_ Aimless Routes Meet G3 Bout - EM - SoundLoadMate.com.mp3", duration: "3:50" },
    { id: 10, name: "Reloop Red Leash", src: "/audio/Reloop Red Leash - EM - SoundLoadMate.com.mp3", duration: "4:30" },
    { id: 11, name: "The Beacon", src: "/audio/The Beacon - EM - SoundLoadMate.com.mp3", duration: "3:55" },
    { id: 12, name: "Genesis Finale", src: "/audio/G3 Bedouin Blind Plays RSCC For Kronos' Eulogy - ESM.mp3", duration: "4:39" }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      const nextTrack = (currentTrack + 1) % tracks.length;
      setCurrentTrack(nextTrack);
      if (isPlaying) {
        audio.play();
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, isPlaying, tracks.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = tracks[currentTrack].src;
    if (isPlaying) {
      audio.play();
    }
  }, [currentTrack, tracks]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentTrack((currentTrack + 1) % tracks.length);
  };

  const playPrevious = () => {
    setCurrentTrack(currentTrack === 0 ? tracks.length - 1 : currentTrack - 1);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * audio.duration;
    audio.currentTime = newTime;
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
      isMinimized ? 'w-16 h-16' : 'w-80'
    }`}>
      <div className="bg-black/90 backdrop-blur-xl border border-electric-violet/30 rounded-2xl p-4 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-plasma-green font-bold text-sm">RMW Discography</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-cloud-white hover:text-plasma-green transition-colors p-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-cloud-white hover:text-plasma-green transition-colors p-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Track Info */}
            <div className="mb-3">
              <p className="text-cloud-white font-medium text-sm truncate">
                {tracks[currentTrack].name}
              </p>
              <p className="text-electric-violet text-xs">
                Track {currentTrack + 1} of {tracks.length}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div
                className="w-full h-1 bg-electric-violet/20 rounded-full cursor-pointer"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-plasma-green rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={playPrevious}
                className="text-cloud-white hover:text-plasma-green transition-colors p-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                </svg>
              </button>

              <button
                onClick={togglePlayPause}
                className="w-12 h-12 bg-plasma-green text-black rounded-full flex items-center justify-center hover:bg-plasma-green/80 transition-colors"
              >
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>

              <button
                onClick={playNext}
                className="text-cloud-white hover:text-plasma-green transition-colors p-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                </svg>
              </button>
            </div>
          </>
        )}

        {/* Hidden Audio Element */}
        <audio ref={audioRef} preload="metadata" />
      </div>
    </div>
  );
};

export default GenesisMusicPlayer;
