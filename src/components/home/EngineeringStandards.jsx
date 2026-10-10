import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Factory, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Play
} from 'lucide-react';

import imgSaso from '../../assets/standards/standards_saso.jpg';
import imgIec from '../../assets/standards/standards_iec.jpg';
import imgIso from '../../assets/standards/standards_iso.jpg';
import imgVision2030 from '../../assets/standards/standards_vision2030.jpg';
import imgScada from '../../assets/standards/standards_scada.jpg';
import emblemWhite from '../../assets/emblem-white.png';

function EngineeringStandards({ t, lang }) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(5); // Start at second copy for infinite loop
  const [withTransition, setWithTransition] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const content = t?.industrialHome?.standards || {
    eyebrow: lang === 'ar' ? 'التميز الهندسي' : 'ENGINEERING EXCELLENCE',
    title: lang === 'ar' ? 'معتمدة للمواصفات والمقاييس السعودية' : 'Certified for Saudi Industrial Standards',
    subtitle: lang === 'ar' 
      ? 'تُصمم جميع المنظومات لتحمل درجات الحرارة المرتفعة ومطابقة اللوائح الفنية المعتمدة بالمملكة.' 
      : 'Every system is engineered to withstand extreme ambient temperatures and fully complies with KSA regulations.',
    items: [
      { 
        code: 'SASO', 
        title: lang === 'ar' ? 'المواصفات القياسية السعودية (SASO)' : 'SASO Certified Enclosures', 
        desc: lang === 'ar' ? 'لوحات كهربائية ومراكز تحكم MCC مطابقة لمواصفات SASO ومقاومة للمناخ الصحراوي.' : '100% SASO compliant desert-rated electrical enclosures and MCC switchgear.',
        spec: lang === 'ar' ? 'عزل IP55 / IP65 • معتمد مناخياً' : 'IP55 / IP65 • Climate Rated'
      },
      { 
        code: 'IEC', 
        title: lang === 'ar' ? 'معايير التحكم الصناعي IEC 61131-3' : 'IEC 61131-3 PLC Controllers', 
        desc: lang === 'ar' ? 'وحدات تحكم منطقية قابلة للبرمجة (PLC) وبرمجيات أتمتة صناعية بمعايير دولية.' : 'International standard programmable automation controllers and deterministic robotics.',
        spec: lang === 'ar' ? 'إشارات رقمية دقيقة • بروتوكول Fieldbus' : 'Deterministic I/O • Fieldbus'
      },
      { 
        code: 'ISO', 
        title: lang === 'ar' ? 'إدارة الجودة الشاملة ISO 9001:2015' : 'ISO 9001:2015 Quality Precision', 
        desc: lang === 'ar' ? 'فحص قياسي متقدم، قياس دقيق ثلاثي الأبعاد، وضمان الجودة في كافة مراحل التنفيذ.' : 'Certified precision metrology, automated CMM inspection, and robotic quality control.',
        spec: lang === 'ar' ? 'تدقيق معتمد • قياس ثلاثي الأبعاد CMM' : 'Zero-Defect Audit • Calibrated'
      },
      { 
        code: 'KSA 2030', 
        title: lang === 'ar' ? 'مصانع المستقبل - رؤية المملكة 2030' : 'Vision 2030 Smart Plants', 
        desc: lang === 'ar' ? 'أتمتة خطوط الإنتاج والتقنيات الروبوتية دعماً لبرنامج تطوير الصناعة الوطنية (NIDLP).' : 'Aligned with the National Industrial Development & Logistics Program (NIDLP).',
        spec: lang === 'ar' ? 'الثورة الصناعية 4.0 • هندسة وطنية' : 'Industry 4.0 • Saudi Engineered'
      },
      { 
        code: 'SCADA', 
        title: lang === 'ar' ? 'مراكز التحكم الإشرافي والمراقبة SCADA' : 'Mission-Critical SCADA Centers', 
        desc: lang === 'ar' ? 'أنظمة مراقبة وتحكم إشرافي موزعة مع شاشات مؤشرات فورية لإدارة المصانع والمنشآت.' : 'Distributed control systems with redundant real-time plant telemetry and telemetry walls.',
        spec: lang === 'ar' ? 'تشغيل متواصل 24/7 • مراقبة فورية' : '24/7 Redundant • Real-Time Telemetry'
      }
    ]
  };

  const images = [imgSaso, imgIec, imgIso, imgVision2030, imgScada];
  const originalItems = content.items || [];
  const totalOriginal = originalItems.length;

  // Tripled array for seamless infinite auto-loop
  const extendedItems = [...originalItems, ...originalItems, ...originalItems];
  const extendedImages = [...images, ...images, ...images];

  // Responsive itemsPerView
  useEffect(() => {
    const updateItemsPerView = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Continuous Auto-Mode (Every 3.2 seconds automatically advances)
  useEffect(() => {
    const autoInterval = setInterval(() => {
      setWithTransition(true);
      setCurrentIndex(prev => prev + 1);
    }, 3200);

    return () => clearInterval(autoInterval);
  }, []);

  // Handle seamless infinite reset on transition end
  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal * 2) {
      setWithTransition(false);
      setCurrentIndex(currentIndex - totalOriginal);
    } else if (currentIndex < totalOriginal) {
      setWithTransition(false);
      setCurrentIndex(currentIndex + totalOriginal);
    }
  };

  // Re-enable transition if it was disabled for jump reset
  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        setWithTransition(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  // Next & Prev manual controls
  const nextSlide = () => {
    setWithTransition(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setWithTransition(true);
    setCurrentIndex(prev => prev - 1);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Active bullet dot (0 to 4)
  const activeDot = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;

  return (
    <section 
      id="engineering-standards"
      className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden"
    >
      {/* Background Ambience Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[350px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Main Container - Equal to Navbar Width (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Controls and Auto-Mode Status */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/30 text-[#00A3E8] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{content.eyebrow}</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {content.title}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Right Header Controls: Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            {/* Prev Arrow Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous standard"
              className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 hover:border-[#00A3E8] hover:bg-slate-800 text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
            >
              <ChevronLeft className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>

            {/* Next Arrow Button */}
            <button
              onClick={nextSlide}
              aria-label="Next standard"
              className="w-11 h-11 rounded-full bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 font-black"
            >
              <ChevronRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CAROUSEL SLIDER TRACK (Clean Images, NO Image Content)   */}
        {/* ========================================================= */}
        <div 
          className="relative overflow-hidden rounded-3xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: withTransition ? 'transform 600ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedItems.map((item, idx) => {
              const img = extendedImages[idx] || images[0];
              return (
                <div 
                  key={idx}
                  className="px-2.5 sm:px-3 flex-shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group rounded-3xl overflow-hidden border border-slate-800 hover:border-[#00A3E8]/70 bg-slate-900 transition-all duration-300 shadow-xl flex flex-col h-full cursor-pointer hover:shadow-2xl">
                    
                    {/* Top: 100% CLEAN IMAGE */}
                    <div className="relative h-56 sm:h-64 lg:h-72 w-full overflow-hidden bg-slate-950">
                      <img 
                        src={img} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-100 contrast-[1.02]"
                        loading="lazy"
                      />
                    </div>

                    {/* Bottom Cyan Hover Accent */}
                    <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {originalItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setWithTransition(true);
                setCurrentIndex(totalOriginal + idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeDot === idx 
                  ? 'w-8 h-2.5 bg-[#00A3E8]' 
                  : 'w-2.5 h-2.5 bg-slate-800 hover:bg-[#00A3E8]/50'
              }`}
            />
          ))}
        </div>

        {/* ========================================================= */}
        {/* Brand Authenticity & Technical Integration Strip          */}
        {/* ========================================================= */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-[#00A3E8]/40 flex items-center justify-center p-2 flex-shrink-0">
              <img 
                src={emblemWhite} 
                alt="Treco Arabia" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-white tracking-wide">
                {lang === 'ar' ? 'تريكو العربية للمقاولات والأتمتة' : 'TRECO ARABIA INDUSTRIAL DIVISION'}
              </div>
              <div className="text-[11px] text-slate-400">
                {lang === 'ar' ? 'جدة • المنطقة الصناعية • المملكة العربية السعودية' : 'Jeddah Industrial City • Western Province, Saudi Arabia'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E8]">
              <Factory className="w-4 h-4" />
              <span>{lang === 'ar' ? 'فريق هندسي محلي معتمد' : 'Local Certified Engineering Team'}</span>
            </div>
            <div className="h-4 w-px bg-slate-800 hidden sm:block" />
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <Award className="w-4 h-4 text-[#00A3E8]" />
              <span>{lang === 'ar' ? 'ضمان شامل ودعم ميداني' : 'Comprehensive Warranty & Field Support'}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EngineeringStandards;
