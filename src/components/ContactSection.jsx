import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';

function ContactSection({ t }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative bg-gradient-to-b from-white via-[#F0F7FF] to-white text-slate-900 overflow-hidden">
      
      {/* Decorative Radiant Cyan Glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Subtle Micro-Dot Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Contact Info & Map Details */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONTACT US</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              {t.contact.title}
            </h2>

            <p className="text-slate-600 text-base mb-6 sm:mb-8 font-normal leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="space-y-4 mb-6 sm:mb-8">
              
              {/* Phone */}
              <a 
                href="tel:+966500761791" 
                className="bg-white/95 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/90 flex items-center gap-4 hover:border-emerald-500 shadow-[0_8px_25px_rgba(16,185,129,0.06)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.18)] hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-xs">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase font-black tracking-wider block">Call Direct (KSA)</span>
                  <span className="text-xl font-black text-slate-900 dir-ltr block mt-0.5">{t.contact.phone}</span>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:info@treco.in" 
                className="bg-white/95 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/90 flex items-center gap-4 hover:border-[#00A3E8] shadow-[0_8px_25px_rgba(0,163,232,0.06)] hover:shadow-[0_15px_30px_rgba(0,163,232,0.18)] hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#00A3E8]/10 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8] group-hover:scale-110 group-hover:bg-[#00A3E8] group-hover:text-white transition-all shadow-xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase font-black tracking-wider block">Official Email</span>
                  <span className="text-xl font-black text-slate-900 block mt-0.5">{t.contact.email}</span>
                </div>
              </a>

              {/* Address */}
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/90 flex items-center gap-4 shadow-[0_8px_25px_rgba(147,51,234,0.06)]">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600 flex-shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase font-black tracking-wider block">{t.contact.addressTitle}</span>
                  <span className="text-sm font-bold text-slate-800 leading-relaxed block mt-0.5">{t.contact.addressText}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-1 flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Social:</span>
                <a
                  href="https://www.facebook.com/people/TRECO-Technologies/100063639657266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-[#00A3E8] hover:text-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/TrecoTechnolog1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-[#00A3E8] hover:text-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

          {/* Right Quote Request Form */}
          <div className="bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(0,163,232,0.15),0_10px_30px_-5px_rgba(15,23,42,0.06)] relative overflow-hidden">
            
            {/* Top Cyan Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent pointer-events-none" />

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs text-slate-500 font-semibold mb-8">Fill in your requirements and our Saudi engineering team will call you back within 2 hours.</p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-xl font-black text-slate-900">Thank You!</h4>
                <p className="text-sm text-slate-700 font-medium">{t.contact.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">{t.contact.name}</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Eng. Abdullah Al-Ghamdi"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A3E8] focus:bg-white transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">{t.contact.phoneLabel}</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+966 5X XXX XXXX"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A3E8] focus:bg-white transition-all dir-ltr shadow-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">{t.contact.service}</label>
                  <select className="w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#00A3E8] focus:bg-white transition-all shadow-xs">
                    {t.contact.servicesList.map((svc, idx) => (
                      <option key={idx} value={svc} className="text-slate-900">{svc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">{t.contact.message}</label>
                  <textarea 
                    rows="3" 
                    required
                    placeholder="Describe your villa, apartment, or factory automation requirements..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A3E8] focus:bg-white transition-all shadow-xs"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#00A3E8] hover:bg-cyan-500 text-white font-black text-sm shadow-[0_8px_25px_rgba(0,163,232,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitBtn}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;
