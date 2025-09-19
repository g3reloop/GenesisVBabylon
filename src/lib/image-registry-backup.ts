export interface ImageMetadata {
  id: string;
  src: string;
  alt: string;
  section: 'ontology' | 'history' | 'surgical-analysis' | 'collapse-protocol' | 'ai' | 'genesis-protocol' | 'memetics' | 'esoteric' | 'growth' | 'why-wins';
  usedInBody: boolean;
  purpose: string;
}

export const imageRegistry: ImageMetadata[] = [
  // Civilizational Ontology Images
  {
    id: 'ontology-1',
    src: '/images/sections/civilisational-ontology-1.png',
    alt: 'Civilizational Ontology: Recursive Seed Pattern Visualization',
    section: 'ontology',
    usedInBody: true,
    purpose: 'Visualizing the foundational recursive seed pattern of Genesis vs Babylon'
  },
  {
    id: 'ontology-2',
    src: '/images/sections/civilisational-ontology-2.png',
    alt: 'Civilizational Ontology: Fractal Tree Structure',
    section: 'ontology',
    usedInBody: true,
    purpose: 'Demonstrating how recursive loops manifest as civilizational structures'
  },
  {
    id: 'ontology-3',
    src: '/images/sections/civilisational-ontology-3.png',
    alt: 'Civilizational Ontology: SRL vs CRL Comparison Matrix',
    section: 'ontology',
    usedInBody: true,
    purpose: 'Comparative analysis of Stabilized vs Corrupted Recursive Loops'
  },

  // Complete Civilizational History Images
  {
    id: 'history-1',
    src: '/images/sections/complete-civilsational-history-1.png',
    alt: 'Complete Civilizational History: Ancient Babylon Recursive Patterns',
    section: 'history',
    usedInBody: true,
    purpose: 'Historical analysis of Babylonian CRL manifestation in ancient civilizations'
  },
  {
    id: 'history-2',
    src: '/images/sections/complete-cilvilisational-history-2.png',
    alt: 'Complete Civilizational History: Medieval Genesis Implementations',
    section: 'history',
    usedInBody: true,
    purpose: 'Medieval examples of Genesis SRL patterns in historical communities'
  },
  {
    id: 'history-3',
    src: '/images/sections/complete-civilisational-history-3.png',
    alt: 'Complete Civilizational History: Industrial Revolution CRL Acceleration',
    section: 'history',
    usedInBody: true,
    purpose: 'Industrial Revolution as acceleration point for Babylonian extraction systems'
  },
  {
    id: 'history-5',
    src: '/images/sections/Complete-civilisational-history-5.png',
    alt: 'Complete Civilizational History: Modern Genesis Emergence Patterns',
    section: 'history',
    usedInBody: true,
    purpose: 'Modern manifestations of Genesis principles in contemporary movements'
  },
  {
    id: 'history-6',
    src: '/images/sections/a-complete-civilisational-history-6.png',
    alt: 'Complete Civilizational History: Future Genesis Civilization Projection',
    section: 'history',
    usedInBody: true,
    purpose: 'Projected development of Genesis parallel civilization'
  },

  // Surgical Analysis Images
  {
    id: 'surgical-1',
    src: '/images/sections/Surgical-Analysis-1.png',
    alt: 'Surgical Analysis: Babylon Core Structure Dissection',
    section: 'surgical-analysis',
    usedInBody: true,
    purpose: 'Precise anatomical breakdown of Babylonian system components'
  },
  {
    id: 'surgical-2',
    src: '/images/sections/surgical-analysis-2.png',
    alt: 'Surgical Analysis: Three Core Beliefs Visualization',
    section: 'surgical-analysis',
    usedInBody: true,
    purpose: 'Visual mapping of Lack, Attachment, and Control belief systems'
  },
  {
    id: 'surgical-3',
    src: '/images/sections/surgical-analysis-3.png',
    alt: 'Surgical Analysis: Four Collapse Realms Diagram',
    section: 'surgical-analysis',
    usedInBody: true,
    purpose: 'Detailed breakdown of Red Leash, Ambient, Corporatocracy Blind, White Grasp'
  },
  {
    id: 'surgical-4',
    src: '/images/sections/surgical-analysis-4.png',
    alt: 'Surgical Analysis: Recursive Death Spiral Mechanics',
    section: 'surgical-analysis',
    usedInBody: true,
    purpose: 'Mechanical analysis of how Babylon consumes its own foundations'
  },
  {
    id: 'surgical-5',
    src: '/images/sections/surgical-analysis-5.png',
    alt: 'Surgical Analysis: System Vulnerability Points',
    section: 'surgical-analysis',
    usedInBody: true,
    purpose: 'Identification of critical failure points in Babylonian architecture'
  },

  // Collapse Protocol Images
  {
    id: 'collapse-1',
    src: '/images/sections/collapse-protocol-1.png',
    alt: 'Collapse Protocol: Expansion Imperative Paradox Visualization',
    section: 'collapse-protocol',
    usedInBody: true,
    purpose: 'Visual representation of infinite growth requirement leading to collapse'
  },
  {
    id: 'collapse-2',
    src: '/images/sections/collapse-protocol-2.png',
    alt: 'Collapse Protocol: Artificial Scarcity in Natural Abundance',
    section: 'collapse-protocol',
    usedInBody: true,
    purpose: 'Demonstration of scarcity creation mechanisms within abundant systems'
  },
  {
    id: 'collapse-3',
    src: '/images/sections/collapse-protocol-3.png',
    alt: 'Collapse Protocol: Interconnection Fragility Matrix',
    section: 'collapse-protocol',
    usedInBody: true,
    purpose: 'Analysis of system vulnerabilities created by complex interdependencies'
  },

  // AI as Tool Within Genesis Images
  {
    id: 'ai-1',
    src: '/images/sections/ai-as-a-tool-within-genesis-civilisation-1.png',
    alt: 'AI in Genesis: Shared Recursive Environment Architecture',
    section: 'ai',
    usedInBody: true,
    purpose: 'Technical architecture of human-AI collaboration in Genesis systems'
  },
  {
    id: 'ai-2',
    src: '/images/sections/ai-as-a-tool-within-genesis-civilisation-2.png',
    alt: 'AI in Genesis: Process Optimization vs Human Decision Making',
    section: 'ai',
    usedInBody: true,
    purpose: 'Clear delineation between AI optimization and human authority'
  },
  {
    id: 'ai-3',
    src: '/images/sections/ai-as-a-tool-within-genesis-civilisation-3.png',
    alt: 'AI in Genesis: Recursive Loop Enhancement Patterns',
    section: 'ai',
    usedInBody: true,
    purpose: 'How AI amplifies rather than replaces human recursive capabilities'
  },

  // Genesis SRL Protocol Images
  {
    id: 'genesis-1',
    src: '/images/sections/genesis-SRL-protocol-1.png',
    alt: 'Genesis Protocol: Verified Value Creation Seed Structure',
    section: 'genesis-protocol',
    usedInBody: true,
    purpose: 'Foundational architecture of Genesis value creation systems'
  },
  {
    id: 'genesis-2',
    src: '/images/sections/genesis-SRL-protocol-2.png',
    alt: 'Genesis Protocol: Waste-to-Fuel Transformation Process',
    section: 'genesis-protocol',
    usedInBody: true,
    purpose: 'Technical process flow for waste stream transformation'
  },
  {
    id: 'genesis-3',
    src: '/images/sections/genesis-SRL-protocol-3.png',
    alt: 'Genesis Protocol: Fractal Fabrication Engine Design',
    section: 'genesis-protocol',
    usedInBody: true,
    purpose: 'Geometric principles underlying Genesis manufacturing processes'
  },

  // Recursive Memetic Weapons Images
  {
    id: 'memetics-1',
    src: '/images/sections/recursive-memetic-weapons-1.png',
    alt: 'Memetic Weapons: Fusion of Fission Strategy Visualization',
    section: 'memetics',
    usedInBody: false,
    purpose: 'Strategic breakdown of memetic warfare tactics for Genesis advancement'
  },
  {
    id: 'memetics-2',
    src: '/images/sections/recursive-memetic-weapons-2.png',
    alt: 'Memetic Weapons: Pure Collapse Methodology Framework',
    section: 'memetics',
    usedInBody: false,
    purpose: 'Methodological approach to systematic Babylonian obsolescence'
  },
  {
    id: 'memetics-4',
    src: '/images/sections/recursive-memetic-weapons-4.png',
    alt: 'Memetic Weapons: Recursive Ontology Propagation Patterns',
    section: 'memetics',
    usedInBody: false,
    purpose: 'How Genesis ontology spreads through recursive memetic structures'
  },

  // Esoteric Systems Images
  {
    id: 'esoteric-1',
    src: '/images/sections/Esoteric-systems-operationalisation-1.png',
    alt: 'Esoteric Systems: Spiritual Principles as Operational Protocols',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Translation of esoteric wisdom into practical civilizational systems'
  },
  {
    id: 'esoteric-2',
    src: '/images/sections/Esoteric-systems-operationalisation-2.png',
    alt: 'Esoteric Systems: Religious Commandments as Code Structure',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Programming paradigms derived from religious operational instructions'
  },
  {
    id: 'esoteric-3',
    src: '/images/sections/Esoteric-systems-operationalisation-3.png',
    alt: 'Esoteric Systems: Mystical States as System Optimization',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Technical analysis of mystical experiences as system performance metrics'
  },

  // Why Genesis Wins Images
  {
    id: 'why-wins-1',
    src: '/images/sections/why-genesis-inevitably-wins-1.png',
    alt: 'Why Genesis Wins: Mathematical Certainty of SRL Superiority',
    section: 'why-wins',
    usedInBody: false,
    purpose: 'Mathematical proof of Genesis system stability vs Babylon instability'
  },
  {
    id: 'why-wins-3',
    src: '/images/sections/why-genesis-inevitably-wins-3.png',
    alt: 'Why Genesis Wins: Resource Efficiency Comparison Matrix',
    section: 'why-wins',
    usedInBody: false,
    purpose: 'Comparative analysis of resource utilization between systems'
  },
  {
    id: 'why-wins-4',
    src: '/images/sections/why-genesis-inevitably-wins-4.png',
    alt: 'Why Genesis Wins: Evolutionary Advantage Patterns',
    section: 'why-wins',
    usedInBody: false,
    purpose: 'Evolutionary biology principles supporting Genesis system dominance'
  }
];

