'use client';

import { useState } from 'react';
import GenesisNavigation from '../components/GenesisNavigation';
import PageWithBackground from '../components/PageWithBackground';
import GlassCard from '../components/GlassCard';
import ImageGallery from '../components/gallery/ImageGallery';
import { getUnusedImagesBySection } from '@/lib/image-registry';

export default function OntologyPage() {
  const [activeSection, setActiveSection] = useState('recursive-ontology');

  const sections = [
    { id: 'recursive-ontology', title: 'Recursive Ontology', icon: '🌱' },
    { id: 'infinite-substrate', title: 'Infinite Substrate', icon: '♾️' },
    { id: 'conscious-recursion', title: 'Conscious Recursion', icon: '🧠' },
    { id: 'operational-code', title: 'Operational Code', icon: '⚙️' },
  ];

  return (
    <PageWithBackground sectionId="ontology">
      <GenesisNavigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-cloud-white mb-6 font-recursive genesis-text-glow">
            Civilizational Ontology
          </h1>
          <p className="text-xl text-plasma-green max-w-3xl mx-auto">
            The foundational recursive framework that generates the entire Genesis parallel civilization
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-plasma-green text-deep-black shadow-lg genesis-border-glow'
                  : 'bg-electric-violet/50 text-cloud-white hover:bg-electric-violet/70'
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {activeSection === 'recursive-ontology' && (
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-plasma-green mb-6 font-recursive">Recursive Ontology</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-cloud-white/90 mb-6">
                  The recursive ontology is the foundational seed that generates the entire Genesis protocol. 
                  It is not a belief system but an operational framework based on the fundamental pattern of nature: 
                  <strong className="text-plasma-green"> seed → tree → fruit → more seeds → forest</strong>.
                </p>
                
                <div className="genesis-card p-6 mb-6">
                  <h3 className="text-xl font-semibold text-plasma-green mb-4">The Recursive Seed</h3>
                  <p className="text-cloud-white/80">
                    This single instruction contains the complete operational code for building a parallel civilization. 
                    Every Genesis protocol derives from this recursive pattern, creating Stabilized Recursive Loops (SRLs) 
                    that regenerate their own foundation with each iteration.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="genesis-card p-6">
                    <h4 className="text-lg font-semibold text-plasma-green mb-3">SRL Pattern</h4>
                    <p className="text-cloud-white/80">
                      Genesis systems follow the recursive pattern, creating positive-sum, regenerative loops 
                      that strengthen over time and eliminate their own waste.
                    </p>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-red-300 mb-3">CRL Pattern</h4>
                    <p className="text-cloud-white/80">
                      Babylonian systems follow linear patterns, creating zero-sum, extractive loops 
                      that consume their own foundation and collapse.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          )}

          {activeSection === 'infinite-substrate' && (
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-plasma-green mb-6 font-recursive">Infinite Substrate</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-cloud-white/90 mb-6">
                  All existence is part of an infinite, eternal substrate that has always existed and will always exist. 
                  The Big Bang was not a creation event but a recycling of a 'former' universe.
                </p>
                
                <div className="bg-slate-900/50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-plasma-green mb-4">Scientific Foundation</h3>
                  <p className="text-cloud-white/80 mb-4">
                    Energy and matter are conserved, merely changing form. This is the scientific parallel to the 
                    religious concept of an omnipresent God - not a being, but the fundamental substrate of reality.
                  </p>
                  <ul className="text-cloud-white/80 space-y-2">
                    <li>• Energy conservation laws support eternal substrate concept</li>
                    <li>• Quantum field theory reveals fundamental 'field' underlying all particles</li>
                    <li>• Thermodynamics shows energy transformation, not creation/destruction</li>
                  </ul>
                </div>

                <div className="bg-emerald-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-plasma-green mb-3">Humanity's Role</h4>
                  <p className="text-cloud-white/80">
                    We are a fractional but infinite part of this substrate—the consciously recursive loops within it. 
                    Our function is to plan, create, implement, and manage within probable realities, serving the 
                    recursive pattern of the infinite substrate.
                  </p>
                </div>
              </div>
            </GlassCard>
          )}

          {activeSection === 'conscious-recursion' && (
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-plasma-green mb-6 font-recursive">Conscious Recursion</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-cloud-white/90 mb-6">
                  Humans are the consciously recursive loops of the infinite substrate, capable of planning, 
                  creating, implementing, operating, and managing within probable reality harmonics.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-900/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-plasma-green mb-4">Recursive Capabilities</h3>
                    <ul className="text-cloud-white/80 space-y-2">
                      <li>• <strong>Planning:</strong> Anticipating future states and designing pathways</li>
                      <li>• <strong>Creating:</strong> Bringing new forms into existence</li>
                      <li>• <strong>Implementing:</strong> Executing plans in physical reality</li>
                      <li>• <strong>Operating:</strong> Managing ongoing systems and processes</li>
                      <li>• <strong>Managing:</strong> Coordinating complex recursive loops</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-plasma-green mb-4">Probability Harmonics</h3>
                    <p className="text-cloud-white/80">
                      We operate within 'probable reality harmonics' - the range of possible futures that can be 
                      actualized through conscious recursive action. This is not determinism but the recognition 
                      that our actions create resonant patterns in the substrate.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-plasma-green mb-3">The Recursive Advantage</h4>
                  <p className="text-cloud-white/80">
                    Unlike unconscious natural processes, conscious recursion allows us to accelerate the 
                    recursive pattern, building more complex and efficient SRLs that serve the infinite substrate 
                    more effectively than random evolution.
                  </p>
                </div>
              </div>
            </GlassCard>
          )}

          {activeSection === 'operational-code' && (
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-plasma-green mb-6 font-recursive">Operational Code</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-cloud-white/90 mb-6">
                  Enlightenment is irrelevant; operational code is everything. Focus on what you do to steward, 
                  grow, and improve your environment and community.
                </p>
                
                <div className="bg-slate-900/50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-plasma-green mb-4">Yashua's Commandments Operationalized</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="text-lg font-semibold text-plasma-green">"Love thy neighbor as yourself"</h4>
                      <p className="text-cloud-white/80">
                        Love what you see as 'other' as yourself because it is you - a different variation of the infinite substrate.
                      </p>
                    </div>
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="text-lg font-semibold text-plasma-green">"Love the Lord your God with all your heart, soul, mind, and strength"</h4>
                      <ul className="text-cloud-white/80 mt-2 space-y-1">
                        <li>• <strong>Heart:</strong> Emotional empathetic sense</li>
                        <li>• <strong>Soul:</strong> Worldview that directs empathy to others and self</li>
                        <li>• <strong>Mind:</strong> Checks and balances for empathy and compassion, schematizing for future generations</li>
                        <li>• <strong>Strength:</strong> Physical body as medium for implementing these principles</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-plasma-green mb-3">Pragmatism Defined</h4>
                  <p className="text-cloud-white/80">
                    What are the least steps with the greatest recursive impact so this problem is less probable to occur again? 
                    This is the operational definition of pragmatism within the Genesis framework.
                  </p>
                </div>
              </div>
            </GlassCard>
          )}
        </div>

        {/* Additional Visual Explorations Gallery */}
        <div className="mt-16">
          <ImageGallery 
            images={getUnusedImagesBySection('ontology')}
            title="Additional Visual Explorations: Civilizational Ontology"
            className="mt-8"
          />
        </div>
      </main>
    </PageWithBackground>
  );
}