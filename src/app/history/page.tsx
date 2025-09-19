import Image from 'next/image';
import GlassCard from '../components/GlassCard';

export default function History() {
  return (
    <div className="bg-history bg-vignette min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
              Complete Civilizational History
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              This section traces 5,000 years of Babylon civilization, showing the unbroken recursive 
              pattern across Egyptian, Roman, Greek, Incan, and modern systems. It demonstrates how the 
              same three core beliefs (lack, attachment, control) manifest in each era, contrasting with 
              Genesis' emerging parallel civilization.
            </p>
          </GlassCard>

          <GlassCard className="mb-8">
            <h3 className="text-green-400 font-semibold mb-4 text-lg">Required Updates:</h3>
            <ul className="text-white/80 space-y-2">
              <li>• Replace narrative history with technical system analysis.</li>
              <li>• Show specific transmission mechanisms between civilizations.</li>
              <li>• Provide measurable continuity evidence.</li>
            </ul>
          </GlassCard>

          <GlassCard className="mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-montserrat">Historical Examples</h2>
            
            <div className="space-y-8">
              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                  Egypt: The Rosetta Stone (196 BCE)
                </h3>
                <p className="text-white/90 mb-4">
                  <strong>Technical Analysis:</strong> The Rosetta Stone wasn't just a decree - it was a 
                  system update: Ptolemy V's tax relief measures were designed to stabilize the collapsing 
                  CRL by temporarily reducing extraction pressure while maintaining private property foundation.
                </p>
                <p className="text-white/90 mb-4">
                  <strong>Continuity Evidence:</strong> The Egyptian 'sepat' (private land) system directly 
                  influenced Roman 'fundus' (private estate) system through Hellenistic intermediaries, with 
                  identical legal structures for exclusion and inheritance.
                </p>
                <p className="text-white/70 text-sm">
                  <strong>Source:</strong>{' '}
                  <a 
                    href="https://www.britishmuseum.org/collection/object/Y_EA24" 
                    className="text-green-400 hover:text-green-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    British Museum
                  </a>
                </p>
              </div>

              <div className="glass-container rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                  Modern: The WTO Agreement on TRIPS (1994)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <figure className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/sections/a-complete-civilisational-history-6.png"
                      alt="Complete Civilizational History"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </figure>
                  <figure className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/sections/complete-civilsational-history-1.png"
                      alt="Complete Civilizational History"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </figure>
                  <figure className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/sections/complete-cilvilisational-history-2.png"
                      alt="Complete Civilizational History"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </figure>
                </div>

                <p className="text-white/90 mb-4">
                  <strong>Technical Analysis:</strong> The WTO Agreement on TRIPS isn't about trade - it's 
                  the global enforcement mechanism for the private property CRL, standardizing exclusion 
                  logic across 164 nations.
                </p>
                <p className="text-white/90 mb-4">
                  <strong>Continuity Evidence:</strong> TRIPS Article 27 directly implements the same 
                  exclusion principle as Hammurabi Code Section 21, with modern enforcement through trade 
                  sanctions instead of physical violence.
                </p>
                <p className="text-white/70 text-sm">
                  <strong>Source:</strong>{' '}
                  <a 
                    href="https://www.wto.org/english/tratop_e/trips_e/t_agm0_e.htm" 
                    className="text-green-400 hover:text-green-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    World Trade Organization
                  </a>
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/complete-civilisational-history-3.png"
                  alt="Complete Civilizational History Analysis"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden">
                <Image
                  src="/images/sections/Complete-civilisational-history-5.png"
                  alt="Complete Civilizational History Timeline"
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