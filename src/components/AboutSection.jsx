import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ShieldCheck, Cpu, Factory, Home, 
  CheckCircle2, ArrowRight, Award, Users, Clock, 
  Wrench, Layers, Zap
} from 'lucide-react';

import smartHomeImg from '../assets/header_background_img/smart-home.png';
import industrialImg from '../assets/header_background_img/industrial.png';

function AboutSection({ lang, onOpenQuote }) {
  const highlights = [
    {
      icon: Clock,
      value: '10+',
      labelEn: 'Years in Saudi Arabia',
      labelAr: 'سنوات خبرة في المملكة',
      subEn: 'Established local track record',
      subAr: 'حضور هندسي موثوق',
    },
    {
      icon: Award,
      value: '500+',
      labelEn: 'Projects Delivered',
      labelAr: 'مشروع منجز بنجاح',
      subEn: 'Villas & industrial facilities',
      subAr: 'قصور، فلل ومصانع كبرى',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      labelEn: 'SASO Compliant',
      labelAr: 'مطابق للمواصفات القياسية',
      subEn: 'Saudi & international standards',
      subAr: 'معتمد للمقاييس السعودية',
    },
    {
      icon: Users,
      value: '24/7',
      labelEn: 'On-Site Jeddah Support',
      labelAr: 'دعم فني ميداني بجدة',
      subEn: 'Certified Saudi engineers',
      subAr: 'فريق هندسي متخصص',
    },
  ];

  const pillars = [
    {
      icon: Layers,
      titleEn: 'Turnkey Architectural Integration',
      titleAr: 'تكامل هندسي ومعماري شامل',
      descEn: 'From floor-plan electrical layouts and cabling to final device programming and commissioning, our engineers manage the complete lifecycle.',
      descAr: 'من دراسة المخططات المعمارية والتمديدات إلى البرمجة والتشغيل النهائي، نتولى إدارة المشروع بدقة متناهية.',
    },
    {
      icon: Cpu,
      titleEn: 'Universal Multi-Protocol Ecosystem',
      titleAr: 'توافق موحد مع كافة البروتوكولات',
      descEn: 'We bridge Matter, Zigbee, DALI, KNX, Modbus, BACnet, Apple Home, and Alexa into a single cohesive interface with zero vendor lock-in.',
      descAr: 'دمج سلس لأحدث بروتوكولات الأتمتة العالمية في شاشات وتطبيقات موحدة وسهلة الاستخدام دون قيود.',
    },
    {
      icon: ShieldCheck,
      titleEn: 'Industrial-Grade Reliability & Security',
      titleAr: 'موثوقية صناعية وتشفير مصرفي',
      descEn: 'Bank-grade AES-256 data security, fire-rated wiring, and robust hardware certified for peak Saudi weather conditions.',
      descAr: 'تشفير مصرفي آمن للبيانات، مكونات مقاومة للحرارة والظروف المناخية القاسية مع ضمان محلي معتمد.',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 relative bg-gradient-to-b from-white via-[#F0F7FF] to-white text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Decorative Ambient Cyan Glows */}
      <div className="absolute top-20 left-10 w-[600px] h-[350px] bg-[#00A3E8]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-20 right-10 w-[650px] h-[400px] bg-sky-400/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Subtle Micro-Dot Tech Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'من نحن • نبذة عن تريكو العربية' : 'WHO WE ARE • ABOUT TRECO ARABIA'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            {lang === 'ar' 
              ? 'رواد حلول الأتمتة الذكية والتميز الهندسي في السعودية' 
              : 'Pioneering Smart Living & Industrial Precision in Saudi Arabia'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
            {lang === 'ar' 
              ? 'تريكو العربية هي شركة سعودية رائدة متخصصة في تطوير وتنفيذ حلول أتمتة المنازل والفلل الفاخرة، وأنظمة التحكم للمصانع والمنشآت الصناعية وفق أعلى معايير الجودة العالمية والمواصفات القياسية السعودية (SASO).' 
              : 'Treco Arabia is a premier Saudi engineering firm delivering end-to-end residential smart automation and industrial process control, bridging cutting-edge IoT technology with certified local engineering.'}
          </p>
        </div>

        {/* 4 Credibility Highlight Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white/95 backdrop-blur-sm p-5 sm:p-7 rounded-3xl border border-slate-200/90 shadow-[0_8px_25px_rgba(0,163,232,0.06)] hover:shadow-[0_16px_35px_rgba(0,163,232,0.16)] hover:border-[#00A3E8] hover:-translate-y-1.5 transition-all group relative overflow-hidden text-center sm:text-left flex flex-col justify-between"
              >
                {/* Top Subtle Border Shimmer */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#00A3E8]/10 border border-[#00A3E8]/25 text-[#00A3E8] flex items-center justify-center group-hover:bg-[#00A3E8] group-hover:text-slate-950 transition-all duration-300 shadow-xs mx-auto sm:mx-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div>
                  <div className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight group-hover:text-[#00A3E8] transition-colors mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-800 mb-0.5">
                    {lang === 'ar' ? item.labelAr : item.labelEn}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    {lang === 'ar' ? item.subAr : item.subEn}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core 2-Column Split: The Company Story vs Dual Core Sectors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          
          {/* Left Column (7 cols): The Story & Pillars */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-sm p-7 sm:p-10 rounded-3xl sm:rounded-[2.5rem] border border-slate-200/90 shadow-[0_15px_40px_rgba(0,163,232,0.08)] flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top Cyan Accent Shimmer */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E8]/10 text-[#00A3E8] font-black text-xs uppercase tracking-wider mb-4">
                <span>{lang === 'ar' ? 'فلسفتنا الهندسية' : 'OUR ENGINEERING PHILOSOPHY'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                {lang === 'ar'
                  ? 'نوحد كافة الأنظمة الذكية في إطار عمل متكامل وسهل التحكم'
                  : 'Bridging Hardware, Software & Local Field Expertise'}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
                {lang === 'ar'
                  ? 'في تريكو العربية، نؤمن بأن الأتمتة الحقيقية لا تقتصر على تركيب أجهزة منفصلة، بل تكمن في ابتكار منظومة موحدة تجعل كل تفصيل في مساحتك السكنية أو الصناعية متصلاً، ذكياً، واقتصادياً في استهلاك الطاقة. نخدم عملاءنا في جدة، الرياض والمنطقة الغربية بفريق هندسي سعودي معتمد يوفر دعماً ميدانياً مستمراً.'
                  : 'At Treco Arabia, we integrate market-leading hardware into a single unified framework. Whether designing whole-home ambient lighting and biometric security or architecting industrial MCC switchgears, SCADA monitors, and high-torque motors, we deliver reliable solutions tailored for Saudi climates and lifestyles.'}
              </p>

              {/* Pillars List */}
              <div className="space-y-4 mb-8">
                {pillars.map((pillar, pIdx) => {
                  const PIcon = pillar.icon;
                  return (
                    <div 
                      key={pIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-[#00A3E8] hover:bg-white transition-all flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#00A3E8]/10 text-[#00A3E8] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <PIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-black text-slate-900 mb-1">
                          {lang === 'ar' ? pillar.titleAr : pillar.titleEn}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                          {lang === 'ar' ? pillar.descAr : pillar.descEn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{lang === 'ar' ? 'طلب استشارة هندسية' : 'Consult Our Engineers'}</span>
                <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-xs"
              >
                {lang === 'ar' ? 'زيارة مكتبنا بجدة' : 'Visit Jeddah Office'}
              </Link>
            </div>

          </div>

          {/* Right Column (5 cols): Dual Visual Sector Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Card 1: Residential Luxury Smart Home */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 shadow-[0_10px_30px_rgba(0,163,232,0.06)] hover:shadow-[0_20px_45px_rgba(0,163,232,0.18)] hover:border-[#00A3E8] transition-all overflow-hidden flex flex-col justify-between group flex-1">
              
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img 
                  src={smartHomeImg} 
                  alt="Smart Home Automation"
                  style={{ filter: 'brightness(1.3) contrast(1.05)' }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                />
                
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#00A3E8] border border-slate-200/90 text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {lang === 'ar' ? 'المنازل والقصور الذكية' : 'RESIDENTIAL SECTOR'}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md text-[#00A3E8] border border-slate-200/90 flex items-center justify-center shadow-sm">
                    <Home className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-3 group-hover:text-[#00A3E8] transition-colors">
                    {lang === 'ar' ? 'أتمتة الفلل والمنازل الفاخرة' : 'Luxury Villa & Smart Living'}
                  </h4>
                  <ul className="space-y-2 mb-4 text-xs sm:text-sm font-semibold text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{lang === 'ar' ? 'التحكم الذكي بالإضاءة والتكييف والتعتيم' : 'Smart Lighting, Climate & DALI Dimming'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{lang === 'ar' ? 'الأقفال البيومترية وكاميرات المراقبة 4K' : 'Biometric Digital Locks & 4K CCTV AI'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{lang === 'ar' ? 'الستائر الكهربائية والصوتيات متعددة المناطق' : 'Motorized Curtains & Multi-Room Audio'}</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/smart-home"
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#00A3E8] text-slate-800 hover:text-slate-950 font-black text-xs text-center transition-all flex items-center justify-center gap-2"
                >
                  <span>{lang === 'ar' ? 'استكشف حلول المنازل' : 'Explore Smart Home'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </Link>
              </div>

            </div>

            {/* Card 2: Industrial & Factory Automation */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 shadow-[0_10px_30px_rgba(0,163,232,0.06)] hover:shadow-[0_20px_45px_rgba(0,163,232,0.18)] hover:border-[#00A3E8] transition-all overflow-hidden flex flex-col justify-between group flex-1">
              
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img 
                  src={industrialImg} 
                  alt="Industrial Plant Automation"
                  style={{ filter: 'brightness(1.3) contrast(1.05)' }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                />
                
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#00A3E8] border border-slate-200/90 text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {lang === 'ar' ? 'المصانع والمنشآت' : 'INDUSTRIAL SECTOR'}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md text-[#00A3E8] border border-slate-200/90 flex items-center justify-center shadow-sm">
                    <Factory className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-3 group-hover:text-[#00A3E8] transition-colors">
                    {lang === 'ar' ? 'أنظمة المصانع والتحكم الصناعي' : 'Industrial Plants & Control Rooms'}
                  </h4>
                  <ul className="space-y-2 mb-4 text-xs sm:text-sm font-semibold text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{lang === 'ar' ? 'لوحات التحكم الكهربائي MCC وبرمجة PLC' : 'Custom MCC Panels & PLC / SCADA Telemetry'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{lang === 'ar' ? 'المحركات ثلاثية الأطوار ومغيرات السرعة VFD' : 'High-Torque 3-Phase Motors & VFD Inverters'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{lang === 'ar' ? 'مضخات السوائل وصمامات التدفق وأنظمة الزيت' : 'Heavy Fluid Pumps, Valves & Oil Heating'}</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/industrial"
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#00A3E8] text-slate-800 hover:text-slate-950 font-black text-xs text-center transition-all flex items-center justify-center gap-2"
                >
                  <span>{lang === 'ar' ? 'استكشف حلول المصانع' : 'Explore Industrial Plant'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;
