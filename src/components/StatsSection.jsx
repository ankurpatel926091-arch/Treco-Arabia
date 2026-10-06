import React from 'react';
import { Award, Camera, Lock, Users, MapPin } from 'lucide-react';

function StatsSection({ t }) {
  const icons = [Camera, Lock, Users, Award];

  return (
    <section id="stats" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#00A3E8] uppercase mb-2 block">
            {t.stats.tag}
          </span>
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
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 text-center hover:border-[#00A3E8] transition-all group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00A3E8]/10 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8] mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#00A3E8] mb-2">
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
        <div className="mt-12 p-4 rounded-xl bg-white border border-emerald-500/30 flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-700 text-center shadow-sm">
          <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 animate-bounce" />
          <span className="font-semibold">Showroom & Engineering Office: Majid Noor near Baladia Camp, Wadi Mraykh, Jeddah, Saudi Arabia 23254</span>
        </div>

      </div>
    </section>
  );
}

export default StatsSection;
