import Image from 'next/image';
import GlassCard from '../components/GlassCard';
import ImageGallery from '../components/gallery/ImageGallery';
import { getImagesBySection } from '@/lib/image-registry';

export default function MemeticWeapons() {
  const unusedImages = getImagesBySection('memetics', true);

  return (
    <div className="bg-memetics bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Recursive Memetic Weapons
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              This section explains the Genesis memetic strategy as 'Fusion of Fission' - where Fusion represents Genesis building 
              and Fission represents pure collapsing of Babylon through memetics. This creates a recursive loop for memetic operators.
            </p>
          </GlassCard>

          <div className="glass-container rounded-lg p-6 mb-8 border border-green-500/30">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Fusion of Fission</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="bg-green-900/20 p-6 rounded-lg border-l-4 border-green-400 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green-400 mb-3">🔥 Fusion (Genesis Building)</h3>
                <p className="text-white/90 mb-4">
                  Building Genesis SRLs creates tangible proof of concept that demonstrates superior civilizational patterns.
                </p>
                <div className="text-sm text-green-200">
                  <strong>Example:</strong> A successfully implemented biogas plant demonstrates the viability of waste-to-energy loops.
                </div>
              </div>
              
              <div className="bg-red-900/20 p-6 rounded-lg border-l-4 border-red-400 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-red-400 mb-3">💥 Fission (Babylon Collapse)</h3>
                <p className="text-white/90 mb-4">
                  Analyzing Babylon CRLs reveals their structural weaknesses and accelerates their natural collapse.
                </p>
                <div className="text-sm text-red-200">
                  <strong>Example:</strong> The same biogas plant reveals the inefficiency of traditional waste management systems.
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-400/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">🔄 Recursive Loop</h3>
              <p className="text-white/90">
                Each successful SRL implementation accelerates CRL collapse, which creates more opportunity for SRL implementation. 
                This creates exponential momentum toward civilizational transition.
              </p>
            </div>
          </div>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Pure Collapse Methodology</h2>

            <div className="glass-container rounded-lg p-6 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="text-red-400 font-semibold mb-2">Identify the CRL or loop cluster</h4>
                  <p className="text-white/80 text-sm">Recognize the patterns of corrupted recursive loops.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Interrogate the loop with visualizations and evidence</h4>
                  <p className="text-white/80 text-sm">Understand its foundational principles and historical manifestations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-2">Identify connected loops</h4>
                  <p className="text-white/80 text-sm">See how the CRL interconnects with other systems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Make the loop recursively stable</h4>
                  <p className="text-white/80 text-sm">Transform the pattern into a Stabilized Recursive Loop (SRL) and feel the biochemical response.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">ACT with tangible proof</h4>
                  <p className="text-white/80 text-sm">Implement the new SRL in practice with real relationships, activities, responsibilities.</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-bold text-green-400 mb-6">Memetic Weapons Diagrams</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/recursive-memetic-weapons-1.png"
                  alt="Recursive Memetic Weapons Diagram 1"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/recursive-memetic-weapons-2.png"
                  alt="Recursive Memetic Weapons Diagram 2"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/recursive-memetic-weapons-4.png"
                  alt="Recursive Memetic Weapons Diagram 3"
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
              title="Additional Visual Explorations: Recursive Memetic Weapons"
              className="mt-12"
            />
          )}
        </div>
      </div>
    </div>
  );
}