import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

import imgIndustrialAutomation from '../../assets/header_background_img/industrial.png';
import imgControlRoom from '../../assets/industrial_products/elctrical_controll_room.jpeg';
import imgPumpsDrives from '../../assets/industrial_products/pump.jpeg';
import imgInfrastructure from '../../assets/header_background_img/offerings.png';

function IndustrialSolutionsGrid({ t, lang }) {
  const content = t?.industrialHome?.solutions || {
    eyebrow: lang === 'ar' ? 'التخصصات الرئيسية' : 'CORE SPECIALIZATIONS',
    title: lang === 'ar' ? 'المنظومات الصناعية الذكية' : 'Intelligent Industrial Systems',
    subtitle: lang === 'ar' 
      ? 'معدات فائقة الدقة، أنظمة تحكم موزع، وبنية تحتية مؤتمتة صُممت خصيصاً للصناعة السعودية.' 
      : 'Precision hardware, distributed control systems, and automated infrastructure engineered for Saudi manufacturing.',
    viewAll: lang === 'ar' ? 'عرض كافة الحلول الصناعية' : 'Explore All Industrial Solutions',
    items: [
      {
        id: 'turnkey-automation',
        badge: lang === 'ar' ? 'القدرة الرئيسية' : 'FLAGSHIP CAPABILITY',
        title: lang === 'ar' ? 'الأتمتة الصناعية وأنظمة SCADA' : 'Industrial Automation & SCADA',
        desc: lang === 'ar' 
          ? 'تحكم متكامل بالعمليات الإنتاجية، مزامنة الخطوط الروبوتية، ومراقبة فورية للمصانع.' 
          : 'End-to-end process control, robotic line synchronization, and real-time plant telemetry.',
        link: '/industrial',
        linkText: lang === 'ar' ? 'استكشف المنظومات' : 'Explore Systems',
      },
      {
        id: 'control-rooms',
        badge: lang === 'ar' ? 'التحكم والطاقة' : 'CONTROL & POWER',
        title: lang === 'ar' ? 'غرف التحكم ولوحات MCC الكهربائية' : 'Electrical Control Rooms & MCC Panels',
        desc: lang === 'ar' 
          ? 'لوحات تحكم MCC، تكامل وحدات PLC، وإدارة مركزية متقدمة للمنشآت.' 
          : 'Custom motor control centers, PLC integration, and centralized plant management.',
        link: '/industrial/control-room',
        linkText: lang === 'ar' ? 'أنظمة التحكم' : 'View Control Systems',
      },
      {
        id: 'drives-machinery',
        badge: lang === 'ar' ? 'المعدات الثقيلة' : 'HEAVY EQUIPMENT',
        title: lang === 'ar' ? 'المحركات والمضخات ومسارات السوائل' : 'Industrial Drives, Pumps & Fluidics',
        desc: lang === 'ar' 
          ? 'محركات كهربائية عالية العزم ومضخات هيدروليكية وصمامات آلية دقيقة.' 
          : 'High-torque continuous motors, precision hydraulic valves, and fluid transfer systems.',
        link: '/industrial',
        linkText: lang === 'ar' ? 'المعدات الميكانيكية' : 'View Equipment',
      },
      {
        id: 'infrastructure',
        badge: lang === 'ar' ? 'إدارة المرافق' : 'FACILITY CONTROL',
        title: lang === 'ar' ? 'المنشآت الذكية وإدارة استهلاك الطاقة' : 'Intelligent Facilities & Energy Management',
        desc: lang === 'ar' 
          ? 'أتمتة إدارة المباني، ضبط التكييف، وتحسين ذكي لاستهلاك الطاقة.' 
          : 'Automated building management, environmental zoning, and predictive energy optimization.',
        link: '/offerings',
        linkText: lang === 'ar' ? 'أنظمة المرافق' : 'View Facility Systems',
      },
    ]
  };

  const items = content.items || [];
  const flagship = items[0];
  const controlRooms = items[1];
  const machinery = items[2];
  const infrastructure = items[3];

  return (
    <section 
      id="industrial-solutions" 
      className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden"
    >
      {/* Subtle Ambient Industrial Tint Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#00A3E8]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[300px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Minimal Copy, High Impact */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/30 text-[#00A3E8] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E8]" />
              <span>{content.eyebrow}</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {content.title}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/industrial"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00A3E8] hover:text-cyan-300 transition-colors group cursor-pointer"
            >
              <span>{content.viewAll}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Flagship Dominant Tile (Spans 7 cols on desktop) */}
          {flagship && (
            <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-slate-800 hover:border-[#00A3E8]/60 bg-slate-900/40 transition-all duration-500 shadow-2xl flex flex-col justify-end min-h-[420px] sm:min-h-[480px]">
              {/* Background Photo - 100% Brightness, Crisp & Clear */}
              <img 
                src={imgIndustrialAutomation} 
                alt={flagship.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-[1.02]"
              />

              {/* Minimal Bottom Scrim only behind text, top 65% completely bright & open */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 via-35% to-transparent to-65% pointer-events-none" />

              {/* Cyan Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content Box - Minimal Text footprint */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-900/90 border border-[#00A3E8]/40 text-[#00A3E8] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                    {flagship.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2 group-hover:text-[#00A3E8] transition-colors">
                  {flagship.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-5 max-w-xl">
                  {flagship.desc}
                </p>

                <div>
                  <Link
                    to={flagship.link}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(0,163,232,0.4)] transition-all cursor-pointer"
                  >
                    <span>{flagship.linkText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Control Rooms Tile (Spans 5 cols on desktop) */}
          {controlRooms && (
            <div className="lg:col-span-5 group relative rounded-3xl overflow-hidden border border-slate-800 hover:border-[#00A3E8]/60 bg-slate-900/40 transition-all duration-500 shadow-2xl flex flex-col justify-end min-h-[420px] sm:min-h-[480px]">
              {/* Background Photo - 100% Brightness, Crisp & Clear */}
              <img 
                src={imgControlRoom} 
                alt={controlRooms.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-[1.02]"
              />

              {/* Minimal Bottom Scrim only behind text, top 65% completely bright & open */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 via-35% to-transparent to-65% pointer-events-none" />

              {/* Cyan Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content Box - Minimal Text footprint */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-900/90 border border-[#00A3E8]/40 text-[#00A3E8] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                    {controlRooms.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 group-hover:text-[#00A3E8] transition-colors">
                  {controlRooms.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-5">
                  {controlRooms.desc}
                </p>

                <div>
                  <Link
                    to={controlRooms.link}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-[#00A3E8] text-white hover:text-[#00A3E8] font-bold text-xs sm:text-sm transition-all"
                  >
                    <span>{controlRooms.linkText}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#00A3E8]" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Row 2: Tile 3 - Industrial Machinery & Drives (Spans 6 cols) */}
          {machinery && (
            <div className="lg:col-span-6 group relative rounded-3xl overflow-hidden border border-slate-800 hover:border-[#00A3E8]/60 bg-slate-900/40 transition-all duration-500 shadow-xl flex flex-col justify-end min-h-[340px] sm:min-h-[380px]">
              {/* Background Photo - 100% Brightness, Crisp & Clear */}
              <img 
                src={imgPumpsDrives} 
                alt={machinery.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-[1.02]"
              />

              {/* Minimal Bottom Scrim only behind text, top 60% completely bright & open */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 via-35% to-transparent to-60% pointer-events-none" />
              
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-900/90 border border-[#00A3E8]/40 text-[#00A3E8] text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                    {machinery.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 group-hover:text-[#00A3E8] transition-colors">
                  {machinery.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4">
                  {machinery.desc}
                </p>

                <div>
                  <Link
                    to={machinery.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00A3E8] hover:text-cyan-300 transition-colors"
                  >
                    <span>{machinery.linkText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Row 2: Tile 4 - Intelligent Facilities & Infrastructure (Spans 6 cols) */}
          {infrastructure && (
            <div className="lg:col-span-6 group relative rounded-3xl overflow-hidden border border-slate-800 hover:border-[#00A3E8]/60 bg-slate-900/40 transition-all duration-500 shadow-xl flex flex-col justify-end min-h-[340px] sm:min-h-[380px]">
              {/* Background Photo - 100% Brightness, Crisp & Clear */}
              <img 
                src={imgInfrastructure} 
                alt={infrastructure.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-[1.02]"
              />

              {/* Minimal Bottom Scrim only behind text, top 60% completely bright & open */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 via-35% to-transparent to-60% pointer-events-none" />
              
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-900/90 border border-[#00A3E8]/40 text-[#00A3E8] text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                    {infrastructure.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 group-hover:text-[#00A3E8] transition-colors">
                  {infrastructure.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4">
                  {infrastructure.desc}
                </p>

                <div>
                  <Link
                    to={infrastructure.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00A3E8] hover:text-cyan-300 transition-colors"
                  >
                    <span>{infrastructure.linkText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default IndustrialSolutionsGrid;
