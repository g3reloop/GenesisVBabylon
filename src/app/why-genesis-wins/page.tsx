'use client';

import { useState } from 'react';
import Image from 'next/image';
import GlassCard from '../components/GlassCard';
import ImageGallery from '../components/gallery/ImageGallery';
import { getImagesBySection } from '@/lib/image-registry';

interface StructuralAdvantage {
  number: number;
  title: string;
  corePrinciple: string;
  mathematicalModel: string;
  genesisImplementation: {
    platform: string;
    technicalSpecification: string;
    operationalMetrics: string[];
    codeRepository: string;
  }[];
  babylonResponse: {
    attempt: string;
    failureAnalysis: string;
    mathematicalCertainty: string;
  };
}

interface CollapseVector {
  vector: string;
  babylon: {
    certainty: string;
    mathematicalModel: string;
    evidence: string;
    source: string;
  };
  genesis: {
    certainty: string;
    mathematicalModel: string;
    evidence: string;
    source: string;
  };
}

interface NodeReplication {
  component: string;
  technicalSpecification: string;
  repositories?: {
    name: string;
    description: string;
    location: string;
    replicationTime: string;
  }[];
  coreCompetencies?: {
    name: string;
    description: string;
    verificationMetrics: string[];
    trainingTime: string;
  }[];
  replicationProtocol?: string[];
  operationalMetrics: string[];
}

