import React, { useState } from 'react';
import { 
  Sparkles, PlusCircle, Calendar, Tv, ArrowRight, 
  Layout, Check
} from 'lucide-react';

export default function SolutionSection({ onActionToast }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Create Content',
      icon: <PlusCircle className="w-6 h-6" />,
      tagline: 'Design offer posters, menus, or import promo graphics easily.',
      features: [
        'Drag-and-drop media uploader (PNG, JPG, MP4)',
        'Support for custom templates and offer banners',
        'Multi-zone display layouts (Split screen video + announcement ticker)'
      ],
      previewTitle: 'Content Studio & Media Manager',
      previewDetails: 'Supports promo videos, dynamic text tickers, menu boards, and brand logos with clear formatting.',
      previewBg: 'from-brand-600/30 to-slate-900',
      badge: 'Step 1: Content Studio'
    },
    {
      num: '02',
      title: 'Schedule Timing',
      icon: <Calendar className="w-6 h-6" />,
      tagline: 'Set specific time slots and recurring rules for your promotions.',
      features: [
        'Dayparting (Morning tiffin menu to evening dinner specials)',
        'Festive sale & event schedule presets',
        'Targeted location tags (Group screens by city like Hyderabad, Vijayawada, or Bengaluru)'
      ],
      previewTitle: 'Smart Playlist Scheduler',
      previewDetails: 'Automated playlist timing ensures your displays show relevant offers during peak customer traffic hours.',
      previewBg: 'from-cyan-600/30 to-slate-900',
      badge: 'Step 2: Smart Schedule'
    },
    {
      num: '03',
      title: 'Display Remotely',
      icon: <Tv className="w-6 h-6" />,
      tagline: 'Push updates remotely across 1 to multiple displays from anywhere.',
      features: [
        'Fast over-the-air remote cloud synchronization',
        'Offline caching (Displays keep playing stored media if internet disconnects)',
        'Centralized display management & status confirmation'
      ],
      previewTitle: 'Remote Fleet Display Manager',
      previewDetails: 'Update store announcements across retail outlets, cafes, or showrooms from a single browser dashboard.',
      previewBg: 'from-emerald-600/30 to-slate-900',
      badge: 'Step 3: Remote Display'
    }
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
    if (onActionToast) {
      onActionToast(`Previewing Step ${index + 1}: ${steps[index].title}`);
    }
  };

  const currentStepData = steps[activeStep];

  return (
    <section id="solution" className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-xs font-bold text-brand-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>THE SIGNFLOW SOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Streamlined Digital Signage <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-cyan-400">
              In 3 Simple Steps
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            SignFlow simplifies your entire digital display workflow into an intuitive, centralized cloud dashboard.
          </p>
        </div>

        {/* Create -> Schedule -> Display Flow Bar */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={idx}
                onClick={() => handleStepClick(idx)}
                className={`relative p-6 rounded-2xl text-left border transition-all duration-300 flex items-start space-x-4 ${
                  isActive
                    ? 'bg-gradient-to-b from-navy-900 to-slate-900 border-cyan-400 shadow-xl shadow-brand-500/10 scale-[1.02]'
                    : 'bg-navy-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-navy-900/80'
                }`}
              >
                <div className={`p-3 rounded-xl shrink-0 ${
                  isActive ? 'bg-gradient-to-tr from-brand-600 to-cyan-500 text-white shadow-lg shadow-brand-500/30' : 'bg-slate-800 text-slate-400'
                }`}>
                  {step.icon}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">{step.num}</span>
                    <h3 className={`font-extrabold text-lg ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.tagline}
                  </p>
                </div>

                {idx < 2 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Step Preview Panel */}
        <div className="mt-10 bg-navy-900/80 border border-slate-700/80 rounded-3xl p-6 lg:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block text-xs font-mono font-bold px-3 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-lg">
                {currentStepData.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentStepData.title}: Workflow Details
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentStepData.previewDetails}
              </p>

              <div className="space-y-3 pt-2">
                {currentStepData.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-500/30">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Step Visual Showcase */}
            <div className="lg:col-span-7">
              <div className={`relative rounded-2xl p-6 bg-gradient-to-br ${currentStepData.previewBg} border border-slate-700 shadow-2xl space-y-4`}>
                
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
                  <div className="flex items-center space-x-2">
                    <Layout className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white">{currentStepData.previewTitle}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ● SignFlow Engine Ready
                  </span>
                </div>

                {activeStep === 0 && (
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-4 bg-navy-950/80 rounded-xl border border-slate-800 space-y-2">
                      <div className="w-full h-24 bg-gradient-to-tr from-amber-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xs text-center p-2">
                        🍛 South Indian Meal Special (₹249)
                      </div>
                      <div className="text-[11px] font-semibold text-slate-300 flex justify-between">
                        <span>Lunch_Combo.png</span>
                        <span className="text-cyan-400 font-mono">Full HD</span>
                      </div>
                    </div>
                    <div className="p-4 bg-navy-950/80 rounded-xl border border-slate-800 space-y-2">
                      <div className="w-full h-24 bg-gradient-to-tr from-brand-600 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-xs text-center p-2">
                        ☕ Morning Filter Coffee Video
                      </div>
                      <div className="text-[11px] font-semibold text-slate-300 flex justify-between">
                        <span>Coffee_Ad.mp4</span>
                        <span className="text-cyan-400 font-mono">15 Sec</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="p-4 bg-navy-950/80 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-xs text-slate-300 font-semibold flex justify-between">
                      <span>Daily Rotation Timeline</span>
                      <span className="text-cyan-400 font-mono">Auto-Switch Enabled</span>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs">
                        <span className="font-bold text-emerald-300">06:30 AM - 11:00 AM</span>
                        <span className="text-slate-200">Breakfast & Coffee Menu</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-between text-xs">
                        <span className="font-bold text-brand-300">11:00 AM - 04:00 PM</span>
                        <span className="text-slate-200">Lunch Thali Specials</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-between text-xs">
                        <span className="font-bold text-purple-300">04:00 PM - 10:00 PM</span>
                        <span className="text-slate-200">Snacks & Evening Offers</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="p-4 bg-navy-950/80 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-white">
                      <span>Connected Displays (Indian Cities)</span>
                      <span className="text-emerald-400 flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>Displays Connected</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex justify-between">
                        <span className="text-slate-300">Hyderabad Outlet #01</span>
                        <span className="text-cyan-400 font-mono">Synced</span>
                      </div>
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex justify-between">
                        <span className="text-slate-300">Vijayawada Store #02</span>
                        <span className="text-cyan-400 font-mono">Synced</span>
                      </div>
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex justify-between">
                        <span className="text-slate-300">Bengaluru Outlet #03</span>
                        <span className="text-cyan-400 font-mono">Synced</span>
                      </div>
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex justify-between">
                        <span className="text-slate-300">Visakhapatnam Store</span>
                        <span className="text-cyan-400 font-mono">Synced</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
