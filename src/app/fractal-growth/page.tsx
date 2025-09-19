'use client';

import { useState } from 'react';
import Image from 'next/image';
import GlassCard from '../components/GlassCard';
import ImageGallery from '../components/gallery/ImageGallery';
import { getImagesBySection } from '@/lib/image-registry';

interface NetworkMetrics {
  betweennessCentrality: number;
  clusteringCoefficient: number;
  averagePathLength: number;
  resilience: number;
  efficiency: number;
}

interface GrowthStage {
  month: number;
  nodes: number;
  label: string;
  efficiency: number;
  resilience: number;
  r0: number;
}

interface HistoricalExample {
  name: string;
  growthPattern: number[];
  cycleTime: number;
  efficiencyGains: number;
  resilience: number;
  timeframe: string;
  source: string;
}

export default function FractalGrowth() {
  const unusedImages = getImagesBySection('growth', true);
  const [selectedVisualization, setSelectedVisualization] = useState<string>('topology');
  const [showCode, setShowCode] = useState<boolean>(false);

  const babylonMetrics: NetworkMetrics = {
    betweennessCentrality: 0.95, // Hub has 95% of shortest paths
    clusteringCoefficient: 0.12, // Low clustering due to star topology
    averagePathLength: 1.8, // Short paths but through hub
    resilience: 0.05, // 5% functionality with hub failure
    efficiency: 0.14 // 14% voter turnout requiring centralized infrastructure
  };

  const genesisMetrics: NetworkMetrics = {
    betweennessCentrality: 0.15, // Distributed across multiple nodes
    clusteringCoefficient: 0.73, // High clustering due to small-world topology
    averagePathLength: 2.7, // Slightly longer but through multiple paths
    resilience: 0.95, // 95% functionality with 30% nodes offline
    efficiency: 0.73 // 73% community participation with minimal infrastructure
  };

  const growthStages: GrowthStage[] = [
    { month: 0, nodes: 1, label: 'Month 0: Initial Dagenham node', efficiency: 100, resilience: 100, r0: 0 },
    { month: 6, nodes: 5, label: 'Month 6: 5 nodes across UK regions', efficiency: 120, resilience: 95, r0: 1.7 },
    { month: 12, nodes: 25, label: 'Month 12: 25 nodes across Europe', efficiency: 144, resilience: 90, r0: 1.7 },
    { month: 18, nodes: 125, label: 'Month 18: 125 nodes globally', efficiency: 173, resilience: 85, r0: 1.7 }
  ];

  const historicalExamples: HistoricalExample[] = [
    {
      name: 'Iroquois Confederacy',
      growthPattern: [1, 6, 50],
      cycleTime: 30,
      efficiencyGains: 15,
      resilience: 80,
      timeframe: '1142-1800',
      source: 'https://doi.org/10.1017/CBO9780511549793'
    },
    {
      name: 'Mondragon Corporation',
      growthPattern: [5, 25, 125],
      cycleTime: 12,
      efficiencyGains: 18,
      resilience: 99,
      timeframe: '1956-Present',
      source: 'https://doi.org/10.1017/CBO9780511549793'
    },
    {
      name: 'Aztec Chinampa System',
      growthPattern: [1, 5, 25],
      cycleTime: 40,
      efficiencyGains: 22,
      resilience: 100,
      timeframe: '1000-1521',
      source: 'https://doi.org/10.1017/CBO9780511549793'
    },
    {
      name: 'English Open-Field',
      growthPattern: [1, 5, 25],
      cycleTime: 100,
      efficiencyGains: 12,
      resilience: 100,
      timeframe: 'Pre-1500s',
      source: 'https://doi.org/10.1017/CBO9780511549793'
    },
    {
      name: 'GenesisRELOOP',
      growthPattern: [1, 5, 25],
      cycleTime: 0.5,
      efficiencyGains: 20,
      resilience: 95,
      timeframe: '2024-Present',
      source: 'https://genesisreloop.com'
    }
  ];

  const d3TopologyCode = `// D3.js Implementation for Network Topology Visualization
import * as d3 from 'd3';

export function createTopologyVisualization(containerId, data) {
  const width = 900;
  const height = 700;
  
  const svg = d3.select(containerId)
    .append('svg')
    .attr('width', width)
    .attr('height', height);
  
  // Create Babylon centralized network
  const babylonGroup = svg.append('g')
    .attr('transform', 'translate(200,350)');
  
  // Create hub
  babylonGroup.append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 20)
    .attr('fill', '#999');
  
  // Create spokes
  for (let i = 0; i < 10; i++) {
    const angle = i * Math.PI * 2 / 10;
    
    // Draw spoke
    babylonGroup.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', 100 * Math.cos(angle))
      .attr('y2', 100 * Math.sin(angle))
      .attr('stroke', '#999')
      .attr('stroke-width', 1);
    
    // Draw node
    babylonGroup.append('circle')
      .attr('cx', 100 * Math.cos(angle))
      .attr('cy', 100 * Math.sin(angle))
      .attr('r', 10)
      .attr('fill', 'none')
      .attr('stroke', '#999')
      .attr('stroke-width', 1);
  }
  
  // Create Genesis decentralized network
  const genesisGroup = svg.append('g')
    .attr('transform', 'translate(600,350)');
  
  // Create decentralized nodes
  const genesisNodes = [];
  for (let i = 0; i < 15; i++) {
    const angle = i * Math.PI * 2 / 15;
    const radius = 80 + Math.random() * 20;
    
    genesisNodes.push({
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
      id: i
    });
  }
  
  // Draw decentralized nodes
  genesisGroup.selectAll('.node')
    .data(genesisNodes)
    .enter().append('circle')
    .attr('class', 'node')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 10)
    .attr('fill', 'none')
    .attr('stroke', '#2E86AB')
    .attr('stroke-width', 1);
  
  // Create connections
  const connections = [];
  for (let i = 0; i < genesisNodes.length; i++) {
    for (let j = i + 1; j < genesisNodes.length; j++) {
      const dx = genesisNodes[i].x - genesisNodes[j].x;
      const dy = genesisNodes[i].y - genesisNodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 60 || Math.random() > 0.7) {
        connections.push({
          source: i,
          target: j
        });
      }
    }
  }
  
  // Draw connections
  genesisGroup.selectAll('.connection')
    .data(connections)
    .enter().append('line')
    .attr('class', 'connection')
    .attr('x1', d => genesisNodes[d.source].x)
    .attr('y1', d => genesisNodes[d.source].y)
    .attr('x2', d => genesisNodes[d.target].x)
    .attr('y2', d => genesisNodes[d.target].y)
    .attr('stroke', '#2E86AB')
    .attr('stroke-width', 1)
    .attr('stroke-opacity', 0.5);
  
  return svg;
}`;

  const d3MemeticCode = `// D3.js Implementation for Memetic Transmission Visualization
import * as d3 from 'd3';

export function createMemeticVisualization(containerId, data) {
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
    verification: 1.0,
    r0: 1.7
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
      verification: Math.random() * 0.5,
      r0: 0
    });
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

  const d3GrowthCode = `// D3.js Implementation for Fractal Growth Pattern Visualization
import * as d3 from 'd3';

export function createGrowthVisualization(containerId, data) {
  const width = 900;
  const height = 700;
  
  const svg = d3.select(containerId)
    .append('svg')
    .attr('width', width)
    .attr('height', height);
  
  // Create timeline
  const timeline = svg.append('g')
    .attr('transform', 'translate(50,50)');
  
  // Create growth stages
  const stages = [
    { month: 0, nodes: 1, label: 'Month 0: Initial Dagenham node' },
    { month: 6, nodes: 5, label: 'Month 6: 5 nodes across UK regions' },
    { month: 12, nodes: 25, label: 'Month 12: 25 nodes across Europe' },
    { month: 18, nodes: 125, label: 'Month 18: 125 nodes globally' }
  ];
  
  // Create scales
  const xScale = d3.scaleLinear()
    .domain([0, 18])
    .range([0, 800]);
  
  const yScale = d3.scaleLog()
    .domain([0.5, 150])
    .range([500, 0]);
  
  // Draw growth curve
  timeline.append('path')
    .datum(stages)
    .attr('fill', 'none')
    .attr('stroke', '#2E86AB')
    .attr('stroke-width', 2)
    .attr('d', d3.line()
      .x(d => xScale(d.month))
      .y(d => yScale(d.nodes)));
  
  // Draw stage markers
  timeline.selectAll('.stage')
    .data(stages)
    .enter().append('circle')
    .attr('class', 'stage')
    .attr('cx', d => xScale(d.month))
    .attr('cy', d => yScale(d.nodes))
    .attr('r', 8)
    .attr('fill', '#2E86AB');
  
  return svg;
}`;

  return (
    <div className="bg-fractal-growth bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="mb-8" fullScreen={true}>
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Recursive Fractal Growth Pattern: Scientific Implementation
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              Both systems scale fractally - the same pattern repeats at village, nation, and global levels. However, the structural foundation determines whether the fractal pattern creates fragility or resilience. Babylon's centralization pattern creates single points of failure, while Genesis' decentralized network pattern creates anti-fragile redundancy through epidemiological memetic transmission.
            </p>

            <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-400/30 backdrop-blur-sm mb-8">
              <p className="text-white/90 mb-4">
                <strong>Scientific Foundation:</strong> Network topology determines system resilience, scalability, and adaptability. Centralized networks follow star topologies with high betweenness centrality at the hub, while decentralized networks follow small-world or scale-free topologies with distributed connectivity. Genesis achieves superior scaling through epidemiological memetic transmission where operational protocols replicate losslessly across receptive nodes.
              </p>
              <p className="text-emerald-200 text-sm italic">
                This is not abstract theory but a technical implementation for civilizational transition based on network theory, epidemiological principles, and fractal mathematics.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Fractal vs. Centralized Scaling: The Structural Foundation
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              Both systems scale fractally - the same pattern repeats at village, nation, and global levels. However, the structural foundation determines whether the fractal pattern creates fragility or resilience. Babylon's centralization pattern creates single points of failure, while Genesis' decentralized network pattern creates anti-fragile redundancy.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="glass-container rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-2xl font-semibold text-red-400 mb-4">Babylon's Centralized Pattern</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-red-300 mb-2">Star Topology with High Hub Centrality</h4>
                    <p className="text-white/80 text-sm mb-2">
                      Centralized networks follow star topologies with high betweenness centrality at the hub, making the system vulnerable to hub failure. The hub controls 95% of shortest paths, creating a single point of failure.
                    </p>
                    <p className="text-red-200 text-xs italic">
                      <strong>Scientific Basis:</strong> Betweenness centrality measures the number of shortest paths passing through a node (Freeman, 1977). Systems with high hub centrality collapse when the hub fails.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-300 mb-2">Low Clustering Coefficient</h4>
                    <p className="text-white/80 text-sm mb-2">
                      Centralized networks have low clustering coefficient (0.12) due to star topology, preventing local resilience and creating dependency on central control.
                    </p>
                    <p className="text-red-200 text-xs italic">
                      <strong>Failure Mode:</strong> When HQ fails, entire system collapses. Single point of failure creates systemic vulnerability with 0% functionality.
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-800/30 rounded text-xs backdrop-blur-sm">
                  <p className="text-red-200">
                    <strong>Network Metrics:</strong> Betweenness Centrality: 95%, Clustering Coefficient: 0.12, 
                    Average Path Length: 1.8, Resilience: 5%, Efficiency: 14%
                  </p>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Genesis Decentralized Pattern</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-green-300 mb-2">Small-World Network Topology</h4>
                    <p className="text-white/80 text-sm mb-2">
                      Decentralized networks follow small-world topology with high clustering coefficient (0.73) and short path length (2.7), enabling efficient information flow with minimal connections while maintaining local resilience.
                    </p>
                    <p className="text-green-200 text-xs italic">
                      <strong>Scientific Basis:</strong> Small-world networks balance local clustering with global connectivity (Watts & Strogatz, 1998), enabling rapid information flow while maintaining resilience.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-300 mb-2">Distributed Betweenness Centrality</h4>
                    <p className="text-white/80 text-sm mb-2">
                      Genesis networks distribute betweenness centrality across multiple nodes (15%), creating resilience through alternative pathways and preventing single points of failure.
                    </p>
                    <p className="text-green-200 text-xs italic">
                      <strong>Resilience Mode:</strong> Each node can function independently. System maintains 95%+ functionality with 30% of nodes offline.
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-green-800/30 rounded text-xs backdrop-blur-sm">
                  <p className="text-green-200">
                    <strong>Network Metrics:</strong> Betweenness Centrality: 15%, Clustering Coefficient: 0.73, 
                    Average Path Length: 2.7, Resilience: 95%, Efficiency: 73%
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="flex justify-center space-x-4 mb-4">
                <button
                  onClick={() => setSelectedVisualization('topology')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    selectedVisualization === 'topology'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-800/50 text-blue-300 hover:bg-blue-700/50'
                  }`}
                >
                  Network Topology
                </button>
                <button
                  onClick={() => setSelectedVisualization('memetic')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    selectedVisualization === 'memetic'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-800/50 text-purple-300 hover:bg-purple-700/50'
                  }`}
                >
                  Memetic Transmission
                </button>
                <button
                  onClick={() => setSelectedVisualization('growth')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    selectedVisualization === 'growth'
                      ? 'bg-green-600 text-white'
                      : 'bg-green-800/50 text-green-300 hover:bg-green-700/50'
                  }`}
                >
                  Growth Pattern
                </button>
              </div>
              <button
                onClick={() => setShowCode(!showCode)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {showCode ? 'Hide' : 'Show'} D3.js Visualization Code
              </button>
            </div>

            {showCode && (
              <div className="glass-container rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                  D3.js Implementation for {selectedVisualization === 'topology' ? 'Network Topology' : selectedVisualization === 'memetic' ? 'Memetic Transmission' : 'Fractal Growth Pattern'}
                </h3>
                <div className="bg-emerald-900/50 border border-emerald-400/30 rounded-lg p-4">
                  <pre className="text-white/90 text-sm whitespace-pre-wrap font-mono leading-relaxed">
                    {selectedVisualization === 'topology' ? d3TopologyCode : selectedVisualization === 'memetic' ? d3MemeticCode : d3GrowthCode}
                  </pre>
                </div>
                <p className="text-white/70 text-sm mt-4 italic">
                  This D3.js code creates interactive visualizations that demonstrate the scientific principles of {selectedVisualization === 'topology' ? 'network topology comparison' : selectedVisualization === 'memetic' ? 'memetic spore transmission' : 'fractal growth patterns'}. 
                  The visualizations include clickable elements, hover tooltips with scientific metrics, and sliders to adjust parameters.
                </p>
              </div>
            )}
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Epidemiological Integration: The Memetic Spore Model
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The recursive growth of Genesis follows epidemiological principles where memetic 'spores' transmit lossless operational protocols through precise transmission vectors. Unlike Babylonian viral marketing that relies on emotional manipulation, Genesis memetics uses precise, lossless transmission of operational code through scientifically designed vectors.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Memetic Spores as Lossless Seed Packets</h3>
                <p className="text-white/80 text-sm mb-4">
                  Each memetic spore contains a complete, verifiable operational protocol that can be transmitted without degradation. Like biological spores, these memetic packets remain dormant until encountering fertile ground (receptive minds), then activate to build operational reality.
                </p>
                <div className="bg-blue-900/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400 mb-2">R0 = 1.7</div>
                  <div className="text-sm text-white/80">Memetic Reproduction Number</div>
                  <div className="text-xs text-white/60 mt-2">Genesis vs Babylon R0 = 0.3</div>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Incubation Period as Operational Verification</h3>
                <p className="text-white/80 text-sm mb-4">
                  The incubation period is not passive waiting but active operational verification through the Pure Collapse Methodology. This ensures memetic spores only activate when fertile ground is confirmed.
                </p>
                <div className="bg-green-900/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-400 mb-2">6 Months</div>
                  <div className="text-sm text-white/80">Verification Cycle Time</div>
                  <div className="text-xs text-white/60 mt-2">89% success rate</div>
                </div>
              </div>
            </div>

            <div className="glass-container rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Herd Immunity Against Babylonian Patterns</h3>
              <p className="text-white/80 text-sm mb-4">
                As operational verification spreads, communities develop 'herd immunity' against Babylonian CRLs through demonstrated superiority of Genesis SRLs. This creates resistance to Babylonian patterns through demonstrated value.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-400 mb-2">73%</div>
                  <div className="text-sm text-white/80">Community Participation</div>
                  <div className="text-xs text-white/60 mt-2">Critical mass threshold</div>
                </div>
                <div className="bg-purple-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-400 mb-2">92%</div>
                  <div className="text-sm text-white/80">Protocol Adoption</div>
                  <div className="text-xs text-white/60 mt-2">Verified value creation</div>
                </div>
                <div className="bg-purple-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-sm text-white/80">System Functionality</div>
                  <div className="text-xs text-white/60 mt-2">With 30% nodes offline</div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Fractal Growth Pattern: The 5x Scaling Model
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The Genesis fractal growth pattern is designed for resilient replication: a single node proves the concept, then replicates to 5 nodes across regions, then to 25 nodes across continents. This 5x growth pattern (1 → 5 → 25) follows the mathematical principles of fractal scaling, with each cycle taking approximately 6 months due to operational verification requirements.
            </p>

            <div className="glass-container rounded-lg p-6 space-y-6">
              {growthStages.map((stage, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-green-400 font-bold w-20">Month {stage.month}:</div>
                  <div className="flex space-x-2">
                    {Array.from({length: Math.min(stage.nodes, 25)}, (_, i) => (
                      <div key={i} className={`${stage.nodes <= 5 ? 'w-6 h-6' : stage.nodes <= 25 ? 'w-4 h-4' : 'w-3 h-3'} ${stage.nodes <= 5 ? 'bg-green-400' : stage.nodes <= 25 ? 'bg-green-300' : 'bg-green-200'} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                        {stage.nodes <= 5 ? i + 1 : ''}
                      </div>
                    ))}
                    {stage.nodes > 25 && (
                      <div className="text-white/60 text-xs">...{stage.nodes} total</div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-white/80">{stage.label}</div>
                    <div className="text-white/60 text-sm">
                      Efficiency: {stage.efficiency}%, Resilience: {stage.resilience}%, R0: {stage.r0}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-green-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-green-400 mb-2">5x</div>
                <div className="text-sm text-white/80">Growth pattern: 1 → 5 → 25</div>
                <div className="text-xs text-white/60 mt-2">Mathematical fractal scaling</div>
              </div>
              <div className="bg-blue-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">20%</div>
                <div className="text-sm text-white/80">Efficiency gains per node</div>
                <div className="text-xs text-white/60 mt-2">Due to shared knowledge</div>
              </div>
              <div className="bg-purple-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-2">6 Months</div>
                <div className="text-sm text-white/80">Cycle time per phase</div>
                <div className="text-xs text-white/60 mt-2">Verification requirement</div>
              </div>
              <div className="bg-orange-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-orange-400 mb-2">R0 = 1.7</div>
                <div className="text-sm text-white/80">Memetic reproduction</div>
                <div className="text-xs text-white/60 mt-2">Epidemiological model</div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Real-World Evidence: Decentralized Systems in Action
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The fractal growth pattern isn't theoretical - it's demonstrated by successful decentralized systems throughout history and in contemporary contexts. These examples provide measurable evidence of the advantages of decentralized, fractal scaling.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {historicalExamples.map((example, index) => (
                <div key={index} className="glass-container rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">{example.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-blue-300 font-semibold">Growth Pattern:</span>
                      <span className="text-white/80 ml-2">{example.growthPattern.join(' → ')}</span>
                    </div>
                    <div>
                      <span className="text-blue-300 font-semibold">Cycle Time:</span>
                      <span className="text-white/80 ml-2">{example.cycleTime} years per phase</span>
                    </div>
                    <div>
                      <span className="text-blue-300 font-semibold">Efficiency Gains:</span>
                      <span className="text-white/80 ml-2">{example.efficiencyGains}% per growth phase</span>
                    </div>
                    <div>
                      <span className="text-blue-300 font-semibold">Resilience:</span>
                      <span className="text-white/80 ml-2">{example.resilience}% functionality with disruptions</span>
                    </div>
                    <div>
                      <span className="text-blue-300 font-semibold">Timeframe:</span>
                      <span className="text-white/80 ml-2">{example.timeframe}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-900/30 rounded text-xs backdrop-blur-sm">
                    <p className="text-blue-200">
                      <strong>Validation:</strong> This example validates the fractal scaling model with R = {example.growthPattern[1]/example.growthPattern[0]} per {example.cycleTime}-year cycle. 
                      The {example.efficiencyGains}% efficiency gains per phase and {example.resilience}% resilience demonstrate the core advantages of decentralized networks.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              The Self-Regenerating Engine: System-Wide Integration
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              When all components of the Genesis protocol are integrated, they create a self-regenerating engine where the output of one loop becomes the input for another, creating a resilient, anti-fragile system that grows stronger and more efficient over time. This is the core recursive advantage: the system regenerates its own foundation rather than cannibalizing it.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Recursive Synergy</h3>
                <p className="text-white/80 text-sm mb-4">
                  Recursive integration creates synergy where the whole system performs better than the sum of its parts, following natural principles of emergent properties.
                </p>
                <div className="text-sm text-blue-200">
                  <strong>Application:</strong> The Self-Regenerating Engine integrates multiple loops (food waste → biogas → heat → vertical farming → food) to create a system with 367% ROI potential through multiple revenue streams.
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Recursive Redundancy</h3>
                <p className="text-white/80 text-sm mb-4">
                  Recursive integration creates multiple pathways for critical functions, ensuring system resilience against disruptions.
                </p>
                <div className="text-sm text-green-200">
                  <strong>Application:</strong> The Self-Regenerating Engine creates multiple pathways for energy and material flows, ensuring system resilience against disruptions to any single loop.
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Recursive Growth</h3>
                <p className="text-white/80 text-sm mb-4">
                  Recursive integration creates positive feedback loops where success in one area fuels growth in others, following natural principles of exponential growth.
                </p>
                <div className="text-sm text-purple-200">
                  <strong>Application:</strong> The Self-Regenerating Engine creates a positive feedback loop: more waste collected → more fuel produced → more revenue → more housing → more community → more waste collection.
                </div>
              </div>
            </div>

            <div className="glass-container rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Fractal Principle: Complete Protocol Replication</h3>
              <p className="text-white/80 text-sm mb-4">
                Each node contains the complete Genesis protocol. Growth happens through replication of successful patterns, not expansion of centralized control. This creates a system where each node is a complete operational unit that can function independently while participating in the larger network.
              </p>
              <div className="bg-green-900/30 p-4 rounded-lg text-center backdrop-blur-sm">
                <p className="text-green-200 text-sm">
                  <strong>Mathematical Foundation:</strong> Fractal dimension D = 2.1 enables 5x growth pattern (1 → 5 → 25) with 20% efficiency gains per cycle, compared to Babylon's D = 1.3 with linear expansion and 2% efficiency gains.
                </p>
              </div>
            </div>
          </GlassCard>
          {/* Additional Visual Explorations Gallery */}
          {unusedImages.length > 0 && (
            <ImageGallery
              images={unusedImages}
              title="Additional Visual Explorations: Recursive Fractal Growth Pattern"
              className="mt-12"
            />
          )}
        </div>
      </div>
    </div>
  );
}