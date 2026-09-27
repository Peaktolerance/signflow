import React, { useState, useEffect } from 'react';
import { Monitor, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenDemoModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Dashboard Demo', href: '#dashboard-demo' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-950/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-xl shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-cyan-400 p-0.5 shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <Monitor className="w-5 h-5 text-cyan-400 group-hover:text-brand-300 transition-colors" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
                Sign<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">Flow</span>
              </span>
              <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider -mt-1">Cloud Display OS</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-navy-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenDemoModal}
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Request a Demo</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-navy-900/95 backdrop-blur-2xl border border-slate-800 rounded-2xl shadow-2xl space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800/80 rounded-xl transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-semibold shadow-lg shadow-brand-500/25"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
