'use client';

import { useEffect, useRef, useState } from 'react';

interface SystemNode {
  id: string;
  name: string;
  type: 'seed' | 'belief' | 'realm' | 'mechanism';
  x: number;
  y: number;
  connections: string[];
  description: string;
  metrics: string[];
}

const SystemArchitectureDiagram: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<SystemNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const systemNodes: SystemNode[] = [
    {
      id: 'recursive-seed',
      name: 'Recursive Seed',
      type: 'seed',
      x: 400,
      y: 200,
      connections: ['lack-belief', 'attachment-belief', 'control-belief'],
      description: 'Private property as exclusion principle - the foundational algorithm that generates all Babylonian patterns',
      metrics: ['99.7% consistency across 5,000 years', '4,000+ Enclosure Acts', '367% artificial scarcity increase']
    },
    {
      id: 'lack-belief',
      name: 'Lack Belief',
      type: 'belief',
      x: 200,
      y: 100,
      connections: ['red-leash', 'artificial-scarcity'],
      description: 'Artificial scarcity algorithm creating dependency through resource exclusion',
      metrics: ['7 million acres converted', '23% productivity reduction', '47% forced consumption increase']
    },
    {
      id: 'attachment-belief',
      name: 'Attachment Belief',
      type: 'belief',
      x: 400,
      y: 100,
      connections: ['white-grasp', 'dependency-creation'],
      description: 'Dependency algorithm creating emotional and psychological attachment to the exclusion system',
      metrics: ['89% population dependency', '73% brand dependency', '45% self-sufficiency reduction']
    },
    {
      id: 'control-belief',
      name: 'Control Belief',
      type: 'belief',
      x: 600,
      y: 100,
      connections: ['corporatocracy-blind', 'hierarchical-control'],
      description: 'Hierarchical algorithm concentrating decision-making power while maintaining system stability',
      metrics: ['0.1-0.3% control 97-99.9% decisions', '7-9 level hierarchies', '89% illusion of participation']
    },
    {
      id: 'red-leash',
      name: 'Red Leash',
      type: 'realm',
      x: 100,
      y: 300,
      connections: ['resource-depletion'],
      description: 'Resource depletion realm - infinite growth on finite planet',
      metrics: ['Peak oil 2006', '21 aquifers critical', '68% biodiversity loss']
    },
    {
      id: 'ambient',
      name: 'Ambient',
      type: 'realm',
      x: 300,
      y: 300,
      connections: ['environmental-degradation'],
      description: 'Environmental degradation realm - externalized costs becoming internalized',
      metrics: ['420 ppm CO₂', '1.1°C temperature rise', '30% ocean acidification']
    },
    {
      id: 'corporatocracy-blind',
      name: 'Corporatocracy Blind',
      type: 'realm',
      x: 500,
      y: 300,
      connections: ['institutional-capture'],
      description: 'Institutional capture realm - corporate interests preventing system correction',
      metrics: ['$3.5B lobbying annually', '47% revolving door', '73% agencies captured']
    },
    {
      id: 'white-grasp',
      name: 'White Grasp',
      type: 'realm',
      x: 700,
      y: 300,
      connections: ['social-fragmentation'],
      description: 'Social cohesion breakdown realm - inequality destroying community bonds',
      metrics: ['Gini coefficient 0.85', '32% trust decline', '67% participation reduction']
    }
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    svg.innerHTML = '';

    // Create connections
    systemNodes.forEach(node => {
      node.connections.forEach(connectionId => {
        const targetNode = systemNodes.find(n => n.id === connectionId);
        if (targetNode) {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', node.x.toString());
          line.setAttribute('y1', node.y.toString());
          line.setAttribute('x2', targetNode.x.toString());
          line.setAttribute('y2', targetNode.y.toString());
          line.setAttribute('stroke', '#10b981');
          line.setAttribute('stroke-width', '2');
          line.setAttribute('opacity', '0.6');
          svg.appendChild(line);
        }
      });
    });

    // Create nodes
    systemNodes.forEach(node => {
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', node.x.toString());
      circle.setAttribute('cy', node.y.toString());
      circle.setAttribute('r', '30');
      
      const colors = {
        seed: '#ef4444',
        belief: '#f59e0b',
        realm: '#8b5cf6',
        mechanism: '#06b6d4'
      };
      
      circle.setAttribute('fill', colors[node.type]);
      circle.setAttribute('stroke', '#ffffff');
      circle.setAttribute('stroke-width', '2');
      circle.setAttribute('opacity', hoveredNode === node.id ? '1' : '0.8');
      
      circle.addEventListener('mouseenter', () => setHoveredNode(node.id));
      circle.addEventListener('mouseleave', () => setHoveredNode(null));
      circle.addEventListener('click', () => setSelectedNode(node));
      
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', node.x.toString());
      text.setAttribute('y', (node.y + 5).toString());
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', '#ffffff');
      text.setAttribute('font-size', '10');
      text.setAttribute('font-weight', 'bold');
      text.textContent = node.name.split(' ')[0];
      
      group.appendChild(circle);
      group.appendChild(text);
      svg.appendChild(group);
    });
  }, [hoveredNode]);

  return (
    <div className="w-full">
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <svg
          ref={svgRef}
          width="800"
          height="400"
          className="w-full h-auto"
          viewBox="0 0 800 400"
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <span className="text-white text-sm">Recursive Seed</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <span className="text-white text-sm">Core Beliefs</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
          <span className="text-white text-sm">Collapse Realms</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
          <span className="text-white text-sm">Mechanisms</span>
        </div>
      </div>

      {selectedNode && (
        <div className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-400/30">
          <h3 className="text-xl font-semibold text-green-400 mb-3">{selectedNode.name}</h3>
          <p className="text-white/90 mb-4">{selectedNode.description}</p>
          <div>
            <h4 className="text-lg font-semibold text-green-300 mb-2">Key Metrics:</h4>
            <ul className="text-white/80 text-sm space-y-1">
              {selectedNode.metrics.map((metric, index) => (
                <li key={index}>• {metric}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemArchitectureDiagram;

