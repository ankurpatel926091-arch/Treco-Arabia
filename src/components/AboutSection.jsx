import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Home, 
  Factory, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  Award,
  Users,
  ChevronRight
} from 'lucide-react';

import smartHomeImg from '../assets/header_background_img/smart-home.png';
import industrialImg from '../assets/header_background_img/industrial.png';

function AboutSection({ lang, onOpenQuote }) {
  const isArabic = lang === 'ar';
  const [activeTab, setActiveTab] = useState('smart-home');

  const stats = [
    {
      value: '10+',
      label: isArabic ? 'سنوات في المملكة' : 'Years in Saudi Arabia',
      icon: Clock,
    },
    {
      value: '500+',
      label: isArabic ? 'مشروع منجز' : 'Delivered Projects',
      icon: Award,
    },
    {
      value: '100%',
      label: isArabic ? 'مطابق لـ SASO' : 'SASO Compliant',
      icon: ShieldCheck,
    },
    {
      value: '24/7',
      label: isArabic ? 'دعم محلي بجدة' : 'Local Jeddah Support',
      icon: Users,
    },
  ];

  return (
    <section 
      id="about" 
      className="py-16 sm:py-24 text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      {/* ====== LAYER 1: Rich Multi-Stop Premium Light Gradient Base ====== */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 15% -10%, rgba(0, 163, 232, 0.18), transparent 55%),
            radial-gradient(ellipse 70% 70% at 85% 110%, rgba(99, 102, 241, 0.14), transparent 60%),
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

      {/* ====== LAYER 2: Soft Radial Vignette (Center Focus Depth) ====== */}
      <div 
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(0, 163, 232, 0.07) 0%, transparent 60%)'
        }}
      />

      {/* ====== LAYER 3: Ambient Cyan Blob — Top Left (Glowing) ====== */}
      <div className="absolute -top-40 -left-40 w-[750px] h-[750px] bg-gradient-to-br from-[#00A3E8]/15 to-transparent blur-[180px] pointer-events-none rounded-full animate-pulse-slow" />

      {/* ====== LAYER 4: Ambient Indigo Blob — Bottom Right ====== */}
      <div className="absolute -bottom-48 -right-48 w-[800px] h-[800px] bg-gradient-to-tl from-indigo-400/12 to-transparent blur-[200px] pointer-events-none rounded-full" />

      {/* ====== LAYER 5: Cyan Blob — Mid Right (Soft) ====== */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-cyan-300/10 blur-[150px] pointer-events-none rounded-full" />

      {/* ====== LAYER 6: Center Top Glow Accent ====== */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(0, 163, 232, 0.08), transparent 65%)'
        }}
      />

      {/* ====== LAYER 7: Precision Dot Grid (Masked at edges) ====== */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)'
        }}
      />

      {/* ====== LAYER 8: Diagonal Light Streaks (Premium Texture) ====== */}
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

      {/* ====== LAYER 9: Horizontal Fine Lines Overlay ====== */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, #0F172A 60px, #0F172A 61px)',
          maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)'
        }}
      />

      {/* ====== LAYER 10: Top Border Glow Line ====== */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3E8]/50 to-transparent" />

      {/* ====== LAYER 11: Bottom Border Glow Line (Subtle) ====== */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

      {/* ====== CONTENT ====== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* ========================================================= */}
          {/* COLUMN 1: CONTENT SIDE (7 cols on lg)                      */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            <div>
              {/* Eyebrow Badge — Glowing Gradient */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00A3E8]/15 via-[#00A3E8]/8 to-transparent border border-[#00A3E8]/35 text-[#00A3E8] text-xs font-bold tracking-widest uppercase mb-5 shadow-[0_4px_20px_rgba(0,163,232,0.15)] backdrop-blur-sm self-start">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isArabic ? 'من نحن • نبذة عن تريكو العربية' : 'WHO WE ARE • ABOUT TRECO ARABIA'}</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                {isArabic ? (
                  <>
                    رواد حلول <span className="bg-gradient-to-r from-[#00A3E8] to-[#0086C4] bg-clip-text text-transparent">المنازل الذكية</span> و <span className="bg-gradient-to-r from-[#00A3E8] to-[#0086C4] bg-clip-text text-transparent">الأتمتة الصناعية</span> في المملكة
                  </>
                ) : (
                  <>
                    Pioneering <span className="bg-gradient-to-r from-[#00A3E8] to-[#0086C4] bg-clip-text text-transparent">Home Automation</span> & <span className="bg-gradient-to-r from-[#00A3E8] to-[#0086C4] bg-clip-text text-transparent">Industrial Systems</span> in Saudi Arabia
                  </>
                )}
              </h2>

              {/* Mission Narrative */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                {isArabic
                  ? 'انطلاقاً من مقرنا في جدة، تُعد شركة تريكو العربية الخيار الأول لتنفيذ حلول الأتمتة الشاملة. نقدم منظومات ذكية متكاملة تجمع بين الفخامة السكنية والصلابة الصناعية، وفق أعلى المعايير الهندسية والمواصفات القياسية السعودية (SASO).'
                  : "Headquartered in Jeddah, Treco Arabia delivers end-to-end automation engineering across the Kingdom. We specialize in uniting residential architectural smart living with heavy-duty plant and process automation—tailored specifically for Saudi Arabia's climate, regulations, and lifestyle."}
              </p>

              {/* ======================================================= */}
              {/* DUAL CORE PILLARS */}
              {/* ======================================================= */}
              <div className="space-y-4 mb-8">
                
                {/* Sector 1: Home Automation */}
                <div 
                  onClick={() => setActiveTab('smart-home')}
                  className={`relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden group/card ${
                    activeTab === 'smart-home'
                      ? 'bg-gradient-to-br from-white via-[#F5FAFF] to-[#E0F2FE] border-[#00A3E8]/50 shadow-[0_10px_45px_rgba(0,163,232,0.18)]'
                      : 'bg-white/80 backdrop-blur-sm hover:bg-white border-slate-200 hover:border-[#00A3E8]/40 shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_25px_rgba(0,163,232,0.10)]'
                  }`}
                >
                  {/* Card inner glow when active */}
                  {activeTab === 'smart-home' && (
                    <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br from-[#00A3E8]/20 to-transparent blur-[50px] pointer-events-none rounded-full" />
                  )}

                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeTab === 'smart-home'
                        ? 'bg-gradient-to-br from-[#00A3E8] to-[#0086C4] text-white shadow-[0_6px_20px_rgba(0,163,232,0.45)]'
                        : 'bg-gradient-to-br from-[#00A3E8]/12 to-[#00A3E8]/5 text-[#00A3E8] border border-[#00A3E8]/25 group-hover/card:border-[#00A3E8]/60'
                    }`}>
                      <Home className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-black text-slate-900">
                          {isArabic ? 'أتمتة المنازل والفلل الذكية (Home Automation)' : 'Residential & Smart Home Automation'}
                        </h3>
                        <Link 
                          to="/smart-home"
                          className="text-xs font-bold text-[#00A3E8] hover:text-blue-600 hidden sm:inline-flex items-center gap-1"
                        >
                          <span>{isArabic ? 'عرض الحلول' : 'Explore'}</span>
                          <ChevronRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-180' : ''}`} />
                        </Link>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1 leading-relaxed">
                        {isArabic
                          ? 'إدارة متكاملة للإضاءة المحيطية، ضبط التكييف الذكي، الأقفال البيومترية، الستائر الآلية، وأنظمة الصوت الموزعة للقصور والفلل.'
                          : 'Unified ambient DALI lighting, intelligent climate regulation, biometric digital locks, motorized curtains, and multi-room audio engineered for modern Saudi residences.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sector 2: Industrial Automation */}
                <div 
                  onClick={() => setActiveTab('industrial')}
                  className={`relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden group/card ${
                    activeTab === 'industrial'
                      ? 'bg-gradient-to-br from-white via-[#F5FAFF] to-[#E0F2FE] border-[#00A3E8]/50 shadow-[0_10px_45px_rgba(0,163,232,0.18)]'
                      : 'bg-white/80 backdrop-blur-sm hover:bg-white border-slate-200 hover:border-[#00A3E8]/40 shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_25px_rgba(0,163,232,0.10)]'
                  }`}
                >
                  {activeTab === 'industrial' && (
                    <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br from-[#00A3E8]/20 to-transparent blur-[50px] pointer-events-none rounded-full" />
                  )}

                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeTab === 'industrial'
                        ? 'bg-gradient-to-br from-[#00A3E8] to-[#0086C4] text-white shadow-[0_6px_20px_rgba(0,163,232,0.45)]'
                        : 'bg-gradient-to-br from-[#00A3E8]/12 to-[#00A3E8]/5 text-[#00A3E8] border border-[#00A3E8]/25 group-hover/card:border-[#00A3E8]/60'
                    }`}>
                      <Factory className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-black text-slate-900">
                          {isArabic ? 'الأتمتة الصناعية وهندسة المصانع (Industrial Automation)' : 'Industrial Automation & Engineering'}
                        </h3>
                        <Link 
                          to="/industrial"
                          className="text-xs font-bold text-[#00A3E8] hover:text-blue-600 hidden sm:inline-flex items-center gap-1"
                        >
                          <span>{isArabic ? 'عرض الأنظمة' : 'Explore'}</span>
                          <ChevronRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-180' : ''}`} />
                        </Link>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1 leading-relaxed">
                        {isArabic
                          ? 'لوحات تحكم المحركات MCC، وحدات PLC، مراقبة فورية عبر أنظمة SCADA، ومحركات ومضخات صناعية مطابقة لمعايير SASO و IEC.'
                          : 'Custom motor control centers (MCC), PLC integration, redundant SCADA plant telemetry, heavy-duty pumps, and drives engineered for demanding industrial operations.'}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80">
              {stats.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 group/stat">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00A3E8]/12 to-[#00A3E8]/5 border border-[#00A3E8]/25 text-[#00A3E8] flex items-center justify-center flex-shrink-0 transition-all group-hover/stat:border-[#00A3E8]/60 group-hover/stat:shadow-[0_0_18px_rgba(0,163,232,0.3)]">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-slate-900 leading-none">
                      {item.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-0.5">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ========================================================= */}
          {/* COLUMN 2: IMAGE SIDE (5 cols on lg)                        */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 relative flex flex-col justify-between lg:pt-[52px]">
            
            {/* Image Glow Behind Frame */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#00A3E8]/20 via-cyan-300/10 to-indigo-400/15 blur-[60px] opacity-70 pointer-events-none rounded-[48px]" />

            {/* Visual Container Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-[0_25px_70px_rgba(15,23,42,0.15),0_0_50px_rgba(0,163,232,0.12)] group flex-1 min-h-[440px] sm:min-h-[500px]">
              
              <img 
                src={activeTab === 'smart-home' ? smartHomeImg : industrialImg} 
                alt={activeTab === 'smart-home' ? 'Smart Home Automation' : 'Industrial Automation'}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Subtle inner ring */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/25 pointer-events-none z-10" />

              {/* Top Selector Toggle Pills */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
                <div className="inline-flex p-1 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.12)]">
                  <button
                    onClick={() => setActiveTab('smart-home')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'smart-home'
                        ? 'bg-gradient-to-r from-[#00A3E8] to-[#0086C4] text-white shadow-[0_4px_12px_rgba(0,163,232,0.4)]'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isArabic ? 'منازل ذكية' : 'Smart Home'}
                  </button>
                  <button
                    onClick={() => setActiveTab('industrial')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'industrial'
                        ? 'bg-gradient-to-r from-[#00A3E8] to-[#0086C4] text-white shadow-[0_4px_12px_rgba(0,163,232,0.4)]'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isArabic ? 'أنظمة صناعية' : 'Industrial'}
                  </button>
                </div>

                <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-xl border border-slate-200 text-[#00A3E8] flex items-center justify-center shadow-[0_8px_25px_rgba(15,23,42,0.12)]">
                  {activeTab === 'smart-home' ? <Home className="w-4 h-4" /> : <Factory className="w-4 h-4" />}
                </div>
              </div>

              {/* Bottom Info Card */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
                <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-[0_15px_45px_rgba(15,23,42,0.18)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#00A3E8]">
                      {activeTab === 'smart-home'
                        ? (isArabic ? 'القطاع السكني الفاخر' : 'RESIDENTIAL SECTOR')
                        : (isArabic ? 'القطاع الصناعي والمصانع' : 'INDUSTRIAL SECTOR')}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{isArabic ? 'معتمد SASO' : 'SASO Certified'}</span>
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                    {activeTab === 'smart-home'
                      ? (isArabic ? 'أنظمة الفلل والمنازل الذكية المتكاملة' : 'Integrated Architectural Smart Residences')
                      : (isArabic ? 'أنظمة التحكم والمراقبة الصناعية SCADA' : 'Heavy Industrial Process Control & Telemetry')}
                  </h4>
                </div>
              </div>

            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center sm:justify-end gap-3.5 mt-5 relative z-10">
              <Link
                to="/contact"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#00A3E8] to-[#0086C4] hover:from-blue-600 hover:to-[#00A3E8] text-white font-black text-xs sm:text-sm shadow-[0_8px_25px_rgba(0,163,232,0.4)] hover:shadow-[0_12px_35px_rgba(0,163,232,0.55)] transition-all flex items-center justify-center gap-2 group cursor-pointer hover:-translate-y-0.5"
              >
                <span>{isArabic ? 'تواصل مع فريقنا الهندسي' : 'Consult Our Engineers'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Link>

              <Link
                to={activeTab === 'smart-home' ? '/smart-home' : '/industrial'}
                className="px-5 py-3 sm:py-3.5 rounded-xl bg-white border border-slate-300 hover:border-[#00A3E8] text-slate-900 hover:text-[#00A3E8] font-bold text-xs sm:text-sm transition-all flex items-center justify-center hover:shadow-[0_0_25px_rgba(0,163,232,0.2)] hover:-translate-y-0.5"
              >
                <span>
                  {activeTab === 'smart-home'
                    ? (isArabic ? 'استكشف حلول المنازل' : 'Explore Smart Home')
                    : (isArabic ? 'استكشف الأنظمة الصناعية' : 'Explore Industrial Systems')}
                </span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;