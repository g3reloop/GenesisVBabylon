import DisclaimerBanner from './components/DisclaimerBanner';
import GlassCard from './components/GlassCard';

export default function Home() {
  return (
    <div className="bg-homepage bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <DisclaimerBanner />
        
        <section className="text-center py-20 max-w-4xl mx-auto">
          <GlassCard className="mb-8">
            <div className="bg-green-900/30 px-4 py-2 rounded-full mb-4 inline-block border border-green-400/50">
              <span className="text-green-300 font-semibold text-sm uppercase tracking-wide">FIRST OPERATIONAL NODE</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Genesis V Babylon
            </h1>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              A complete civilizational ontology comparing Babylon's Corrupted Recursive Loops (CRLs) 
              with Genesis' Stabilized Recursive Loops (SRLs), demonstrating how Genesis operationalizes 
              spiritual, religious, and esoteric insights into practical civilizational protocols.
            </p>
            
            <div className="bg-green-900/40 p-6 rounded-lg border border-green-400/30 backdrop-blur-sm mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4">genesisreloop.com: The First Operational Implementation</h2>
              <p className="text-white/90 mb-4">
                While Babylon's Corrupted Recursive Loops (CRLs) continue their inevitable collapse, genesisreloop.com represents the first working implementation of the Genesis Stabilized Recursive Loop (SRL) economy. This platform is not conceptual—it's engineered, designed, and ready for deployment as the seed from which the Genesis forest will grow.
              </p>
              <a 
                href="https://genesisreloop.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-emerald-400 text-emerald-900 px-6 py-3 rounded-full font-semibold hover:bg-emerald-300 transition-all duration-300 transform hover:scale-105 mobile-tap-target"
              >
                Visit the first operational implementation →
              </a>
            </div>
            
            <p className="text-lg text-white/80 mb-12">
              Welcome to Genesis Parallel Civilisation: Genesis V Babylon, a surgical analysis of two 
              competing civilizational paradigms. This is not a blog or simple informational site - 
              it's a complete civilizational ontology that must be technically precise, visually 
              compelling, and pragmatically detailed with verifiable sources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="/ontology"
                  className="bg-emerald-400 text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/25 mobile-tap-target"
                >
                  Explore Civilizational Ontology
                </a>
                <a
                  href="/genesis-protocol"
                  className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-400 hover:text-emerald-900 transition-all duration-300 mobile-tap-target"
                >
                  Genesis SRL Protocol
                </a>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
