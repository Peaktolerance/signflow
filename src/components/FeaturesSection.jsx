import React from 'react';
import { 
  Zap, Calendar, Monitor, LayoutGrid, 
  BarChart3, Megaphone, ArrowUpRight, Sparkles
} from 'lucide-react';

export default function FeaturesSection({ onActionToast }) {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Real-Time Remote Updates',
      desc: 'Push ad updates, price revisions, or promotional slides across cellular and WiFi networks remotely from your browser dashboard.',
      badge: 'Fast Remote Updates',
      gradient: 'from-cyan-500/20 to-brand-500/5',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: <Calendar className="w-6 h-6 text-brand-400" />,
      title: 'Smart Content Scheduling',
      desc: 'Automate daily dayparting (morning tiffin, lunch specials, evening deals) and schedule festive offers in advance with ease.',
      badge: 'Automated Timing',
      gradient: 'from-brand-500/20 to-purple-500/5',
      borderColor: 'border-brand-500/30'
    },
    {
      icon: <Monitor className="w-6 h-6 text-indigo-400" />,
      title: 'Multiple Display Management',
      desc: 'Organize digital screens across locations in Hyderabad, Vijayawada, Bengaluru, or Chennai into one central dashboard.',
      badge: 'Centralized Display Management',
      gradient: 'from-indigo-500/20 to-cyan-500/5',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-emerald-400" />,
      title: 'Easy Content Management',
      desc: 'Upload promotional videos, offer graphics, or custom banners with simple drag-and-drop media tools.',
      badge: 'Simple Media Vault',
      gradient: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'border-emerald-500/30'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
      title: 'Display Status & Monitoring',
      desc: 'Monitor display connection status, content rotation logs, and ensure store screens remain online and active.',
      badge: 'Status Monitoring',
      gradient: 'from-amber-500/20 to-orange-500/5',
      borderColor: 'border-amber-500/30'
    },
    {
      icon: <Megaphone className="w-6 h-6 text-rose-400" />,
      title: 'Quick Announcement Ticker',
      desc: 'Broadcast high-priority store announcements, flash discounts, or breaking news tickers across active store screens.',
      badge: 'Instant Tickers',
      gradient: 'from-rose-500/20 to-red-500/5',
      borderColor: 'border-rose-500/30'
    }
  ];

  const handleCardClick = (title) => {
    if (onActionToast) {
      onActionToast(`Feature Info: ${title}`);
    }
  };

  return (
    <section id="features" className="relative py-24 bg-navy-900/40 border-t border-b border-slate-800/80">
      
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-xs font-bold text-brand-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>BUILT FOR INDIAN SMBS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything You Need to Power <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-cyan-400">
              Your In-Store Digital Signage
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Designed for simplicity, fast operation, and reliable remote display management across retail, hospitality, and corporate spaces.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(feat.title)}
              className={`group relative p-8 rounded-3xl bg-navy-950/80 border ${feat.borderColor} hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-brand-500/10 cursor-pointer overflow-hidden flex flex-col justify-between hover:-translate-y-1.5`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${feat.gradient} border ${feat.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-900 text-cyan-300 border border-slate-700">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition">
                  {feat.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition">
                <span>View Feature Highlights</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
