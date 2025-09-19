'use client';

import React, { useState, useEffect, useRef, createContext, useContext, useCallback } from 'react';
import AdvancedMusicPlayer from './AdvancedMusicPlayer';

interface Song {
  songNumber: number;
  songName: string;
  description: string;
  linkToWebsite: string;
  lyrics: string;
  audioFile: string;
  coverArt: string;
}

interface AdvancedMusicPlayerContextType {
  // Player State
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  
  // Playlist State
  songs: Song[];
  filteredSongs: Song[];
  searchTerm: string;
  
  // Player Controls
  playSong: (song: Song) => void;
  togglePlayPause: () => void;
  playNext: () => void;
  playPrevious: () => void;
  seekTo: (time: number) => void;
  setVolume: (volume: number) => void;
  
  // Advanced Features
  isShuffled: boolean;
  toggleShuffle: () => void;
  isRepeating: boolean;
  toggleRepeat: () => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  showLyrics: boolean;
  toggleLyrics: () => void;
  currentLyricLine: string;
  skin: string;
  setSkin: (skin: string) => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
  
  // Playlist Management
  onSongReorder: (fromIndex: number, toIndex: number) => void;
  onSearchChange: (term: string) => void;
  onDownload: (song: Song) => void;
}

const AdvancedMusicPlayerContext = createContext<AdvancedMusicPlayerContextType | null>(null);

export const useAdvancedMusicPlayer = () => {
  const context = useContext(AdvancedMusicPlayerContext);
  if (!context) {
    throw new Error('useAdvancedMusicPlayer must be used within an AdvancedMusicPlayerProvider');
  }
  return context;
};

interface AdvancedMusicPlayerProviderProps {
  songs: Song[];
  children: React.ReactNode;
}

