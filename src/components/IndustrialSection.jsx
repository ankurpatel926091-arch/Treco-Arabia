import React from 'react';
import { Cpu, Gauge, Zap, Cog, ArrowUpRight, Wrench } from 'lucide-react';

function IndustrialSection({ t, lang, onOpenQuote }) {
  const icons = [Cpu, Zap, Gauge, Cog];

  return (
    <section id="industrial" className="py-24 relative bg-[#F1F5F9] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E8]/10 text-[#00A3E8] font-bold text-xs uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>{t.industrial.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            {t.industrial.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {t.industrial.subtitle}
          </p>
        </div>

        {/* Industrial Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.industrial.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#00A3E8] transition-all group duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#00A3E8] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider text-black bg-[#00A3E8] px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00A3E8] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#00A3E8] transition-colors">
                  <span>Industrial Specification</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Callout */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Custom Industrial Control Room & PLC Engineering</h3>
            <p className="text-sm text-slate-400">Precision automation engineered for factories and plants across Saudi Arabia.</p>
          </div>
          <button 
            onClick={onOpenQuote}
            className="px-6 py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-black font-extrabold text-sm shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Consult Industrial Team
          </button>
        </div>

      </div>
    </section>
  );
}

export default IndustrialSection;
