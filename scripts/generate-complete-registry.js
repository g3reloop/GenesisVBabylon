const fs = require('fs');
const path = require('path');

// Function to categorize images based on their filename
function categorizeImage(filename) {
  const name = filename.toLowerCase();
  
  // Ontology-related keywords
  if (name.includes('ontology') || name.includes('civilisational') || name.includes('seed') || 
      name.includes('recursive_loop') || name.includes('private_property') || name.includes('african_tribal') || 
      name.includes('althing') || name.includes('icelandic') || name.includes('governance') ||
      name.includes('tribal_spirituality') || name.includes('council')) {
    return 'ontology';
  }
  
  // History-related keywords  
  if (name.includes('history') || name.includes('civilizational') || name.includes('babylon') || 
      name.includes('roman') || name.includes('ancient') || name.includes('complete-civil') ||
      name.includes('collapse_probability') || name.includes('historical')) {
    return 'history';
  }
  
  // Surgical Analysis keywords
  if (name.includes('surgical') || name.includes('analysis') || name.includes('collapse_realms') || 
      name.includes('death_spiral') || name.includes('core_beliefs') || name.includes('dissection')) {
    return 'surgical-analysis';
  }
  
  // Collapse Protocol keywords
  if (name.includes('collapse') && !name.includes('pure_collapse') || name.includes('protocol') || 
      name.includes('expansion_imperative') || name.includes('scarcity') || name.includes('fragility') ||
      name.includes('abundance_advantage') || name.includes('resource_efficiency') || 
      name.includes('system_vulnerability')) {
    return 'collapse-protocol';
  }
  
  // AI-related keywords
  if (name.includes('ai') && name.includes('tool') || name.includes('genesis_civilisation') || 
      name.includes('shared_recursive') || name.includes('sre') || name.includes('human_ai')) {
    return 'ai';
  }
  
  // Genesis Protocol keywords
  if (name.includes('genesis') && (name.includes('srl') || name.includes('protocol') || 
      name.includes('land_trust') || name.includes('dgo') || name.includes('decentralized_governance') ||
      name.includes('verified_value') || name.includes('waste_to_fuel'))) {
    return 'genesis-protocol';
  }
  
  // Memetic Weapons keywords
  if (name.includes('memetic') || name.includes('weapons') || name.includes('fusion_of_fission') || 
      name.includes('pure_collapse') || name.includes('recursive_memetic') || 
      name.includes('memetic_warfare')) {
    return 'memetics';
  }
  
  // Esoteric Systems keywords  
  if (name.includes('esoteric') || name.includes('operationalisation') || name.includes('christianity') || 
      name.includes('islam') || name.includes('buddhism') || name.includes('mysticism') || 
      name.includes('freemasonry') || name.includes('gnosticism') || name.includes('dervish') || 
      name.includes('commandments') || name.includes('kingdom_of_god') || name.includes('fana') || 
      name.includes('enlightenment') || name.includes('square_and_compass') || 
      name.includes('demiurge') || name.includes('pleroma') || name.includes('whirling')) {
    return 'esoteric';
  }
  
  // Fractal Growth keywords
  if (name.includes('fractal') || name.includes('growth') || name.includes('recursive_fractal') || 
      name.includes('mandelbulb') || name.includes('tpms') || name.includes('bioelectric') || 
      name.includes('regeneration') || name.includes('self-regenerating') || 
      name.includes('bioreactor') || name.includes('water_regeneration') || 
      name.includes('nervous_system') || name.includes('field_visualization') ||
      name.includes('lattice') || name.includes('masonic_lodge')) {
    return 'growth';
  }
  
  // Why Genesis Wins keywords
  if (name.includes('why_genesis') || name.includes('wins') || name.includes('inevitably') || 
      name.includes('superiority') || name.includes('advantage') || name.includes('evolutionary') ||
      name.includes('mathematical_certainty') || name.includes('resource_efficiency')) {
    return 'why-wins';
  }
  
  // Default categorization based on existing patterns
  if (name.includes('genesis') && !name.includes('memetic')) return 'genesis-protocol';
  if (name.includes('recursive') && !name.includes('memetic')) return 'growth';
  if (name.includes('babylon') && !name.includes('memetic')) return 'history';
  
  return 'ontology'; // Default fallback
}

// Function to generate alt text and purpose from filename
function generateMetadata(filename) {
  let name = filename;
  
  // Clean up UUID-style filenames
  if (name.startsWith('u4346991278_')) {
    name = name
      .replace(/^u4346991278_/, '')
      .replace(/_[a-f0-9-]+_\d+\.png$/, '')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  } else {
    // Clean up regular filenames
    name = name
      .replace(/\.png$/, '')
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }
    
  const purpose = generatePurpose(filename);
  
  return {
    alt: name,
    purpose: purpose
  };
}

