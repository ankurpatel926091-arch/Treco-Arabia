import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import imgControlRoom from '../../assets/industrial_products/elctrical_controll_room.jpeg';
import imgMotor from '../../assets/industrial_products/moter.jpeg';
import imgPump from '../../assets/industrial_products/pump.jpeg';
import imgValve from '../../assets/industrial_products/valve.jpeg';
import imgOil from '../../assets/industrial_products/oil.jpeg';
import imgHeatingPump from '../../assets/industrial_products/Heating_pump.jpeg';

function IndustrialShowcase({ t, lang }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = t?.industrialHome?.showcase || {
    eyebrow: lang === 'ar' ? 'المعدات والمنظومات الهندسية' : 'ENGINEERED HARDWARE',
    title: lang === 'ar' ? 'معدات صناعية وحلول هندسية متقدمة' : 'Precision Equipment & Plant Systems',
    subtitle: lang === 'ar' 
      ? 'مكونات أصلية ووحدات مجمعة هندسياً تعمل بكفاءة في أصعب الظروف الصناعية بالمملكة.' 
      : 'High-performance components and engineered assemblies operating in demanding Saudi industrial environments.',
    filterAll: lang === 'ar' ? 'كافة المنظومات' : 'All Systems',
    filterControls: lang === 'ar' ? 'التحكم والطاقة' : 'Control & Power',
    filterMechanical: lang === 'ar' ? 'المحركات والنواقل' : 'Motors & Drives',
    filterFluidics: lang === 'ar' ? 'السوائل والحرارة' : 'Fluidics & Thermal'
  };

  const filters = [
    { id: 'all', label: content.filterAll },
    { id: 'control', label: content.filterControls },
    { id: 'motors', label: content.filterMechanical },
    { id: 'fluidics', label: content.filterFluidics },
  ];

  const showcaseItems = [
    {
      id: 'control-room',
      cat: 'control',
      badgeEn: 'SCADA & MCC',
      badgeAr: 'أنظمة SCADA و MCC',
      titleEn: 'Electrical Control Centers',
      titleAr: 'مراكز وغرف التحكم الكهربائي',
      specEn: 'IP55 Enclosures • PLC Telemetry',
      specAr: 'عوازل IP55 • مراقبة PLC عن بُعد',
      image: imgControlRoom,
      link: '/industrial/control-room'
    },
    {
      id: 'motors',
      cat: 'motors',
      badgeEn: 'Continuous Duty',
      badgeAr: 'تشغيل شاق مستمر',
      titleEn: 'High-Efficiency Electric Motors',
      titleAr: 'محركات كهربائية عالية الكفاءة',
      specEn: 'IE3/IE4 Efficiency • 3-Phase',
      specAr: 'كفاءة IE3/IE4 • ثلاثية الأطوار',
      image: imgMotor,
      link: '/industrial/motors'
    },
    {
      id: 'pumps',
      cat: 'fluidics',
      badgeEn: 'Fluidics',
      badgeAr: 'أنظمة السوائل',
      titleEn: 'Heavy Industrial Fluid Pumps',
      titleAr: 'مضخات السوائل الصناعية الشاقة',
      specEn: 'High Pressure • Desert Rated',
      specAr: 'ضغط عالي • مقاومة للظروف الصحراوية',
      image: imgPump,
      link: '/industrial/pumps'
    },
    {
      id: 'valves',
      cat: 'fluidics',
      badgeEn: 'Automation',
      badgeAr: 'صمامات ذكية',
      titleEn: 'Automated Actuator Valves',
      titleAr: 'صمامات التحكم الهيدروليكية الآلية',
      specEn: 'Modbus / 4-20mA Feedback',
      specAr: 'تغذية راجعة Modbus و 4-20mA',
      image: imgValve,
      link: '/industrial/valves'
    },
    {
      id: 'oil-heating',
      cat: 'fluidics',
      badgeEn: 'Process Thermal',
      badgeAr: 'إدارة الحرارة',
      titleEn: 'Thermal Oil Heating Skids',
      titleAr: 'منظومات تسخين الزيت الحراري',
      specEn: 'Up to 350°C Thermal Stability',
      specAr: 'تحمل حراري حتى ٣٥٠ درجة مئوية',
      image: imgOil,
      link: '/industrial/oil-heating'
    },
    {
      id: 'heating-pump',
      cat: 'fluidics',
      badgeEn: 'HVAC Industrial',
      badgeAr: 'مضخات حرارية',
      titleEn: 'High-Capacity Heating Pumps',
      titleAr: 'مضخات التدفئة الصناعية الكبرى',
      specEn: 'Heat Transfer Optimization',
      specAr: 'كفاءة نقل الحرارة للمنشآت',
      image: imgHeatingPump,
      link: '/industrial/heating-pump'
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.cat === activeFilter);

  return (
    <section 
      id="industrial-showcase" 
      className="pt-20 sm:pt-24 pb-16 sm:pb-24 text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
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

      {/* ====== LAYER 2: Soft Radial Vignette ====== */}
      <div 
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(0, 163, 232, 0.07) 0%, transparent 60%)'
        }}
      />

      {/* ====== LAYER 3: Ambient Cyan Blob — Top Right ====== */}
      <div className="absolute -top-40 -right-40 w-[750px] h-[750px] bg-gradient-to-bl from-[#00A3E8]/15 to-transparent blur-[180px] pointer-events-none rounded-full" />

      {/* ====== LAYER 4: Ambient Indigo Blob — Bottom Left ====== */}
      <div className="absolute -bottom-48 -left-48 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-400/12 to-transparent blur-[200px] pointer-events-none rounded-full" />

      {/* ====== LAYER 5: Cyan Blob — Mid Left (Soft) ====== */}
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-cyan-300/10 blur-[150px] pointer-events-none rounded-full" />

      {/* ====== LAYER 6: Precision Dot Grid ====== */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)'
        }}
      />

      {/* ====== LAYER 7: Diagonal Light Streaks ====== */}
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

      {/* ====== LAYER 8: Horizontal Fine Lines ====== */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, #0F172A 60px, #0F172A 61px)',
          maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)'
        }}
      />

      {/* ====== LAYER 9: Top Border Glow Line ====== */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3E8]/40 to-transparent" />

      {/* ====== LAYER 10: Bottom Border Glow Line ====== */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#00A3E8]/15 via-[#00A3E8]/8 to-transparent border border-[#00A3E8]/35 text-[#00A3E8] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_4px_20px_rgba(0,163,232,0.15)] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E8]" />
              <span>{content.eyebrow}</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                {content.title}
              </span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((flt) => (
              <button
                key={flt.id}
                onClick={() => setActiveFilter(flt.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === flt.id
                    ? 'bg-gradient-to-r from-[#00A3E8] to-[#0086C4] text-white shadow-[0_6px_20px_rgba(0,163,232,0.35)] border border-transparent'
                    : 'bg-white/80 backdrop-blur-sm hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-[#00A3E8]/40 shadow-sm hover:shadow-[0_4px_15px_rgba(0,163,232,0.1)]'
                }`}
              >
                {flt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 High-Impact Showcase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group relative rounded-3xl overflow-hidden border border-slate-200 hover:border-[#00A3E8]/50 bg-white/80 backdrop-blur-sm transition-all duration-500 shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(0,163,232,0.15)] flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Photo Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={lang === 'ar' ? item.titleAr : item.titleEn}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-[1.02]"
                />
                
                {/* Top Badge & Arrow Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#00A3E8]/40 text-[#00A3E8] text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {lang === 'ar' ? item.badgeAr : item.badgeEn}
                  </span>
                  
                  <div className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-[#00A3E8]/40 flex items-center justify-center text-[#00A3E8] shadow-sm group-hover:bg-gradient-to-br group-hover:from-[#00A3E8] group-hover:to-[#0086C4] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_6px_20px_rgba(0,163,232,0.4)] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom subtle gradient scrim for readability if needed */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/15 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Caption Area */}
              <div className="p-4 sm:p-5 flex items-center justify-between flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#00A3E8] transition-colors">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h3>
              </div>

              {/* Bottom Cyan Shimmer Line */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default IndustrialShowcase;