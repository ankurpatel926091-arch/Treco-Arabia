import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

function ContactSection({ t }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Contact Info & Map Details */}
          <div>
            <span className="text-xs font-bold tracking-widest text-[#00A3E8] uppercase mb-2 block">
              CONTACT US
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              {t.contact.title}
            </h2>

            <p className="text-slate-600 text-base mb-10 font-normal">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6 mb-10">
              
              {/* Phone */}
              <a href="tel:+966500761791" className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-emerald-500 transition-colors group shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block">Call Direct (KSA)</span>
                  <span className="text-lg font-black text-slate-900 dir-ltr block">{t.contact.phone}</span>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@treco.in" className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-[#00A3E8] transition-colors group shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#00A3E8]/10 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8] group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block">Official Email</span>
                  <span className="text-lg font-black text-slate-900">{t.contact.email}</span>
                </div>
              </a>

              {/* Address */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block">{t.contact.addressTitle}</span>
                  <span className="text-sm font-bold text-slate-800">{t.contact.addressText}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Quote Request Form */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative">
            
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs text-slate-500 font-semibold mb-6">Fill in your requirements and our Saudi engineering team will call you back within 2 hours.</p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-slate-900">Thank You!</h4>
                <p className="text-sm text-slate-700">{t.contact.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">{t.contact.name}</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Eng. Abdullah Al-Ghamdi"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A3E8] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">{t.contact.phoneLabel}</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+966 5X XXX XXXX"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A3E8] transition-colors dir-ltr"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">{t.contact.service}</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#00A3E8] transition-colors">
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
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00A3E8] transition-colors"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#00A3E8] hover:bg-cyan-500 text-white font-extrabold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
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
