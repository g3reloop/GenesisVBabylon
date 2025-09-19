const fs = require('fs');
const path = require('path');

// Function to categorize images based on their filename
function categorizeImage(filename) {
  const name = filename.toLowerCase();
  
  // Ontology-related keywords
  if (name.includes('ontology') || name.includes('civilisational') || name.includes('seed') || name.includes('recursive_loop') || name.includes('private_property')) {
    return 'ontology';
  }
  
  // History-related keywords  
  if (name.includes('history') || name.includes('civilizational') || name.includes('babylon') || name.includes('roman') || name.includes('ancient')) {
    return 'history';
  }
  
  // Surgical Analysis keywords
  if (name.includes('surgical') || name.includes('analysis') || name.includes('collapse_realms') || name.includes('death_spiral') || name.includes('core_beliefs')) {
    return 'surgical-analysis';
  }
  
  // Collapse Protocol keywords
  if (name.includes('collapse') || name.includes('protocol') || name.includes('expansion_imperative') || name.includes('scarcity') || name.includes('fragility')) {
    return 'collapse-protocol';
  }
  
  // AI-related keywords
  if (name.includes('ai') || name.includes('tool') || name.includes('genesis_civilisation') || name.includes('shared_recursive') || name.includes('sre')) {
    return 'ai';
  }
  
  // Genesis Protocol keywords
  if (name.includes('genesis') && (name.includes('srl') || name.includes('protocol') || name.includes('land_trust') || name.includes('dgo') || name.includes('decentralized_governance') || name.includes('bioreactor'))) {
    return 'genesis-protocol';
  }
  
  // Memetic Weapons keywords
  if (name.includes('memetic') || name.includes('weapons') || name.includes('fusion_of_fission') || name.includes('pure_collapse') || name.includes('recursive_memetic')) {
    return 'memetics';
  }
  
  // Esoteric Systems keywords  
  if (name.includes('esoteric') || name.includes('operationalisation') || name.includes('christianity') || name.includes('islam') || name.includes('buddhism') || name.includes('mysticism') || name.includes('freemasonry') || name.includes('gnosticism') || name.includes('dervish') || name.includes('commandments') || name.includes('kingdom_of_god') || name.includes('fana') || name.includes('enlightenment')) {
    return 'esoteric';
  }
  
  // Fractal Growth keywords
  if (name.includes('fractal') || name.includes('growth') || name.includes('recursive_fractal') || name.includes('mandelbulb') || name.includes('tpms') || name.includes('bioelectric') || name.includes('regeneration') || name.includes('self-regenerating')) {
    return 'growth';
  }
  
  // Why Genesis Wins keywords
  if (name.includes('why_genesis') || name.includes('wins') || name.includes('inevitably') || name.includes('superiority') || name.includes('advantage')) {
    return 'why-wins';
  }
  
  // Default categorization based on existing patterns
  if (name.includes('genesis')) return 'genesis-protocol';
  if (name.includes('recursive')) return 'growth';
  if (name.includes('babylon')) return 'history';
  
  return 'ontology'; // Default fallback
}

// Function to generate alt text and purpose from filename
function generateMetadata(filename) {
  const name = filename
    .replace(/^u4346991278_/, '')
    .replace(/_[a-f0-9-]+_\d+\.png$/, '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
    
  const purpose = generatePurpose(filename);
  
  return {
    alt: name,
    purpose: purpose
  };
}

function generatePurpose(filename) {
  const name = filename.toLowerCase();
  
  if (name.includes('bioelectric')) return 'Visualization of bioelectric field patterns in Genesis systems';
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
  if (name.includes('babylon')) return 'Babylonian system analysis through Genesis Recursive Fractal Mythic Tech lens';
  
  return 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles';
}

// Main execution
const sectionsDir = path.join(__dirname, '..', 'public', 'images', 'sections');
const files = fs.readdirSync(sectionsDir).filter(file => file.endsWith('.png'));

console.log(`Found ${files.length} images to categorize`);

const categorizedImages = {};
files.forEach(file => {
  const category = categorizeImage(file);
  if (!categorizedImages[category]) {
    categorizedImages[category] = [];
  }
  
  const metadata = generateMetadata(file);
  categorizedImages[category].push({
    filename: file,
    alt: metadata.alt,
    purpose: metadata.purpose
  });
});

// Output results
Object.keys(categorizedImages).forEach(category => {
  console.log(`\n${category.toUpperCase()}: ${categorizedImages[category].length} images`);
  categorizedImages[category].slice(0, 3).forEach(img => {
    console.log(`  - ${img.filename.substring(0, 60)}...`);
  });
});

// Write to JSON file for use in updating the registry
fs.writeFileSync(
  path.join(__dirname, 'categorized-images.json'),
  JSON.stringify(categorizedImages, null, 2)
);

console.log('\nCategorization complete! Results saved to categorized-images.json');
