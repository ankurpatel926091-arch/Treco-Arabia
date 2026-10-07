import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Layers, CheckCircle2 } from 'lucide-react';
import OfferingsSection from '../components/OfferingsSection';
import StatsSection from '../components/StatsSection';
import offeringsBg from '../assets/header_background_img/offerings.png';

function OfferingsPage({ t, lang, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const solutions = [
    {
      title: lang === 'ar' ? 'أنظمة الإضاءة والمناخ الذكية' : 'Smart Lighting & Climate',
      desc: lang === 'ar' 
        ? 'تحكم دقيق في درجات التبريد وإضاءات LED خافتة وسيناريوهات للمجالس وغرف النوم.' 
        : 'Precision cooling automation for Saudi climate combined with dimmable RGB ambient lighting scenes.',
      badge: lang === 'ar' ? 'سكني وفندقي' : 'Residential & Hospitality',
      items: [
        lang === 'ar' ? 'تحكم بالتكييف عن بُعد' : 'Remote AC Temperature Regulation',
        lang === 'ar' ? 'إضاءة ذكية مع حساسات الحركة' : 'Motion-Activated Architectural Lights',
        lang === 'ar' ? 'توفير فواتير الكهرباء' : 'Automated Energy Consumption Reduction'
      ]
    },
    {
      title: lang === 'ar' ? 'الأقفال الرقمية والأمان' : 'Digital Locks & Access Security',
      desc: lang === 'ar' 
        ? 'أحدث أقفال الأبواب البيومترية الذكية وكاميرات المراقبة بدقة عالية للحفاظ على سلامة أسرتك.' 
        : 'Biometric fingerprint locks (Yale, ABEZ), smart video doorbells, and 24/7 crystal-clear CCTV surveillance.',
      badge: lang === 'ar' ? 'أمان عالي' : 'High Security',
      items: [
        lang === 'ar' ? 'فتح عبر البصمة والكود والتطبيق' : 'Fingerprint, PIN Code, RFID & App Unlock',
        lang === 'ar' ? 'إنتركم مرئي عالي الوضوح' : 'HD Two-Way Audio Video Doorbells',
        lang === 'ar' ? 'إشعارات فورية عند الدخول' : 'Instant Real-Time Intrusion Alerts'
      ]
    },
    {
      title: lang === 'ar' ? 'الستائر والبوابات الأوتوماتيكية' : 'Motorized Curtains & Gates',
      desc: lang === 'ar' 
        ? 'محركات صامتة للستائر الكهربائية وبوابات الجراج ومداخل الفلل تفتح وتغلق بنقرة واحدة.' 
        : 'Whisper-quiet motorized curtain tracks and robust automated gate barriers controlled via remote or voice.',
      badge: lang === 'ar' ? 'راحة ورفاهية' : 'Luxury & Convenience',
      items: [
        lang === 'ar' ? 'جدولة مع شروق وغروب الشمس' : 'Sunrise & Sunset Automated Schedules',
        lang === 'ar' ? 'بوابات الكراج والمداخل الرئيسية' : 'Automated Garage & Villa Sliding Gates',
        lang === 'ar' ? 'محركات فائقة الهدوء' : 'Ultra-Quiet Heavy-Duty Motor Units'
      ]
    },
    {
      title: lang === 'ar' ? 'الصوتيات والترفيه المنزلي' : 'Multi-Room Audio & Visuals',
      desc: lang === 'ar' 
        ? 'توزيع صوتي متكامل عبر سماعات سقفية مخفية في كافة أرجاء الفيلا أو الصالات.' 
        : 'Architectural in-ceiling speakers and multi-zone streaming for whole-home music and cinema surround sound.',
      badge: lang === 'ar' ? 'ترفيه' : 'Entertainment',
      items: [
        lang === 'ar' ? 'تزامن صوتي بين الغرف' : 'Multi-Room Synchronized Audio',
        lang === 'ar' ? 'دعم Spotify و Apple AirPlay' : 'AirPlay, Bluetooth & Wi-Fi Streaming',
        lang === 'ar' ? 'مسارح منزلية وسينما خاصة' : 'Home Cinema & Acoustic Integration'
      ]
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative py-16 sm:py-20 bg-black text-white border-b border-slate-800 overflow-hidden">
        {/* Background Image Layer - Bright and clearly visible */}
        <img 
          src={offeringsBg} 
          alt="Offerings & IoT Automation Background" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-85"
        />

        {/* Balanced Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-slate-950/90 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-4 drop-shadow-md">
            <Link to="/" className="hover:text-[#00A3E8] transition-colors">
              {t.nav.home}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            <span className="text-[#00A3E8]">{lang === 'ar' ? 'خدماتنا' : 'What We Offer'}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#00A3E8] font-bold text-xs uppercase tracking-wider mb-4 shadow-lg">
            <Layers className="w-3.5 h-3.5" />
            <span className="text-white">{lang === 'ar' ? 'باقة خدمات وحلول تريكو' : 'Comprehensive IoT & Automation Catalog'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {lang === 'ar' 
              ? 'حلول تقنية متكاملة لكل زاوية في مساحتك' 
              : 'What We Offer: Full-Spectrum Automation'}
          </h1>

          <p className="text-slate-100 text-xs sm:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            {lang === 'ar'
              ? 'من التحكم في الإضاءة والتكييف إلى أحدث الأقفال الرقمية والستائر الكهربائية وكاميرات المراقبة، نقدم لك أفضل الأجهزة والحلول البرمجية.'
              : 'From lighting and HVAC climate control to biometric locks, motorized curtains, and smart gate systems — engineered with precision for Saudi Arabia.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/contact"
              className="px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(0,163,232,0.4)] transition-all cursor-pointer"
            >
              {lang === 'ar' ? 'اطلب عرض سعر مخصص' : 'Request Tailored Quote'}
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-black/60 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all shadow-md backdrop-blur-sm"
            >
              {t.nav.contact}
            </Link>
          </div>

        </div>
      </section>

      {/* Offerings Hardware Showcase Component */}
      <OfferingsSection lang={lang} onOpenQuote={onOpenQuote} />

      {/* Categorized Detailed Solutions */}
      <section className="py-24 relative bg-gradient-to-b from-white via-[#F0F7FF] to-white border-b border-slate-200 overflow-hidden">
        {/* Decorative Ambient Cyan Glows */}
        <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <span>{lang === 'ar' ? 'حلول تفصيلية' : 'SPECIALIZED PACKAGES'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {lang === 'ar' ? 'مجالات خبرتنا التقنية' : 'End-to-End Smart Integration'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              {lang === 'ar' 
                ? 'نقدم خدمات التوريد، البرمجة، والتركيب بأيدي فنيين ومهندسين متخصصين في جدة.' 
                : 'Turnkey procurement, cabling, programming, and warranty services handled by certified engineers in Jeddah.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-[0_15px_35px_rgba(0,163,232,0.08)] hover:shadow-[0_25px_50px_rgba(0,163,232,0.2)] hover:border-[#00A3E8] hover:-translate-y-1.5 transition-all flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Top Subtle Border Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-[#00A3E8] bg-[#00A3E8]/10 px-3.5 py-1 rounded-full border border-[#00A3E8]/25 shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#00A3E8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>

                  <ul className="space-y-3 pt-3 border-t border-slate-100">
                    {item.items.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link 
                    to="/contact"
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-[#00A3E8] text-white hover:text-slate-950 font-black text-xs transition-all cursor-pointer text-center shadow-sm block"
                  >
                    {lang === 'ar' ? 'طلب تفاصيل الباقة' : 'Inquire About This Package'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Trust Track Record */}
      <StatsSection t={t} />

      {/* Bottom CTA Section - Floating Card with Header Width & Clean Gap before Footer */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F0F7FF] to-white relative overflow-hidden">
        {/* Decorative Ambient Cyan Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#00A3E8]/8 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-sky-400/8 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Floating Dark Gradient Card matching Header Container Width */}
          <div className="bg-gradient-to-r from-slate-950 via-[#0A1426] to-slate-950 text-white rounded-3xl sm:rounded-[2.5rem] py-14 px-6 sm:px-12 md:py-16 md:px-16 border border-slate-800/90 shadow-[0_25px_60px_-15px_rgba(0,163,232,0.18),0_10px_30px_rgba(15,23,42,0.1)] relative overflow-hidden text-center group">
            
            {/* Top Subtle Border Accent Shimmer */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Inner Radiant Cyan Glow */}
            <div className="absolute top-0 right-1/4 w-[500px] h-full bg-[#00A3E8]/12 blur-[100px] pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
              <h2 className="text-2xl sm:text-4xl font-black mb-4 tracking-tight leading-tight">
                {lang === 'ar' ? 'هل تحتاج إلى استشارة لحلول مشروعك؟' : 'Need a Custom Solution for Your Space?'}
              </h2>
              <p className="text-slate-300 text-xs sm:text-base mb-8 leading-relaxed font-normal">
                {lang === 'ar' 
                  ? 'فريقنا الهندسي جاهز لمعاينة موقعك وتقديم عرض أسعار ومخطط فني متكامل.' 
                  : 'Our engineers will review your architectural floor plan and advise on the most cost-effective hardware setup.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 sm:py-4 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(0,163,232,0.4)] transition-all cursor-pointer"
                >
                  {lang === 'ar' ? 'اطلب عرض سعر فوري' : 'Get Instant Quote'}
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all backdrop-blur-sm"
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default OfferingsPage;