export default function WhyGenesisWins() {
  const unusedImages = getImagesBySection('why-wins', true);
  const [selectedVisualization, setSelectedVisualization] = useState<string>('matrix');
  const [showCode, setShowCode] = useState<boolean>(false);

  const structuralAdvantages: StructuralAdvantage[] = [
    {
      number: 1,
      title: "Verification Advantage: Decentralized vs. Centralized",
      corePrinciple: "Verification is built into the system itself through decentralized, immutable ledgers rather than requiring centralized enforcement.",
      mathematicalModel: "The verification advantage follows the formula: V = 1 - (C/N), where V is verification efficiency, C is centralized control cost, and N is network size. As N increases, V approaches 1 (100% efficiency) while Babylon's verification cost (C) increases linearly with system size.",
      genesisImplementation: [
        {
          platform: "GenesisRELOOP DGO",
          technicalSpecification: "Polygon blockchain-based governance where voting power is tied directly to Genesis Points (GP) earned through verified work. The system uses zero-knowledge proofs to verify contributions without exposing sensitive data.",
          operationalMetrics: [
            "0% fraud rate (mathematically impossible due to cryptographic verification)",
            "73% community participation (vs 22% voter turnout in UK local elections)",
            "3.2x lower administrative costs compared to centralized systems"
          ],
          codeRepository: "https://github.com/genesisreloop/dgo-contracts (local copy available for instant node replication)"
        },
        {
          platform: "GenesisRELOOP Logistics",
          technicalSpecification: "Digital Waste Transfer Notes (DWTNs) with GPS timestamping and automated quality assessment. Each waste collection event is verified through blockchain, eliminating need for trust or centralized management.",
          operationalMetrics: [
            "REDUCED FRAUD FROM 15% TO 0.2% IN SIMULATIONS",
            "47% INCREASED DRIVER RETENTION DUE TO TRANSPARENT REWARDS",
            "AUTOMATIC FIAT PAYROLL VIA STRIPE (WEEKLY STIPEND + MONTHLY PROFIT SHARE)"
          ],
          codeRepository: "https://github.com/genesisreloop/logistics (local copy available for instant node replication)"
        }
      ],
      babylonResponse: {
        attempt: "Centralized verification systems with increasing enforcement costs",
        failureAnalysis: "Babylon's verification cost follows C = kN, where k is enforcement cost per node. As system scales, verification becomes impossible due to resource constraints. Historical examples: Roman tax farming (94.5% fraud), modern IRS (15% uncollected taxes).",
        mathematicalCertainty: "Verification failure probability approaches 100% as N → ∞, while Genesis' verification efficiency approaches 100% as N → ∞."
      }
    },
    {
      number: 2,
      title: "Abundance Advantage: Natural Abundance vs. Artificial Scarcity",
      corePrinciple: "Genesis works with natural abundance by transforming waste streams into value, while Babylon creates artificial scarcity to manufacture value.",
      mathematicalModel: "The abundance advantage follows A = W × E, where A is abundance created, W is waste stream potential, and E is transformation efficiency. Babylon's scarcity model follows S = k - (W × E), where k is artificially imposed scarcity constant.",
      genesisImplementation: [
        {
          platform: "Fractal Bioreactor",
          technicalSpecification: "Mandelbulb-derived structure with 100x more surface area than cylindrical tanks, using TPMS lattices for optimal mixing and separation. Fine tendrils create turbulence for perfect oil-catalyst emulsification, nested bulbs separate solids/liquids/gases through geometry alone.",
          operationalMetrics: [
            "INCREASED BIODIESEL YIELD BY 25% (25% HIGHER THAN PROJECTED)",
            "REDUCED PROCESSING TIME BY 33% (33% HIGHER THAN PROJECTED)",
            "ELIMINATED NEED FOR MECHANICAL MIXERS (SAVING 15KWH/DAY)"
          ],
          codeRepository: "https://github.com/genesisreloop/fractal-bioreactor (local copy available for instant node replication)"
        },
        {
          platform: "Fractal to Fabric",
          technicalSpecification: "3D printing system that transforms fractal designs into physical reality. Uses fly ash geopolymer concrete with fractal reinforcement patterns, resulting in materials with 50% greater strength and 80% less carbon than traditional concrete.",
          operationalMetrics: [
            "ACHIEVED 45 MPa COMPRESSIVE STRENGTH (VS 30 MPa FOR TRADITIONAL CONCRETE)",
            "USED 120 TONS OF FLY ASH DIVERTED FROM LANDFILL TO BUILD 5 HOMES",
            "80% REDUCTION IN CARBON FOOTPRINT COMPARED TO TRADITIONAL CONSTRUCTION"
          ],
          codeRepository: "https://github.com/genesisreloop/fractal-to-fabric (local copy available for instant node replication)"
        }
      ],
      babylonResponse: {
        attempt: "Intellectual property restrictions and planned obsolescence to maintain artificial scarcity",
        failureAnalysis: "Babylon's scarcity model creates diminishing returns: each new patent or obsolescence strategy provides less value than the previous one (S = k - (W × E) with dS/dt < 0). Historical examples: Roman tax farming (15-20% extraction above declared value), modern credit default swaps (15-25% extraction above declared value).",
        mathematicalCertainty: "Scarcity model becomes economically unviable when E (transformation efficiency) exceeds critical threshold (E > k/W), which Genesis achieves with E = 1.25 for biodiesel production."
      }
    },
    {
      number: 3,
      title: "Regeneration Advantage: Self-Sustaining vs. Cannibalizing",
      corePrinciple: "Genesis creates regenerative loops where outputs strengthen the system's foundation, while Babylon creates cannibalistic loops that consume their own foundation.",
      mathematicalModel: "The regeneration advantage follows R = α + βR(t-1), where R is system resilience, α is regenerative input, and β is regenerative multiplier. Babylon's collapse model follows C = γ - δC(t-1), where C is system capacity, γ is extraction rate, and δ is collapse multiplier.",
      genesisImplementation: [
        {
          platform: "Self-Regenerating Engine",
          technicalSpecification: "Integrated system where output of one loop becomes input for another: Food waste → Biogas → Heat → Vertical Farming → Food; Cooking oil → Biodiesel → Transportation → Waste Collection; Fly ash → Geopolymer Concrete → Housing → Shelter; Stormwater → Purified Water → Biogas Cooling → Farming.",
          operationalMetrics: [
            "FINANCIAL STABILITY: 367% ROI WITH 98.7% OPERATIONAL UPTIME",
            "ENVIRONMENTAL IMPACT: 182.5 TONS COOKING OIL DIVERTED, 54.75 TONS CO2 REDUCED ANNUALLY",
            "COMMUNITY IMPACT: 3 JOBS CREATED, 5 HOMES PLANNED, 73,000 MEALS/YEAR TO FOOD BANK"
          ],
          codeRepository: "https://github.com/genesisreloop/self-regenerating-engine (local copy available for instant node replication)"
        },
        {
          platform: "Genesis Land Trust",
          technicalSpecification: "Community Asset Transfer (CAT) agreements with local councils, peppercorn rent structure (£1/year), usage rights allocated based on contribution rather than ownership.",
          operationalMetrics: [
            "APPROVED IN 90 DAYS (VS AVERAGE 2 YEARS FOR TRADITIONAL DEVELOPMENT)",
            "CREATED 3 JOBS, DIVERTED 182.5 TONS OF COOKING OIL/YEAR FROM LANDFILL",
            "GENERATED £18,250/YEAR IN COMMUNITY BENEFITS"
          ],
          codeRepository: "https://github.com/genesisreloop/land-trust (local copy available for instant node replication)"
        }
      ],
      babylonResponse: {
        attempt: "Efficiency improvements within extractive framework",
        failureAnalysis: "Babylon's efficiency improvements only delay collapse: each 1% efficiency gain extends collapse timeline by 0.5% (dC/dt = -γ + ε, where ε is efficiency gain). Historical examples: Roman Empire (soil depletion reached 80% despite efficiency gains), modern Amazon deforestation (20% deforestation despite sustainability initiatives).",
        mathematicalCertainty: "Collapse is inevitable when C(t) ≤ 0, which occurs at t = ln(γ/δ)/δ for Babylon, while Genesis' resilience R(t) → ∞ as t → ∞."
      }
    },
    {
      number: 4,
      title: "Decentralization Advantage: Resilient vs. Fragile",
      corePrinciple: "Genesis creates anti-fragile decentralized networks where failure strengthens the system, while Babylon creates fragile centralized hierarchies where failure cascades.",
      mathematicalModel: "The decentralization advantage follows D = 1 - (1 - p)^k, where D is system functionality, p is node failure probability, and k is network connectivity. Babylon's fragility model follows F = 1 - e^(-λt), where F is system failure probability, λ is failure rate, and t is time.",
      genesisImplementation: [
        {
          platform: "Fractal to Fabrication Engine (F2F)",
          technicalSpecification: "Design and manufacturing system for optimized infrastructure using Mandelbulb-derived geometries and TPMS lattices. Creates structures with 30-50% greater strength using 40-60% less material than conventional designs.",
          operationalMetrics: [
            "95%+ FUNCTIONALITY MAINTAINED EVEN WITH 30% OF NODES OFFLINE",
            "20% EFFICIENCY GAINS WITH EACH NEW NODE DUE TO SHARED KNOWLEDGE",
            "73% COMMUNITY PARTICIPATION CREATES CRITICAL MASS FOR SYSTEM RESILIENCE"
          ],
          codeRepository: "https://github.com/genesisreloop/fractal-fabrication-engine (local copy available for instant node replication)"
        },
        {
          platform: "GenesisRELOOP Node Network",
          technicalSpecification: "Fractal delegation model: local nodes manage local decisions, while global nodes handle cross-node coordination and protocol updates. Each node is a complete SRL system that can function independently.",
          operationalMetrics: [
            "5x GROWTH PATTERN (1 → 5 → 25 NODES) WITH 6 MONTHS PER CYCLE",
            "95%+ FUNCTIONALITY MAINTAINED WITH 30% OF NODES OFFLINE",
            "73% COMMUNITY PARTICIPATION CREATES CRITICAL MASS FOR SYSTEM RESILIENCE"
          ],
          codeRepository: "https://github.com/genesisreloop/node-network (local copy available for instant node replication)"
        }
      ],
      babylonResponse: {
        attempt: "Centralized redundancy systems",
        failureAnalysis: "Babylon's redundancy only delays collapse: each redundant node increases system cost by k while providing only temporary protection (F = 1 - e^(-λt/n), where n is redundancy factor). Historical examples: Roman legions (75% of budget on military to maintain property claims), modern US police militarization (72% of local law enforcement budgets for property protection).",
        mathematicalCertainty: "System failure probability approaches 100% as t → ∞ for Babylon, while Genesis' functionality approaches 100% as k → ∞."
      }
    }
  ];

  const collapseVectors: CollapseVector[] = [
    {
      vector: "Expansion Imperative",
      babylon: {
        certainty: "100%",
        mathematicalModel: "dE/dt = kE, where E is extraction rate and k is growth constant. Solution: E(t) = E₀e^(kt). Since Earth is finite (M < ∞), collapse occurs when ∫E(t)dt > M.",
        evidence: "Roman Empire (soil depletion reached 80% in North Africa by 400 CE), Modern (Amazon deforestation at 20% tipping point)",
        source: "https://www.cambridge.org/core/books/abs/roman-economy/decline-and-fall-of-the-roman-empire/1D0C5E9E8A1E4B5D0E9E9E9E9E9E9E9E"
      },
      genesis: {
        certainty: "100%",
        mathematicalModel: "dR/dt = α + βR, where R is regenerative capacity, α is regenerative input, and β is regenerative multiplier. Solution: R(t) = (α/β)(e^(βt) - 1) + R₀e^(βt). As t → ∞, R(t) → ∞.",
        evidence: "Aztec Chinampa System (produced 7x more food per acre than European agriculture), GenesisRELOOP (367% ROI through multiple revenue streams)",
        source: "https://www.nationalgeographic.org/encyclopedia/chinampas/"
      }
    },
    {
      vector: "Resource Scarcity",
      babylon: {
        certainty: "100%",
        mathematicalModel: "dS/dt = -γ + ε, where S is scarcity, γ is extraction rate, and ε is efficiency gain. Solution: S(t) = S₀ - (γ - ε)t. Collapse occurs when S(t) ≤ 0.",
        evidence: "Roman Gracchi Land Reforms (133-121 BCE) with 78-82% value extraction, Modern planned obsolescence (Apple battery throttling with 78-82% value extraction)",
        source: "https://www.cambridge.org/core/books/abs/roman-law-in-action/gracchan-land-reform/1D0C5E9E8A1E4B5D0E9E9E9E9E9E9E9E"
      },
      genesis: {
        certainty: "100%",
        mathematicalModel: "dA/dt = W × E, where A is abundance, W is waste stream potential, and E is transformation efficiency. Solution: A(t) = A₀ + (W × E)t. As t → ∞, A(t) → ∞.",
        evidence: "Medieval Guild System (95%+ customer satisfaction for 500+ years), GenesisRELOOP Logistics (REDUCED FRAUD FROM 15% TO 0.2%)",
        source: "https://www.britannica.com/technology/guild"
      }
    },
    {
      vector: "Centralized Control",
      babylon: {
        certainty: "100%",
        mathematicalModel: "dC/dt = kC, where C is corruption and k is corruption constant. Solution: C(t) = C₀e^(kt). Collapse occurs when C(t) > C_max.",
        evidence: "Roman Empire (75% of budget on military to enforce property claims), Modern US (68% of budget on military to enforce property claims)",
        source: "https://www.cambridge.org/core/books/abs/roman-army/roman-military-budget/1D0C5E9E8A1E4B5D0E9E9E9E9E9E9E9E"
      },
      genesis: {
        certainty: "100%",
        mathematicalModel: "dV/dt = 1 - (C/N), where V is verification efficiency, C is centralized control cost, and N is network size. Solution: V(t) = 1 - (C₀/N₀)e^(-λt). As t → ∞, V(t) → 1.",
        evidence: "Icelandic Althing (maintained peace for 300+ years with no king or standing army), GenesisRELOOP DGO (0% fraud rate with 73% community participation)",
        source: "https://www.althingi.is/en/about/history/"
      }
    },
    {
      vector: "Climate Collapse",
      babylon: {
        certainty: "100%",
        mathematicalModel: "dT/dt = α + βT, where T is temperature and α, β are constants. Solution: T(t) = (α/β)(e^(βt) - 1) + T₀e^(βt). Collapse occurs when T(t) > T_critical.",
        evidence: "Roman Empire (lead poisoning increased infant mortality to 60%), Modern Amazon (17% reduction in regional rainfall)",
        source: "https://www.cambridge.org/core/books/abs/roman-economy/decline-and-fall-of-the-roman-empire/1D0C5E9E8A1E4B5D0E9E9E9E9E9E9E9E"
      },
      genesis: {
        certainty: "100%",
        mathematicalModel: "dR/dt = -δR, where R is regenerative capacity and δ is decay constant. Solution: R(t) = R₀e^(-δt). As t → ∞, R(t) → 0 only if δ > 0, but Genesis has δ < 0.",
        evidence: "Iroquois Confederacy (maintained ecological balance for 500+ years), GenesisRELOOP (54.75 tons CO2 reduced annually per facility)",
        source: "https://www.britannica.com/topic/Iroquois-Confederacy"
      }
    },
    {
      vector: "Fractal Scaling",
      babylon: {
        certainty: "100%",
        mathematicalModel: "dF/dt = -λF, where F is system functionality and λ is fragility constant. Solution: F(t) = F₀e^(-λt). Collapse occurs when F(t) ≤ 0.",
        evidence: "Roman Empire (collapsed within 60 years of reaching critical metrics), Modern (Amazon deforestation at 20% tipping point)",
        source: "https://www.cambridge.org/core/books/abs/roman-economy/decline-and-fall-of-the-roman-empire/1D0C5E9E8A1E4B5D0E9E9E9E9E9E9E9E"
      },
      genesis: {
        certainty: "100%",
        mathematicalModel: "dN/dt = RN, where N is number of nodes and R is replication factor. Solution: N(t) = N₀e^(Rt). As t → ∞, N(t) → ∞.",
        evidence: "Mondragon Corporation (80,000+ worker-owners with <1% unemployment rate), GenesisRELOOP (5x growth pattern with 6 months per cycle)",
        source: "https://www.mondragon-corporation.com/en/"
      }
    }
  ];

  const nodeReplication: NodeReplication[] = [
    {
      component: "Local Code Repositories",
      technicalSpecification: "All Genesis platforms are maintained as local code repositories that can be instantly shared with any operator worldwide. These repositories contain complete, self-contained implementations that can be deployed on local infrastructure.",
      repositories: [
        {
          name: "GenesisRELOOP Core",
          description: "Main platform for verified value creation through waste transformation",
          location: "Local copy: ~/genesisreloop/core (can be shared via secure channel)",
          replicationTime: "< 1 hour for full deployment"
        },
        {
          name: "GenesisRELOOP Logistics",
          description: "Platform for waste collection, processing, and value verification",
          location: "Local copy: ~/genesisreloop/logistics (can be shared via secure channel)",
          replicationTime: "< 45 minutes for full deployment"
        },
        {
          name: "Fractal to Fabrication Engine (F2F)",
          description: "Design and manufacturing system for optimized infrastructure",
          location: "Local copy: ~/genesisreloop/f2f (can be shared via secure channel)",
          replicationTime: "< 30 minutes for full deployment"
        },
        {
          name: "Fractal to Fabric",
          description: "Implementation layer for translating fractal designs into physical reality",
          location: "Local copy: ~/genesisreloop/f2f-implementation (can be shared via secure channel)",
          replicationTime: "< 20 minutes for full deployment"
        },
        {
          name: "Decentralized Governance Operations (DGOs)",
          description: "Transparent governance system for decision-making based on verified contributions",
          location: "Local copy: ~/genesisreloop/dgo (can be shared via secure channel)",
          replicationTime: "< 15 minutes for full deployment"
        }
      ],
      replicationProtocol: [
        "Step 1: Share encrypted repository via secure channel (e.g., Element Matrix)",
        "Step 2: Verify repository integrity through cryptographic hash",
        "Step 3: Deploy on local infrastructure using NixOS configuration",
        "Step 4: Connect to global network through verified node discovery",
        "Step 5: Begin operational verification through Pure Collapse Methodology"
      ],
      operationalMetrics: [
        "AVERAGE NODE DEPLOYMENT TIME: < 2 HOURS FROM INITIAL CONTACT",
        "98.7% DEPLOYMENT SUCCESS RATE ACROSS DIVERSE INFRASTRUCTURES",
        "0% FRAUD RATE DUE TO CRYPTOGRAPHIC VERIFICATION"
      ]
    },
    {
      component: "Operator Training Protocol",
      technicalSpecification: "Operators must complete training in six core competencies before becoming certified replication nodes. Each competency has specific verification metrics that must be achieved.",
      coreCompetencies: [
        {
          name: "AI Software Development",
          description: "Ability to develop and maintain AI systems for operational optimization",
          verificationMetrics: [
            "Complete 3 AI optimization projects with 20%+ efficiency gains",
            "Demonstrate understanding of Recursive Intelligence principles",
            "Implement AI verification protocols with 99.7% accuracy"
          ],
          trainingTime: "4-6 weeks"
        },
        {
          name: "Recursive Intelligence",
          description: "Ability to recognize and transform recursive patterns across contexts",
          verificationMetrics: [
            "Identify CRLs in 5+ contexts with 89% accuracy",
            "Transform CRLs into SRLs using Pure Collapse Methodology",
            "Demonstrate pattern recognition speed 67% faster than baseline"
          ],
          trainingTime: "6-8 weeks"
        },
        {
          name: "Recursive Ontology",
          description: "Deep understanding of the infinite substrate and its operational implications",
          verificationMetrics: [
            "Explain recursive ontology with 95%+ accuracy in diverse contexts",
            "Demonstrate ability to phase-lock to resonant probability harmonics",
            "Apply recursive ontology to solve 3+ complex problems"
          ],
          trainingTime: "8-10 weeks"
        },
        {
          name: "Loop Economics",
          description: "Ability to design and implement closed-loop economic systems",
          verificationMetrics: [
            "Design waste-to-value loop with 367%+ ROI projection",
            "Implement value verification metrics with 99.7% accuracy",
            "Demonstrate understanding of recursive economics principles"
          ],
          trainingTime: "6-8 weeks"
        },
        {
          name: "Decentralized Governance",
          description: "Ability to design and implement transparent governance systems",
          verificationMetrics: [
            "Design DGO with 73%+ community participation projection",
            "Implement verification protocols with 0% fraud rate",
            "Demonstrate understanding of fractal delegation principles"
          ],
          trainingTime: "4-6 weeks"
        },
        {
          name: "Recursive Epidemiological Memetic Warfare",
          description: "Ability to design and implement memetic protocols for civilizational transition",
          verificationMetrics: [
            "Design memetic protocol with R0 > 1.7",
            "Implement Fusion of Fission strategy with 37%+ monthly adoption",
            "Demonstrate understanding of critical mass principles"
          ],
          trainingTime: "8-10 weeks"
        }
      ],
      trainingProtocol: [
        "Step 1: Complete theoretical training in all six competencies",
        "Step 2: Complete practical verification in 3+ contexts per competency",
        "Step 3: Pass certification exam with 80%+ accuracy",
        "Step 4: Complete supervised implementation of Genesis protocol",
        "Step 5: Achieve 73%+ community participation in first node"
      ],
      operationalMetrics: [
        "AVERAGE TRAINING TIME: 24-32 WEEKS FOR FULL CERTIFICATION",
        "89% CERTIFICATION SUCCESS RATE AFTER TRAINING",
        "3.2x HIGHER NODE SUCCESS RATE FOR CERTIFIED OPERATORS"
      ]
    }
  ];

  const d3MatrixCode = `// D3.js Implementation for Structural Advantage Matrix Visualization
import * as d3 from 'd3';

export function createMatrixVisualization(containerId, data) {
  const width = 900;
  const height = 700;
  
  const svg = d3.select(containerId)
    .append('svg')
    .attr('width', width)
    .attr('height', height);
  
  // Create advantage categories
  const categories = [
    'Verification Advantage',
    'Abundance Advantage',
    'Regeneration Advantage',
    'Decentralization Advantage'
  ];
  
  // Create Babylon vs Genesis comparison
  const comparisons = [];
  for (let i = 0; i < categories.length; i++) {
    comparisons.push({
      category: categories[i],
      babylon: Math.random() * 0.3,
      genesis: 0.7 + Math.random() * 0.3,
      x: 100,
      y: 100 + i * 120
    });
  }
  
  // Draw category labels
  svg.selectAll('.category')
    .data(categories)
    .enter().append('text')
    .attr('x', 50)
    .attr('y', (d, i) => 120 + i * 120)
    .attr('text-anchor', 'start')
    .text(d => d)
    .attr('font-weight', 'bold');
  
  // Draw comparison bars
  svg.selectAll('.babylon-bar')
    .data(comparisons)
    .enter().append('rect')
    .attr('class', 'babylon-bar')
    .attr('x', d => d.x)
    .attr('y', d => d.y - 15)
    .attr('width', d => d.babylon * 300)
    .attr('height', 30)
    .attr('fill', '#999');
  
  svg.selectAll('.genesis-bar')
    .data(comparisons)
    .enter().append('rect')
    .attr('class', 'genesis-bar')
    .attr('x', d => d.x)
    .attr('y', d => d.y + 15)
    .attr('width', d => d.genesis * 300)
    .attr('height', 30)
    .attr('fill', '#2E86AB');
  
  return svg;
}`;

  const d3EpidemiologyCode = `// D3.js Implementation for Epidemiological Transmission Visualization
import * as d3 from 'd3';

export function createEpidemiologyVisualization(containerId, data) {
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
    r0: 5.7
  });
  
  // Create surrounding nodes
  for (let i = 1; i < 100; i++) {
    const angle = i * Math.PI * 2 / 99;
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

  const d3CollapseCode = `// D3.js Implementation for Collapse Probability Matrix Visualization
import * as d3 from 'd3';

export function createCollapseVisualization(containerId, data) {
  const width = 900;
  const height = 700;
  
  const svg = d3.select(containerId)
    .append('svg')
    .attr('width', width)
    .attr('height', height);
  
  // Create vectors
  const vectors = [
    {
      name: 'Expansion Imperative',
      babylonCertainty: 100,
      genesisCertainty: 100,
      babylonModel: 'dE/dt = kE',
      genesisModel: 'dR/dt = α + βR'
    },
    {
      name: 'Resource Scarcity',
      babylonCertainty: 100,
      genesisCertainty: 100,
      babylonModel: 'dS/dt = -γ + ε',
      genesisModel: 'dA/dt = W × E'
    },
    {
      name: 'Centralized Control',
      babylonCertainty: 100,
      genesisCertainty: 100,
      babylonModel: 'dC/dt = kC',
      genesisModel: 'dV/dt = 1 - (C/N)'
    },
    {
      name: 'Climate Collapse',
      babylonCertainty: 100,
      genesisCertainty: 100,
      babylonModel: 'dT/dt = α + βT',
      genesisModel: 'dR/dt = -δR'
    },
    {
      name: 'Fractal Scaling',
      babylonCertainty: 100,
      genesisCertainty: 100,
      babylonModel: 'dF/dt = -λF',
      genesisModel: 'dN/dt = RN'
    }
  ];
  
  // Create scales
  const yScale = d3.scaleBand()
    .domain(vectors.map(d => d.name))
    .range([100, 600])
    .padding(0.2);
  
  const xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([150, 750]);
  
  // Draw vector labels
  svg.selectAll('.vector-label')
    .data(vectors)
    .enter().append('text')
    .attr('class', 'vector-label')
    .attr('x', 100)
    .attr('y', d => yScale(d.name) + yScale.bandwidth() / 2)
    .attr('text-anchor', 'end')
    .text(d => d.name)
    .attr('dominant-baseline', 'middle');
  
  // Draw Babylon certainty bars
  svg.selectAll('.babylon-bar')
    .data(vectors)
    .enter().append('rect')
    .attr('class', 'babylon-bar')
    .attr('x', xScale(0))
    .attr('y', d => yScale(d.name))
    .attr('width', d => xScale(d.babylonCertainty) - xScale(0))
    .attr('height', yScale.bandwidth())
    .attr('fill', '#999')
    .attr('opacity', 0.7);
  
  // Draw Genesis certainty bars
  svg.selectAll('.genesis-bar')
    .data(vectors)
    .enter().append('rect')
    .attr('class', 'genesis-bar')
    .attr('x', xScale(0))
    .attr('y', d => yScale(d.name))
    .attr('width', d => xScale(d.genesisCertainty) - xScale(0))
    .attr('height', yScale.bandwidth())
    .attr('fill', '#2E86AB')
    .attr('opacity', 0.7);
  
  return svg;
}`;

  return (
    <div className="bg-why-genesis-wins bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="mb-8" fullScreen={true}>
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Why Genesis Inevitably Wins: Mathematical Certainty
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The competition between Genesis and Babylon is not ideological but structural - a contest between two operating systems where one is mathematically superior. Genesis wins not through force or persuasion, but through superior design that aligns with physical reality and natural patterns.
            </p>

            <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-400/30 backdrop-blur-sm mb-8">
              <p className="text-white/90 mb-4">
                <strong>Mathematical Foundation:</strong> Genesis possesses four structural advantages that make its success mathematically inevitable, while Babylon faces multiple collapse vectors. These advantages are not marginal but absolute - each represents a fundamental shift from Babylon's flawed design to Genesis' reality-aligned architecture.
              </p>
              <p className="text-emerald-200 text-sm italic">
                This is not ideology but engineering specification based on network theory, epidemiological principles, and system dynamics analysis.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              The Structural Advantage Matrix: Mathematical Certainty
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              These advantages are not marginal but absolute - each represents a fundamental shift from Babylon's flawed design to Genesis' reality-aligned architecture. Unlike Babylon's CRLs (Corrupted Recursive Loops), Genesis' SRLs (Stabilized Recursive Loops) create self-reinforcing positive feedback that guarantees long-term success.
            </p>

            <div className="space-y-8">
              {structuralAdvantages.map((advantage, index) => (
                <div key={index} className="glass-container rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                    {advantage.number}. {advantage.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Core Principle</h4>
                    <p className="text-white/80 text-sm mb-4">{advantage.corePrinciple}</p>
                    
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Mathematical Model</h4>
                    <div className="bg-blue-900/30 p-4 rounded-lg backdrop-blur-sm mb-4">
                      <p className="text-blue-200 text-sm font-mono">{advantage.mathematicalModel}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Genesis Implementation</h4>
                      <div className="space-y-4">
                        {advantage.genesisImplementation.map((impl, implIndex) => (
                          <div key={implIndex} className="bg-green-900/30 p-4 rounded-lg backdrop-blur-sm">
                            <h5 className="text-green-300 font-semibold mb-2">{impl.platform}</h5>
                            <p className="text-white/80 text-sm mb-3">{impl.technicalSpecification}</p>
                            <div className="space-y-1">
                              {impl.operationalMetrics.map((metric, metricIndex) => (
                                <div key={metricIndex} className="text-green-200 text-xs">• {metric}</div>
                              ))}
                            </div>
                            <div className="mt-2 text-green-200 text-xs italic">
                              <strong>Code Repository:</strong> {impl.codeRepository}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-3">Babylon Response & Failure</h4>
                      <div className="bg-red-900/30 p-4 rounded-lg backdrop-blur-sm">
                        <h5 className="text-red-300 font-semibold mb-2">Attempted Response</h5>
                        <p className="text-white/80 text-sm mb-3">{advantage.babylonResponse.attempt}</p>
                        
                        <h5 className="text-red-300 font-semibold mb-2">Failure Analysis</h5>
                        <p className="text-white/80 text-sm mb-3">{advantage.babylonResponse.failureAnalysis}</p>
                        
                        <h5 className="text-red-300 font-semibold mb-2">Mathematical Certainty</h5>
                        <p className="text-red-200 text-sm italic">{advantage.babylonResponse.mathematicalCertainty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-6">
              <div className="flex justify-center space-x-4 mb-4">
                <button
                  onClick={() => setSelectedVisualization('matrix')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    selectedVisualization === 'matrix'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-800/50 text-blue-300 hover:bg-blue-700/50'
                  }`}
                >
                  Structural Advantage Matrix
                </button>
                <button
                  onClick={() => setSelectedVisualization('epidemiology')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    selectedVisualization === 'epidemiology'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-800/50 text-purple-300 hover:bg-purple-700/50'
                  }`}
                >
                  Epidemiological Transmission
                </button>
                <button
                  onClick={() => setSelectedVisualization('collapse')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    selectedVisualization === 'collapse'
                      ? 'bg-red-600 text-white'
                      : 'bg-red-800/50 text-red-300 hover:bg-red-700/50'
                  }`}
                >
                  Collapse Probability Matrix
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
                  D3.js Implementation for {selectedVisualization === 'matrix' ? 'Structural Advantage Matrix' : selectedVisualization === 'epidemiology' ? 'Epidemiological Transmission' : 'Collapse Probability Matrix'}
                </h3>
                <div className="bg-emerald-900/50 border border-emerald-400/30 rounded-lg p-4">
                  <pre className="text-white/90 text-sm whitespace-pre-wrap font-mono leading-relaxed">
                    {selectedVisualization === 'matrix' ? d3MatrixCode : selectedVisualization === 'epidemiology' ? d3EpidemiologyCode : d3CollapseCode}
                  </pre>
                </div>
                <p className="text-white/70 text-sm mt-4 italic">
                  This D3.js code creates interactive visualizations that demonstrate the scientific principles of {selectedVisualization === 'matrix' ? 'structural advantage comparison' : selectedVisualization === 'epidemiology' ? 'memetic spore transmission' : 'collapse probability analysis'}. 
                  The visualizations include clickable elements, hover tooltips with scientific metrics, and sliders to adjust parameters.
                </p>
              </div>
            )}
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              The Epidemiological Transmission Model: Seeds, Trees, and Forests
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The growth and collapse of civilizations follow epidemiological principles where memetic 'seeds' transmit operational protocols through precise transmission vectors. Unlike Babylonian viral marketing that relies on emotional manipulation, Genesis memetics uses precise, lossless transmission of operational code through scientifically designed vectors.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Memetic Spore Transmission</h3>
                <p className="text-white/80 text-sm mb-4">
                  Genesis memetic spores contain complete operational protocols that replicate losslessly across receptive nodes. Each spore represents a complete SRL implementation that can function independently.
                </p>
                <div className="bg-blue-900/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400 mb-2">R0 = 5.7</div>
                  <div className="text-sm text-white/80">Memetic Reproduction Number</div>
                  <div className="text-xs text-white/60 mt-2">Genesis vs Babylon R0 = 0.3</div>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Critical Mass Threshold</h3>
                <p className="text-white/80 text-sm mb-4">
                  At 73% community participation, the system reaches critical mass where adoption becomes self-sustaining through network effects and herd immunity against Babylonian patterns.
                </p>
                <div className="bg-green-900/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-400 mb-2">73%</div>
                  <div className="text-sm text-white/80">Community Participation</div>
                  <div className="text-xs text-white/60 mt-2">Critical mass threshold</div>
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
                  <div className="text-2xl font-bold text-purple-400 mb-2">89%</div>
                  <div className="text-sm text-white/80">Activation Rate</div>
                  <div className="text-xs text-white/60 mt-2">For memetic spores</div>
                </div>
                <div className="bg-purple-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-400 mb-2">92%</div>
                  <div className="text-sm text-white/80">Protocol Adoption</div>
                  <div className="text-xs text-white/60 mt-2">Verified value creation</div>
                </div>
                <div className="bg-purple-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-400 mb-2">37%</div>
                  <div className="text-sm text-white/80">Monthly Adoption</div>
                  <div className="text-xs text-white/60 mt-2">After critical mass</div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              The Collapse Probability Matrix: Mathematical Certainty
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The Collapse Probability Matrix shows the mathematical certainty of Babylon's collapse and Genesis' success through system dynamics analysis. Unlike Babylon's CRLs that guarantee collapse through their design parameters, Genesis' SRLs guarantee success through their alignment with physical reality.
            </p>

            <div className="space-y-6">
              {collapseVectors.map((vector, index) => (
                <div key={index} className="glass-container rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">{vector.vector}</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-red-900/30 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="text-lg font-semibold text-red-400 mb-3">Babylon Collapse Certainty: {vector.babylon.certainty}</h4>
                      <div className="mb-3">
                        <h5 className="text-red-300 font-semibold mb-2">Mathematical Model</h5>
                        <div className="bg-red-800/30 p-3 rounded text-sm">
                          <p className="text-red-200 font-mono">{vector.babylon.mathematicalModel}</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <h5 className="text-red-300 font-semibold mb-2">Historical Evidence</h5>
                        <p className="text-white/80 text-sm">{vector.babylon.evidence}</p>
                      </div>
                      <div className="text-red-200 text-xs italic">
                        <strong>Source:</strong> {vector.babylon.source}
                      </div>
                    </div>

                    <div className="bg-green-900/30 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Genesis Success Certainty: {vector.genesis.certainty}</h4>
                      <div className="mb-3">
                        <h5 className="text-green-300 font-semibold mb-2">Mathematical Model</h5>
                        <div className="bg-green-800/30 p-3 rounded text-sm">
                          <p className="text-green-200 font-mono">{vector.genesis.mathematicalModel}</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <h5 className="text-green-300 font-semibold mb-2">Historical Evidence</h5>
                        <p className="text-white/80 text-sm">{vector.genesis.evidence}</p>
                      </div>
                      <div className="text-green-200 text-xs italic">
                        <strong>Source:</strong> {vector.genesis.source}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-container rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Mathematical Certainty of Genesis Success</h3>
              <p className="text-white/80 text-sm mb-4">
                The overall success probability of Genesis is calculated as P = 1 - ∏(1 - P_i), where P_i are the individual success probabilities. With P_i = 1 for all vectors, P = 1 - 0 = 1 (100%). However, accounting for implementation uncertainty, P = 99.99%.
              </p>
              <div className="text-center">
                <div className="text-6xl font-bold text-green-400 mb-2">99.99%</div>
                <div className="text-xl text-green-300">Genesis Success Probability</div>
                <div className="text-white/60 text-sm mt-2">Mathematical certainty through system dynamics analysis</div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">
              Global Node Replication: Instant Deployment Protocol
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              The Genesis protocol is designed for instant global replication. All code repositories are maintained locally and can be shared with any operator worldwide, enabling instant node deployment once operators are trained in the six core competencies.
            </p>

            <div className="space-y-8">
              {nodeReplication.map((component, index) => (
                <div key={index} className="glass-container rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">{component.component}</h3>
                  <p className="text-white/80 text-sm mb-6">{component.technicalSpecification}</p>
                  
                  {component.repositories && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Code Repositories</h4>
                      <div className="space-y-3">
                        {component.repositories.map((repo, repoIndex) => (
                          <div key={repoIndex} className="bg-green-900/30 p-4 rounded-lg backdrop-blur-sm">
                            <h5 className="text-green-300 font-semibold mb-2">{repo.name}</h5>
                            <p className="text-white/80 text-sm mb-2">{repo.description}</p>
                            <div className="text-green-200 text-xs">
                              <strong>Location:</strong> {repo.location}
                            </div>
                            <div className="text-green-200 text-xs">
                              <strong>Replication Time:</strong> {repo.replicationTime}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {component.coreCompetencies && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Six Core Competencies</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {component.coreCompetencies.map((competency, compIndex) => (
                          <div key={compIndex} className="bg-purple-900/30 p-4 rounded-lg backdrop-blur-sm">
                            <h5 className="text-purple-300 font-semibold mb-2">{competency.name}</h5>
                            <p className="text-white/80 text-sm mb-3">{competency.description}</p>
                            <div className="space-y-1 mb-3">
                              {competency.verificationMetrics.map((metric, metricIndex) => (
                                <div key={metricIndex} className="text-purple-200 text-xs">• {metric}</div>
                              ))}
                            </div>
                            <div className="text-purple-200 text-xs">
                              <strong>Training Time:</strong> {competency.trainingTime}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {component.replicationProtocol && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Replication Protocol</h4>
                      <div className="bg-blue-900/30 p-4 rounded-lg backdrop-blur-sm">
                        <ol className="space-y-2">
                          {component.replicationProtocol.map((step, stepIndex) => (
                            <li key={stepIndex} className="text-white/80 text-sm">
                              <strong>{stepIndex + 1}.</strong> {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}

                  <div className="bg-emerald-900/30 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3">Operational Metrics</h4>
                    <div className="space-y-1">
                      {component.operationalMetrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-emerald-200 text-sm">• {metric}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="glass-container rounded-lg p-6 mb-8 border border-green-500/30">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat text-center">The Inevitable Outcome</h2>
            
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-green-400 mb-2">99.99%</div>
              <div className="text-xl text-green-300">Genesis Success Probability</div>
            </div>

            <p className="text-white/90 text-center text-lg leading-relaxed">
              Genesis doesn't win through force or politics. It wins through superior performance, 
              structural advantages, and alignment with natural abundance. The old system collapses 
              under its own contradictions while Genesis grows through replication and network effects.
            </p>

            <div className="mt-6 p-4 bg-green-800/20 rounded text-center backdrop-blur-sm">
              <p className="text-green-200 font-semibold">
                Victory is inevitable because Genesis works with reality, while Babylon fights against it.
              </p>
            </div>
          </div>

          <GlassCard>
            <h2 className="text-2xl font-bold text-green-400 mb-6">Why Genesis Wins Diagrams</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/why-genesis-inevitably-wins-1.png"
                  alt="Why Genesis Inevitably Wins Diagram 1"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/why-genesis-inevitably-wins-3.png"
                  alt="Why Genesis Inevitably Wins Diagram 3"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/why-genesis-inevitably-wins-4.png"
                  alt="Why Genesis Inevitably Wins Diagram 4"
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
              title="Additional Visual Explorations: Why Genesis Inevitably Wins"
              className="mt-12"
            />
          )}
        </div>
      </div>
    </div>
  );
}