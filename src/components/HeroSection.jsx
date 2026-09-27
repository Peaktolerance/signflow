import React, { useState, useEffect } from 'react';
import { 
  Monitor, Sparkles, ArrowRight, Play, CheckCircle2, Wifi, 
  RefreshCw, Clock, ShieldCheck, Zap, ChevronRight
} from 'lucide-react';

export default function HeroSection({ onOpenDemoModal, onActionToast }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);

  const mediaTemplates = [
    {
      id: 'promo-1',
      title: '🍕 South Indian Combo Special',
      badge: 'FESTIVE OFFER',
      tagline: 'Special Biryani & Tiffin Combo Pack',
      bgGradient: 'from-amber-600 via-orange-600 to-red-700',
      price: '₹249',
      schedule: 'Fri - Sun • 11:00 AM - 10:00 PM',
      screens: 'Banjara Hills Outlet, Hyderabad'
    },
    {
      id: 'promo-2',
      title: '☕ Morning Filter Coffee Deal',
      badge: 'BREAKFAST SPECIAL',
      tagline: 'Free Mysore Bonda with Filter Coffee',
      bgGradient: 'from-emerald-700 via-teal-700 to-cyan-800',
      price: '₹99',
      schedule: 'Mon - Fri • 06:30 AM - 11:00 AM',
      screens: 'MG Road Branch, Vijayawada'
    },
    {
      id: 'promo-3',
      title: '⚡ Festive Discount Sale',
      badge: 'FLASH ANNOUNCEMENT',
      tagline: 'Flat ₹400 Off on Ethnic Wear Purchases!',
      bgGradient: 'from-indigo-600 via-purple-600 to-pink-600',
      price: '₹400 OFF',
      schedule: 'Live Override • Ends 9:00 PM',
      screens: 'Indiranagar Showroom, Bengaluru'
    }
  ];

  const currentMedia = mediaTemplates[activeMediaIndex];

  const handleMediaChange = (index) => {
    setIsSyncing(true);
    setActiveMediaIndex(index);
    if (onActionToast) {
      onActionToast(`Pushed "${mediaTemplates[index].title}" to connected displays`);
    }
    setTimeout(() => {
      setIsSyncing(false);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMediaIndex((prev) => (prev + 1) % mediaTemplates.length);
    }, 8000);
    return () => fontClear();
    function fontClear() { clearInterval(interval); }
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-navy-950">
      {/* Background Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-brand-600/20 via-cyan-500/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag Banner */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs font-semibold text-brand-300 shadow-xl backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-white">Cloud Digital Signage for Indian SMBs</span>
            <span className="text-slate-500">•</span>
            <span className="text-cyan-400 flex items-center">
              Fast Remote Updates <ChevronRight className="w-3 h-3 ml-0.5" />
            </span>
          </div>
        </div>

        {/* Main Hero Copy */}
        <div className="mt-8 text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Manage Your Digital Displays. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-cyan-400">
              Anywhere. Anytime.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Create, schedule, and update your digital advertising remotely from one simple cloud-based platform.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-brand-500/30 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-3"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-slate-700/80 hover:border-slate-500 transition-all duration-200 flex items-center justify-center space-x-2 backdrop-blur-md"
            >
              <span>Explore Features</span>
            </a>
          </div>

          {/* Non-Numerical Trust Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No Special Hardware Required</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Fast Remote Updates</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>14-Day Free Trial</span>
            </div>
          </div>
        </div>

        {/* HERO VISUAL MOCKUP */}
        <div className="mt-14 relative max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 via-cyan-500/20 to-brand-700/20 rounded-3xl blur-2xl transform scale-95 opacity-70"></div>

          <div className="relative bg-navy-900/90 border border-slate-700/70 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">
            
            {/* Top Window Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-navy-950/80">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-xs font-mono text-slate-400 border-l border-slate-800 pl-3">
                  app.signflow.in / dashboard / live-display-manager
                </span>
              </div>

              <div className="flex items-center space-x-3 text-xs">
                <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Wifi className="w-3.5 h-3.5 animate-pulse" />
                  <span className="font-semibold">Display Connected</span>
                </span>
              </div>
            </div>

            {/* Showcase Grid */}
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Cloud Dashboard Control */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Monitor className="w-5 h-5 text-brand-400" />
                    <h3 className="text-base font-bold text-white">SignFlow Cloud Control</h3>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 font-mono">
                    Hyderabad Group
                  </span>
                </div>

                <p className="text-xs text-slate-400">
                  Select a promo campaign to push updates remotely to your store display:
                </p>

                {/* Template Selector Cards */}
                <div className="space-y-3">
                  {mediaTemplates.map((template, idx) => {
                    const isSelected = idx === activeMediaIndex;
                    return (
                      <button
                        key={template.id}
                        onClick={() => handleMediaChange(idx)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                          isSelected
                            ? 'bg-brand-500/15 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                            : 'bg-navy-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-sm text-white">{template.title}</span>
                            {isSelected && (
                              <span className="px-2 py-0.5 text-[10px] uppercase font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-md animate-pulse">
                                Live Now
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-400 flex items-center space-x-2">
                            <Clock className="w-3.5 h-3.5 text-slate-500" />
                            <span>{template.schedule}</span>
                          </div>
                        </div>

                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-cyan-500 text-navy-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Non-Numerical Metrics Bar */}
                <div className="p-4 bg-navy-950/80 rounded-2xl border border-slate-800 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-slate-400">Total Displays</div>
                    <div className="text-sm font-bold text-white mt-1">Managed</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Update Speed</div>
                    <div className="text-sm font-bold text-cyan-400 mt-1">Fast Push</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Cloud Status</div>
                    <div className="text-sm font-bold text-emerald-400 mt-1">Active</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Physical Screen Mockup */}
              <div className="lg:col-span-7">
                <div className="relative mx-auto max-w-lg">
                  <div className="relative rounded-3xl p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl border-2 border-slate-600/60 ring-1 ring-white/10">
                    
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center space-x-1 px-3 py-0.5 rounded-full bg-slate-900/90 text-[10px] text-slate-400 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                      <span className="font-semibold text-slate-300">Smart Display #01 - {currentMedia.screens.split(',')[0]}</span>
                    </div>

                    <div className={`relative mt-4 aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br ${currentMedia.bgGradient} p-6 flex flex-col justify-between shadow-inner transition-all duration-500`}>
                      
                      <div className="flex items-center justify-between text-white">
                        <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase">
                          {currentMedia.badge}
                        </span>
                        <div className="flex items-center space-x-2 text-xs font-medium bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span>UPDATED REMOTELY</span>
                        </div>
                      </div>

                      <div className="my-auto space-y-2 text-white drop-shadow-md">
                        <div className="inline-block text-xs font-semibold px-2.5 py-1 bg-white/20 rounded-md backdrop-blur-sm">
                          TODAY'S OFFER
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                          {currentMedia.tagline}
                        </h2>
                        <p className="text-xs sm:text-sm opacity-90 font-medium">
                          Show this display at order counter to redeem offer!
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/20 text-white">
                        <div>
                          <div className="text-[10px] opacity-80 uppercase font-semibold">Special Price</div>
                          <div className="text-xl sm:text-2xl font-black text-amber-300">{currentMedia.price}</div>
                        </div>
                        <div className="px-4 py-2 bg-white text-navy-950 font-bold text-xs rounded-xl shadow-lg">
                          ORDER AT COUNTER
                        </div>
                      </div>

                      {isSyncing && (
                        <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-xs flex items-center justify-center animate-pulse">
                          <div className="px-4 py-2 bg-navy-900 text-cyan-400 rounded-xl font-bold text-xs flex items-center space-x-2 border border-cyan-400">
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Updating Screen Content...</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-2 flex justify-center">
                      <div className="w-24 h-1.5 bg-slate-700 rounded-full"></div>
                    </div>
                  </div>

                  {/* Non-Numerical Callout Chips */}
                  <div className="absolute -bottom-4 -left-6 hidden sm:flex items-center space-x-2 px-4 py-2.5 bg-navy-900/90 border border-slate-700 text-white text-xs font-semibold rounded-2xl shadow-xl backdrop-blur-md">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Fast remote updates across store displays</span>
                  </div>

                  <div className="absolute -top-4 -right-6 hidden sm:flex items-center space-x-2 px-4 py-2.5 bg-navy-900/90 border border-slate-700 text-white text-xs font-semibold rounded-2xl shadow-xl backdrop-blur-md">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Centralized display management</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
