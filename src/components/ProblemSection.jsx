import React from 'react';
import { 
  AlertTriangle, Clock, DollarSign, CalendarX, 
  MapPinOff, FileX, ArrowDownRight
} from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-red-400" />,
      title: 'Time-Consuming Manual Updates',
      desc: 'Staff must manually replace printed posters or walk from screen to screen with USB thumb drives for every offer or price change.',
      badge: 'High Manual Effort',
      solutionKeyword: 'Reduce manual effort'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-amber-400" />,
      title: 'Expensive Printing & Banner Waste',
      desc: 'Reprinting flex banners, posters, and paper menus for every festival or promotion repeatedly drains marketing budget.',
      badge: 'Recurring Paper Costs',
      solutionKeyword: 'Lower printing and update costs'
    },
    {
      icon: <CalendarX className="w-6 h-6 text-rose-400" />,
      title: 'Rigid & Limited Scheduling',
      desc: 'Static signs cannot automatically adapt between morning tiffin items and evening dinner specials, or highlight stock clearances.',
      badge: 'Rigid Display Content',
      solutionKeyword: 'Update campaigns quickly'
    },
    {
      icon: <MapPinOff className="w-6 h-6 text-orange-400" />,
      title: 'Multi-Location Overhead',
      desc: 'Managing displays across store outlets in Hyderabad, Vijayawada, Bengaluru, or Chennai leads to inconsistent branding.',
      badge: 'Location Disconnect',
      solutionKeyword: 'Centralized display management'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
      title: 'Lack of Remote Visibility',
      desc: 'When a store TV turns off or crashes, managers have no remote status updates and miss out on customer attention.',
      badge: 'Zero Status Tracking',
      solutionKeyword: 'Improve customer communication'
    },
    {
      icon: <FileX className="w-6 h-6 text-red-400" />,
      title: 'Unformatted Display Graphics',
      desc: 'Creating formatted offer slides without proper tools leads to stretched images, misaligned fonts, and unappealing store displays.',
      badge: 'Unprofessional Look',
      solutionKeyword: 'Fast remote updates'
    }
  ];

  return (
    <section className="relative py-24 bg-navy-900/60 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400 uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>THE TRADITIONAL SIGNAGE HEADACHE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Traditional Signage Holds <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-orange-400">
              Indian SMB Growth Back
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            For retail stores, cafes, and showrooms, traditional printed banners and USB TV updates cause unnecessary delays, recurring expenses, and staff hassle.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => (
            <div 
              key={idx}
              className="group relative p-6 bg-navy-950/80 border border-slate-800/90 rounded-2xl hover:border-red-500/40 transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl group-hover:bg-red-500/10 group-hover:border-red-500/30 transition">
                    {prob.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-500/10 text-red-300 border border-red-500/20">
                    {prob.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-300 transition">
                  {prob.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {prob.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-500">SignFlow Goal:</span>
                <span className="text-cyan-400">{prob.solutionKeyword}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-navy-950 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <ArrowDownRight className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Switch to remote cloud display management</h4>
              <p className="text-xs text-slate-400">See how SignFlow helps you update store announcements quickly with zero printing hassle.</p>
            </div>
          </div>
          <a 
            href="#solution"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition"
          >
            See The SignFlow Solution ↓
          </a>
        </div>

      </div>
    </section>
  );
}
