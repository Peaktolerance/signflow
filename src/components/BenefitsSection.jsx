import React from 'react';
import { 
  Clock, TrendingUp, Zap, Layers, MessageSquare, 
  CheckCircle2, ShieldCheck, Award
} from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-brand-400" />,
      title: 'Save Time',
      desc: 'Eliminate physical poster replacement and USB drive management. Update promotional campaigns remotely across displays.',
      tag: 'Fast Remote Updates'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: 'Reduce Operational Effort & Lower Printing Costs',
      desc: 'Lower printing and update costs by replacing disposable paper banners with reusable digital offer boards.',
      tag: 'Lower Printing Costs'
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Reach Customers Faster',
      desc: 'Capitalize on peak foot traffic, festive offers, and stock clearances by launching update campaigns quickly.',
      tag: 'Update Campaigns Quickly'
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      title: 'Manage Multiple Screens Effortlessly',
      desc: 'Centralized display management allows you to scale displays across store outlets from a single cloud dashboard.',
      tag: 'Centralized Display Management'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: 'Improve In-Store Communication',
      desc: 'Improve customer communication with clear digital menu boards, vivid offer graphics, and store announcements.',
      tag: 'Improve Communication'
    }
  ];

  return (
    <section id="benefits" className="relative py-24 bg-navy-900/40 border-t border-b border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>REALISTIC BUSINESS ADVANTAGES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Indian SMBs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-brand-400">
              Choose SignFlow
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Designed for practical benefits for retail stores, restaurants, offices, and local businesses.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((ben, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-navy-950/80 border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition">
                    {ben.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-900 text-emerald-300 border border-slate-700">
                    {ben.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition">
                  {ben.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {ben.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center space-x-2 text-xs text-slate-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SignFlow Core Value</span>
              </div>
            </div>
          ))}

          {/* Offline Protection Summary Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-900/60 to-navy-950 border border-brand-500/40 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-cyan-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Offline Playback Protection</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Local offline media caching ensures your displays keep running active playlists even if store internet connections temporarily drop.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 text-xs font-mono text-cyan-300 flex justify-between">
              <span>Status: Active Protection</span>
              <span>Local Storage Guard</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
