import React, { useState } from 'react';
import { 
  Monitor, Mail, MapPin, Phone, Send, Heart, 
  ArrowRight, ShieldCheck, Globe
} from 'lucide-react';

export default function Footer({ onActionToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    if (onActionToast) {
      onActionToast("Subscribed to SignFlow product updates!");
    }
  };

  return (
    <footer className="relative bg-navy-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-brand-500/5 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">SignFlow</span>
                <span className="block text-[10px] uppercase font-mono tracking-widest text-cyan-400 font-semibold">
                  Cloud Display OS (India)
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              SignFlow is a cloud-based digital signage platform built for Indian small and medium businesses. Create, schedule, and remotely update advertisements across digital displays from one browser dashboard.
            </p>

            <div className="p-3 bg-navy-900/80 rounded-xl border border-slate-800/80 text-xs text-slate-400 space-y-1.5 max-w-sm">
              <div className="flex items-center space-x-2 text-cyan-300 font-semibold">
                <Globe className="w-3.5 h-3.5" />
                <span>Early-Stage Indian SaaS Startup</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Focused on retail stores, restaurants, offices, and local showrooms across Hyderabad, Vijayawada, Bengaluru, Chennai, and Visakhapatnam.
              </p>
            </div>
          </div>

          {/* Column 2: Product & Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Product Features</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#features" className="hover:text-cyan-400 transition">Fast Remote Updates</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition">Smart Content Scheduling</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition">Multiple Display Management</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition">Easy Content Studio</a></li>
              <li><a href="#dashboard-demo" className="hover:text-cyan-400 transition">Display Status Monitoring</a></li>
              <li><a href="#solution" className="hover:text-cyan-400 transition">Offline Playback Guard</a></li>
            </ul>
          </div>

          {/* Column 3: Business Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Target Verticals</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="text-slate-300 font-medium">Retail & Showrooms</span></li>
              <li><span className="text-slate-300 font-medium">Restaurants & Cafes</span></li>
              <li><span className="text-slate-300 font-medium">Corporate Offices</span></li>
              <li><span className="text-slate-300 font-medium">Gyms & Supermarkets</span></li>
              <li><span className="text-slate-300 font-medium">Shopping Malls</span></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location Placeholder */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact & Office</h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India <br /><span className="text-[10px] text-slate-500">(HQ Placeholder)</span></span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-200">contact@signflow.in</span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 (Placeholder Phone Line)</span>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="pt-2">
              <form onSubmit={handleSubscribe} className="space-y-2">
                <label className="block text-[11px] font-semibold text-slate-300">Subscribe for Product Updates</label>
                {subscribed ? (
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-lg font-semibold">
                    ✓ Subscribed successfully!
                  </div>
                ) : (
                  <div className="flex">
                    <input 
                      type="email" 
                      required
                      placeholder="your@email.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-navy-900 border border-slate-700 rounded-l-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-brand-500"
                    />
                    <button 
                      type="submit"
                      className="px-3 bg-brand-500 hover:bg-brand-400 text-white rounded-r-lg flex items-center justify-center transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} SignFlow Technologies. Built for Indian SMBs.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-400 transition cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
