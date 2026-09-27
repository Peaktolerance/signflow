import React from 'react';
import { 
  UploadCloud, CalendarClock, Sliders, 
  ArrowRight, Sparkles
} from 'lucide-react';

export default function HowItWorksSection({ onOpenDemoModal }) {
  const steps = [
    {
      step: '01',
      icon: <UploadCloud className="w-8 h-8 text-cyan-400" />,
      title: 'Upload Your Content',
      desc: 'Drag & drop offer posters, festival banners, or promotional videos into your cloud vault easily.',
      detail: 'Supports video files, images, web pages, and dynamic text announcements.',
      badge: 'Step 1: Upload'
    },
    {
      step: '02',
      icon: <CalendarClock className="w-8 h-8 text-brand-400" />,
      title: 'Schedule Display Times',
      desc: 'Set custom time slots, recurring weekly schedules, or dayparting rules for different store operating hours.',
      detail: 'Set promos to automatically launch during peak customer foot traffic hours.',
      badge: 'Step 2: Schedule'
    },
    {
      step: '03',
      icon: <Sliders className="w-8 h-8 text-emerald-400" />,
      title: 'Manage Remotely',
      desc: 'Monitor display status, push updates remotely, and switch campaigns across store locations from any device.',
      detail: 'Access your cloud dashboard from phone, tablet, or laptop anytime.',
      badge: 'Step 3: Remote Control'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-xs font-bold text-brand-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>SIMPLE & QUICK SETUP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How SignFlow Works <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-cyan-400">
              Easy Digital Display Control
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Get your store displays connected and active with our intuitive cloud management workflow.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((st, idx) => (
            <div 
              key={idx}
              className="relative p-8 rounded-3xl bg-navy-900/60 border border-slate-800/90 hover:border-cyan-400/50 transition-all duration-300 shadow-xl backdrop-blur-md flex flex-col justify-between group hover:-translate-y-2"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-cyan-400/40 group-hover:bg-brand-500/10 transition">
                    {st.icon}
                  </div>
                  <span className="text-3xl font-black font-mono text-slate-700 group-hover:text-cyan-400 transition duration-300">
                    {st.step}
                  </span>
                </div>

                <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20 mb-3">
                  {st.badge}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition">
                  {st.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {st.desc}
                </p>

                <p className="text-xs text-slate-400 pt-3 border-t border-slate-800/80 leading-relaxed">
                  {st.detail}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-navy-900 border border-slate-700 text-cyan-400">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-brand-900/60 via-navy-900 to-cyan-950/60 border border-brand-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>Ready to update your store displays remotely?</span>
            </h3>
            <p className="text-sm text-slate-300">
              Start your 14-day free trial. Test full scheduling and multi-display management capabilities.
            </p>
          </div>

          <button
            onClick={onOpenDemoModal}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-brand-500/30 hover:scale-105 transition duration-200 flex items-center space-x-2"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
