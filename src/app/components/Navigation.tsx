'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/ontology', label: 'Civilizational Ontology' },
    { href: '/history', label: 'Civilizational History' },
    { href: '/surgical-analysis', label: 'Surgical Analysis' },
    { href: '/collapse-protocol', label: 'Collapse Protocol' },
    { href: '/ai-as-tool-within-genesis', label: 'AI in Genesis' },
    { href: '/genesis-protocol', label: 'Genesis SRL Protocol' },
    { href: '/memetic-weapons', label: 'Memetic Weapons' },
    { href: '/esoteric-systems', label: 'Esoteric Systems' },
    { href: '/fractal-growth', label: 'Fractal Growth' },
    { href: '/why-genesis-wins', label: 'Why Genesis Wins' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/rmw-discography', label: 'RMW Discography' },
  ];

  return (
    <header className="bg-emerald-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-emerald-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group transition-all duration-300"
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/images/logos/genesis-logo.svg"
                alt="Genesis Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors font-montserrat uppercase tracking-wide hidden sm:block">
              Genesis Parallel Civilisation
            </span>
            <span className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors font-montserrat uppercase tracking-wide block sm:hidden">
              Genesis
            </span>
          </Link>
          
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors relative mobile-tap-target ${
                  pathname === item.href
                    ? 'text-emerald-400'
                    : 'text-emerald-100 hover:text-emerald-400'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-emerald-100 hover:text-emerald-400 mobile-tap-target p-2 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-emerald-900/95 backdrop-blur-sm border-t border-emerald-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors mobile-tap-target rounded-md ${
                    pathname === item.href
                      ? 'text-emerald-400 bg-emerald-800/50'
                      : 'text-emerald-100 hover:text-emerald-400 hover:bg-emerald-800/30'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
