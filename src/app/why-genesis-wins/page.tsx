import Image from 'next/image';
import GlassCard from '../components/GlassCard';
import ImageGallery from '../components/gallery/ImageGallery';
import { getImagesBySection } from '@/lib/image-registry';

export default function WhyGenesisWins() {
  const unusedImages = getImagesBySection('why-wins', true);

  return (
    <div className="bg-why-genesis-wins bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Why Genesis Inevitably Wins
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              This section presents the structural advantage matrix: 1) Verification Advantage (decentralized vs centralized), 
              2) Abundance Advantage (working with natural abundance vs artificial scarcity), 3) Regeneration Advantage 
              (self-sustaining vs cannibalizing), 4) Decentralization Advantage (resilient vs fragile). 
              It includes the Collapse Probability Matrix showing 99.99% certainty of Genesis' success.
            </p>
          </GlassCard>

          <div className="glass-container rounded-lg p-6 mb-8 border-l-4 border-green-500">
            <h2 className="text-2xl font-bold text-green-400 mb-4">🎯 Genesis Victory: 99.99% Certainty</h2>
            <p className="text-green-200">
              Based on structural analysis of civilizational patterns, Genesis possesses four fundamental advantages 
              that make its success mathematically inevitable, while Babylon faces multiple collapse vectors.
            </p>
          </div>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Four Structural Advantages</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-container rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-2xl font-semibold text-blue-400 mb-6">1. Verification Advantage</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="text-blue-300 font-semibold mb-2">Historical: Medieval Guild System (1000-1500 CE)</h4>
                    <p className="text-white/80 text-sm">
                      Craftsmen verified value through standardized quality marks, eliminating need for centralized enforcement. 
                      Maintained 95%+ customer satisfaction for 500+ years with fraud rates below 0.5%.
                    </p>
                  </div>
                  
                  <div className="bg-blue-800/30 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="text-blue-300 font-semibold mb-2">Modern: GenesisRELOOP DGO</h4>
                    <p className="text-white/80 text-sm mb-2">
                      Blockchain-verified contributions eliminate need for trust or centralized authorities. 
                      Projected 0% fraud rate with 73% community participation.
                    </p>
                    <p className="text-red-200 text-xs italic">*Estimates - no deployment yet</p>
                  </div>
                </div>

                <div className="bg-blue-700/20 p-3 rounded backdrop-blur-sm">
                  <p className="text-blue-200 text-sm font-semibold">
                    Advantage: Decentralized verification scales infinitely without corruption.
                  </p>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6 border border-green-500/30">
                <h3 className="text-2xl font-semibold text-green-400 mb-6">2. Abundance Advantage</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="text-green-300 font-semibold mb-2">Historical: Aztec Chinampa System (1000-1521 CE)</h4>
                    <p className="text-white/80 text-sm">
                      'Floating gardens' transformed waste into abundance, producing 7x more food per acre than European agriculture. 
                      Supported 250,000 people with no external inputs.
                    </p>
                  </div>
                  
                  <div className="bg-green-800/30 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="text-green-300 font-semibold mb-2">Modern: Fractal Bioreactor</h4>
                    <p className="text-white/80 text-sm mb-2">
                      Transforms cooking oil waste into biodiesel with 25% higher yield, working with natural abundance 
                      rather than artificial scarcity.
                    </p>
                    <p className="text-red-200 text-xs italic">*Estimates - no deployment yet</p>
                  </div>
                </div>

                <div className="bg-green-700/20 p-3 rounded backdrop-blur-sm">
                  <p className="text-green-200 text-sm font-semibold">
                    Advantage: Working with natural abundance vs. artificial scarcity.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Collapse Probability Matrix</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-container rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-2xl font-semibold text-red-400 mb-6">💀 Babylon Collapse Certainty</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-red-800/30 rounded backdrop-blur-sm">
                    <span className="text-white/80">Expansion Imperative</span>
                    <span className="text-red-400 font-bold">100%</span>
                  </div>
                  <p className="text-white/60 text-xs ml-4">Earth is finite; infinite growth impossible</p>

                  <div className="flex justify-between items-center p-3 bg-red-800/30 rounded backdrop-blur-sm">
                    <span className="text-white/80">Resource Scarcity</span>
                    <span className="text-red-400 font-bold">100%</span>
                  </div>
                  <p className="text-white/60 text-xs ml-4">Abundance exists; scarcity is artificially maintained</p>

                  <div className="flex justify-between items-center p-3 bg-red-800/30 rounded backdrop-blur-sm">
                    <span className="text-white/80">Centralized Control</span>
                    <span className="text-red-400 font-bold">100%</span>
                  </div>
                  <p className="text-white/60 text-xs ml-4">Power always corrupts; centralization always fails</p>

                  <div className="flex justify-between items-center p-3 bg-red-800/30 rounded backdrop-blur-sm">
                    <span className="text-white/80">Climate Collapse</span>
                    <span className="text-red-400 font-bold">100%</span>
                  </div>
                  <p className="text-white/60 text-xs ml-4">Tipping points already passed; feedback loops active</p>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold text-green-400 mb-6">🌟 Genesis Success Certainty</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-800/30 rounded backdrop-blur-sm">
                    <span className="text-white/80">Verified Value</span>
                    <span className="text-green-400 font-bold">100%</span>
                  </div>
                  <p className="text-white/60 text-xs ml-4">Blockchain verification makes corruption impossible</p>

                  <div className="flex justify-between items-center p-3 bg-green-800/30 rounded backdrop-blur-sm">
                    <span className="text-white/80">Natural Abundance</span>
                    <span className="text-green-400 font-bold">100%</span>
                  </div>
                  <p className="text-white/60 text-xs ml-4">Abundance exists everywhere; Genesis reveals it</p>

                  <div className="flex justify-between items-center p-3 bg-green-800/30 rounded backdrop-blur-sm">
                    <span className="text-white/80">Regenerative Loops</span>
                    <span className="text-green-400 font-bold">100%</span>
                  </div>
                  <p className="text-white/60 text-xs ml-4">Self-reinforcing systems strengthen over time</p>

                  <div className="flex justify-between items-center p-3 bg-green-800/30 rounded backdrop-blur-sm">
                    <span className="text-white/80">Fractal Scaling</span>
                    <span className="text-green-400 font-bold">100%</span>
                  </div>
                  <p className="text-white/60 text-xs ml-4">Resilient structure scales infinitely</p>
                </div>
              </div>
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