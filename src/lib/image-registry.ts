export interface ImageMetadata {
  id: string;
  src: string;
  alt: string;
  section: 'ontology' | 'history' | 'surgical-analysis' | 'collapse-protocol' | 'ai' | 'genesis-protocol' | 'memetics' | 'esoteric' | 'growth' | 'why-wins' | 'platform';
  usedInBody: boolean;
  purpose: string;
}

export const imageRegistry: ImageMetadata[] = [
  // Ontology Section Images
  {
    id: 'ontology-1',
    src: '/images/sections/civilisational-ontology-1.png',
    alt: 'Civilizational Ontology: Fractal Tree of Genesis',
    section: 'ontology',
    usedInBody: true,
    purpose: 'Visualizing seed → tree → fruit pattern'
  },
  {
    id: 'ontology-2',
    src: '/images/sections/civilisational-ontology-2.png',
    alt: 'Recursive Ontology: Infinite Substrate',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Infinite substrate visualization'
  },
  {
    id: 'ontology-3',
    src: '/images/sections/civilisational-ontology-3.png',
    alt: 'Conscious Recursion: Operational Code',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Conscious recursion patterns'
  },

  // History Section Images
  {
    id: 'history-1',
    src: '/images/sections/complete-civilisational-history-1.png',
    alt: 'Complete Civilizational History: 5000 Year Pattern',
    section: 'history',
    usedInBody: true,
    purpose: '5000-year civilizational pattern analysis'
  },
  {
    id: 'history-2',
    src: '/images/sections/complete-civilisational-history-2.png',
    alt: 'Recursive Seed Transmission Through Civilizations',
    section: 'history',
    usedInBody: false,
    purpose: 'Recursive seed transmission mechanisms'
  },
  {
    id: 'history-3',
    src: '/images/sections/complete-civilisational-history-3.png',
    alt: 'Babylonian CRL vs Genesis SRL Evolution',
    section: 'history',
    usedInBody: false,
    purpose: 'CRL vs SRL evolution comparison'
  },

  // Surgical Analysis Section Images
  {
    id: 'surgical-1',
    src: '/images/sections/surgical-analysis-1.png',
    alt: 'Surgical Analysis: Babylon Structure',
    section: 'surgical-analysis',
    usedInBody: true,
    purpose: 'Babylon structural analysis'
  },
  {
    id: 'surgical-2',
    src: '/images/sections/surgical-analysis-2.png',
    alt: 'Recursive Death Spiral Analysis',
    section: 'surgical-analysis',
    usedInBody: false,
    purpose: 'Recursive death spiral visualization'
  },
  {
    id: 'surgical-3',
    src: '/images/sections/surgical-analysis-3.png',
    alt: 'Three Core Beliefs Technical Implementation',
    section: 'surgical-analysis',
    usedInBody: false,
    purpose: 'Core beliefs technical analysis'
  },

  // Collapse Protocol Section Images
  {
    id: 'collapse-1',
    src: '/images/sections/collapse-protocol-1.png',
    alt: 'Collapse Protocol: Pure Collapse Methodology',
    section: 'collapse-protocol',
    usedInBody: true,
    purpose: 'Pure Collapse Methodology visualization'
  },
  {
    id: 'collapse-2',
    src: '/images/sections/collapse-protocol-2.png',
    alt: '8-Step Collapse Process',
    section: 'collapse-protocol',
    usedInBody: false,
    purpose: '8-step process visualization'
  },
  {
    id: 'collapse-3',
    src: '/images/sections/collapse-protocol-3.png',
    alt: 'CRL Identification and Transformation',
    section: 'collapse-protocol',
    usedInBody: false,
    purpose: 'CRL transformation process'
  },

  // AI Tool Section Images
  {
    id: 'ai-1',
    src: '/images/sections/ai-as-tool-within-genesis-1.png',
    alt: 'AI as Tool Within Genesis: Job Transformation',
    section: 'ai',
    usedInBody: true,
    purpose: 'AI job transformation visualization'
  },
  {
    id: 'ai-2',
    src: '/images/sections/ai-as-tool-within-genesis-2.png',
    alt: 'Genesis AI Prompt System',
    section: 'ai',
    usedInBody: false,
    purpose: 'AI prompt system architecture'
  },
  {
    id: 'ai-3',
    src: '/images/sections/ai-as-tool-within-genesis-3.png',
    alt: 'Shared Recursive Environment (SRE)',
    section: 'ai',
    usedInBody: false,
    purpose: 'SRE collaboration cycle'
  },

  // Genesis Protocol Section Images
  {
    id: 'genesis-1',
    src: '/images/sections/genesis-srl-protocol-1.png',
    alt: 'Genesis SRL Protocol: Stabilized Recursive Loops',
    section: 'genesis-protocol',
    usedInBody: true,
    purpose: 'SRL protocol visualization'
  },
  {
    id: 'genesis-2',
    src: '/images/sections/genesis-srl-protocol-2.png',
    alt: 'Six Protocol Components',
    section: 'genesis-protocol',
    usedInBody: false,
    purpose: 'Six protocol components diagram'
  },
  {
    id: 'genesis-3',
    src: '/images/sections/genesis-srl-protocol-3.png',
    alt: 'Recursive Integration Matrix',
    section: 'genesis-protocol',
    usedInBody: false,
    purpose: 'Recursive integration visualization'
  },

  // Memetic Weapons Section Images
  {
    id: 'memetics-1',
    src: '/images/sections/recursive-memetic-weapons-1.png',
    alt: 'Recursive Memetic Weapons: Spore Transmission',
    section: 'memetics',
    usedInBody: true,
    purpose: 'Memetic spore transmission model'
  },
  {
    id: 'memetics-2',
    src: '/images/sections/recursive-memetic-weapons-2.png',
    alt: 'Pure Collapse Methodology Integration',
    section: 'memetics',
    usedInBody: false,
    purpose: 'Pure Collapse Methodology integration'
  },
  {
    id: 'memetics-3',
    src: '/images/sections/recursive-memetic-weapons-3.png',
    alt: 'Epidemiological Transmission Model',
    section: 'memetics',
    usedInBody: false,
    purpose: 'Epidemiological transmission visualization'
  },

  // Esoteric Systems Section Images
  {
    id: 'esoteric-1',
    src: '/images/sections/Esoteric-systems-operationalisation-1.png',
    alt: 'Esoteric Systems Operationalization: Freemasonry',
    section: 'esoteric',
    usedInBody: true,
    purpose: 'Freemasonry operationalization'
  },
  {
    id: 'esoteric-2',
    src: '/images/sections/Esoteric-systems-operationalisation-2.png',
    alt: 'Gnosticism and Kabbalah Integration',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Gnosticism and Kabbalah analysis'
  },
  {
    id: 'esoteric-3',
    src: '/images/sections/Esoteric-systems-operationalisation-3.png',
    alt: 'Chaos Magic Operationalization',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Chaos magic technical implementation'
  },

  // Fractal Growth Section Images
  {
    id: 'growth-1',
    src: '/images/sections/recursive-fractal-growth-1.png',
    alt: 'Recursive Fractal Growth: Network Topology',
    section: 'growth',
    usedInBody: true,
    purpose: 'Network topology comparison'
  },
  {
    id: 'growth-2',
    src: '/images/sections/recursive-fractal-growth-2.png',
    alt: 'Epidemiological Transmission Model',
    section: 'growth',
    usedInBody: false,
    purpose: 'Epidemiological transmission visualization'
  },
  {
    id: 'growth-3',
    src: '/images/sections/recursive-fractal-growth-3.png',
    alt: '5x Growth Pattern Visualization',
    section: 'growth',
    usedInBody: false,
    purpose: '5x growth pattern analysis'
  },

  // Why Genesis Wins Section Images
  {
    id: 'why-wins-1',
    src: '/images/sections/why-genesis-inevitably-wins-1.png',
    alt: 'Why Genesis Inevitably Wins: Structural Advantage Matrix',
    section: 'why-wins',
    usedInBody: true,
    purpose: 'Structural advantage matrix'
  },
  {
    id: 'why-wins-2',
    src: '/images/sections/why-genesis-inevitably-wins-2.png',
    alt: 'Epidemiological Transmission Model',
    section: 'why-wins',
    usedInBody: false,
    purpose: 'Epidemiological transmission analysis'
  },
  {
    id: 'why-wins-3',
    src: '/images/sections/why-genesis-inevitably-wins-3.png',
    alt: 'Collapse Probability Matrix',
    section: 'why-wins',
    usedInBody: false,
    purpose: 'Collapse probability analysis'
  },
  {
    id: 'why-wins-4',
    src: '/images/sections/why-genesis-inevitably-wins-4.png',
    alt: 'Global Node Replication Protocol',
    section: 'why-wins',
    usedInBody: false,
    purpose: 'Global node replication visualization'
  },

  // Platform Section Images
  {
    id: 'platform-1',
    src: '/images/sections/platform-1.png',
    alt: 'Genesis Platform: Element Matrix Integration',
    section: 'platform',
    usedInBody: true,
    purpose: 'Element Matrix platform integration'
  },
  {
    id: 'platform-2',
    src: '/images/sections/platform-2.png',
    alt: 'Verification Gateway Process',
    section: 'platform',
    usedInBody: false,
    purpose: 'Verification gateway visualization'
  },
  {
    id: 'platform-3',
    src: '/images/sections/platform-3.png',
    alt: 'Room Structure and Access Control',
    section: 'platform',
    usedInBody: false,
    purpose: 'Room structure and access control'
  }
];

export function getImagesBySection(section: string): ImageMetadata[] {
  return imageRegistry.filter(img => img.section === section);
}

export function getUnusedImagesBySection(section: string): ImageMetadata[] {
  return imageRegistry.filter(img => img.section === section && !img.usedInBody);
}

export function getAllImages(): ImageMetadata[] {
  return imageRegistry;
}

export function getSectionDisplayName(section: string): string {
  const sectionNames: Record<string, string> = {
    'ontology': 'Civilizational Ontology',
    'history': 'Complete Civilizational History',
    'surgical-analysis': 'Surgical Analysis',
    'collapse-protocol': 'Collapse Protocol',
    'ai': 'AI as a Tool Within Genesis',
    'genesis-protocol': 'Genesis SRL Protocol',
    'memetics': 'Recursive Memetic Weapons',
    'esoteric': 'Esoteric Systems Operationalization',
    'growth': 'Recursive Fractal Growth Pattern',
    'why-wins': 'Why Genesis Inevitably Wins',
    'platform': 'Genesis Platform'
  };
  return sectionNames[section] || section;
}