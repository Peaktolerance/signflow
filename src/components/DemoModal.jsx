import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Monitor, Building2, Mail, User, Phone, ArrowRight } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, onSuccessToast }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    city: 'Hyderabad',
    screens: '1-5',
    phone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccessToast) {
      onSuccessToast("Demo request received! A SignFlow team member will contact you shortly.");
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-navy-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow backdrop behind modal */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-navy-950/50">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
              <Monitor className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Request SignFlow Demo</h3>
              <p className="text-xs text-slate-400">See cloud digital signage in action for your store</p>
            </div>
          </div>
          <button 
            onClick={handleReset}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">Demo Request Received!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-brand-400">{formData.name || 'Partner'}</span>. Our team will schedule a quick live walk-through for your business.
              </p>
              <div className="p-4 bg-navy-950/60 rounded-xl border border-slate-800 text-left text-xs text-slate-400 space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span>Business Name:</span>
                  <span className="text-white font-medium">{formData.company || 'Indian Business'}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span>Location:</span>
                  <span className="text-cyan-400 font-medium">{formData.city}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span>Displays:</span>
                  <span className="text-white font-medium">{formData.screens}</span>
                </div>
                <div className="flex justify-between">
                  <span>Confirmation Email:</span>
                  <span className="text-white font-medium">{formData.email || 'Your Email'}</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-brand-500/30 transition duration-200"
              >
                Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="text" 
                      required
                      placeholder="Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-navy-950 border border-slate-700/70 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="email" 
                      required
                      placeholder="rajesh@store.in"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-navy-950 border border-slate-700/70 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Business Name *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="text" 
                      required
                      placeholder="Grand Retail & Cafe, Jubilee Hills"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-navy-950 border border-slate-700/70 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">City Location *</label>
                  <select 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full bg-navy-950 border border-slate-700/70 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Vijayawada">Vijayawada</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Other">Other Indian City</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Number of Displays</label>
                  <select 
                    value={formData.screens}
                    onChange={(e) => setFormData({...formData, screens: e.target.value})}
                    className="w-full bg-navy-950 border border-slate-700/70 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                  >
                    <option value="1-5">1 - 5 Displays (Single Store)</option>
                    <option value="6-15">6 - 15 Displays (Multi-Location)</option>
                    <option value="16+">16+ Displays (Regional Chain)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number (Optional)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-navy-950 border border-slate-700/70 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition"
                    />
                  </div>
                </div>
              </div>

              <div className="p-3 bg-brand-500/10 border border-brand-500/20 rounded-xl flex items-center space-x-3 text-xs text-brand-300">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Free 14-day trial available with no long-term commitment.</span>
              </div>

              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 text-sm text-slate-400 hover:text-white transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-semibold text-sm rounded-xl shadow-lg shadow-brand-500/25 transition duration-200 flex items-center space-x-2"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
