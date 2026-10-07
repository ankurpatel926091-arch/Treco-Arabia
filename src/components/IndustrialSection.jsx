import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowUpRight } from 'lucide-react';

import imgCustomSolutions from '../assets/industrial_products/customisedsolutions.jpeg';
import imgPump from '../assets/industrial_products/pump.jpeg';
import imgHeatingPump from '../assets/industrial_products/Heating_pump.jpeg';
import imgValve from '../assets/industrial_products/valve.jpeg';
import imgHeavyGears from '../assets/industrial_products/heave_gears.jpeg';
import imgControlRoom from '../assets/industrial_products/elctrical_controll_room.jpeg';
import imgMotor from '../assets/industrial_products/moter.jpeg';
import imgOilHeating from '../assets/industrial_products/oil.jpeg';

function IndustrialSection({ lang, onOpenQuote }) {
  const products = [
    {
      id: 'custom-solutions',
      titleEn: 'Customised Solutions',
      titleAr: 'حلول هندسية مخصصة',
      descEn: 'Turnkey automation engineering and plant architectural blueprints.',
      descAr: 'تصميم وهندسة خطوط الإنتاج والحلول المتكاملة للمصانع.',
      badgeEn: 'Engineered',
      badgeAr: 'مخصص',
      image: imgCustomSolutions,
    },
    {
      id: 'pumps',
      titleEn: 'Pumps',
      titleAr: 'مضخات صناعية',
      descEn: 'Heavy-duty fluid transfer, slurry, and multi-stage pressure pumps.',
      descAr: 'مضخات الضغط العالي ونقل السوائل ذات الاعتمادية الفائقة.',
      badgeEn: 'Heavy Duty',
      badgeAr: 'خدمة شاقة',
      image: imgPump,
    },
    {
      id: 'heating-pump',
      titleEn: 'Heating Pump',
      titleAr: 'مضخات التدفئة والتبريد',
      descEn: 'Industrial thermal heat pumps and chilling process circuits.',
      descAr: 'أنظمة ومضخات التدفئة والتبريد للعمليات الإنتاجية الصناعية.',
      badgeEn: 'Thermal',
      badgeAr: 'حراري',
      image: imgHeatingPump,
    },
    {
      id: 'valve',
      titleEn: 'Valve',
      titleAr: 'صمامات التحكم الصناعية',
      descEn: 'High-pressure pneumatic, hydraulic, and automated control valves.',
      descAr: 'صمامات التحكم الهيدروليكية والنيوماتيكية الدقيقة للتدفق.',
      badgeEn: 'Precision',
      badgeAr: 'دقيق',
      image: imgValve,
    },
    {
      id: 'heavy-gears',
      titleEn: 'Heavy Gears',
      titleAr: 'تروس النقل الميكانيكي',
      descEn: 'Precision engineered gearboxes and mechanical transmission drives.',
      descAr: 'صناديق التروس الميكانيكية عالية العزم للآلات الثقيلة.',
      badgeEn: 'High Torque',
      badgeAr: 'عزم عالي',
      image: imgHeavyGears,
    },
    {
      id: 'control-room',
      titleEn: 'Electrical Control Room',
      titleAr: 'لوحات وغرف التحكم MCC',
      descEn: 'Custom MCC switchgear panels, SCADA monitors & PLC cabinets.',
      descAr: 'تصنيع وتجميع لوحات التوزيع والتحكم الكهربائي وغرف المراقبة.',
      badgeEn: 'Certified',
      badgeAr: 'معتمد',
      image: imgControlRoom,
    },
    {
      id: 'electrical-motors',
      titleEn: 'Electrical Motors',
      titleAr: 'المحركات الكهربائية',
      descEn: 'Three-phase high-efficiency induction motors and VFD drives.',
      descAr: 'محركات كهربائية ثلاثية الطور عالية الكفاءة مع مغيرات سرعة VFD.',
      badgeEn: 'NEW',
      badgeAr: 'جديد',
      image: imgMotor,
    },
    {
      id: 'oil-heating',
      titleEn: 'Oil Heating System',
      titleAr: 'أنظمة التدفئة الزيتية',
      descEn: 'Thermal fluid oil heating pipelines, sensors and boiler loops.',
      descAr: 'شبكات تسخين الزيت الحراري والمراجل ومراقبة درجات الحرارة.',
      badgeEn: 'Thermal Oil',
      badgeAr: 'زيت حراري',
      image: imgOilHeating,
    },
  ];

  return (
    <section id="industrial" className="py-24 relative bg-gradient-to-b from-white via-[#F0F7FF] to-[#EBF5FC]/70 text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Decorative Radiant Cyan & Sky Ambient Glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Subtle Micro-Dot Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Wrench className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'القطاع الصناعي السعودي' : 'HEAVY INDUSTRY & AUTOMATION'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            {lang === 'ar' ? 'معدات ومنظومات الأتمتة الصناعية' : 'Precision Industrial Hardware & Systems'}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {lang === 'ar' 
              ? 'معدات وقطع غيار صناعية أصلية معتمدة مع التركيب والبرمجة الهندسية لكبرى المصانع والمنشآت في المملكة.'
              : 'Engineered for maximum reliability, zero downtime, and operational excellence across Saudi industrial plants.'}
          </p>
        </div>

        {/* 8 Professional Industrial Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((item) => (
            <div 
              key={item.id}
              className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 shadow-[0_10px_30px_rgba(0,163,232,0.06)] hover:shadow-[0_20px_45px_rgba(0,163,232,0.18)] hover:border-[#00A3E8] hover:-translate-y-2 transition-all group duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Top Subtle Border Accent Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />

              <div>
                {/* Real High-Resolution Industrial Photo */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={lang === 'ar' ? item.titleAr : item.titleEn}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category / Status Badge on Photo */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#00A3E8] border border-slate-200/90 text-[10px] font-black uppercase tracking-wider shadow-sm z-10">
                    {lang === 'ar' ? item.badgeAr : item.badgeEn}
                  </span>
                </div>

                {/* Card Title & Description */}
                <div className="p-5 sm:p-6 pb-2 text-center">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#00A3E8] transition-colors mb-2 leading-snug">
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {lang === 'ar' ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>

              {/* Cyan Action Button - Exactly as in sample */}
              <div className="p-5 sm:p-6 pt-2">
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                  <span>{lang === 'ar' ? 'طلب مواصفات المعدة' : 'Explore More'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* High-End Industrial Callout Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-[#0A1426] to-slate-950 text-white p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-full bg-[#00A3E8]/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white mb-2">
              {lang === 'ar' ? 'تصميم غرف التحكم الصناعي وبرمجة PLC' : 'Custom Industrial Control Room & PLC Engineering'}
            </h3>
            <p className="text-sm text-slate-300 font-medium">
              {lang === 'ar' 
                ? 'مهندسون سعوديون معتمدون مستعدون لزيارة موقع مصنعك ودراسة متطلبات التشغيل والأتمتة.'
                : 'Precision automation engineered for factories and plants across Saudi Arabia.'}
            </p>
          </div>
          <Link 
            to="/contact"
            className="relative z-10 px-7 py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-sm shadow-[0_0_20px_rgba(0,163,232,0.4)] transition-all cursor-pointer whitespace-nowrap"
          >
            {lang === 'ar' ? 'استشارة المهندس الصناعي' : 'Consult Industrial Team'}
          </Link>
        </div>

      </div>
    </section>
  );
}

export default IndustrialSection;
