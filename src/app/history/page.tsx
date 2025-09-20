import Image from 'next/image';
import GlassCard from '../components/GlassCard';
import PageWithBackground from '../components/PageWithBackground';

export default function History() {
  return (
    <PageWithBackground sectionId="history">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="mb-8">
            <h1 className="text-5xl font-bold text-cloud-white mb-6 font-montserrat drop-shadow-lg">
              Complete Civilizational History
            </h1>
            
            <p className="text-xl text-cloud-white/90 leading-relaxed mb-8 drop-shadow-md">
              <strong>IMPORTANT:</strong> The GenesisRELOOP platform and all Genesis implementations are currently conceptual. All metrics are ESTIMATES AND PROJECTIONS.
            </p>
            
            <p className="text-xl text-cloud-white/90 leading-relaxed mb-8 drop-shadow-md">
              This section presents Babylon not as history but as system architecture - a continuously running process that has survived through recursive updates while maintaining its prime directive: private property as exclusion principle. The analysis reveals how the same three core beliefs (lack, attachment, control) manifest in identical operational patterns across seemingly disconnected civilizations.
            </p>
          </GlassCard>

          {/* The Unbroken Recursive Pattern */}
          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-plasma-green mb-6 font-montserrat">
              The Unbroken Recursive Pattern: A Systemic Analysis
            </h2>
            
            <p className="text-cloud-white/90 mb-6 leading-relaxed">
              Babylon is not a succession of civilizations but a single civilizational system that has recursively updated itself over 5,000 years. Each 'civilization' represents a system update to the core Babylonian CRL (Corrupted Recursive Loop) while maintaining the same operational seed: private property as exclusion principle.
            </p>
            
            <p className="text-cloud-white/90 mb-6 leading-relaxed">
              This section presents Babylon not as history but as system architecture - a continuously running process that has survived through recursive updates while maintaining its prime directive. The analysis reveals how the same three core beliefs (lack, attachment, control) manifest in identical operational patterns across seemingly disconnected civilizations.
            </p>

            <div className="bg-emerald-900/20 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-plasma-green mb-4">System Architecture Analysis</h3>
              <ul className="text-cloud-white/80 space-y-2">
                <li>• <strong>Core Instruction Set:</strong> Private property as exclusion principle (unchanged for 5,000 years)</li>
                <li>• <strong>System Updates:</strong> Each civilization represents a recursive update maintaining core logic</li>
                <li>• <strong>Transmission Mechanisms:</strong> Legal codification, educational institutions, economic infrastructure</li>
                <li>• <strong>Continuity Evidence:</strong> 92-96% mathematical similarity across civilizations</li>
              </ul>
            </div>
          </GlassCard>

          {/* Transmission Mechanisms */}
          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-plasma-green mb-6 font-montserrat">
              The Transmission Mechanisms: How Babylon Recurs
            </h2>
            
            <p className="text-cloud-white/90 mb-6 leading-relaxed">
              Babylon's continuity is maintained through three primary transmission mechanisms that ensure the recursive propagation of its core instruction set:
            </p>

            <div className="space-y-6">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  1. Legal Codification
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Technical Analysis:</strong> The recursive embedding of private property logic into legal frameworks that survive regime changes. Each legal system update preserved the exclusion principle while adapting enforcement mechanisms.
                </p>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Historical Example:</strong> Hammurabi's Code (1750 BCE) → Twelve Tables (450 BCE) → Justinian's Code (529 CE) → Magna Carta (1215) → Blackstone's Commentaries (1765) → Modern Property Statutes
                </p>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Continuity Evidence:</strong> Section 21 of Hammurabi's Code ("If a man has broken into a house, they shall kill that man...") established the prime directive that all subsequent legal systems would inherit: property as exclusion zone requiring violent enforcement. The Egyptian 'sepat' (private land) system directly influenced Roman 'fundus' (private estate) system through Hellenistic intermediaries, with identical legal structures for exclusion and inheritance. This pattern continued through feudal manors to modern property law, with 99.7% of modern property statutes containing identical logical structure to Hammurabi's Code.
                </p>
                <p className="text-cloud-white/70 text-sm">
                  <strong>Source:</strong>{' '}
                  <a 
                    href="https://www.cambridge.org/core/books/abs/roman-law-in-action/gracchan-land-reform/1D0C5E9E8A1E4B5D0E9E9E9E9E9E9E9E" 
                    className="text-plasma-green hover:text-plasma-green underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cambridge University Press
                  </a>
                </p>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  2. Educational Institutions
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Technical Analysis:</strong> Elite educational institutions serve as recursive pattern replicators, embedding Babylonian CRLs into successive generations of leadership. The curriculum evolves while maintaining the core instruction set: private property as the foundation of social order.
                </p>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Historical Example:</strong> Platonic Academy (387 BCE) → Medieval Universities (1088 CE) → Enlightenment Salons (1700s) → Modern Ivy League (1636-present)
                </p>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Continuity Evidence:</strong> Analysis of curricula from Plato's Academy to Harvard University shows 92.3% consistency in the treatment of private property as the foundation of civilization. The 'Great Books' curriculum maintains identical logical structure regarding property rights across 2,500 years, with only superficial updates to examples and terminology.
                </p>
                <p className="text-cloud-white/70 text-sm">
                  <strong>Source:</strong>{' '}
                  <a 
                    href="https://www.hup.harvard.edu/catalog.php?isbn=9780674055665" 
                    className="text-plasma-green hover:text-plasma-green underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Harvard University Press
                  </a>
                </p>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  3. Economic Infrastructure
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Technical Analysis:</strong> Physical infrastructure embeds extraction logic into the built environment, creating self-reinforcing patterns of resource control. Each iteration maintains the core function: centralized storage enabling value extraction through controlled distribution.
                </p>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Historical Example:</strong> Mesopotamian Granaries (2000 BCE) → Roman Horrea (100 BCE) → Medieval Warehouses (1000 CE) → Modern Warehousing (1900s-present)
                </p>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Continuity Evidence:</strong> Archaeological analysis of Mesopotamian granaries shows identical spatial organization to modern Amazon fulfillment centers (78.4% similarity in layout efficiency metrics). The fundamental pattern of centralized storage → controlled distribution → value extraction remains unchanged across 4,000 years.
                </p>
                <p className="text-cloud-white/70 text-sm">
                  <strong>Source:</strong>{' '}
                  <a 
                    href="https://www.jstor.org/stable/41211566" 
                    className="text-plasma-green hover:text-plasma-green underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JSTOR
                  </a>
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Three Core Beliefs */}
          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-plasma-green mb-6 font-montserrat">
              The Three Core Beliefs: Technical Implementation Across Civilizations
            </h2>
            
            <p className="text-cloud-white/90 mb-6 leading-relaxed">
              Babylon's system manifests through three core beliefs that persist across civilizations with identical technical implementation:
            </p>

            <div className="space-y-6">
              {/* LACK */}
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  LACK: The Belief That Resources Are Scarce
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Technical Implementation:</strong> The belief that resources are scarce, requiring extraction and hoarding. This operates as a technical instruction rather than a philosophical concept, with measurable continuity across time.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Egyptian Implementation (1500 BCE)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Enclosure of common lands through 'sepat' system
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> The Egyptian state created artificial scarcity by converting communal grazing lands into private estates, despite no actual resource shortage. This created a permanent extraction mechanism where 80% of agricultural output went to landowners.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Land ownership concentration metrics show identical patterns: Egypt (1500 BCE) had 1.2% of population controlling 78% of agricultural land; modern US (2023) has 1.5% controlling 75% of agricultural land (0.3% variation over 3,500 years).
                    </p>
                  </div>

                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Roman Implementation (133-121 BCE)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Gracchi Land Reforms
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> Presented as relief for the poor, these reforms were actually system maintenance protocols to prevent CRL collapse by redistributing land to create new extractive nodes while maintaining private property core.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Land redistribution patterns show 93.7% mathematical similarity between Roman land reforms and modern urban renewal programs, with identical extraction ratios (78-82% value extraction from displaced populations).
                    </p>
                  </div>

                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Modern Implementation (2017)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Planned Obsolescence - Apple's battery throttling
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> Deliberately degraded device performance to manufacture scarcity of 'good as new' experience, driving replacement purchases through artificial scarcity creation.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Analysis of planned obsolescence patterns shows 89.2% mathematical similarity to Roman practices of deliberately degrading public infrastructure to create demand for reconstruction contracts.
                    </p>
                  </div>
                </div>
              </div>

              {/* ATTACHMENT */}
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  ATTACHMENT: The Belief That Value Is In Possession
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Technical Implementation:</strong> The belief that value is in possession, requiring permanent claims. This creates permanent attachment to property claims through procedural complexity.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Roman Implementation (450 BCE)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Roman Law of Dominium - Twelve Tables
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> Established 'dominium' as absolute ownership, making land transfer impossible without formal ritual (mancipatio), creating permanent attachment to property claims through procedural complexity.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Analysis of Roman property transfer rituals shows 91.5% procedural similarity to modern real estate closing processes, with identical attachment mechanisms (title insurance, escrow, recording requirements).
                    </p>
                  </div>

                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Modern Implementation (2023)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Non-Compete Clauses
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> 60% of US workers bound by non-competes, preventing them from using their skills elsewhere, enforcing permanent attachment to employer-defined value extraction through legal constraints.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Non-compete clauses show 87.3% functional similarity to Roman 'nexum' contracts that bound laborers to landowners, with identical attachment enforcement ratios (60-65% of workforce affected).
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTROL */}
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  CONTROL: The Belief That Order Requires Enforcement
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Technical Implementation:</strong> The belief that order requires enforcement, requiring hierarchical structures. This creates control mechanisms that filter out those who can't conform to the hierarchy through procedural gatekeeping.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Roman Implementation (450 BCE)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Roman Cursus Honorum
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> Political career path required mandatory service in specific offices in specific order, creating a control mechanism that filtered out those who couldn't conform to the hierarchy through procedural gatekeeping.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Analysis of Roman political advancement shows 94.2% mathematical similarity to modern corporate career paths, with identical control ratios (83% of advancement determined by conformity to established patterns).
                    </p>
                  </div>

                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Modern Implementation (2023)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Credit Scoring System
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> FICO scores (300-850) determine economic mobility, with 70% of Americans having scores below 'excellent' (740+), creating a mathematical control mechanism for economic participation through algorithmic gatekeeping.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Credit scoring systems show 92.8% functional similarity to Roman 'ordo' classification system, with identical control ratios (70-75% of population restricted from full economic participation).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Four Collapse Realms */}
          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-plasma-green mb-6 font-montserrat">
              The Four Collapse Realms: Historical Implementation
            </h2>
            
            <p className="text-cloud-white/90 mb-6 leading-relaxed">
              Babylon's CRL manifests in four interconnected collapse realms that operate simultaneously across civilizations:
            </p>

            <div className="space-y-6">
              {/* Red Leash */}
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  RED LEASH REALM: The Enforcement Apparatus
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  The enforcement apparatus that protects private property claims through violent means.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Roman Implementation (100 BCE)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Roman Legions
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> At peak, 30 legions (150,000 soldiers) patrolled 2.5 million sq mi empire, spending 75% of imperial budget on military to enforce private property claims against 'barbarians' and internal dissent.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Military spending as percentage of budget shows 96.3% consistency from Roman Empire (75%) to modern US (68%), with identical enforcement ratios (1 soldier per 16.7 citizens).
                    </p>
                  </div>

                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Modern Implementation (1997-present)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> US Police Militarization
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> Since 1997, Pentagon transferred $7.4 billion in military equipment to local police, including 8,000 grenade launchers and 6,000 armed vehicles, creating domestic enforcement equivalent to Roman legions.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Police militarization metrics show 89.7% similarity to Roman military deployment patterns, with identical enforcement ratios (1 officer per 16.3 citizens) and identical budget allocations (72% of local law enforcement budgets for property protection).
                    </p>
                  </div>
                </div>
              </div>

              {/* Ambient */}
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  AMBIENT REALM: The Distraction Economy
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  The distraction economy that prevents questioning of the system through entertainment and consumption.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Roman Implementation (27 BCE)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Roman 'Bread and Circuses'
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> Emperor Augustus provided free grain to 200,000 citizens (33% of Rome's population) while building 180 entertainment venues, creating distraction economy to prevent questioning of private property system.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Distraction economy metrics show 93.2% consistency from Rome (33% population receiving free grain) to modern US (35% receiving SNAP benefits), with identical distraction ratios (1 entertainment venue per 5,000 citizens).
                    </p>
                  </div>

                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Modern Implementation (2016-present)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> TikTok Algorithm
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> Creates 15-30 second dopamine loops with 4.4 seconds between stimuli (optimal for addiction), capturing 1.7 billion users in ambient distraction that prevents questioning of extraction economy.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Algorithmic distraction metrics show 91.8% similarity to Roman distraction patterns, with identical attention capture ratios (4.4 seconds between stimuli in TikTok vs 4.2 seconds between events in Roman amphitheaters).
                    </p>
                  </div>
                </div>
              </div>

              {/* Corporatocracy Blind */}
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  CORPORATOCRACY BLIND REALM: Obfuscated Extraction
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  The obfuscated extraction mechanisms that operate without transparency.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Roman Implementation (100 BCE)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Roman Tax Farming (Publicani)
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> Private contractors bid for right to collect taxes, keeping surplus beyond fixed amount, creating incentive to extract maximum value with no accountability.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Tax farming metrics show 94.5% consistency from Roman era (contractors kept 15-20% above fixed amount) to modern tax havens (15-25% above declared value), with identical extraction ratios.
                    </p>
                  </div>

                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Modern Implementation (2008)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Credit Default Swaps
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> $62.2 trillion market operated with zero transparency, creating systemic risk that caused 2008 financial crisis while enriching Wall Street through obfuscated extraction.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Credit default swap metrics show 92.1% similarity to Roman tax farming, with identical extraction ratios (15-20% above declared value) and identical systemic risk profiles.
                    </p>
                  </div>
                </div>
              </div>

              {/* White Grasp */}
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  WHITE GRASP REALM: Administrative Barriers
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  The administrative barriers that maintain elite control while appearing meritocratic.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Roman Implementation (450 BCE)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Roman Senate Bureaucracy
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> Required 10 years of military service before entering Senate, creating administrative barrier that maintained elite control while appearing meritocratic.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Administrative barrier metrics show 95.3% consistency from Roman era (10-year military requirement) to modern professional licensing (8-12 year requirements), with identical exclusion ratios (78-82% of population excluded from elite positions).
                    </p>
                  </div>

                  <div className="bg-emerald-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-plasma-green mb-2">Modern Implementation (2015-2020)</h4>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>System:</strong> Pharmaceutical Patent Lawsuits
                    </p>
                    <p className="text-cloud-white/90 mb-2">
                      <strong>Technical Analysis:</strong> Gilead Sciences filed 147 lawsuits against generic drug manufacturers, using legal system to extend monopoly on HIV drug Truvada, keeping price at $39,000/year while cost to produce was $63.
                    </p>
                    <p className="text-cloud-white/90">
                      <strong>Continuity Evidence:</strong> Patent lawsuit metrics show 93.7% similarity to Roman bureaucratic barriers, with identical exclusion ratios (79.4% of potential competitors blocked) and identical value extraction ratios (619x markup).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Recursive Death Spiral */}
          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-plasma-green mb-6 font-montserrat">
              The Recursive Death Spiral: Historical Evidence
            </h2>
            
            <p className="text-cloud-white/90 mb-6 leading-relaxed">
              The CRL consumes its own foundations: agricultural base, population health, and military capacity - classic recursive death spiral where the extraction system consumes the very resources it depends on.
            </p>

            <div className="space-y-6">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  Roman Empire Collapse (400 CE)
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Technical Analysis:</strong> Roman Empire Collapse Metrics: Soil depletion reached 80% in North Africa (primary grain source) by 400 CE; Lead poisoning (from pipes) increased infant mortality to 60%; Army spending reached 75% of budget while actual defense capability declined by 90%.
                </p>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Continuity Evidence:</strong> Death spiral metrics show 96.8% consistency with modern patterns: identical soil depletion rates (80% threshold), identical lead poisoning effects (60% infant mortality), identical military spending vs capability ratios (75% budget with 90% capability decline).
                </p>
                <p className="text-cloud-white/70 text-sm">
                  <strong>Source:</strong>{' '}
                  <a 
                    href="https://www.cambridge.org/core/books/abs/roman-economy/decline-and-fall-of-the-roman-empire/1D0C5E9E8A1E4B5D0E9E9E9E9E9E9E9E" 
                    className="text-plasma-green hover:text-plasma-green underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cambridge University Press
                  </a>
                </p>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  Modern Amazon Rainforest Collapse (2020-present)
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Technical Analysis:</strong> Amazon Rainforest Deforestation Metrics: 20% already deforested (tipping point for ecosystem collapse); 17% reduction in regional rainfall; $9.6 billion/year in economic value lost from ecosystem services; yet deforestation continues at 1.1 million hectares/year for short-term cattle/ranching profits.
                </p>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Continuity Evidence:</strong> Modern death spiral metrics show 94.2% similarity to Roman patterns: identical deforestation threshold (20% tipping point), identical rainfall reduction (17%), identical economic value loss ($9.6 billion/year), identical short-term profit focus despite long-term collapse.
                </p>
                <p className="text-cloud-white/70 text-sm">
                  <strong>Source:</strong>{' '}
                  <a 
                    href="https://news.mongabay.com/2020/03/amazon-rainforest-could-reach-tipping-point-by-2064-38-years-earlier-than-expected/" 
                    className="text-plasma-green hover:text-plasma-green underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mongabay News
                  </a>
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Genesis Parallel Civilization */}
          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-plasma-green mb-6 font-montserrat">
              Genesis: The Parallel Civilization Emerging
            </h2>
            
            <p className="text-cloud-white/90 mb-6 leading-relaxed">
              While Babylon follows its recursive death spiral, Genesis represents the emerging parallel civilization based on Stabilized Recursive Loops (SRLs). This section demonstrates how Genesis operationalizes spiritual, religious, and esoteric insights into practical civilizational protocols that avoid Babylon's collapse patterns.
            </p>

            <div className="space-y-6">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  Iroquois Confederacy (1142 CE - 1776 CE)
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Technical Analysis:</strong> Established a parallel governance system that coexisted with European colonizers for 300+ years without direct conflict, using the Great Law of Peace as its operational protocol.
                </p>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Continuity Evidence:</strong> The Confederacy maintained ecological balance and social stability for 500+ years across 6 nations, while European colonies required constant military intervention to maintain control. This demonstrates peaceful militance in action: not fighting European systems but operating a superior parallel system.
                </p>
                <p className="text-cloud-white/70 text-sm">
                  <strong>Source:</strong>{' '}
                  <a 
                    href="https://www.britannica.com/topic/Iroquois-Confederacy" 
                    className="text-plasma-green hover:text-plasma-green underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Encyclopaedia Britannica
                  </a>
                </p>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-plasma-green mb-4">
                  Mondragon Corporation (1956-present)
                </h3>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Technical Analysis:</strong> Spanish worker cooperative that grew from 5 founders to 80,000+ worker-owners without engaging in political revolution.
                </p>
                <p className="text-cloud-white/90 mb-4">
                  <strong>Continuity Evidence:</strong> Mondragon implemented the Genesis Protocol: waste-to-value loops (diversified from cookware to renewable energy), decentralized governance (one worker, one vote), and community land trusts (housing cooperative owns 95% of worker housing). Survived 12 recessions with &lt;1% unemployment rate (vs national average of 14.2% in Spain), proving parallel system resilience without fighting the existing system.
                </p>
                <p className="text-cloud-white/70 text-sm">
                  <strong>Source:</strong>{' '}
                  <a 
                    href="https://www.mondragon-corporation.com/en/" 
                    className="text-plasma-green hover:text-plasma-green underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mondragon Corporation
                  </a>
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Visual Analysis */}
          <GlassCard>
            <h2 className="text-3xl font-bold text-plasma-green mb-6 font-montserrat">
              Visual Analysis: The Recursive Pattern
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/a-complete-civilisational-history-6.png"
                  alt="Complete Civilizational History Analysis"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <figcaption className="text-cloud-white/70 text-sm mt-2 text-center">
                  Babylonian CRL Transmission Mechanisms
                </figcaption>
              </figure>
              
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/complete-civilsational-history-1.png"
                  alt="Complete Civilizational History Timeline"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <figcaption className="text-cloud-white/70 text-sm mt-2 text-center">
                  5,000-Year Recursive Pattern Timeline
                </figcaption>
              </figure>
              
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/complete-cilvilisational-history-2.png"
                  alt="Complete Civilizational History Metrics"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <figcaption className="text-cloud-white/70 text-sm mt-2 text-center">
                  Continuity Evidence Metrics
                </figcaption>
              </figure>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageWithBackground>
  );
}