function generatePurpose(filename) {
  const name = filename.toLowerCase();
  
  // Specific purpose mappings
  if (name.includes('bioelectric_field')) return 'Visualization of bioelectric field patterns in Genesis systems';
  if (name.includes('fractal') && name.includes('empathy')) return 'Fractal empathy loops as operational protocol for community building';
  if (name.includes('memetic_weapons')) return 'Strategic memetic warfare visualization for Genesis advancement';
  if (name.includes('dervish')) return 'Sufi mystical practices operationalized through TPMS lattice structures';
  if (name.includes('land_trust')) return 'Genesis Land Trust implementation architecture and protocols';
  if (name.includes('freemasonry')) return 'Freemasonry symbols reinterpreted through Genesis operational framework';
  if (name.includes('gnosticism')) return 'Gnostic principles operationalized as Genesis civilizational protocols';
  if (name.includes('dgo')) return 'Decentralized Governance Operations technical architecture';
  if (name.includes('bioreactor')) return 'Fractal bioreactor design for waste-to-energy transformation';
  if (name.includes('water_regeneration')) return 'Water regeneration protocols using fractal membrane structures';
  if (name.includes('nervous_system')) return 'Bioelectric nervous system patterns mapped to cosmic fractal structures';
  if (name.includes('babylon') && name.includes('recursive')) return 'Babylonian system analysis through Genesis Recursive Fractal Mythic Tech lens';
  if (name.includes('althing')) return 'Icelandic Althing governance as historical example of Genesis SRL principles';
  if (name.includes('african_tribal')) return 'African tribal spirituality operationalized through Genesis civilizational framework';
  if (name.includes('collapse_probability')) return 'Mathematical analysis of Babylonian system collapse probability matrices';
  if (name.includes('abundance_advantage')) return 'Genesis abundance advantage over Babylonian scarcity-based systems';
  if (name.includes('surgical')) return 'Precise surgical analysis of Babylonian system components and vulnerabilities';
  if (name.includes('ontology')) return 'Foundational ontological principles of Genesis vs Babylon civilizational patterns';
  if (name.includes('protocol')) return 'Technical protocols and implementation guidelines for Genesis systems';
  if (name.includes('growth')) return 'Recursive fractal growth patterns in Genesis civilizational development';
  if (name.includes('wins')) return 'Mathematical and evolutionary proof of Genesis system superiority';
  if (name.includes('esoteric')) return 'Esoteric and mystical principles operationalized as practical Genesis protocols';
  if (name.includes('history')) return 'Historical analysis of civilizational patterns from Genesis perspective';
  
  return 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles';
}

// Function to determine if image is used in body content
function isUsedInBody(filename) {
  const usedImages = [
    'civilisational-ontology-1.png',
    'civilisational-ontology-2.png', 
    'civilisational-ontology-3.png',
    'complete-civilsational-history-1.png',
    'complete-cilvilisational-history-2.png',
    'complete-civilisational-history-3.png',
    'Complete-civilisational-history-5.png',
    'a-complete-civilisational-history-6.png',
    'Surgical-Analysis-1.png',
    'surgical-analysis-2.png',
    'surgical-analysis-3.png',
    'surgical-analysis-4.png',
    'surgical-analysis-5.png',
    'collapse-protocol-1.png',
    'collapse-protocol-2.png',
    'collapse-protocol-3.png',
    'ai-as-a-tool-within-genesis-civilisation-1.png',
    'ai-as-a-tool-within-genesis-civilisation-2.png',
    'ai-as-a-tool-within-genesis-civilisation-3.png',
    'genesis-SRL-protocol-1.png',
    'genesis-SRL-protocol-2.png',
    'genesis-SRL-protocol-3.png'
  ];
  
  return usedImages.includes(filename);
}

// Main execution
const sectionsDir = path.join(__dirname, '..', 'public', 'images', 'sections');
const files = fs.readdirSync(sectionsDir).filter(file => file.endsWith('.png')).sort();

console.log(`Found ${files.length} images to process`);

let registryContent = `export interface ImageMetadata {
  id: string;
  src: string;
  alt: string;
  section: 'ontology' | 'history' | 'surgical-analysis' | 'collapse-protocol' | 'ai' | 'genesis-protocol' | 'memetics' | 'esoteric' | 'growth' | 'why-wins';
  usedInBody: boolean;
  purpose: string;
}

export const imageRegistry: ImageMetadata[] = [
`;

files.forEach((file, index) => {
  const category = categorizeImage(file);
  const metadata = generateMetadata(file);
  const usedInBody = isUsedInBody(file);
  
  registryContent += `  {
    id: '${category}-${index + 1}',
    src: '/images/sections/${file}',
    alt: '${metadata.alt.replace(/'/g, "\\'")}',
    section: '${category}',
    usedInBody: ${usedInBody},
    purpose: '${metadata.purpose.replace(/'/g, "\\'")}'
  }${index < files.length - 1 ? ',' : ''}
`;
});

registryContent += `];

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
};`;

// Write the complete registry
fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'lib', 'image-registry.ts'),
  registryContent
);

console.log(`✅ Complete image registry generated with ${files.length} images!`);

// Show statistics
const categorizedImages = {};
files.forEach(file => {
  const category = categorizeImage(file);
  if (!categorizedImages[category]) {
    categorizedImages[category] = 0;
  }
  categorizedImages[category]++;
});

console.log('\n📊 Section Distribution:');
Object.keys(categorizedImages).sort().forEach(category => {
  console.log(`  ${category}: ${categorizedImages[category]} images`);
});

console.log(`\n🎯 Total: ${files.length} images across ${Object.keys(categorizedImages).length} sections`);

