import Image from 'next/image';
import GlassCard from '../components/GlassCard';
import ImageGallery from '../components/gallery/ImageGallery';
import { getImagesBySection } from '@/lib/image-registry';

export default function FractalGrowth() {
  const unusedImages = getImagesBySection('growth', true);

  return (
    <div className="bg-fractal-growth bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Recursive Fractal Growth Pattern
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              This section demonstrates how both systems scale fractally - same pattern at village, nation, and global levels. 
              It uses visual comparisons showing Babylon's centralization pattern vs Genesis' decentralized network pattern 
              and includes interactive fractal visualizations.
            </p>
          </GlassCard>

          <div className="glass-container rounded-lg p-6 mb-8 border-l-4 border-red-500">
            <p className="text-red-200 text-sm font-medium">
              <strong>DISCLAIMER:</strong> All Genesis metrics below are estimates based on simulations and projections. 
              NO IMPLEMENTATION HAS BEEN DEPLOYED YET.
            </p>
          </div>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Fractal vs. Centralized Scaling</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-container rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-2xl font-semibold text-red-400 mb-4">Babylon's Centralized Pattern</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">HQ</div>
                    <span className="text-white/80">Central command controls all nodes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-400 rounded-full"></div>
                    <span className="text-white/70">Regional offices dependent on HQ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-300 rounded-full"></div>
                    <span className="text-white/60">Local branches with no autonomy</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-800/30 rounded text-xs backdrop-blur-sm">
                  <p className="text-red-200">
                    <strong>Failure Mode:</strong> When HQ fails, entire system collapses. 
                    Single point of failure creates systemic vulnerability.
                  </p>
                </div>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Genesis Fractal Pattern</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">N1</div>
                    <span className="text-white/80">Each node is a complete SRL system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                    <span className="text-white/70">Connected but autonomous nodes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-300 rounded-full"></div>
                    <span className="text-white/60">Network effects enhance each node</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-green-800/30 rounded text-xs backdrop-blur-sm">
                  <p className="text-green-200">
                    <strong>Resilience Mode:</strong> Each node can function independently. 
                    System maintains 95%+ functionality with 30% of nodes offline.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">12-Month Growth Projection</h2>
            
            <div className="glass-container rounded-lg p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-green-400 font-bold w-20">Month 0:</div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                </div>
                <span className="text-white/80">Initial Dagenham node</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-green-400 font-bold w-20">Month 6:</div>
                <div className="flex space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold">{i}</div>
                  ))}
                </div>
                <span className="text-white/80">5 nodes across UK regions</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-green-400 font-bold w-20">Month 12:</div>
                <div className="flex flex-wrap gap-1">
                  {Array.from({length: 25}, (_, i) => (
                    <div key={i} className="w-4 h-4 bg-green-300 rounded-full"></div>
                  ))}
                </div>
                <span className="text-white/80">25 nodes across Europe</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-green-400 font-bold w-20">Month 18:</div>
                <div className="flex flex-wrap gap-1">
                  {Array.from({length: 50}, (_, i) => (
                    <div key={i} className="w-3 h-3 bg-green-200 rounded-full"></div>
                  ))}
                </div>
                <span className="text-white/80">125 nodes globally</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Projected Metrics</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-green-400 mb-2">5x</div>
                <div className="text-sm text-white/80">Growth pattern: 1 → 5 → 25 nodes</div>
                <div className="text-xs text-white/60 mt-2">6 months per cycle</div>
              </div>
              <div className="bg-blue-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">20%</div>
                <div className="text-sm text-white/80">Efficiency gains per new node</div>
                <div className="text-xs text-white/60 mt-2">Due to optimized designs</div>
              </div>
              <div className="bg-purple-800/30 p-4 rounded-lg text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-sm text-white/80">Functionality with 30% nodes offline</div>
                <div className="text-xs text-white/60 mt-2">Fractal redundancy</div>
              </div>
            </div>
          </GlassCard>

          <div className="glass-container rounded-lg p-6 mb-8 border border-blue-500/30">
            <p className="text-blue-200 text-center">
              <strong>Fractal Principle:</strong> Each node contains the complete Genesis protocol. 
              Growth happens through replication of successful patterns, not expansion of centralized control.
            </p>
          </div>
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