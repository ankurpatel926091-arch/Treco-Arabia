import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Wrench, Cpu, Gauge, 
  Cog, Factory, CheckCircle2, ArrowRight 
} from 'lucide-react';
import IndustrialSection from '../components/IndustrialSection';
import industrialBg from '../assets/header_background_img/industrial.png';

function IndustrialPage({ t, lang, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: Cpu,
      title: lang === 'ar' ? 'تصميم وتصنيع لوحات التحكم MCC' : 'Control Panels & MCC Engineering',
      desc: lang === 'ar'
        ? 'تصميم وتجميع لوحات التحكم الكهربائي ذات الجهد المنخفض والمتوسط وفق أعلى المعايير والمواصفات السعودية.'
        : 'Custom design and assembly of Low & Medium Voltage Motor Control Centers (MCC) and distribution panels.'
    },
    {
      icon: Cog,
      title: lang === 'ar' ? 'برمجة أنظمة PLC و SCADA' : 'PLC & SCADA Automation',
      desc: lang === 'ar'
        ? 'برمجة متقدمة لأنظمة التحكم المنطقي (Siemens, Schneider, ABB, Delta) وربط شاشات المراقبة الصناعية HMI.'
        : 'Comprehensive PLC programming, HMI screen development, and SCADA telemetry systems for complete plant visibility.'
    },
    {
      icon: Gauge,
      title: lang === 'ar' ? 'مغيرات السرعة VFD والمحركات' : 'VFDs & High-Efficiency Drives',
      desc: lang === 'ar'
        ? 'توريد وبرمجة مغيرات السرعة ومحركات التشغيل الشاقة لتقليل استهلاك الطاقة وحماية المعدات الميكانيكية.'
        : 'Variable Frequency Drives and heavy-duty motor integration for energy optimization and mechanical protection.'
    },
    {
      icon: Factory,
      title: lang === 'ar' ? 'صيانة المصانع وتحديث خطوط الإنتاج' : 'Retrofitting & Plant Maintenance',
      desc: lang === 'ar'
        ? 'تحديث خطوط الإنتاج القديمة واستبدال المكونات التالفة بقطع غيار أصلية مع دعم فني ميداني على مدار الساعة.'
        : 'Retrofitting legacy production lines with modern sensors and controllers, backed by 24/7 on-site field engineers.'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      
      {/* Industrial Hero Banner */}
      <section className="relative py-16 sm:py-20 bg-black text-white border-b border-slate-800 overflow-hidden">
        {/* Background Image Layer */}
        <img 
          src={industrialBg} 
          alt="Industrial Automation Background" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-85"
        />

        {/* Balanced Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-slate-950/80 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-4 drop-shadow-md">
            <Link to="/" className="hover:text-[#00A3E8] transition-colors">
              {t.nav.home}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            <span className="text-[#00A3E8]">{t.nav.industrial}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#00A3E8] font-bold text-xs uppercase tracking-wider mb-4 shadow-lg">
            <Wrench className="w-3.5 h-3.5" />
            <span className="text-white">{lang === 'ar' ? 'هندسة الأتمتة الصناعية الدقيقة' : 'Industrial Automation & Factory Engineering'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {lang === 'ar' 
              ? 'حلول أتمتة قوية وموثوقة للمصانع والمنشآت السعودية' 
              : 'Precision Industrial Automation Solutions'}
          </h1>

          <p className="text-slate-100 text-xs sm:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            {lang === 'ar'
              ? 'تريكو العربية تقدم حلولاً هندسية متقدمة في تصنيع لوحات التحكم وبرمجة خطوط الإنتاج والمحركات الكهربائية لتوفير أعلى كفاءة وتقليل التوقف غير المخطط له.'
              : 'Empowering Saudi industrial facilities with rugged control rooms, high-torque motors, fluidic pumps, and PLC control engineered for zero downtime.'}
          </p>

          <div className="flex items-center justify-center">
            <Link
              to="/contact"
              className="px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(0,163,232,0.4)] transition-all cursor-pointer"
            >
              {t.nav.contact}
            </Link>
          </div>

        </div>
      </section>

      {/* Main Industrial Section Component */}
      <IndustrialSection t={t} lang={lang} onOpenQuote={onOpenQuote} />

      {/* Industrial Engineering Capabilities */}
      <section className="py-12 sm:py-16 relative bg-gradient-to-b from-white via-[#F0F7FF] to-white border-b border-slate-200 overflow-hidden">
        {/* Decorative Ambient Cyan Glows */}
        <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <span>{lang === 'ar' ? 'القدرات الهندسية' : 'CORE CAPABILITIES'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {lang === 'ar' ? 'خدماتنا للمصانع والقطاع الصناعي' : 'Turnkey Industrial Plant Services'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              {lang === 'ar'
                ? 'فريق من المهندسين المعتمدين والمعدات المتطورة لخدمة المصانع في جدة والمنطقة الغربية وكافة أنحاء المملكة.'
                : 'Backed by experienced Saudi engineering personnel and certified parts complying with international and local SASO standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-7 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/90 hover:border-[#00A3E8] shadow-[0_10px_30px_rgba(0,163,232,0.06)] hover:shadow-[0_20px_45px_rgba(0,163,232,0.18)] hover:-translate-y-1.5 transition-all group flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Top Subtle Border Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#00A3E8]/10 border border-[#00A3E8]/25 text-[#00A3E8] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#00A3E8] group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-3 group-hover:text-[#00A3E8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>{lang === 'ar' ? 'متوافق مع المواصفات القياسية' : 'Standard Compliant'}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Bottom CTA Section - Floating Card with Header Width & Clean Gap before Footer */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-[#EBF5FC] to-white relative overflow-hidden">
        {/* Decorative Ambient Cyan Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#00A3E8]/12 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-sky-400/12 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Floating Premium Gradient Card with Radiant Tech Glows */}
          <div className="bg-gradient-to-br from-[#061C3D] via-[#0A2E5C] to-[#030E1F] text-white rounded-3xl sm:rounded-[2.5rem] py-10 px-6 sm:px-10 md:py-12 md:px-14 border border-sky-400/35 shadow-[0_25px_65px_-12px_rgba(0,163,232,0.32),0_12px_35px_rgba(3,14,31,0.5)] relative overflow-hidden text-center group">
            
            {/* Top Luminous Cyan Shimmer Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

            {/* Bottom Subtle Accent Glow Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

            {/* Radiant Ambient Cyan Aurora Orbs */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-b from-[#00A3E8]/30 via-cyan-400/12 to-transparent blur-[85px] pointer-events-none rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/25 blur-[100px] pointer-events-none rounded-full" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#00A3E8]/20 blur-[100px] pointer-events-none rounded-full" />

            {/* Subtle Tech Geometric Micro-Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#00A3E8 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px'
              }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 tracking-tight leading-tight sm:whitespace-nowrap text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                {lang === 'ar' ? 'هل تخطط لمشروع أتمتة صناعية جديد؟' : 'Planning an Industrial Automation Project?'}
              </h2>
              <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
                {lang === 'ar' 
                  ? 'مهندسونا مستعدون لزيارة موقع مصنعك ودراسة متطلبات التشغيل وتقديم دراسة جدوى فنية.' 
                  : 'Our engineering specialists are ready to visit your factory site, assess system requirements, and deliver technical proposals.'}
              </p>
              <div className="flex items-center justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#00A3E8] via-cyan-400 to-[#00A3E8] hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_28px_rgba(0,163,232,0.55)] hover:shadow-[0_0_38px_rgba(0,163,232,0.8)] hover:scale-105 transition-all cursor-pointer flex items-center gap-2 group/btn"
                >
                  <span>{t.nav.contact}</span>
                  <ArrowRight className={`w-4 h-4 group-hover/btn:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default IndustrialPage;
