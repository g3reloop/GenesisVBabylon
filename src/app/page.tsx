import DisclaimerBanner from './components/DisclaimerBanner';
import GlassCard from './components/GlassCard';
import PageWithBackground from './components/PageWithBackground';

export default function Home() {
  return (
    <PageWithBackground sectionId="home">
      <div className="container mx-auto px-4 py-16">
        <DisclaimerBanner />
        
        <section className="text-center py-20 max-w-4xl mx-auto">
          <GlassCard className="mb-8">
            <div className="bg-electric-violet/30 px-4 py-2 rounded-full mb-4 inline-block border border-plasma-green/50">
              <span className="text-plasma-green font-semibold text-sm uppercase tracking-wide">FIRST OPERATIONAL NODE</span>
            </div>
            <h1 className="text-6xl font-bold text-cloud-white mb-6 font-recursive drop-shadow-lg genesis-text-glow">
              Genesis V Babylon
            </h1>
            <p className="text-2xl text-cloud-white/90 mb-8 leading-relaxed drop-shadow-md">
              A complete civilizational ontology comparing Babylon's Corrupted Recursive Loops (CRLs) 
              with Genesis' Stabilized Recursive Loops (SRLs), demonstrating how Genesis operationalizes 
              spiritual, religious, and esoteric insights into practical civilizational protocols.
            </p>
            
            <div className="genesis-card p-6 mb-8">
              <h2 className="text-2xl font-bold text-plasma-green mb-4">genesisreloop.com: The First Operational Implementation</h2>
              <p className="text-cloud-white/90 mb-4">
                While Babylon's Corrupted Recursive Loops (CRLs) continue their inevitable collapse, genesisreloop.com represents the first working implementation of the Genesis Stabilized Recursive Loop (SRL) economy. This platform is not conceptual—it's engineered, designed, and ready for deployment as the seed from which the Genesis forest will grow.
              </p>
              <a 
                href="https://genesisreloop.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="genesis-button inline-flex items-center"
              >
                Visit the first operational implementation →
              </a>
            </div>
            
            <p className="text-lg text-cloud-white/80 mb-12">
              Welcome to Genesis Parallel Civilisation: Genesis V Babylon, a surgical analysis of two 
              competing civilizational paradigms. This is not a blog or simple informational site - 
              it's a complete civilizational ontology that must be technically precise, visually 
              compelling, and pragmatically detailed with verifiable sources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="/ontology"
                  className="genesis-button text-lg px-8 py-4"
                >
                  Explore Civilizational Ontology
                </a>
                <a
                  href="/genesis-protocol"
                  className="border-2 border-plasma-green text-plasma-green px-8 py-4 rounded-full font-semibold text-lg hover:bg-plasma-green hover:text-deep-black transition-all duration-300 mobile-tap-target"
                >
                  Genesis SRL Protocol
                </a>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageWithBackground>
  );
}
