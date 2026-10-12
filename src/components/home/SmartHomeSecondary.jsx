import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import imgSmartHome from '../../assets/header_background_img/smart-home.png';

function SmartHomeSecondary({ t, lang }) {
  const content = t?.industrialHome?.smartHomeSecondary || {
    eyebrow: lang === 'ar' ? 'القطاع السكني' : 'RESIDENTIAL DIVISION',
    title: lang === 'ar' ? 'أنظمة الحياة الذكية للفلل والمساكن الفاخرة' : 'Architectural Smart Living for Luxury Residences',
    desc: lang === 'ar' 
      ? 'حلول متكاملة للإضاءة المحيطية، التحكم الذكي بالتكييف، الأقفال البيومترية، والستائر الكهربائية المصممة للقصور والفلل السعودية.' 
      : 'Unified ambient lighting, climate regulation, biometric security, and motorized shading engineered for Saudi villas and private estates.',
    cta: lang === 'ar' ? 'استكشف حلول المنازل الذكية' : 'Discover Smart Home Solutions'
  };

  return (
    <section className="py-14 sm:py-20 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* ====== LAYER 1: Rich Multi-Stop Premium Light Gradient ====== */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 15% -10%, rgba(0, 163, 232, 0.16), transparent 55%),
            radial-gradient(ellipse 70% 70% at 85% 110%, rgba(99, 102, 241, 0.12), transparent 60%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(224, 242, 254, 0.7), transparent 70%),
            radial-gradient(ellipse 50% 40% at 90% 10%, rgba(6, 182, 212, 0.10), transparent 60%),
            linear-gradient(155deg, 
              #FFFFFF 0%, 
              #FAFCFF 15%, 
              #F0F7FF 30%, 
              #E8F4FE 50%, 
              #E0F2FE 65%, 
              #EBF8FF 80%, 
              #F8FCFF 92%, 
              #FFFFFF 100%
            )
          `
        }}
      />

      {/* ====== LAYER 2: Center Vignette ====== */}
      <div 
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(0, 163, 232, 0.07) 0%, transparent 60%)'
        }}
      />

      {/* ====== LAYER 3: Ambient Cyan Blob — Top Left ====== */}
      <div className="absolute -top-40 -left-40 w-[750px] h-[750px] bg-gradient-to-br from-[#00A3E8]/15 to-transparent blur-[180px] pointer-events-none rounded-full" />

      {/* ====== LAYER 4: Ambient Indigo Blob — Bottom Right ====== */}
      <div className="absolute -bottom-48 -right-48 w-[800px] h-[800px] bg-gradient-to-tl from-indigo-400/12 to-transparent blur-[200px] pointer-events-none rounded-full" />

      {/* ====== LAYER 5: Dot Grid ====== */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)'
        }}
      />

      {/* ====== LAYER 6: Diagonal Streaks ====== */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 120px,
            #00A3E8 120px,
            #00A3E8 121px
          )`
        }}
      />

      {/* ====== LAYER 7: Top Glow Border ====== */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3E8]/40 to-transparent" />

      {/* ====== LAYER 8: Bottom Glow Border ====== */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Horizontal Split Card */}
        <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_20px_60px_rgba(15,23,42,0.08),0_0_50px_rgba(0,163,232,0.06)] items-center">
          
          {/* Left Visual Area */}
          <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[280px] overflow-hidden bg-slate-100">
            <img 
              src={imgSmartHome} 
              alt="Luxury Smart Home by Treco Arabia"
              className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.02] hover:scale-105 transition-transform duration-700"
            />
            
            {/* Soft fade to card body (light version) */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-white/40 pointer-events-none" />
            
            {/* Eyebrow Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#00A3E8]/40 text-[#00A3E8] text-[10px] font-black uppercase tracking-wider shadow-sm">
                {content.eyebrow}
              </span>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Small Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00A3E8] tracking-widest uppercase mb-3">
                <Home className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'حلول سكنية فاخرة' : 'Bespoke Residential Automation'}</span>
              </div>

              {/* Title — gradient text */}
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug mb-3">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  {content.title}
                </span>
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6 max-w-xl">
                {content.desc}
              </p>

              {/* Capability Badges — light glass */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="px-3 py-1 rounded-lg bg-[#00A3E8]/10 border border-[#00A3E8]/25 text-[11px] font-semibold text-slate-700 hover:border-[#00A3E8]/60 hover:bg-[#00A3E8]/15 transition-all cursor-default">
                  {lang === 'ar' ? 'إضاءة DALI الذكية' : 'DALI & KNX Lighting'}
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#00A3E8]/10 border border-[#00A3E8]/25 text-[11px] font-semibold text-slate-700 hover:border-[#00A3E8]/60 hover:bg-[#00A3E8]/15 transition-all cursor-default">
                  {lang === 'ar' ? 'تحكم المناخ وتوفير الطاقة' : 'Adaptive Climate HVAC'}
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#00A3E8]/10 border border-[#00A3E8]/25 text-[11px] font-semibold text-slate-700 hover:border-[#00A3E8]/60 hover:bg-[#00A3E8]/15 transition-all cursor-default">
                  {lang === 'ar' ? 'أقفال رقمية وأمان بيومتري' : 'Biometric Access & CCTV'}
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link
                to="/smart-home"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00A3E8] to-[#0086C4] hover:from-cyan-400 hover:to-[#00A3E8] text-white font-black text-xs sm:text-sm shadow-[0_8px_25px_rgba(0,163,232,0.4)] hover:shadow-[0_12px_35px_rgba(0,163,232,0.55)] transition-all duration-300 group cursor-pointer hover:-translate-y-0.5"
              >
                <span>{content.cta}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SmartHomeSecondary;