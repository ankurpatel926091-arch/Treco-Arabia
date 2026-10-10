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
      className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden"
    >
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[350px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
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

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((flt) => (
              <button
                key={flt.id}
                onClick={() => setActiveFilter(flt.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === flt.id
                    ? 'bg-[#00A3E8] text-slate-950 shadow-md'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
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
              className="group relative rounded-3xl overflow-hidden border border-slate-800 hover:border-[#00A3E8]/60 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 shadow-xl flex flex-col cursor-pointer"
            >
              {/* Photo Container with Consistent Proportions */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img 
                  src={item.image} 
                  alt={lang === 'ar' ? item.titleAr : item.titleEn}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-100 contrast-[1.02]"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-[#00A3E8]/40 text-[#00A3E8] text-[10px] font-extrabold uppercase tracking-wider">
                    {lang === 'ar' ? item.badgeAr : item.badgeEn}
                  </span>
                  
                  <div className="w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md border border-[#00A3E8]/40 flex items-center justify-center text-[#00A3E8] group-hover:bg-[#00A3E8] group-hover:text-slate-950 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Minimal Caption Area */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-[#00A3E8] transition-colors mb-1.5">
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {lang === 'ar' ? item.specAr : item.specEn}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Shimmer */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default IndustrialShowcase;
