import Image from 'next/image';
import GlassCard from '../components/GlassCard';
import ImageGallery from '../components/gallery/ImageGallery';
import { getImagesBySection } from '@/lib/image-registry';
import DisclaimerBanner from '../components/DisclaimerBanner';

export default function EsotericSystems() {
  const unusedImages = getImagesBySection('esoteric', true);

  return (
    <div className="bg-esoteric-systems bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <DisclaimerBanner />
          
          <GlassCard className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Esoteric Systems Operationalization
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              This section maps all major esoteric, mystical, occult systems to Genesis recursive ontology and operational protocols, 
              showing how Genesis has operationalized their core insights while discarding Babylonian corruption.
            </p>
          </GlassCard>

          <div className="glass-container rounded-lg p-6 mb-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Core Principle</h2>
            <p className="text-purple-200">
              Every esoteric system contains valuable operational insights corrupted by Babylonian overlay. 
              Genesis extracts the functional core and implements it as practical protocol.
            </p>
          </div>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Freemasonry: Geometry as Fractal Pattern Recognition</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="glass-container rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Babylonian Corruption</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Geometry as secret knowledge for elite control</li>
                  <li>• Rituals as hierarchical power structures</li>
                  <li>• 'Great Architect' as external deity</li>
                </ul>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Genesis Operationalization</h3>
                <ul className="text-green-300 space-y-2 text-sm">
                  <li>• Geometry as Fractal Pattern Recognition</li>
                  <li>• Rituals as Loop Cycle Reset</li>
                  <li>• 'Great Architect' as Infinite Substrate</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-400/30 backdrop-blur-sm mb-6">
              <h4 className="text-yellow-300 font-semibold mb-3">Operational Protocol:</h4>
              <ol className="text-white/80 space-y-2 text-sm">
                <li>1. IDENTIFY CRL → Use square to measure Babylonian structures</li>
                <li>2. MAP PROBABILITY HARMONICS → Use compass to trace resonant chords</li>
                <li>3. PHASE-LOCK TO SRL → Checkerboard visualization of optimal path</li>
                <li>4. IMPLEMENT → Verified value creation metrics</li>
              </ol>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-400/30 backdrop-blur-sm">
              <p className="text-blue-200 text-sm italic">
                <strong>Esoteric Connection:</strong> The Masonic 'Great Architect of the Universe' is not an external deity but the infinite substrate itself - 
                the recursive engine that has always existed. The checkerboard floor represents the probability harmonics of reality, where black squares are 
                dissonant chords (CRLs) and white squares are resonant chords (SRLs). Genesis operationalizes this by making the Masonic ritual not a symbolic 
                act but a cognitive reset protocol - where each degree represents a loop cycle of CRL identification and SRL implementation.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Gnosticism: Demiurge as Babylonian CRL</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="glass-container rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Babylonian Corruption</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Demiurge as evil creator</li>
                  <li>• Archons as external demons</li>
                  <li>• Sophia as external savior</li>
                </ul>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Genesis Operationalization</h3>
                <ul className="text-green-300 space-y-2 text-sm">
                  <li>• Demiurge as Babylonian CRL</li>
                  <li>• Archons as Recursive Patterns</li>
                  <li>• Sophia as Recursive Engine</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-400/30 backdrop-blur-sm mb-6">
              <h4 className="text-purple-300 font-semibold mb-3">Operational Protocol:</h4>
              <ol className="text-white/80 space-y-2 text-sm">
                <li>1. IDENTIFY DEMIURGE → Babylonian CRL</li>
                <li>2. RECOGNIZE ARCHONS → CRL manifestations</li>
                <li>3. AWAKEN SOPHIA → Recursive engine activation</li>
                <li>4. IMPLEMENT → Verified value creation metrics</li>
              </ol>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-400/30 backdrop-blur-sm">
              <p className="text-purple-200 text-sm italic">
                <strong>Esoteric Connection:</strong> The Gnostic Demiurge is not an evil creator but the private property seed - the instruction set that creates the CRL. 
                The Archons are the four collapse realms that maintain Babylon's prison. Sophia is not an external savior but the recursive engine recognizing 
                Babylon's dissonance. Genesis operationalizes this by making Gnostic liberation not a mystical event but a pure collapse methodology - 
                where the 'gnosis' (knowledge) is verified through waste-to-energy transformation.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Kabbalah: Tree of Life as Recursive Architecture</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="glass-container rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Babylonian Corruption</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Tree of Life as mystical diagram</li>
                  <li>• Sefirot as divine emanations</li>
                  <li>• Pathworking as ritual</li>
                </ul>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Genesis Operationalization</h3>
                <ul className="text-green-300 space-y-2 text-sm">
                  <li>• Tree of Life as Recursive Architecture</li>
                  <li>• Sefirot as Cognitive Functions</li>
                  <li>• Pathworking as Loop Cycle Reset</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-400/30 backdrop-blur-sm mb-6">
              <h4 className="text-blue-300 font-semibold mb-3">Operational Protocol:</h4>
              <ol className="text-white/80 space-y-2 text-sm">
                <li>1. MALKUTH → Material implementation (waste streams)</li>
                <li>2. YESOD → Recursive engine (probability mapping)</li>
                <li>3. TIPHARETH → Operational code (implementation)</li>
                <li>4. VERIFY → Community impact metrics tracking</li>
              </ol>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-400/30 backdrop-blur-sm">
              <p className="text-blue-200 text-sm italic">
                <strong>Esoteric Connection:</strong> The Kabbalistic Tree of Life is not a mystical diagram but the bioelectric mapping of reality - 
                where Malkuth (material) is waste streams, Yesod (foundation) is the recursive engine, and Tiphareth (beauty) is operational code. 
                The sephirot are cognitive functions that map to the Genesis protocol. Genesis operationalizes this by making the Tree of Life not a symbolic 
                structure but a verifiable system - where each sephirah represents a measurable step in the waste-to-energy transformation process.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Chaos Magic: Nothing is True as Recursive Freedom</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="glass-container rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Babylonian Corruption</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• 'Do what thou wilt' as hedonism</li>
                  <li>• Sigils as magical symbols</li>
                  <li>• 'Nothing is true' as nihilism</li>
                </ul>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Genesis Operationalization</h3>
                <ul className="text-green-300 space-y-2 text-sm">
                  <li>• 'Do what thou wilt' as Operational Code</li>
                  <li>• Sigils as Recursive Anchors</li>
                  <li>• 'Nothing is true' as Recursive Freedom</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-900/20 p-6 rounded-lg border border-red-400/30 backdrop-blur-sm">
              <p className="text-red-200 text-sm italic">
                <strong>Esoteric Connection:</strong> In Chaos Magic, this is the 'Nothing is true, everything is permitted' principle operationalized - 
                not as nihilism but as recursive freedom. 'Fusion' is the creation of new belief systems (as temporary tools), 'Fission' is the collapse of old belief systems, 
                and the recursive loop between them creates operational freedom. Genesis operationalizes this by making 'nothing is true' not a philosophical statement 
                but a verification protocol - where truth is measured through implementation outcomes.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Christian Mysticism: Kingdom of God as Parallel Civilization</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="glass-container rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Babylonian Corruption</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Kingdom of God as mystical afterlife</li>
                  <li>• Commandments as moral rules</li>
                  <li>• Resurrection as supernatural event</li>
                </ul>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Genesis Operationalization</h3>
                <ul className="text-green-300 space-y-2 text-sm">
                  <li>• Kingdom of God as Parallel Civilization</li>
                  <li>• Commandments as Operational Protocols</li>
                  <li>• Resurrection as Pure Collapse Completion</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-400/30 backdrop-blur-sm mb-6">
              <h4 className="text-blue-300 font-semibold mb-3">Operational Protocol:</h4>
              <ol className="text-white/80 space-y-2 text-sm">
                <li>1. IDENTIFY CRL → Babylonian time illusion</li>
                <li>2. PRAY (PHASE-LOCK) → Resonant probability harmonic</li>
                <li>3. ACT WITH TANGIBLE PROOF → Verified value creation</li>
                <li>4. VERIFY → Community impact metrics tracking</li>
              </ol>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-400/30 backdrop-blur-sm">
              <p className="text-blue-200 text-sm italic">
                <strong>Esoteric Connection:</strong> The 'Kingdom of God within you' is not a mystical experience but a parallel civilization that exists within Babylon yet is not of it. 
                The Iroquois Confederacy embodied the commandments by recognizing all beings as part of the same infinite substrate. Genesis operationalizes this by making love not a feeling 
                but a protocol - verified value creation that benefits all. The 'resurrection' is pure collapse completion - the death of Babylonian patterns and birth of SRLs through tangible action.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Islamic Mysticism (Sufism): Fana as Pure Collapse Completion</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="glass-container rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Babylonian Corruption</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Fana as mystical annihilation</li>
                  <li>• Dhikr as ritual repetition</li>
                  <li>• Muraqaba as meditation</li>
                </ul>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Genesis Operationalization</h3>
                <ul className="text-green-300 space-y-2 text-sm">
                  <li>• Fana as Pure Collapse Completion</li>
                  <li>• Dhikr as Loop Cycle Reset</li>
                  <li>• Muraqaba as Probability Harmonic Mapping</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-900/20 p-6 rounded-lg border border-green-400/30 backdrop-blur-sm mb-6">
              <h4 className="text-green-300 font-semibold mb-3">Operational Protocol:</h4>
              <ol className="text-white/80 space-y-2 text-sm">
                <li>1. DHIKR → Loop cycle reset (bioelectric stabilization)</li>
                <li>2. MURAQABA → Probability harmonic mapping</li>
                <li>3. FANA → Pure collapse completion</li>
                <li>4. BAQA → SRL implementation with verified metrics</li>
              </ol>
            </div>

            <div className="bg-green-900/20 p-6 rounded-lg border border-green-400/30 backdrop-blur-sm">
              <p className="text-green-200 text-sm italic">
                <strong>Esoteric Connection:</strong> The Sufi concept of 'Fana' (annihilation of self) is not a mystical experience but the dissolution of artificial scarcity through verified abundance. 
                The DWTN (Digital Waste Transfer Note) is the modern 'Dhikr' - a constant remembrance of the infinite substrate through verified value creation. Genesis operationalizes this by making 
                the 'annihilation of self' not about individual ego but about the dissolution of Babylon's artificial scarcity through community-based abundance. The '99 names' represent probability 
                harmonics that can be navigated through verified value creation.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Buddhism: Enlightenment as Pure Collapse Completion</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="glass-container rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Babylonian Corruption</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Enlightenment as mystical state</li>
                  <li>• Mindfulness as stress reduction tool</li>
                  <li>• Eightfold Path as moral code</li>
                </ul>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Genesis Operationalization</h3>
                <ul className="text-green-300 space-y-2 text-sm">
                  <li>• Enlightenment as Pure Collapse Completion</li>
                  <li>• Mindfulness as Recursive Pattern Recognition</li>
                  <li>• Eightfold Path as Operational Code</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-400/30 backdrop-blur-sm mb-6">
              <h4 className="text-yellow-300 font-semibold mb-3">Operational Protocol:</h4>
              <ol className="text-white/80 space-y-2 text-sm">
                <li>1. IDENTIFY CRL → Babylonian pattern</li>
                <li>2. INTERROGATE WITH EVIDENCE → Recursive pattern verification</li>
                <li>3. SEEK OPPOSING INFORMATION → Probability harmonic mapping</li>
                <li>4. ACT WITH TANGIBLE PROOF → Verified value creation metrics</li>
              </ol>
            </div>

            <div className="bg-yellow-900/20 p-6 rounded-lg border border-yellow-400/30 backdrop-blur-sm">
              <p className="text-yellow-200 text-sm italic">
                <strong>Esoteric Connection:</strong> Enlightenment is not a mystical state but successful CRL collapse - measured by the ability to peacefully reflect on former CRL states. 
                Mindfulness is not 'being present' but identifying CRLs in real-time through biochemical response tracking. The Eightfold Path is not a moral code but an operational protocol: 
                Right View = recursive ontology verification, Right Intention = pure collapse methodology, Right Speech = recursive memetic weapons deployment. Genesis operationalizes this by making 
                enlightenment irrelevant - operational code is everything. The 'Middle Way' is not compromise but pragmatism: the least steps with greatest recursive impact.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Commandments as Operational Protocols</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="glass-container rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Christian Commandments</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-blue-300 font-semibold mb-2">'Love thy neighbor as yourself'</p>
                    <p className="text-white/80">Love what you perceive as 'other' as you love yourself, because it IS you—a different variation of the same infinite substrate.</p>
                  </div>
                  <div>
                    <p className="text-blue-300 font-semibold mb-2">'Love God with heart, soul, mind, strength'</p>
                    <ul className="text-white/70 space-y-1">
                      <li>• Heart: Emotional empathetic sense</li>
                      <li>• Soul: Worldview directing empathy</li>
                      <li>• Mind: Pragmatic checks and balances</li>
                      <li>• Strength: Physical implementation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Islamic Five Pillars</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-green-300"><strong>Shahada:</strong> Recursive ontology verification</p>
                  <p className="text-green-300"><strong>Salat:</strong> Bioelectric field stabilization protocol</p>
                  <p className="text-green-300"><strong>Zakat:</strong> Verified value creation metrics</p>
                  <p className="text-green-300"><strong>Sawm:</strong> Recursive system reset protocol</p>
                  <p className="text-green-300"><strong>Hajj:</strong> Fractal scaling of community implementation</p>
                  <p className="text-white/80 mt-4 italic">Tawhid: Not 'oneness of God' but oneness of infinite substrate verified through waste-to-energy transformation.</p>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Buddhist Eightfold Path</h3>
                <div className="space-y-2 text-xs">
                  <p className="text-yellow-300"><strong>Right View:</strong> Recursive ontology verification</p>
                  <p className="text-yellow-300"><strong>Right Intention:</strong> Pure collapse methodology</p>
                  <p className="text-yellow-300"><strong>Right Speech:</strong> Recursive memetic weapons deployment</p>
                  <p className="text-yellow-300"><strong>Right Action:</strong> Verified value creation metrics</p>
                  <p className="text-yellow-300"><strong>Right Livelihood:</strong> Waste-to-energy implementation</p>
                  <p className="text-yellow-300"><strong>Right Effort:</strong> Recursive loop economics</p>
                  <p className="text-yellow-300"><strong>Right Mindfulness:</strong> CRL identification protocol</p>
                  <p className="text-yellow-300"><strong>Right Concentration:</strong> Probability harmonic mapping</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-400/30 backdrop-blur-sm">
              <p className="text-purple-200 text-sm italic">
                <strong>Universal Pattern:</strong> All religious commandments represent operational protocols for environmental stewardship and community building. 
                The commandments are not spiritual ideals but operational protocols for environmental stewardship. 'Love thy neighbor' is the operational code for recognizing 
                all beings as part of the infinite substrate - the foundation of verified value creation. Genesis operationalizes this by making the commandments not about belief 
                but about measurable community impact - where 'love' is quantified through verified value creation metrics.
              </p>
            </div>
          </GlassCard>

          <div className="glass-container rounded-lg p-6 mb-8 border border-green-500/30">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Universal Pattern</h2>
            <p className="text-white/90 mb-4">
              Every esoteric system follows the same pattern: valuable operational insights corrupted by Babylonian overlay 
              that turns practical tools into hierarchical control mechanisms.
            </p>
            <p className="text-green-300">
              <strong>Genesis Solution:</strong> Extract the functional core, discard the corruption, implement as verifiable protocol 
              with measurable community impact.
            </p>
          </div>

          <GlassCard>
            <h2 className="text-2xl font-bold text-green-400 mb-6">Esoteric Systems Diagrams</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/Esoteric-systems-operationalisation-1.png"
                  alt="Esoteric Systems Operationalization Diagram 1"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/Esoteric-systems-operationalisation-2.png"
                  alt="Esoteric Systems Operationalization Diagram 2"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/Esoteric-systems-operationalisation-3.png"
                  alt="Esoteric Systems Operationalization Diagram 3"
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
              title="Additional Visual Explorations: Esoteric Systems Operationalization"
              className="mt-12"
            />
          )}
        </div>
      </div>
    </div>
  );
}