export function AdvancedMusicPlayerProvider({ songs, children }: AdvancedMusicPlayerProviderProps) {
  // Core Player State
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  
  // Playlist State
  const [playlistSongs, setPlaylistSongs] = useState<Song[]>(songs);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSongs, setFilteredSongs] = useState<Song[]>(songs);
  
  // Advanced Features State
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [currentLyricLine, setCurrentLyricLine] = useState('');
  const [skin, setSkin] = useState('genesis');
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  // Toggle collapse function
  const toggleCollapse = useCallback(() => setIsCollapsed(prev => !prev), []);

  // Sort songs by song number
  const sortedSongs = [...playlistSongs].sort((a, b) => a.songNumber - b.songNumber);

  // Filter songs based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = sortedSongs.filter(song =>
        song.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.lyrics.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSongs(filtered);
    } else {
      setFilteredSongs(sortedSongs);
    }
  }, [searchTerm, sortedSongs]);

  // Auto-play first song on load
  useEffect(() => {
    if (songs.length > 0 && !currentSong) {
      setCurrentSong(songs[0]);
      setIsPlaying(true);
    }
  }, [songs, currentSong]);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    // Auto-play the song when selected
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(console.error);
      }
    }, 100);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.log('Audio playback failed:', error.message);
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
    let nextIndex;
    
    if (isShuffled) {
      // Random next song
      nextIndex = Math.floor(Math.random() * sortedSongs.length);
    } else {
      nextIndex = (currentIndex + 1) % sortedSongs.length;
    }
    
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

  // Advanced feature toggles
  const toggleShuffle = () => setIsShuffled(!isShuffled);
  const toggleRepeat = () => setIsRepeating(!isRepeating);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);
  const toggleLyrics = () => setShowLyrics(!showLyrics);

  // Playlist management
  const onSongReorder = (fromIndex: number, toIndex: number) => {
    const newSongs = [...sortedSongs];
    const [movedSong] = newSongs.splice(fromIndex, 1);
    newSongs.splice(toIndex, 0, movedSong);
    setPlaylistSongs(newSongs);
  };

  const onSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const onDownload = (song: Song) => {
    // Create download link
    const link = document.createElement('a');
    link.href = song.audioFile;
    link.download = `${song.songName}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (!isNaN(audio.currentTime)) {
        setCurrentTime(audio.currentTime);
      }
    };
    
    const updateDuration = () => {
      console.log('Audio metadata loaded, duration:', audio.duration);
      if (!isNaN(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };
    
    const handleLoadedData = () => {
      console.log('Audio data loaded, duration:', audio.duration);
      if (!isNaN(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };
    
    const handleCanPlay = () => {
      console.log('Audio can play, duration:', audio.duration);
      if (!isNaN(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };
    
    const handleEnded = () => {
      if (isRepeating) {
        // Repeat current song
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(console.error);
        }
      } else {
        // Play next song
        playNext();
      }
    };
    
    const handleError = (e: Event) => {
      console.log('Audio error:', e);
      setIsPlaying(false);
    };

    // Add multiple event listeners to catch duration
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [currentSong, isRepeating, playNext]);

  // Update audio source when song changes
  useEffect(() => {
    if (audioRef.current && currentSong) {
      console.log('Loading new song:', currentSong.songName, 'from:', currentSong.audioFile);
      
      // Reset duration and time when changing songs
      setDuration(0);
      setCurrentTime(0);
      
      // Set new source
      audioRef.current.src = currentSong.audioFile;
      
      // Force load the audio metadata
      audioRef.current.load();
      
      // Try to load metadata immediately
      if (audioRef.current.readyState >= 1) {
        console.log('Audio already has metadata, duration:', audioRef.current.duration);
        if (!isNaN(audioRef.current.duration) && audioRef.current.duration > 0) {
          setDuration(audioRef.current.duration);
        }
      }
      
      // Fallback: try to get duration after a short delay
      setTimeout(() => {
        if (audioRef.current && !isNaN(audioRef.current.duration) && audioRef.current.duration > 0) {
          console.log('Fallback duration detection:', audioRef.current.duration);
          setDuration(audioRef.current.duration);
        }
      }, 500);
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

  // Handle background music when app is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying && audioRef.current) {
        // Keep music playing in background
        console.log('App hidden, continuing background music');
        audioRef.current.play().catch(console.error);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  // Lyrics synchronization (simplified - shows current lyrics)
  useEffect(() => {
    if (currentSong && showLyrics) {
      setCurrentLyricLine(currentSong.lyrics);
    }
  }, [currentSong, showLyrics]);

  const contextValue: AdvancedMusicPlayerContextType = {
    // Player State
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    
    // Playlist State
    songs: sortedSongs,
    filteredSongs,
    searchTerm,
    
    // Player Controls
    playSong,
    togglePlayPause,
    playNext,
    playPrevious,
    seekTo,
    setVolume: handleVolumeChange,
    
    // Advanced Features
    isShuffled,
    toggleShuffle,
    isRepeating,
    toggleRepeat,
    isFullscreen,
    toggleFullscreen,
    showLyrics,
    toggleLyrics,
    currentLyricLine,
    skin,
    setSkin,
    isCollapsed,
    toggleCollapse,
    
    // Playlist Management
    onSongReorder,
    onSearchChange,
    onDownload,
  };

  return (
    <AdvancedMusicPlayerContext.Provider value={contextValue}>
      {children}
      
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        preload="metadata"
        crossOrigin="anonymous"
        playsInline
        webkit-playsinline="true"
      />
      
      {/* Advanced Music Player */}
      <AdvancedMusicPlayer
        songs={sortedSongs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
        onNext={playNext}
        onPrevious={playPrevious}
        onSeek={seekTo}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        onVolumeChange={handleVolumeChange}
        onSongSelect={playSong}
        isShuffled={isShuffled}
        onShuffleToggle={toggleShuffle}
        isRepeating={isRepeating}
        onRepeatToggle={toggleRepeat}
        isFullscreen={isFullscreen}
        onFullscreenToggle={toggleFullscreen}
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        filteredSongs={filteredSongs}
        onSongReorder={onSongReorder}
        onDownload={onDownload}
        showLyrics={showLyrics}
        onToggleLyrics={toggleLyrics}
        currentLyricLine={currentLyricLine}
        skin={skin}
        onSkinChange={setSkin}
        isCollapsed={isCollapsed}
        onToggleCollapse={toggleCollapse}
      />
    </AdvancedMusicPlayerContext.Provider>
  );
}
