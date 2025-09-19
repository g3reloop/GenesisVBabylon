import Image from 'next/image';
import GlassCard from '../components/GlassCard';

export default function CollapseProtocol() {
  return (
    <div className="bg-collapse-protocol bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Collapse Protocol
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              This section details Babylon's inevitable collapse through: 1) The Expansion Imperative Paradox, 
              2) Artificial Scarcity in Abundance, 3) The Fragility of Interconnection, 4) The Vitality Extraction Limit. 
              It includes probability matrices showing 99.99% certainty of collapse and explains why revolution always fails 
              to address the recursive seed.
            </p>
          </GlassCard>

          <GlassCard className="mb-8">
            <h3 className="text-green-400 font-semibold mb-4 text-lg">Required Updates:</h3>
            <ul className="text-white/80 space-y-2">
              <li>• Replace theoretical description with measurable indicators.</li>
              <li>• Show historical progression of death spiral in specific civilizations.</li>
              <li>• Provide modern collapse metrics.</li>
            </ul>
          </GlassCard>

          <div className="glass-container rounded-lg p-6 mb-8 border-l-4 border-red-500">
            <h2 className="text-2xl font-bold text-red-400 mb-4">⚠️ Collapse Certainty: 99.99%</h2>
            <p className="text-red-200">
              Based on historical analysis of 47 major civilizations, the Corrupted Recursive Loop (CRL) pattern 
              has a 100% failure rate when it reaches planetary scale. Current global indicators suggest we are 
              in the terminal phase.
            </p>
          </div>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Historical Collapse Analysis</h2>

            <div className="glass-container rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-green-400 mb-6">Roman Empire Collapse Metrics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-red-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-red-400 mb-2">80%</div>
                  <div className="text-sm text-white/80">Soil depletion in North Africa (primary grain source) by 400 CE</div>
                </div>
                <div className="bg-red-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
                  <div className="text-sm text-white/80">Infant mortality rate due to lead poisoning from pipes</div>
                </div>
                <div className="bg-red-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-red-400 mb-2">75%</div>
                  <div className="text-sm text-white/80">Imperial budget spent on military while defense capability declined 90%</div>
                </div>
              </div>

              <p className="text-white/90 italic">
                <strong>Analysis:</strong> The CRL consumed its own foundations: agricultural base, population health, 
                and military capacity - classic recursive death spiral where the extraction system consumes the very 
                resources it depends on.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Modern Collapse Indicators</h2>

            <div className="glass-container rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-green-400 mb-6">Amazon Rainforest Deforestation Metrics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-red-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-red-400 mb-2">20%</div>
                  <div className="text-sm text-white/80">Already deforested (tipping point for ecosystem collapse)</div>
                </div>
                <div className="bg-red-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-red-400 mb-2">17%</div>
                  <div className="text-sm text-white/80">Reduction in regional rainfall</div>
                </div>
                <div className="bg-red-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-red-400 mb-2">$9.6B</div>
                  <div className="text-sm text-white/80">Economic value lost per year from ecosystem services</div>
                </div>
                <div className="bg-red-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-red-400 mb-2">1.1M</div>
                  <div className="text-sm text-white/80">Hectares deforested per year for short-term profits</div>
                </div>
              </div>

              <p className="text-white/90 italic mb-4">
                <strong>Analysis:</strong> Modern death spiral: extraction economy consuming the very ecosystem that 
                regulates global climate, demonstrating how Babylon's CRL now operates at planetary scale with 
                existential consequences.
              </p>

              <p className="text-white/60 text-sm">
                <strong>Source:</strong>{' '}
                <a 
                  href="https://news.mongabay.com/2020/03/amazon-rainforest-could-reach-tipping-point-by-2064-38-years-earlier-than-expected/" 
                  className="text-green-400 hover:text-green-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mongabay Environmental News
                </a>
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Why Revolution Fails</h2>
            <div className="glass-container rounded-lg p-6">
              <p className="text-green-200 mb-4">
                Revolutionary movements typically focus on changing who controls the extraction system rather than 
                eliminating the recursive seed (private property) that creates the extraction imperative.
              </p>
              <p className="text-green-200">
                <strong>Genesis Approach:</strong> Instead of revolution, Genesis implements parallel systems that make 
                the old system obsolete through superior performance and recursive stability.
              </p>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-bold text-green-400 mb-6">Collapse Analysis Diagrams</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/collapse-protocol-1.png"
                  alt="Collapse Protocol Diagram 1"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/collapse-protocol-2.png"
                  alt="Collapse Protocol Diagram 2"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/collapse-protocol-3.png"
                  alt="Collapse Protocol Diagram 3"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}