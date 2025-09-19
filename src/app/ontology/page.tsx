import Image from 'next/image';
import GlassCard from '../components/GlassCard';
import DisclaimerBanner from '../components/DisclaimerBanner';
import ImageGallery from '../components/gallery/ImageGallery';
import { getImagesBySection } from '@/lib/image-registry';

export default function Ontology() {
  const unusedImages = getImagesBySection('ontology', true);

  return (
    <div className="bg-ontology bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <DisclaimerBanner />
          
          <GlassCard className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Civilizational Ontology
            </h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Civilization isn't built on ideas but recursive patterns. We map the foundational seed of Babylon (private property) 
              and Genesis (verified value creation), showing how each seed grows into a complete civilizational structure through recursion.
            </p>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-4xl font-bold text-green-400 mb-6 font-montserrat">The Recursive Seed: Private Property as Instruction Set</h2>
            
            <div className="glass-container rounded-lg p-6 mb-6">
              <p className="text-white/90 mb-6">
                The system's prime directive is Private Property. It is an instruction set defining relationships through exclusion, 
                requiring enforcement. This seed code is recursively executed across history, with modern implementations mirroring 
                ancient ones in function, if not form.
              </p>

              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm mb-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Historical Example: Code of Hammurabi (1750 BCE)</h3>
                <p className="text-white/80 mb-4">
                  <strong>Section 21:</strong> 'If a man has broken into a house, they shall kill that man in front of that breach and bury him there.' 
                  Not just punishment, but the first written legal enforcement of private property as absolute exclusion principle.
                </p>
                <p className="text-green-300 text-sm italic">
                  <strong>Esoteric Connection:</strong> In Freemasonry, this manifests as the Square and Compass - tools that measure and enforce boundaries, 
                  not just physical but cognitive. The Babylonian seed has infected even liberation movements, turning them into new forms of control rather than true freedom.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-4xl font-bold text-green-400 mb-6 font-montserrat">Babylon CRL vs Genesis SRL</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="glass-container rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-2xl font-semibold text-red-400 mb-4">Babylon's Seed: Private Property</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-white/90"><strong>Seed:</strong> Private Property</p>
                  <p className="text-white/90"><strong>Logic:</strong> Lack / Scarcity</p>
                  <p className="text-white/90"><strong>Function:</strong> Control / Hoarding</p>
                  <p className="text-white/90"><strong>Behavior:</strong> Attachment / Exclusion</p>
                  <p className="text-red-300"><strong>Result:</strong> Extraction / Collapse</p>
                </div>
                <p className="text-white/80 mt-4 text-sm italic">
                  This protocol initiates a Corrupted Recursive Loop (CRL). Its core instruction is exclusion. 
                  By presupposing lack, it necessitates control to enforce ownership and attachment to hoard value.
                </p>
              </div>

              <div className="glass-container rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">Genesis's Seed: Verified Value Creation</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-white/90"><strong>Seed:</strong> Verified Value Creation</p>
                  <p className="text-white/90"><strong>Logic:</strong> Abundance</p>
                  <p className="text-white/90"><strong>Function:</strong> Flow / Contribution</p>
                  <p className="text-white/90"><strong>Behavior:</strong> Transparency / Verification</p>
                  <p className="text-green-300"><strong>Result:</strong> Regeneration / Resilience</p>
                </div>
                <p className="text-white/80 mt-4 text-sm italic">
                  This protocol initiates a Stabilized Recursive Loop (SRL). Its core instruction is contribution. 
                  By working with natural abundance, it necessitates transparency and flow.
                </p>
              </div>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-400/30 backdrop-blur-sm">
              <p className="text-purple-200 text-sm italic">
                <strong>Esoteric Connection:</strong> In Kabbalah, Babylon's CRL is the Tree of Death (Qlippoth) - a corrupted version of the Tree of Life 
                where abundance is perceived as scarcity. Genesis SRL is the true Tree of Life where each sephirah flows into the next in a 
                self-reinforcing loop of abundance. The transition from CRL to SRL is the path from Malkuth (material scarcity) to Kether (divine abundance).
              </p>
            </div>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-4xl font-bold text-green-400 mb-6 font-montserrat">The Recursive Loop: How Seeds Become Forests</h2>
            
            <p className="text-white/90 mb-6">
              Every action within a civilization is governed by its core recursive loop: a sequence of inputs → transform → outputs → feedback. 
              The nature of the seed dictates the loop's outcome.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="bg-red-800/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-red-400 mb-4">The Babylon CRL:</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-white/80">Inputs (resources) →</p>
                  <p className="text-white/80">Transform (extract value through control) →</p>
                  <p className="text-white/80">Outputs (wealth for few) →</p>
                  <p className="text-white/80">Feedback (more control needed) →</p>
                  <p className="text-red-300">Inputs (more resources needed)</p>
                </div>
              </div>

              <div className="bg-green-800/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-green-400 mb-4">The Genesis SRL:</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-white/80">Inputs (waste streams) →</p>
                  <p className="text-white/80">Transform (verified value creation) →</p>
                  <p className="text-white/80">Outputs (energy, materials, community) →</p>
                  <p className="text-white/80">Feedback (more waste streams transformed) →</p>
                  <p className="text-green-300">Inputs (more waste streams identified)</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-400/30 backdrop-blur-sm">
              <p className="text-blue-200 text-sm italic">
                <strong>Esoteric Connection:</strong> In Gnostic tradition, the Demiurge (Babylon) creates through separation and control, 
                while the true God (Genesis) creates through emanation and flow. The recursive loop is the Gnostic Pleroma - the fullness 
                from which all things flow without diminishment. The CRL is the Archon's attempt to trap this flow in artificial scarcity.
              </p>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-bold text-green-400 mb-6">Recursive Pattern Diagrams</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/civilisational-ontology-1.png"
                  alt="Civilizational Ontology Diagram 1"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/civilisational-ontology-2.png"
                  alt="Civilizational Ontology Diagram 2"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/civilisational-ontology-3.png"
                  alt="Civilizational Ontology Diagram 3"
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
              title="Additional Visual Explorations: Civilizational Ontology"
              className="mt-12"
            />
          )}
        </div>
      </div>
    </div>
  );
}
