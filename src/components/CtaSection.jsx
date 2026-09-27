import React from 'react';
import { ArrowRight, Sparkles, MonitorCheck, ShieldCheck } from 'lucide-react';

export default function CtaSection({ onOpenDemoModal }) {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-600/20 via-cyan-500/20 to-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-navy-900 via-slate-900 to-navy-950 border border-brand-500/30 shadow-2xl overflow-hidden backdrop-blur-xl text-center space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>CLOUD DISPLAY PLATFORM FOR INDIAN SMBS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to make your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-cyan-400">
              advertising smarter?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Take control of your digital displays with SignFlow. Reduce manual effort, eliminate printing hassle, and push fast remote updates across store displays.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-brand-500/30 hover:shadow-cyan-500/40 hover:scale-105 transition duration-200 flex items-center justify-center space-x-3"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#dashboard-demo"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-slate-700/80 transition flex items-center justify-center space-x-2"
            >
              <span>Try Dashboard Prototype</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium border-t border-slate-800/80 max-w-xl mx-auto">
            <div className="flex items-center space-x-1.5">
              <MonitorCheck className="w-4 h-4 text-emerald-400" />
              <span>Easy Setup</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>No Special Hardware Needed</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
