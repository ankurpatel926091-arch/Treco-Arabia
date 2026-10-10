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
      className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden"
    >
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[350px] bg-[#00A3E8]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Precision Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* ========================================================= */}
          {/* COLUMN 1: CONTENT SIDE (7 cols on lg)                      */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            <div>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/30 text-[#00A3E8] text-xs font-bold tracking-widest uppercase mb-5 shadow-sm self-start">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isArabic ? 'من نحن • نبذة عن تريكو العربية' : 'WHO WE ARE • ABOUT TRECO ARABIA'}</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                {isArabic ? (
                  <>
                    رواد حلول <span className="text-[#00A3E8]">المنازل الذكية</span> و <span className="text-[#00A3E8]">الأتمتة الصناعية</span> في المملكة
                  </>
                ) : (
                  <>
                    Pioneering <span className="text-[#00A3E8]">Home Automation</span> & <span className="text-[#00A3E8]">Industrial Systems</span> in Saudi Arabia
                  </>
                )}
              </h2>

              {/* Concise Mission Narrative */}
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
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
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeTab === 'smart-home'
                      ? 'bg-slate-900/90 border-[#00A3E8]/60 shadow-[0_4px_25px_rgba(0,163,232,0.15)]'
                      : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      activeTab === 'smart-home'
                        ? 'bg-[#00A3E8] text-slate-950 font-black shadow-md'
                        : 'bg-slate-800 text-[#00A3E8] border border-[#00A3E8]/30'
                    }`}>
                      <Home className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-black text-white">
                          {isArabic ? 'أتمتة المنازل والفلل الذكية (Home Automation)' : 'Residential & Smart Home Automation'}
                        </h3>
                        <Link 
                          to="/smart-home"
                          className="text-xs font-bold text-[#00A3E8] hover:text-cyan-300 hidden sm:inline-flex items-center gap-1"
                        >
                          <span>{isArabic ? 'عرض الحلول' : 'Explore'}</span>
                          <ChevronRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-180' : ''}`} />
                        </Link>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1 leading-relaxed">
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
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeTab === 'industrial'
                      ? 'bg-slate-900/90 border-[#00A3E8]/60 shadow-[0_4px_25px_rgba(0,163,232,0.15)]'
                      : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      activeTab === 'industrial'
                        ? 'bg-[#00A3E8] text-slate-950 font-black shadow-md'
                        : 'bg-slate-800 text-[#00A3E8] border border-[#00A3E8]/30'
                    }`}>
                      <Factory className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-black text-white">
                          {isArabic ? 'الأتمتة الصناعية وهندسة المصانع (Industrial Automation)' : 'Industrial Automation & Engineering'}
                        </h3>
                        <Link 
                          to="/industrial"
                          className="text-xs font-bold text-[#00A3E8] hover:text-cyan-300 hidden sm:inline-flex items-center gap-1"
                        >
                          <span>{isArabic ? 'عرض الأنظمة' : 'Explore'}</span>
                          <ChevronRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-180' : ''}`} />
                        </Link>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1 leading-relaxed">
                        {isArabic
                          ? 'لوحات تحكم المحركات MCC، وحدات PLC، مراقبة فورية عبر أنظمة SCADA، ومحركات ومضخات صناعية مطابقة لمعايير SASO و IEC.'
                          : 'Custom motor control centers (MCC), PLC integration, redundant SCADA plant telemetry, heavy-duty pumps, and drives engineered for demanding industrial operations.'}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Minimalist Stats Strip (bottom of left column) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
              {stats.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00A3E8]/10 text-[#00A3E8] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-white leading-none">
                      {item.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-semibold mt-0.5">
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
            
            {/* Visual Container Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl group flex-1 min-h-[440px] sm:min-h-[500px]">
              
              {/* Photo — NO dark overlay, full brightness */}
              <img 
                src={activeTab === 'smart-home' ? smartHomeImg : industrialImg} 
                alt={activeTab === 'smart-home' ? 'Smart Home Automation' : 'Industrial Automation'}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Top Selector Toggle Pills on Image */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
                <div className="inline-flex p-1 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800 shadow-lg">
                  <button
                    onClick={() => setActiveTab('smart-home')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'smart-home'
                        ? 'bg-[#00A3E8] text-slate-950 shadow-sm'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'منازل ذكية' : 'Smart Home'}
                  </button>
                  <button
                    onClick={() => setActiveTab('industrial')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'industrial'
                        ? 'bg-[#00A3E8] text-slate-950 shadow-sm'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {isArabic ? 'أنظمة صناعية' : 'Industrial'}
                  </button>
                </div>

                <div className="w-9 h-9 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[#00A3E8] flex items-center justify-center shadow-md">
                  {activeTab === 'smart-home' ? <Home className="w-4 h-4" /> : <Factory className="w-4 h-4" />}
                </div>
              </div>

              {/* Bottom Inset Info Card over Image */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
                <div className="p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#00A3E8]">
                      {activeTab === 'smart-home'
                        ? (isArabic ? 'القطاع السكني الفاخر' : 'RESIDENTIAL SECTOR')
                        : (isArabic ? 'القطاع الصناعي والمصانع' : 'INDUSTRIAL SECTOR')}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{isArabic ? 'معتمد SASO' : 'SASO Certified'}</span>
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-black text-white leading-tight">
                    {activeTab === 'smart-home'
                      ? (isArabic ? 'أنظمة الفلل والمنازل الذكية المتكاملة' : 'Integrated Architectural Smart Residences')
                      : (isArabic ? 'أنظمة التحكم والمراقبة الصناعية SCADA' : 'Heavy Industrial Process Control & Telemetry')}
                  </h4>
                </div>
              </div>

            </div>

            {/* Action CTA Buttons — Image ke neeche Right Side */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center sm:justify-end gap-3.5 mt-5">
              <Link
                to="/contact"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_4px_20px_rgba(0,163,232,0.4)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{isArabic ? 'تواصل مع فريقنا الهندسي' : 'Consult Our Engineers'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Link>

              <Link
                to={activeTab === 'smart-home' ? '/smart-home' : '/industrial'}
                className="px-5 py-3 sm:py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#00A3E8] text-white hover:text-[#00A3E8] font-bold text-xs sm:text-sm transition-all flex items-center justify-center"
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