import React from 'react';
import { Award, Camera, Lock, Users, MapPin, Sparkles } from 'lucide-react';

function StatsSection({ t }) {
  const icons = [Camera, Lock, Users, Award];

  return (
    <section id="stats" className="py-24 relative bg-gradient-to-b from-[#EBF5FC]/70 via-[#F0F7FF] to-white text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Decorative Radiant Ambient Cyan Glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Subtle Micro-Dot Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.stats.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.stats.title}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stats.items.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-200/90 text-center shadow-[0_10px_30px_rgba(0,163,232,0.08)] hover:shadow-[0_20px_45px_rgba(0,163,232,0.2)] hover:border-[#00A3E8] hover:-translate-y-1.5 transition-all group duration-300 relative overflow-hidden"
              >
                {/* Top Subtle Border Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A3E8]/15 to-[#00A3E8]/5 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8] mx-auto mb-4 group-hover:scale-110 group-hover:bg-[#00A3E8] group-hover:text-white transition-all shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black text-[#00A3E8] mb-2 tracking-tight">
                  {stat.value}
                </h3>
                
                <p className="text-xs sm:text-sm font-bold text-slate-700">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* KSA Location Highlight Box */}
        <div className="mt-12 p-5 rounded-2xl bg-white/95 border border-emerald-500/30 flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-700 text-center shadow-[0_8px_25px_rgba(16,185,129,0.08)] backdrop-blur-sm">
          <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 animate-bounce" />
          <span className="font-bold">Showroom & Engineering Office: Majid Noor near Baladia Camp, Wadi Mraykh, Jeddah, Saudi Arabia 23254</span>
        </div>

      </div>
    </section>
  );
}

export default StatsSection;
