import Image from 'next/image';
import GlassCard from '../components/GlassCard';

export default function SurgicalAnalysis() {
  return (
    <div className="bg-surgical-analysis bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Surgical Analysis
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              This section provides a precise, scalpel-like dissection of Babylon's structure: 1) The Recursive Seed (private property), 
              2) The Three Core Beliefs (lack, attachment, control), 3) The Four Collapse Realms (Red Leash, Ambient, Corporatocracy Blind, White Grasp), 
              4) The Recursive Death Spiral. Interactive diagrams will show how these components interconnect.
            </p>
          </GlassCard>

          <GlassCard className="mb-8">
            <h3 className="text-green-400 font-semibold mb-4 text-lg">Required Updates:</h3>
            <ul className="text-white/80 space-y-2">
              <li>• Replace abstract descriptions with specific system implementations.</li>
              <li>• Show how each belief manifests in concrete economic/legal mechanisms.</li>
              <li>• Provide measurable evidence of each belief's operation.</li>
            </ul>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">The Three Core Beliefs</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Lack</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Historical: Enclosure Movements</h4>
                  <p className="text-white/90 text-sm mb-3">
                    Between 1760-1840, 4,000 individual Acts of Parliament converted 7 million acres of common land to private property, 
                    creating artificial scarcity where none existed.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Modern: Planned Obsolescence</h4>
                  <p className="text-white/90 text-sm mb-3">
                    Apple's battery throttling (2017) deliberately degraded device performance to manufacture scarcity of 'good as new' experience, 
                    driving replacement purchases.
                  </p>
                  <p className="text-white/60 text-xs">
                    <strong>Source:</strong>{' '}
                    <a 
                      href="https://www.theguardian.com/technology/2017/dec/28/apple-slowing-down-iphones-battery-life" 
                      className="text-green-400 hover:text-green-300 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Guardian
                    </a>
                  </p>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Attachment</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Historical: Roman Law of Dominium</h4>
                  <p className="text-white/90 text-sm mb-3">
                    The Twelve Tables (450 BCE) established 'dominium' as absolute ownership, making land transfer impossible without formal ritual (mancipatio), 
                    creating permanent attachment to property claims.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Modern: Non-Compete Clauses</h4>
                  <p className="text-white/90 text-sm mb-3">
                    60% of US workers are bound by non-competes (2023), preventing them from using their skills elsewhere, 
                    enforcing permanent attachment to employer-defined value extraction.
                  </p>
                  <p className="text-white/60 text-xs">
                    <strong>Source:</strong>{' '}
                    <a 
                      href="https://www.whitehouse.gov/briefing-room/presidential-actions/2023/04/25/executive-order-preventing-corporate-monopolization/" 
                      className="text-green-400 hover:text-green-300 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      White House
                    </a>
                  </p>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Control</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Historical: Roman Cursus Honorum</h4>
                  <p className="text-white/90 text-sm mb-3">
                    The political career path required mandatory service in specific offices in specific order, creating a control mechanism 
                    that filtered out those who couldn't conform to the hierarchy.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Modern: Credit Scoring System</h4>
                  <p className="text-white/90 text-sm mb-3">
                    FICO scores (300-850) determine economic mobility, with 70% of Americans having scores below 'excellent' (740+), 
                    creating a mathematical control mechanism for economic participation.
                  </p>
                  <p className="text-white/60 text-xs">
                    <strong>Source:</strong>{' '}
                    <a 
                      href="https://www.consumeraffairs.com/finance/credit_score.html" 
                      className="text-green-400 hover:text-green-300 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consumer Affairs
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Recursive Death Spiral</h2>

            <div className="glass-container rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-red-400 mb-4">Historical: Roman Empire Collapse</h3>
                  <ul className="text-white/90 space-y-2">
                    <li>• Soil depletion reached 80% in North Africa (primary grain source) by 400 CE</li>
                    <li>• Lead poisoning increased infant mortality to 60%</li>
                    <li>• Army spending reached 75% of budget while defense capability declined by 90%</li>
                  </ul>
                  <p className="text-white/80 mt-4 italic">
                    The CRL consumed its own foundations: agricultural base, population health, and military capacity.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-red-400 mb-4">Modern: Amazon Rainforest Collapse</h3>
                  <ul className="text-white/90 space-y-2">
                    <li>• 20% already deforested (tipping point for ecosystem collapse)</li>
                    <li>• 17% reduction in regional rainfall</li>
                    <li>• $9.6 billion/year in economic value lost from ecosystem services</li>
                    <li>• Deforestation continues at 1.1 million hectares/year for short-term profits</li>
                  </ul>
                  <p className="text-white/80 mt-4 italic">
                    Extraction economy consuming the very ecosystem that regulates global climate - planetary scale CRL.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-bold text-green-400 mb-6">Analysis Diagrams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/Surgical-Analysis-1.png"
                  alt="Surgical Analysis Diagram 1"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/surgical-analysis-2.png"
                  alt="Surgical Analysis Diagram 2"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/surgical-analysis-3.png"
                  alt="Surgical Analysis Diagram 3"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/surgical-analysis-4.png"
                  alt="Surgical Analysis Diagram 4"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/surgical-analysis-5.png"
                  alt="Surgical Analysis Diagram 5"
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