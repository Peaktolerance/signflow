import React from 'react';
import { ShoppingBag, Utensils, Building2, Dumbbell, ArrowRight } from 'lucide-react';

export default function TargetAudienceSection({ onOpenDemoModal }) {
  const verticals = [
    {
      icon: <ShoppingBag className="w-6 h-6 text-brand-400" />,
      title: 'Retail Stores & Showrooms',
      desc: 'Highlight festival offers, seasonal discounts, and stock clearances across store displays.',
      benefit: 'Update campaigns quickly'
    },
    {
      icon: <Utensils className="w-6 h-6 text-cyan-400" />,
      title: 'Restaurants & Cafes',
      desc: 'Display breakfast tiffins, lunch thalis, and dinner specials with automated daily dayparting.',
      benefit: 'Lower menu printing costs'
    },
    {
      icon: <Building2 className="w-6 h-6 text-indigo-400" />,
      title: 'Corporate Offices',
      desc: 'Broadcast internal announcements, welcome greetings for visitors, and company news tickers.',
      benefit: 'Centralized display management'
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-emerald-400" />,
      title: 'Gyms, Supermarkets & Malls',
      desc: 'Show membership plans, brand promo videos, and daily deal announcements on digital boards.',
      benefit: 'Improve customer communication'
    }
  ];

  return (
    <section className="relative py-24 bg-navy-900/60 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-300">
            <span>TARGETED FOR INDIAN BUSINESSES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tailored Solutions For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-brand-400 to-indigo-400">
              Your Business Vertical
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Whether you operate a single store in Vijayawada or a chain across Hyderabad and Bengaluru, SignFlow fits your display workflow.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vert, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-navy-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 w-fit mb-5 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition">
                  {vert.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                  {vert.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {vert.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                <span>{vert.benefit}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
