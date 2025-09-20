export interface VideoConfig {
  sectionId: string;
  videoSrc: string;
  fallbackImage: string;
  description: string;
  priority: boolean;
}

export const backgroundVideos: Record<string, VideoConfig> = {
  'ontology': {
    sectionId: 'ontology',
    videoSrc: '/videos/civilisational ontology.mp4',
    fallbackImage: '/images/backgrounds/ontology-bg.jpg',
    description: 'Abstract geometric patterns representing the fundamental structure of reality',
    priority: true
  },
  'history': {
    sectionId: 'history',
    videoSrc: '/videos/civilisational history.mp4',
    fallbackImage: '/images/backgrounds/history-bg.jpg',
    description: 'Timeline visualization showing the evolution of civilizations',
    priority: true
  },
  'genesis-protocol': {
    sectionId: 'genesis-protocol',
    videoSrc: '/videos/GenesisSRLProtocol.mp4',
    fallbackImage: '/images/backgrounds/genesis-protocol-bg.jpg',
    description: 'Digital code streams and recursive patterns representing Genesis systems',
    priority: true
  },
  'surgical-analysis': {
    sectionId: 'surgical-analysis',
    videoSrc: '/videos/surgical analysis.mp4',
    fallbackImage: '/images/backgrounds/surgical-analysis-bg.jpg',
    description: 'Precision surgical tools and analytical processes',
    priority: false
  },
  'esoteric-systems': {
    sectionId: 'esoteric-systems',
    videoSrc: '/videos/esoteric systems.mp4',
    fallbackImage: '/images/backgrounds/esoteric-systems-bg.jpg',
    description: 'Mystical symbols and ancient wisdom patterns',
    priority: false
  },
  'ai-as-tool-within-genesis': {
    sectionId: 'ai-as-tool-within-genesis',
    videoSrc: '/videos/AIinGenesis.mp4',
    fallbackImage: '/images/backgrounds/ai-tool-bg.jpg',
    description: 'AI neural networks and digital consciousness patterns',
    priority: false
  },
  'collapse-protocol': {
    sectionId: 'collapse-protocol',
    videoSrc: '/videos/Collapseprotocol.mp4',
    fallbackImage: '/images/backgrounds/collapse-protocol-bg.jpg',
    description: 'System collapse and reconstruction patterns',
    priority: false
  },
  'fractal-growth': {
    sectionId: 'fractal-growth',
    videoSrc: '/videos/fractalgrowth.mp4',
    fallbackImage: '/images/backgrounds/fractal-growth-bg.jpg',
    description: 'Fractal patterns and recursive growth structures',
    priority: false
  },
  'memetic-weapons': {
    sectionId: 'memetic-weapons',
    videoSrc: '/videos/memetic.mp4',
    fallbackImage: '/images/backgrounds/memetic-weapons-bg.jpg',
    description: 'Information warfare and memetic propagation patterns',
    priority: false
  },
  'recursive-memetic-weapons': {
    sectionId: 'recursive-memetic-weapons',
    videoSrc: '/videos/RMWDiscography.mp4',
    fallbackImage: '/images/backgrounds/recursive-memetic-weapons-bg.jpg',
    description: 'Advanced recursive memetic weapon systems',
    priority: false
  },
  'why-genesis-wins': {
    sectionId: 'why-genesis-wins',
    videoSrc: '/videos/whygenesiswins.mp4',
    fallbackImage: '/images/backgrounds/why-genesis-wins-bg.jpg',
    description: 'Victory and triumph visualization',
    priority: true
  },
  'home': {
    sectionId: 'home',
    videoSrc: '/videos/homepage.mp4',
    fallbackImage: '/images/backgrounds/genesis-default-bg.jpg',
    description: 'Genesis homepage background',
    priority: true
  },
  'gallery': {
    sectionId: 'gallery',
    videoSrc: '/videos/gallery.mp4',
    fallbackImage: '/images/backgrounds/genesis-default-bg.jpg',
    description: 'Gallery background',
    priority: false
  },
  'platform': {
    sectionId: 'platform',
    videoSrc: '/videos/operatorplatform.mp4',
    fallbackImage: '/images/backgrounds/genesis-default-bg.jpg',
    description: 'Operator platform background',
    priority: false
  }
};

export const getVideoConfig = (sectionId: string): VideoConfig | null => {
  return backgroundVideos[sectionId] || null;
};

export const getAllVideoConfigs = (): VideoConfig[] => {
  return Object.values(backgroundVideos);
};
