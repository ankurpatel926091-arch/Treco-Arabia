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
    <section className="py-14 sm:py-20 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Horizontal Card with Strong Single Image */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl items-center">
          
          {/* Left Visual Area (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[280px] overflow-hidden bg-slate-900">
            <img 
              src={imgSmartHome} 
              alt="Luxury Smart Home by Treco Arabia"
              className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.02] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-slate-900 pointer-events-none" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-[#00A3E8]/40 text-[#00A3E8] text-[10px] font-black uppercase tracking-wider">
                {content.eyebrow}
              </span>
            </div>
          </div>

          {/* Right Content Area (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00A3E8] tracking-widest uppercase mb-3">
                <Home className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'حلول سكنية فاخرة' : 'Bespoke Residential Automation'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-3">
                {content.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6 max-w-xl">
                {content.desc}
              </p>

              {/* Discreet Capability Badges */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px] font-semibold text-white">
                  {lang === 'ar' ? 'إضاءة DALI الذكية' : 'DALI & KNX Lighting'}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px] font-semibold text-white">
                  {lang === 'ar' ? 'تحكم المناخ وتوفير الطاقة' : 'Adaptive Climate HVAC'}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px] font-semibold text-white">
                  {lang === 'ar' ? 'أقفال رقمية وأمان بيومتري' : 'Biometric Access & CCTV'}
                </span>
              </div>
            </div>

            <div>
              <Link
                to="/smart-home"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_4px_20px_rgba(0,163,232,0.4)] transition-all duration-300 group cursor-pointer"
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
