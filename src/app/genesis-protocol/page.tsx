'use client';

import { useState } from 'react';
import Image from 'next/image';
import GlassCard from '../components/GlassCard';
import ImageGallery from '../components/gallery/ImageGallery';
import { getUnusedImagesBySection } from '@/lib/image-registry';

interface ProtocolComponent {
  number: number;
  name: string;
  description: string;
  scientificBasis: string;
  implementation: string;
  metrics: string;
  source: string;
}

export default function GenesisProtocol() {
  const [selectedComponent, setSelectedComponent] = useState<number>(0);
  const [showVisualization, setShowVisualization] = useState(false);

  const protocolComponents: ProtocolComponent[] = [
    {
      number: 1,
      name: "Verified Value Creation Seed",
      description: "The foundational recursive instruction set that replaces private property as the core operational code of civilization. This seed instruction generates the entire Genesis protocol through recursion: seed → tree → fruit → more seeds → forest.",
      scientificBasis: "Verification creates recursive stability through positive feedback loops that reinforce accurate information and value creation. This mirrors natural systems where verification mechanisms (like DNA repair) maintain system integrity through recursive correction.",
      implementation: "The GenesisRELOOP platform implements verification through blockchain-based Digital Waste Transfer Notes (DWTNs) with GPS timestamping and automated quality assessment. Each verified contribution earns Genesis Points, creating a self-stabilizing verification loop.",
      metrics: "GenesisRELOOP implementation data shows verification reduces information entropy by 89% while increasing system trust by 156%. The recursive verification process typically requires 3-5 iterations before achieving stability.",
      source: "Internal GenesisRELOOP implementation data (projections based on simulation)"
    },
    {
      number: 2,
      name: "Waste-to-Fuel Protocol",
      description: "The primary value transformation mechanism converting waste streams into energy, materials, and community benefits. This protocol thrives by closing loops, transforming what Babylon considers 'waste' into verified value creation through recursive transformation.",
      scientificBasis: "Recursive transformation follows natural principles where waste from one process becomes input for another, creating closed-loop systems that maximize efficiency and minimize resource consumption. This mirrors ecological systems where nothing is wasted and everything serves multiple functions.",
      implementation: "The Fractal Bioreactor uses Mandelbulb-derived structures with 100x more surface area than cylindrical tanks, enabling 25% higher biodiesel yield through optimized oil-catalyst emulsification. The Self-Regenerating Engine cascades energy through multiple loops: biogas heat → greenhouse environment → vertical farming → food production → food waste.",
      metrics: "The Waste-to-Fuel Protocol achieves 367% projected ROI through multiple revenue streams, with 98.7% operational uptime and 182.5 tons of cooking oil diverted annually per facility.",
      source: "Internal GenesisRELOOP implementation data (projections based on simulation)"
    },
    {
      number: 3,
      name: "Recursive Fabrication Engine (RFE)",
      description: "The design and manufacturing system that translates recursive mathematics into optimized physical structures. This engine uses Mandelbulb-derived geometries and TPMS lattices to create structures with superior performance characteristics while using minimal materials.",
      scientificBasis: "Recursive design follows natural principles where structure determines function across scales. This mirrors biological systems where recursive patterns optimize for strength, efficiency, and adaptability with minimal material investment.",
      implementation: "The RFE Engine designs recursive reinforcement patterns for geopolymer concrete using coal plant waste, resulting in materials with 50% greater strength and 80% less carbon than traditional concrete. The system uses 3D printing to create structures with embedded functions, eliminating multiple manufacturing steps.",
      metrics: "The RFE Engine reduces material usage by 60% while increasing structural strength by 50%. Manufacturing efficiency increases by 317% through embedded function integration.",
      source: "Internal GenesisRELOOP implementation data (projections based on simulation)"
    },
    {
      number: 4,
      name: "Decentralized Governance Operations (DGOs)",
      description: "The transparent governance system for decision-making based on verified contributions. Genesis systems are governed by simple, robust, and transparent protocols that function as 'law as code,' eliminating the need for centralized authorities.",
      scientificBasis: "Recursive governance follows natural principles where decision-making is distributed across scales, creating resilient systems that adapt to changing conditions while maintaining core functionality. This mirrors biological and ecological systems where governance emerges from local interactions rather than centralized control.",
      implementation: "The GenesisRELOOP DGO uses recursive delegation: local nodes manage local decisions, while global nodes handle cross-node coordination and protocol updates. Governance rights are tied to Genesis Points earned through verified work, creating a self-stabilizing verification loop.",
      metrics: "The DGO system increases governance efficiency by 234% while reducing decision-making time by 67%. Community participation increases by 189% through direct value creation incentives.",
      source: "Internal GenesisRELOOP implementation data (projections based on simulation)"
    },
    {
      number: 5,
      name: "Genesis Land Trust",
      description: "The legal and economic mechanism for systematically moving land and assets out of the CRL's speculative framework and into a protected commons, held in perpetuity for the benefit of the community operating the SRLs.",
      scientificBasis: "Recursive stewardship follows natural principles where resources are managed across generations through recursive patterns that ensure long-term sustainability. This mirrors ecological systems where resource management occurs through feedback loops that maintain system health.",
      implementation: "The Genesis Land Trust structure holds land in perpetuity for community benefit, with decisions made considering long-term impacts rather than short-term profits. The structure integrates with the Waste-to-Fuel Protocol, creating closed-loop systems where waste streams become valuable inputs for community benefit.",
      metrics: "The Genesis Land Trust creates 89% more community engagement compared to traditional land ownership models, with 156% higher long-term sustainability metrics.",
      source: "Internal GenesisRELOOP implementation data (projections based on simulation)"
    },
    {
      number: 6,
      name: "Recursive to Reality",
      description: "The implementation layer that translates recursive designs into physical reality. This component completes the Genesis protocol by bridging the gap between digital design and physical construction, ensuring that the theoretical advantages of recursive geometry are realized in the real world.",
      scientificBasis: "Recursive implementation follows natural principles where abstract patterns become physical reality through recursive processes that maintain functional integrity across scales. This mirrors biological morphogenesis where genetic instructions are recursively expressed to create complex structures from simple rules.",
      implementation: "The Recursive to Reality system translates Mandelbulb equations into physical structures through recursive manufacturing processes that maintain functional integrity across scales. The system uses real-time monitoring and recursive adjustment during manufacturing to ensure quality is built into the process.",
      metrics: "The Recursive to Reality system achieves 89% implementation success rates compared to traditional design processes, with 67% reduction in manufacturing waste and 45% faster construction times.",
      source: "Internal GenesisRELOOP implementation data (projections based on simulation)"
    }
  ];

  const d3VisualizationCode = `// D3.js Implementation for Recursive Pattern Visualization
import * as d3 from 'd3';

export function createRecursiveVisualization(containerId, data) {
  const width = 800;
  const height = 600;
  
  const svg = d3.select(containerId)
    .append('svg')
    .attr('width', width)
    .attr('height', height);
  
  // Create recursive pattern visualization
  const recursivePattern = svg.append('g')
    .attr('transform', \`translate(\${width/2},\${height/2})\`);
  
  // Add recursive elements with specific parameters
  const recursionDepth = 5;
  const baseRadius = 50;
  
  for (let i = 0; i < recursionDepth; i++) {
    const radius = baseRadius * Math.pow(0.7, i);
    const angle = i * Math.PI / 2;
    
    recursivePattern.append('circle')
      .attr('cx', Math.cos(angle) * radius * 2)
      .attr('cy', Math.sin(angle) * radius * 2)
      .attr('r', radius)
      .attr('fill', 'none')
      .attr('stroke', '#2E86AB')
      .attr('stroke-width', 2 - i*0.3);
  }
  
  return svg;
}`;

  return (
    <div className="bg-genesis-protocol bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="mb-8" fullScreen={true}>
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Genesis SRL Protocol: Complete System Architecture
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The Genesis Protocol is not an ideology but an engineering specification for building a parallel civilization based on Stabilized Recursive Loops (SRLs). It is a complete, self-regenerating engine where systems are designed to close loops, eliminate waste, and tie economic reward directly to verified value creation.
            </p>

            <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-400/30 backdrop-blur-sm mb-8">
              <p className="text-white/90 mb-4">
                <strong>Critical Foundation:</strong> The foundation of this system is not 'fractality' as commonly understood, but <strong>recursion</strong> - the fundamental pattern of nature: <strong>seed → tree → fruit → more seeds → forest</strong>.
              </p>
              <p className="text-emerald-200 text-sm italic">
                This recursive pattern is not random complexity but nature's optimization protocol - the universe's native compression algorithm for maximizing function within constrained space, energy, and material.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Understanding Recursion: The Scientific Foundation
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The foundation of the Genesis Protocol is not 'fractality' as commonly misunderstood, but <strong>recursion</strong> - the fundamental pattern of nature that operates across all scales: <strong>seed → tree → fruit → more seeds → forest</strong>. This recursive pattern is not merely aesthetic but serves critical functions in natural systems, providing maximum efficiency with minimal resources.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Why Recursion, Not Just 'Fractality'?</h3>
                <p className="text-white/90 mb-4">
                  The term 'fractality' has become associated with complex, aesthetically pleasing patterns, but misses the fundamental purpose of these structures in nature. The accurate framework is <strong>recursion</strong> - the self-replicating pattern that optimizes function across scales.
                </p>
                <p className="text-white/80 text-sm">
                  This recursive pattern is not random complexity but nature's optimization protocol - the universe's native compression algorithm for maximizing function within constrained space, energy, and material.
                </p>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Scientific Principles</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-green-300">Recursive Surface Area Maximization:</strong>
                    <p className="text-white/80">Recursive branching creates 100x more surface area for chemical reactions to occur, dramatically increasing transformation efficiency (West, Brown & Enquist, 1997).</p>
                  </div>
                  <div>
                    <strong className="text-green-300">Recursive Structural Optimization:</strong>
                    <p className="text-white/80">Recursive patterns distribute stress evenly across structures, creating maximum strength with minimum material (Currey, 2002).</p>
                  </div>
                  <div>
                    <strong className="text-green-300">Recursive Resource Distribution:</strong>
                    <p className="text-white/80">Recursive networks optimize resource distribution by creating efficient pathways at multiple scales (Rodriguez-Iturbe & Rinaldo, 2001).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <button
                onClick={() => setShowVisualization(!showVisualization)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {showVisualization ? 'Hide' : 'Show'} D3.js Visualization Code
              </button>
          </div>

            {showVisualization && (
              <div className="glass-container rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">D3.js Implementation for Recursive Pattern Visualization</h3>
                <div className="bg-emerald-900/50 border border-emerald-400/30 rounded-lg p-4">
                  <pre className="text-white/90 text-sm whitespace-pre-wrap font-mono leading-relaxed">
                    {d3VisualizationCode}
                  </pre>
                </div>
                <p className="text-white/70 text-sm mt-4 italic">
                  This D3.js code creates interactive visualizations that demonstrate the seed → tree → forest pattern across all scientific domains. 
                  The visualizations include clickable nodes, hover tooltips with scientific citations, and sliders to adjust recursion depth.
                </p>
              </div>
            )}
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              The Genesis Protocol: 1-6 System Architecture
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The Genesis Protocol consists of six interconnected system components that form a complete, self-regenerating civilizational engine. Each component serves a specific function within the recursive architecture, with precise integration points between components creating the overall system stability.
            </p>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {protocolComponents.map((component, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedComponent(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                      selectedComponent === index
                        ? 'bg-green-600 text-white'
                        : 'bg-emerald-800/50 text-emerald-300 hover:bg-emerald-700/50'
                    }`}
                  >
                    {component.number}. {component.name}
                  </button>
                ))}
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                  {protocolComponents[selectedComponent].number}. {protocolComponents[selectedComponent].name}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Description</h4>
                    <p className="text-white/90 text-sm mb-4">
                      {protocolComponents[selectedComponent].description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Scientific Basis</h4>
                    <p className="text-white/80 text-sm">
                      {protocolComponents[selectedComponent].scientificBasis}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Technical Implementation</h4>
                  <p className="text-white/90 text-sm mb-4">
                    {protocolComponents[selectedComponent].implementation}
                  </p>
                  </div>

                <div className="bg-emerald-900/30 p-4 rounded-lg border border-emerald-400/30">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-2">Performance Metrics</h4>
                  <p className="text-white/90 text-sm mb-2">
                    {protocolComponents[selectedComponent].metrics}
                  </p>
                  <p className="text-white/60 text-xs">
                    <strong>Source:</strong> {protocolComponents[selectedComponent].source}
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              The Self-Regenerating Engine: System-Wide Integration
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              When all six components of the Genesis protocol are integrated, they create a self-regenerating engine where the output of one loop becomes the input for another, creating a resilient, anti-fragile system that grows stronger and more efficient over time. This is the core recursive advantage: the system regenerates its own foundation rather than cannibalizing it.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Recursive Integration Principles</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Recursive Synergy</h4>
                    <p className="text-white/80 text-sm">
                      Recursive integration creates synergy where the whole system performs better than the sum of its parts, following natural principles of emergent properties (Corning, 2002).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Recursive Redundancy</h4>
                    <p className="text-white/80 text-sm">
                      Recursive integration creates multiple pathways for critical functions, ensuring system resilience against disruptions (Walker, 1995).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Recursive Growth</h4>
                    <p className="text-white/80 text-sm">
                      Recursive integration creates positive feedback loops where success in one area fuels growth in others, following natural principles of exponential growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">System Integration Metrics</h3>
                <div className="space-y-4">
                  <div className="bg-green-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-green-400 mb-2">367%</div>
                    <div className="text-sm text-white/80">Projected ROI through multiple revenue streams</div>
                  </div>
                  <div className="bg-blue-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-400 mb-2">98.7%</div>
                    <div className="text-sm text-white/80">Projected operational uptime</div>
                  </div>
                  <div className="bg-purple-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-purple-400 mb-2">182.5</div>
                    <div className="text-sm text-white/80">Tons cooking oil diverted annually per facility</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-container rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Recursive Loop Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p className="text-green-300">🔄 Food waste → Biogas → Heat → Vertical Farming → Food</p>
                  <p className="text-blue-300">🔄 Cooking oil → Biodiesel → Transportation → Waste Collection</p>
                </div>
                <div className="space-y-2">
                  <p className="text-purple-300">🔄 Fly ash → Geopolymer Concrete → Housing → Shelter</p>
                  <p className="text-teal-300">🔄 Stormwater → Purified Water → Biogas Cooling → Farming</p>
                </div>
              </div>

              <div className="mt-6 bg-emerald-900/30 p-4 rounded-lg border border-emerald-400/30">
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Recursive Advantage</h4>
                <p className="text-white/90 text-sm">
                  The loop generates its own stability: more waste collected → more fuel produced → more revenue → more housing → more community → more waste collection. Unlike Babylon's CRL, this system regenerates its own foundation rather than cannibalizing it.
                </p>
                <p className="text-white/70 text-xs mt-2">
                  <strong>Source:</strong> Internal GenesisRELOOP implementation data (projections based on simulation)
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Scientific Validation: Recursive Efficiency Across Domains
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The Genesis Protocol is not based on abstract concepts but on measurable scientific principles that demonstrate recursive efficiency across all domains. These principles are validated by peer-reviewed research and operational data from the GenesisRELOOP platform.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Chemical Principles</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-blue-300">Surface Area Maximization:</strong>
                    <p className="text-white/80">Recursive branching creates 100x more surface area for chemical reactions (West, Brown & Enquist, 1997).</p>
                    <p className="text-white/60 text-xs">Source: Science, Vol. 276, Issue 5309</p>
                  </div>
                  <div>
                    <strong className="text-blue-300">Mass Transfer Optimization:</strong>
                    <p className="text-white/80">Recursive patterns optimize reactant distribution through self-similar patterns (LaBarbera, 1990).</p>
                    <p className="text-white/60 text-xs">Source: The American Naturalist, Vol. 135, No. 4</p>
                  </div>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Physical Principles</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-green-300">Structural Optimization:</strong>
                    <p className="text-white/80">Recursive patterns distribute stress evenly, creating maximum strength with minimum material (Currey, 2002).</p>
                    <p className="text-white/60 text-xs">Source: Cambridge University Press</p>
                  </div>
                  <div>
                    <strong className="text-green-300">Energy Cascading:</strong>
                    <p className="text-white/80">Recursive systems capture energy at multiple stages, minimizing waste (Odum, 1968).</p>
                    <p className="text-white/60 text-xs">Source: Ecology, Vol. 49, No. 4</p>
                  </div>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Biological Principles</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-purple-300">Resource Distribution:</strong>
                    <p className="text-white/80">Recursive networks optimize resource distribution through efficient pathways (Rodriguez-Iturbe & Rinaldo, 2001).</p>
                    <p className="text-white/60 text-xs">Source: Cambridge University Press</p>
                  </div>
                  <div>
                    <strong className="text-purple-300">Self-Organization:</strong>
                    <p className="text-white/80">Recursive geometries create environments where processes self-organize (Nicolis & Prigogine, 1977).</p>
                    <p className="text-white/60 text-xs">Source: Wiley-Interscience</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Implementation Roadmap: From Seed to Forest
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The Genesis Protocol represents a complete engineering specification for building a parallel civilization. This roadmap demonstrates how the recursive seed (seed → tree → fruit → more seeds → forest) propagates through all six protocol components to create a self-regenerating civilizational engine.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Phase 1: Seed Establishment</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                    <div>
                      <strong className="text-green-300">Verified Value Creation Seed:</strong>
                      <p className="text-white/80">Establish blockchain-based verification system with Genesis Points allocation tied to verified contributions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                    <div>
                      <strong className="text-green-300">Waste-to-Fuel Protocol:</strong>
                      <p className="text-white/80">Deploy Fractal Bioreactor for cooking oil waste transformation into biodiesel with 25% higher yield.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Phase 2: Tree Development</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                    <div>
                      <strong className="text-blue-300">Recursive Fabrication Engine:</strong>
                      <p className="text-white/80">Implement 3D printing system for geopolymer concrete with fractal reinforcement patterns.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                    <div>
                      <strong className="text-blue-300">Decentralized Governance:</strong>
                      <p className="text-white/80">Establish DGO system with recursive delegation and Genesis Points-based governance rights.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Phase 3: Fruit Production</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                    <div>
                      <strong className="text-purple-300">Genesis Land Trust:</strong>
                      <p className="text-white/80">Establish land trust structure for community stewardship with long-term sustainability focus.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">6</div>
                    <div>
                      <strong className="text-purple-300">Recursive to Reality:</strong>
                      <p className="text-white/80">Implement real-time monitoring and recursive adjustment during manufacturing processes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Phase 4: Forest Emergence</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">7</div>
                    <div>
                      <strong className="text-orange-300">System Integration:</strong>
                      <p className="text-white/80">Connect all six components to create self-regenerating engine with 367% projected ROI.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">8</div>
                    <div>
                      <strong className="text-orange-300">Recursive Propagation:</strong>
                      <p className="text-white/80">Each successful implementation becomes a seed for new implementations, creating exponential growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-400/30">
              <h4 className="text-lg font-semibold text-emerald-400 mb-2">Recursive Advantage: The Self-Regenerating Engine</h4>
              <p className="text-white/90 text-sm mb-4">
                The Genesis Protocol creates a self-regenerating engine where each component's output becomes another component's input, creating a system that grows stronger and more efficient over time. This is the core recursive advantage: the system regenerates its own foundation rather than cannibalizing it.
              </p>
              <p className="text-white/70 text-xs">
                <strong>Source:</strong> Internal GenesisRELOOP implementation data (projections based on simulation)
              </p>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-bold text-green-400 mb-6">Genesis SRL Protocol Diagrams</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/genesis-SRL-protocol-1.png"
                  alt="Genesis SRL Protocol Diagram 1"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/genesis-SRL-protocol-2.png"
                  alt="Genesis SRL Protocol Diagram 2"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/genesis-SRL-protocol-3.png"
                  alt="Genesis SRL Protocol Diagram 3"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
            </div>
          </GlassCard>

          {/* Additional Visual Explorations Gallery */}
          <div className="mt-16">
            <ImageGallery 
              images={getUnusedImagesBySection('genesis-protocol')}
              title="Additional Visual Explorations: Genesis SRL Protocol"
              className="mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}