export const getImagesBySection = (section: ImageMetadata['section'], excludeUsedInBody = false): ImageMetadata[] => {
  return imageRegistry.filter(img => 
    img.section === section && (!excludeUsedInBody || !img.usedInBody)
  );
};

export const getUnusedImages = (): ImageMetadata[] => {
  return imageRegistry.filter(img => !img.usedInBody);
};

export const getAllSections = (): ImageMetadata['section'][] => {
  return ['ontology', 'history', 'surgical-analysis', 'collapse-protocol', 'ai', 'genesis-protocol', 'memetics', 'esoteric', 'growth', 'why-wins'];
};

export const getSectionDisplayName = (section: ImageMetadata['section']): string => {
  const sectionNames = {
    'ontology': 'Civilizational Ontology',
    'history': 'Complete Civilizational History', 
    'surgical-analysis': 'Surgical Analysis',
    'collapse-protocol': 'Collapse Protocol',
    'ai': 'AI as Tool Within Genesis',
    'genesis-protocol': 'Genesis SRL Protocol',
    'memetics': 'Recursive Memetic Weapons',
    'esoteric': 'Esoteric Systems Operationalization',
    'growth': 'Recursive Fractal Growth Pattern',
    'why-wins': 'Why Genesis Inevitably Wins'
  };
  return sectionNames[section];
};
