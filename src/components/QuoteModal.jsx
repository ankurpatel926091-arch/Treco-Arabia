import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

function QuoteModal({ isOpen, onClose, t }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-white/20 bg-[#090E1A] shadow-2xl relative text-white">
        
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full glass-panel"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-bold text-white mb-1">
          {t.nav.getQuote}
        </h3>
        <p className="text-xs text-gray-400 mb-6">Get an estimated budget for your Smart Home or Industrial Automation project in Saudi Arabia.</p>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-xl font-bold text-white">Request Sent!</h4>
            <p className="text-sm text-gray-300">{t.contact.successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-1">{t.contact.name}</label>
              <input 
                type="text" 
                required 
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 text-sm text-white focus:outline-none focus:border-[#00A3E8]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-1">{t.contact.phoneLabel}</label>
              <input 
                type="tel" 
                required 
                placeholder="+966 500761791"
                className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 text-sm text-white focus:outline-none focus:border-[#00A3E8] dir-ltr"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-1">{t.contact.service}</label>
              <select className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 text-sm text-gray-300 bg-[#090D16]">
                {t.contact.servicesList.map((svc, idx) => (
                  <option key={idx} value={svc} className="bg-[#090D16] text-white">{svc}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-1">{t.contact.message}</label>
              <textarea 
                rows="2"
                placeholder="Project details..."
                className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 text-sm text-white focus:outline-none focus:border-[#00A3E8]"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(0,163,232,0.4)] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{t.contact.submitBtn}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

export default QuoteModal;
