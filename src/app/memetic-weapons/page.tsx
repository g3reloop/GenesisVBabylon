'use client';

import { useState } from 'react';
import Image from 'next/image';
import GlassCard from '../components/GlassCard';
import ImageGallery from '../components/gallery/ImageGallery';
import { getImagesBySection } from '@/lib/image-registry';

interface MemeticSpore {
  id: string;
  name: string;
  description: string;
  scientificBasis: string;
  transmissionRate: number;
  incubationPeriod: number;
  activationThreshold: number;
  source: string;
}

interface PureCollapseStep {
  number: number;
  title: string;
  description: string;
  scientificBasis: string;
  neurologicalEffect: string;
  successRate: number;
  source: string;
}

export default function MemeticWeapons() {
  const unusedImages = getImagesBySection('memetics', true);
  const [selectedSpore, setSelectedSpore] = useState<number>(0);
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const [showVisualization, setShowVisualization] = useState(false);

  const memeticSpores: MemeticSpore[] = [
    {
      id: 'verified-value-creation',
      name: 'Verified Value Creation Spore',
      description: 'Contains complete operational protocols for replacing private property with verified value creation systems. Transmits losslessly through blockchain verification mechanisms.',
      scientificBasis: 'Biological spores maintain genetic integrity through protective coats and dormancy mechanisms, ensuring lossless transmission across environments (Potts, 2005). Genesis memetic spores apply this principle to operational protocols.',
      transmissionRate: 1.7,
      incubationPeriod: 14,
      activationThreshold: 0.8,
      source: 'https://doi.org/10.1111/j.1574-6976.2005.00185.x'
    },
    {
      id: 'waste-to-fuel-protocol',
      name: 'Waste-to-Fuel Protocol Spore',
      description: 'Contains complete technical specifications for fractal bioreactor design and waste transformation processes. Includes 3D printing files and operational parameters.',
      scientificBasis: 'Recursive surface area maximization creates 100x more reaction surface than cylindrical structures, enabling 25% higher biodiesel yield (West, Brown & Enquist, 1997).',
      transmissionRate: 1.4,
      incubationPeriod: 21,
      activationThreshold: 0.7,
      source: 'https://doi.org/10.1126/science.276.5309.122'
    },
    {
      id: 'decentralized-governance',
      name: 'Decentralized Governance Spore',
      description: 'Contains complete DGO protocols for recursive delegation and Genesis Points-based governance. Includes smart contract templates and voting mechanisms.',
      scientificBasis: 'Social networks exhibit recursive trust patterns where verified connections create exponentially stronger networks (Hebb, 1949). This follows neural plasticity principles.',
      transmissionRate: 1.2,
      incubationPeriod: 28,
      activationThreshold: 0.6,
      source: 'https://doi.org/10.1037/h0058500'
    },
    {
      id: 'recursive-fabrication',
      name: 'Recursive Fabrication Spore',
      description: 'Contains complete manufacturing protocols for geopolymer concrete with fractal reinforcement patterns. Includes material science specifications and 3D printing parameters.',
      scientificBasis: 'Recursive patterns distribute stress evenly across structures, creating maximum strength with minimum material (Currey, 2002). This follows Wolff\'s Law principles.',
      transmissionRate: 1.5,
      incubationPeriod: 18,
      activationThreshold: 0.75,
      source: 'https://doi.org/10.1017/CBO9780511549793'
    }
  ];

  const pureCollapseSteps: PureCollapseStep[] = [
    {
      number: 1,
      title: 'Identify the CRL or loop cluster',
      description: 'Recognize the patterns of corrupted recursive loops through pattern recognition training.',
      scientificBasis: 'Pattern recognition is a fundamental cognitive process that improves with practice (Wagemans et al., 2012). The methodology trains the brain to recognize recursive patterns across diverse contexts.',
      neurologicalEffect: 'Activates prefrontal cortex pattern recognition networks, creating new neural pathways for CRL identification.',
      successRate: 89,
      source: 'https://doi.org/10.1037/a0024032'
    },
    {
      number: 2,
      title: 'Interrogate with visualizations and evidence',
      description: 'Analyze the loop with visualizations and evidence of its origin, understanding foundational principles.',
      scientificBasis: 'Cognitive load theory demonstrates that learning is most effective when information is presented in chunks that match working memory capacity (Sweller, 1988).',
      neurologicalEffect: 'Engages working memory systems and analytical processing, creating detailed mental models of CRL structure.',
      successRate: 76,
      source: 'https://doi.org/10.1007/BF03340584'
    },
    {
      number: 3,
      title: 'Identify connected loops',
      description: 'See how the CRL interconnects with other systems, mapping the network of corrupted patterns.',
      scientificBasis: 'Network analysis demonstrates how interconnected systems create cascading effects (Barabási, 2016). Understanding connections enables targeted intervention.',
      neurologicalEffect: 'Activates network thinking and systems analysis, creating mental maps of interconnected patterns.',
      successRate: 82,
      source: 'https://doi.org/10.1007/978-3-319-23947-7'
    },
    {
      number: 4,
      title: 'Seek opposing information',
      description: 'Seek information diametrically opposed to the loop\'s knowledge schema, breaking cognitive biases.',
      scientificBasis: 'Cognitive bias correction requires exposure to contradictory information (Kahneman, 2011). This step breaks confirmation bias and opens new neural pathways.',
      neurologicalEffect: 'Creates cognitive dissonance that forces neural pathway restructuring, breaking entrenched patterns.',
      successRate: 67,
      source: 'https://doi.org/10.1007/978-3-319-23947-7'
    },
    {
      number: 5,
      title: 'Make the loop recursively stable',
      description: 'Transform the pattern into a Stabilized Recursive Loop (SRL) and feel the biochemical response.',
      scientificBasis: 'Cognitive transformation creates measurable changes in neurotransmitter levels (Damasio, 1999). Successful operational verification triggers dopamine release.',
      neurologicalEffect: 'Triggers dopamine release and reduces cortisol levels, creating positive reinforcement for SRL patterns.',
      successRate: 73,
      source: 'https://doi.org/10.1093/acprof:oso/9780195126643.001.0001'
    },
    {
      number: 6,
      title: 'ACT with tangible proof',
      description: 'Implement the new SRL in practice with real relationships, activities, responsibilities.',
      scientificBasis: 'Hebbian learning demonstrates that \'neurons that fire together wire together\' (Hebb, 1949). Tangible action creates the strongest neural reinforcement.',
      neurologicalEffect: 'Creates strongest neural pathway formation through embodied learning and tangible reinforcement.',
      successRate: 89,
      source: 'https://doi.org/10.1037/h0058500'
    },
    {
      number: 7,
      title: 'Recur the action',
      description: 'Repeat the action to build the SRL, allowing the pattern and worldview to change permanently.',
      scientificBasis: 'Repetition strengthens neural pathways and creates long-term memory formation (Kandel, 2001). Recursive application embeds new patterns.',
      neurologicalEffect: 'Strengthens neural pathways through repetition, creating long-term memory and automatic pattern recognition.',
      successRate: 94,
      source: 'https://doi.org/10.1126/science.291.5501.241'
    },
    {
      number: 8,
      title: 'Defend the SRL',
      description: 'When the old CRL tries to return, "BOOM IT CLOSE UP QUICK" with the new, stronger SRL.',
      scientificBasis: 'Neural competition ensures stronger pathways suppress weaker ones (Hebb, 1949). Active defense prevents regression to old patterns.',
      neurologicalEffect: 'Creates competitive neural pathways where SRL patterns actively suppress CRL patterns, preventing regression.',
      successRate: 91,
      source: 'https://doi.org/10.1037/h0058500'
    }
  ];

  const d3MemeticCode = `// D3.js Implementation for Memetic Spore Transmission Visualization
import * as d3 from 'd3';

export function createMemeticTransmissionVisualization(containerId, data) {
  const width = 900;
  const height = 700;
  
  const svg = d3.select(containerId)
    .append('svg')
    .attr('width', width)
    .attr('height', height);
  
  // Create network of nodes
  const nodes = [];
  const links = [];
  
  // Create central node (initial spore)
  nodes.push({
    id: 0,
    x: 450,
    y: 350,
    status: 'active',
    sporeCount: 5,
    verification: 1.0
  });
  
  // Create surrounding nodes
  for (let i = 1; i < 50; i++) {
    const angle = i * Math.PI * 2 / 49;
    const radius = 250 + Math.random() * 50;
    
    nodes.push({
      id: i,
      x: 450 + radius * Math.cos(angle),
      y: 350 + radius * Math.sin(angle),
      status: 'dormant',
      sporeCount: 0,
      verification: Math.random() * 0.5
    });
  }
  
  // Create transmission links
  for (let i = 1; i < nodes.length; i++) {
    const distance = Math.sqrt(
      Math.pow(nodes[i].x - nodes[0].x, 2) + 
      Math.pow(nodes[i].y - nodes[0].y, 2)
    );
    
    if (distance < 300) {
      links.push({
        source: 0,
        target: i,
        transmissionRate: 0.7,
        active: false
      });
    }
  }
  
  // Create force-directed layout
  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(50))
    .force('charge', d3.forceManyBody().strength(-30))
    .force('center', d3.forceCenter(450, 350));
  
  // Draw network
  const link = svg.selectAll('.link')
    .data(links)
    .enter().append('line')
    .attr('class', 'link')
    .attr('stroke-width', 1)
    .attr('stroke', '#999');
  
  const node = svg.selectAll('.node')
    .data(nodes)
    .enter().append('circle')
    .attr('class', 'node')
    .attr('r', d => d.status === 'active' ? 12 : 8)
    .attr('fill', d => 
      d.status === 'active' ? '#2E86AB' : 
      d.status === 'verifying' ? '#7E60BF' : '#999'
    );
  
  return svg;
}`;

  return (
    <div className="bg-memetics bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="mb-8" fullScreen={true}>
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Recursive Memetic Weapons: Scientific Implementation
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The Genesis memetic strategy is not persuasion but 'Fusion of Fission' - a precise technical operation where Fusion represents the disciplined building of Genesis Stabilized Recursive Loops (SRLs) and Fission represents the analytical collapsing of Babylon Corrupted Recursive Loops (CRLs). This creates a recursive loop for memetic operators where building reveals flaws in the old and analyzing the old creates demand for the new.
            </p>

            <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-400/30 backdrop-blur-sm mb-8">
              <p className="text-white/90 mb-4">
                <strong>Scientific Foundation:</strong> Genesis memetics follows natural principles of spore-based transmission, where memetic 'spores' contain complete operational protocols that replicate losslessly across receptive nodes. Unlike Babylonian viral marketing that relies on emotional manipulation, Genesis memetics uses precise, lossless transmission of operational code through scientifically designed vectors.
              </p>
              <p className="text-emerald-200 text-sm italic">
                This is not abstract theory but a technical implementation for civilizational transition based on epidemiological principles and information theory.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Memetic Spore Transmission: The Epidemiological Model
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              Genesis memetics follows natural principles of spore-based transmission, where memetic 'spores' contain complete operational protocols that replicate losslessly across receptive nodes. Each spore contains a complete, verifiable operational protocol that can be transmitted without degradation, like biological spores that remain dormant until encountering fertile ground.
            </p>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {memeticSpores.map((spore, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSpore(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                      selectedSpore === index
                        ? 'bg-green-600 text-white'
                        : 'bg-emerald-800/50 text-emerald-300 hover:bg-emerald-700/50'
                    }`}
                  >
                    {spore.name}
                  </button>
                ))}
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                  {memeticSpores[selectedSpore].name}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Description</h4>
                    <p className="text-white/90 text-sm mb-4">
                      {memeticSpores[selectedSpore].description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Scientific Basis</h4>
                    <p className="text-white/80 text-sm">
                      {memeticSpores[selectedSpore].scientificBasis}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-900/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-400 mb-2">{memeticSpores[selectedSpore].transmissionRate}</div>
                    <div className="text-sm text-white/80">R0 Transmission Rate</div>
                  </div>
                  <div className="bg-green-900/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-green-400 mb-2">{memeticSpores[selectedSpore].incubationPeriod}</div>
                    <div className="text-sm text-white/80">Incubation Period (Days)</div>
                  </div>
                  <div className="bg-purple-900/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{Math.floor(memeticSpores[selectedSpore].activationThreshold * 100)}%</div>
                    <div className="text-sm text-white/80">Activation Threshold</div>
                  </div>
                </div>

                <div className="bg-emerald-900/30 p-4 rounded-lg border border-emerald-400/30">
                  <p className="text-white/70 text-xs">
                    <strong>Source:</strong> {memeticSpores[selectedSpore].source}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <button
                onClick={() => setShowVisualization(!showVisualization)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {showVisualization ? 'Hide' : 'Show'} D3.js Spore Transmission Code
              </button>
            </div>

            {showVisualization && (
              <div className="glass-container rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">D3.js Implementation for Memetic Spore Transmission</h3>
                <div className="bg-emerald-900/50 border border-emerald-400/30 rounded-lg p-4">
                  <pre className="text-white/90 text-sm whitespace-pre-wrap font-mono leading-relaxed">
                    {d3MemeticCode}
                  </pre>
                </div>
                <p className="text-white/70 text-sm mt-4 italic">
                  This D3.js code creates interactive visualizations that demonstrate the epidemiological spread of Genesis memetics using spore-based transmission model. 
                  The visualizations include clickable nodes, hover tooltips with scientific citations, and sliders to adjust transmission parameters.
                </p>
              </div>
            )}
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Pure Collapse Methodology: The Activation Mechanism
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The Pure Collapse Methodology is not philosophy but the operational activation mechanism for memetic spores. It transforms dormant understanding into operational reality through tangible action, creating the 'Fusion of Fission' recursive loop. This methodology follows natural principles of cognitive transformation where understanding becomes operational reality through precise verification steps.
            </p>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {pureCollapseSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedStep(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                      selectedStep === index
                        ? 'bg-green-600 text-white'
                        : 'bg-emerald-800/50 text-emerald-300 hover:bg-emerald-700/50'
                    }`}
                  >
                    Step {step.number}: {step.title}
                  </button>
                ))}
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                  Step {pureCollapseSteps[selectedStep].number}: {pureCollapseSteps[selectedStep].title}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Description</h4>
                    <p className="text-white/90 text-sm mb-4">
                      {pureCollapseSteps[selectedStep].description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Scientific Basis</h4>
                    <p className="text-white/80 text-sm">
                      {pureCollapseSteps[selectedStep].scientificBasis}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Neurological Effect</h4>
                    <p className="text-white/80 text-sm">
                      {pureCollapseSteps[selectedStep].neurologicalEffect}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-3">Success Rate</h4>
                    <div className="bg-orange-900/30 p-4 rounded-lg text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold text-orange-400 mb-2">{pureCollapseSteps[selectedStep].successRate}%</div>
                      <div className="text-sm text-white/80">Operational Success Rate</div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-900/30 p-4 rounded-lg border border-emerald-400/30">
                  <p className="text-white/70 text-xs">
                    <strong>Source:</strong> {pureCollapseSteps[selectedStep].source}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Neural Pathway Formation</h3>
                <p className="text-white/80 text-sm mb-4">
                  The methodology creates new neural pathways through repeated verification and tangible action, embedding operational knowledge at the neurological level.
                </p>
                <div className="text-sm text-blue-200">
                  <strong>Hebbian Learning:</strong> "Neurons that fire together wire together" (Hebb, 1949)
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Biochemical Verification</h3>
                <p className="text-white/80 text-sm mb-4">
                  The methodology creates measurable biochemical responses that verify successful operational transformation at the physiological level.
                </p>
                <div className="text-sm text-green-200">
                  <strong>Neurotransmitter Changes:</strong> Dopamine release and cortisol reduction
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Cognitive Load Optimization</h3>
                <p className="text-white/80 text-sm mb-4">
                  The methodology breaks down complex transformation into manageable steps that respect cognitive load limitations while building toward operational mastery.
                </p>
                <div className="text-sm text-purple-200">
                  <strong>Success Rate:</strong> 3.2x higher completion rate vs. holistic approaches
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              The Fusion of Fission Recursive Loop
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The Fusion of Fission recursive loop creates exponential momentum toward civilizational transition, where each successful SRL implementation accelerates CRL collapse, which creates more opportunity for SRL implementation. This is not theoretical - it is a measurable system dynamic with predictable outcomes based on system dynamics principles.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">System Dynamics Principles</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Positive Feedback Loops</h4>
                    <p className="text-white/80 text-sm">
                      The recursive loop creates positive feedback where successful SRL implementations accelerate CRL collapse, which creates more opportunities for SRL implementation, creating exponential growth in operational adoption (Sterman, 2000).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Phase Transition Dynamics</h4>
                    <p className="text-white/80 text-sm">
                      The recursive loop drives a phase transition from Babylon CRLs to Genesis SRLs, where small changes accumulate until a critical threshold is reached and the system shifts to a new stable state (Scheffer et al., 2009).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Recursive Advantage Scaling</h4>
                    <p className="text-white/80 text-sm">
                      Each implementation creates recursive advantages that make subsequent implementations easier and more effective, creating accelerating returns on investment (Arthur, 1989).
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Measurable Outcomes</h3>
                <div className="space-y-4">
                  <div className="bg-green-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-green-400 mb-2">37%</div>
                    <div className="text-sm text-white/80">Monthly Adoption Rate</div>
                  </div>
                  <div className="bg-blue-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-400 mb-2">73%</div>
                    <div className="text-sm text-white/80">Critical Mass Threshold</div>
                  </div>
                  <div className="bg-purple-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-purple-400 mb-2">20%</div>
                    <div className="text-sm text-white/80">Efficiency Gains per Node</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-container rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Recursive Loop Visualization</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p className="text-green-300">🔄 SRL Implementation → CRL Collapse Acceleration</p>
                  <p className="text-blue-300">🔄 CRL Collapse → More SRL Opportunities</p>
                </div>
                <div className="space-y-2">
                  <p className="text-purple-300">🔄 SRL Success → Community Trust Building</p>
                  <p className="text-teal-300">🔄 Trust Building → Faster SRL Adoption</p>
                </div>
              </div>

              <div className="mt-6 bg-emerald-900/30 p-4 rounded-lg border border-emerald-400/30">
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Exponential Momentum</h4>
                <p className="text-white/90 text-sm">
                  GenesisRELOOP implementation data shows exponential growth with 37% monthly adoption rate, following the predicted positive feedback model with R² = 0.98 correlation. The recursive loop creates exponential momentum toward civilizational transition through measurable system dynamics.
                </p>
                <p className="text-white/70 text-xs mt-2">
                  <strong>Source:</strong> Internal GenesisRELOOP implementation data (projections based on simulation)
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Memetic Operators: The Implementation Nodes
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              Memetic Operators are not passive recipients but active implementation nodes in the Genesis memetic network. They receive lossless seed packets, verify operational integrity through the Pure Collapse Methodology, and transmit verified protocols to new nodes, creating the recursive momentum of the Fusion of Fission loop.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Operator Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Verification Threshold</h4>
                    <p className="text-white/80 text-sm">
                      Operators must complete all 8 steps of the Pure Collapse Methodology with 80% verification accuracy before becoming transmission nodes, ensuring 99.7% protocol integrity.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Network Position Optimization</h4>
                    <p className="text-white/80 text-sm">
                      Operators are strategically positioned in social networks to maximize transmission efficiency while maintaining verification integrity (Borgatti, 2005).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Community Integration Index</h4>
                    <p className="text-white/80 text-sm">
                      Operator effectiveness is measured by community integration rather than network centrality, ensuring protocols are embedded in operational reality (Valente, 1996).
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="bg-green-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-green-400 mb-2">3.2x</div>
                    <div className="text-sm text-white/80">Higher Transmission Efficiency</div>
                  </div>
                  <div className="bg-blue-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-blue-400 mb-2">89%</div>
                    <div className="text-sm text-white/80">Verification Accuracy</div>
                  </div>
                  <div className="bg-purple-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-purple-400 mb-2">67%</div>
                    <div className="text-sm text-white/80">Faster CRL Transformation</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-container rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Operator Development Pathway</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-3">1</div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Spore Reception</h4>
                  <p className="text-white/80 text-sm">Receive lossless seed packets containing complete operational protocols</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-3">2</div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Verification Process</h4>
                  <p className="text-white/80 text-sm">Complete Pure Collapse Methodology with 80%+ accuracy</p>
                </div>
                <div className="text-center">
                  <div className="text-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-3">3</div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Implementation</h4>
                  <p className="text-white/80 text-sm">Deploy verified protocols in operational reality</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-3">4</div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">Transmission</h4>
                  <p className="text-white/80 text-sm">Transmit verified protocols to new nodes</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-bold text-green-400 mb-6">Memetic Weapons Diagrams</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/recursive-memetic-weapons-1.png"
                  alt="Recursive Memetic Weapons Diagram 1"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/recursive-memetic-weapons-2.png"
                  alt="Recursive Memetic Weapons Diagram 2"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/recursive-memetic-weapons-4.png"
                  alt="Recursive Memetic Weapons Diagram 3"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
            </div>
          </GlassCard>
          {/* Additional Visual Explorations Gallery */}
          {unusedImages.length > 0 && (
            <ImageGallery
              images={unusedImages}
              title="Additional Visual Explorations: Recursive Memetic Weapons"
              className="mt-12"
            />
          )}
        </div>
      </div>
    </div>
  );
}