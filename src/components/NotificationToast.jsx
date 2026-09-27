import React, { useEffect } from 'react';
import { Sparkles, CheckCircle2, X } from 'lucide-react';

export default function NotificationToast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all duration-300">
      <div className="px-5 py-3.5 bg-navy-900/95 border border-cyan-400/60 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center space-x-3 text-white">
        <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
        <span className="text-xs font-semibold max-w-xs">{message}</span>
        <button 
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-white rounded-lg"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
