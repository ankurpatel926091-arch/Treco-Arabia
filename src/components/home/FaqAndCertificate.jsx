import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ZoomIn, 
  X, 
  FileCheck,
  ExternalLink 
} from 'lucide-react';
import certificateImg from '../../assets/Certificate.png';

function FaqAndCertificate({ t, lang }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [showCertModal, setShowCertModal] = useState(false);

  const content = t?.industrialHome?.faqAndCertificate || {
    faqEyebrow: lang === 'ar' ? 'الأسئلة الأكثر تكراراً' : 'COMMON QUESTIONS',
    faqTitle: lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    faqSubtitle: lang === 'ar' 
      ? 'إجابات واضحة وشاملة حول حلول الأتمتة الصناعية والمباني الذكية وخدماتنا الهندسية في المملكة.' 
      : 'Clear answers about Treco Arabia\'s industrial automation, smart control systems, and engineering services.',
    faqs: [
      {
        q: lang === 'ar' 
          ? 'ما هي حلول الأتمتة والمنازل الذكية التي تقدمها شركة تريكو؟' 
          : 'What smart home and industrial automation solutions does TRECO provide?',
        a: lang === 'ar' 
          ? 'تقدم تريكو حلول أتمتة شاملة ومتكاملة تشمل أنظمة التحكم الإشرافي SCADA، لوحات تحكم المحركات MCC، أنظمة إدارة المباني BMS، بالإضافة إلى حلول المنازل والقصور الذكية المصممة خصيصاً للمملكة.' 
          : 'TRECO provides comprehensive end-to-end automation, including industrial SCADA and distributed control systems, motor control centers (MCC), building management systems (BMS), and luxury architectural smart living solutions engineered specifically for the Saudi market.'
      },
      {
        q: lang === 'ar' 
          ? 'هل يمكن لتريكو أتمتة المنازل والمنشآت القائمة دون إعادة تمديد الأسلاك؟' 
          : 'Can TRECO automate existing homes and facilities without major rewiring?',
        a: lang === 'ar' 
          ? 'نعم، تعمل حلول تريكو مع المباني الجديدة والقائمة على حد سواء. يمكن دمج الوحدات الذكية والمفاتيح اللمسية والأنظمة اللاسلكية بأقل تعديل ممكن وفقاً لحالة التوصيل والأحمال المطلوبة.' 
          : 'Yes, TRECO solutions can work with both new and existing facilities. Products like smart modules, retrofittable controllers, and wireless touch switches can be integrated with minimal structural changes, depending on wiring condition and load requirements.'
      },
      {
        q: lang === 'ar' 
          ? 'هل تتوافق أجهزة تريكو الذكية مع أنظمة Alexa و Google Assistant؟' 
          : 'Are TRECO smart devices compatible with Alexa and Google Assistant?',
        a: lang === 'ar' 
          ? 'نعم، تدعم أجهزة تريكو ومحاور التحكم التكامل السلس مع أبرز المساعدات الصوتية بما فيها Amazon Alexa و Google Assistant و Apple HomeKit وشاشات اللمس المركزية.' 
          : 'Yes, TRECO smart devices and control hubs offer seamless integration with leading voice ecosystems including Amazon Alexa, Google Assistant, Apple HomeKit, and centralized touch panels.'
      },
      {
        q: lang === 'ar' 
          ? 'كيف تساهم تريكو في تعزيز الأمان وكفاءة استهلاك الطاقة؟' 
          : 'How does TRECO improve facility safety and energy efficiency?',
        a: lang === 'ar' 
          ? 'من خلال الجدولة الذكية للأحمال، والضبط المستمر للتكييف والإضاءة عبر المستشعرات، والأقفال البيومترية، وحماية الدوائر الكهربائية، مما يوفر حتى ٣٥٪ من استهلاك الطاقة.' 
          : 'Through intelligent load scheduling, sensor-driven climate and lighting zoning, surge-protected circuits, biometric access security, and real-time power telemetry that can reduce energy consumption by up to 35%.'
      },
      {
        q: lang === 'ar' 
          ? 'هل تقدم تريكو حلول الأتمتة للمكاتب والفنادق والمنشآت الصناعية الكبرى؟' 
          : 'Does TRECO provide automation for offices, hotels, and industrial facilities?',
        a: lang === 'ar' 
          ? 'نعم، توفر تريكو أنظمة أتمتة متطورة للمجمعات التجارية، الفنادق، المستشفيات، والمصانع والمنشآت الصناعية في مختلف مدن المملكة مع دعم فني متواصل.' 
          : 'Yes, TRECO delivers enterprise-grade automation for commercial complexes, hospitality venues, healthcare facilities, and demanding industrial manufacturing plants across Saudi Arabia.'
      }
    ],
    certEyebrow: lang === 'ar' ? 'ضمان الجودة والمعايير المعتمدة' : 'QUALITY ASSURANCE & STANDARDS',
    certTitle: lang === 'ar' ? 'شهادة الآيزو ISO 9001:2015' : 'ISO 9001:2015 Certification',
    certSubtitle: lang === 'ar' 
      ? 'معتمدة بموجب المعيار الدولي ISO 9001:2015 لضمان أعلى معايير إدارة الجودة في التصنيع والأتمتة.' 
      : 'Certified under ISO 9001:2015 ensuring world-class quality management standards in manufacturing and automation.',
    certDesc: lang === 'ar' 
      ? 'التزام مستمر بالتحسين ومراقبة الجودة الفائقة لضمان أعلى مستويات رضا العملاء وسلامة التشغيل في المملكة العربية السعودية.' 
      : 'Continuous improvement and high-quality processes for superior customer satisfaction, product longevity, and operational safety.',
    certBadges: lang === 'ar' 
      ? [
          'معتمدة من IAF و EGAC دولياً',
          'رقم الشهادة: E20260244809',
          'تقييم معتمد من Royal Assessments',
          'مطابقة لمواصفات SASO و IEC'
        ]
      : [
          'IAF & EGAC Accredited',
          'Certificate No: E20260244809',
          'Audited by Royal Assessments',
          'Saudi SASO & IEC Compatible'
        ],
    certScopeTitle: lang === 'ar' ? 'مجال الأنشطة المعتمد:' : 'Certified Scope of Activities:',
    certScopeText: lang === 'ar' 
      ? 'تصنيع وتصميم وتطوير منتجات إنترنت الأشياء والأتمتة، مفاتيح اللمس الذكية، ولوحات التحكم المعيارية.' 
      : 'Manufacturing, design & development of audio-video, IoT automation products, touch switches, and intelligent modular controls.',
    certBtnEnlarge: lang === 'ar' ? 'معاينة الشهادة الرسمية' : 'View Full Certificate',
    certBtnClose: lang === 'ar' ? 'إغلاق المعاينة' : 'Close Preview'
  };

  const faqs = content.faqs || [];
  const certBadges = content.certBadges || [];

  return (
    <section 
      id="faq-certification" 
      className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden"
    >
      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[350px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION 1: Frequently Asked Questions (FAQ) Accordion    */}
        {/* ========================================================= */}
        <div className="w-full mb-20 sm:mb-24">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/30 text-[#00A3E8] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{content.faqEyebrow}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {content.faqTitle}
            </h2>

            <p className="mt-3 text-xs sm:text-base text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              {content.faqSubtitle}
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5 sm:space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen 
                      ? 'bg-slate-900 border-[#00A3E8]/60 shadow-[0_4px_25px_rgba(0,163,232,0.15)]' 
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-[#00A3E8]/40'
                  }`}
                >
                  {/* Clickable Header */}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-start cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                      <span className={`text-xs sm:text-sm font-black transition-colors ${
                        isOpen ? 'text-[#00A3E8]' : 'text-slate-400 group-hover:text-[#00A3E8]'
                      }`}>
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className={`text-sm sm:text-base lg:text-lg font-bold transition-colors ${
                        isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {item.q}
                      </span>
                    </div>

                    {/* Toggle Icon Button */}
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${
                      isOpen 
                        ? 'bg-[#00A3E8] text-slate-950 font-bold' 
                        : 'bg-slate-800 text-[#00A3E8] border border-[#00A3E8]/30 group-hover:border-[#00A3E8]'
                    }`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {/* Expandable Body */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pl-11 sm:pl-14">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================= */}
        {/* SECTION 2: ISO 9001:2015 Certification Showcase Card     */}
        {/* ========================================================= */}
        <div className="rounded-3xl border border-slate-800 hover:border-[#00A3E8]/60 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden transition-all duration-500">
          
          {/* Subtle Top Cyan Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-80" />
          
          {/* Decorative Background Watermark */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-[#00A3E8]/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Framed Certificate Thumbnail */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div 
                onClick={() => setShowCertModal(true)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden p-2 bg-slate-950 border-2 border-[#00A3E8]/40 hover:border-[#00A3E8] shadow-[0_10px_35px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Certificate Image - Bright, Unobstructed & High Resolution */}
                <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-xl bg-white">
                  <img 
                    src={certificateImg} 
                    alt="TRECO ISO 9001:2015 Management System Certificate" 
                    className="w-full h-full object-contain filter brightness-100 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Hover Action Pill */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-4 py-2 rounded-xl bg-[#00A3E8] text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-4 h-4" />
                      <span>{content.certBtnEnlarge}</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Verification Label */}
                <div className="mt-2 text-center py-1">
                  <span className="text-[11px] font-bold text-[#00A3E8] flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E8]" />
                    <span>IAF & EGAC ACCREDITED QMS</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Certification Details & Quality Standards */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div>
                {/* Eyebrow / Standards Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/40 text-[#00A3E8] text-[11px] font-extrabold uppercase tracking-widest mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>{content.certEyebrow}</span>
                </div>

                {/* Certificate Main Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug mb-3">
                  {content.certTitle}
                </h3>

                {/* Subtitle */}
                <p className="text-sm sm:text-base font-semibold text-slate-200 leading-relaxed mb-3">
                  {content.certSubtitle}
                </p>

                {/* Supporting Description */}
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                  {content.certDesc}
                </p>

                {/* Certified Scope Box */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00A3E8] uppercase tracking-wider mb-1.5">
                    <FileCheck className="w-4 h-4 text-[#00A3E8]" />
                    <span>{content.certScopeTitle}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {content.certScopeText}
                  </p>
                </div>

                {/* 4 Trust Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8">
                  {certBadges.map((badge, idx) => (
                    <div 
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center gap-2.5 text-xs font-semibold text-white"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00A3E8] flex-shrink-0" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setShowCertModal(true)}
                  className="px-6 py-3 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(0,163,232,0.4)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>{content.certBtnEnlarge}</span>
                </button>

                <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5 px-3 py-2">
                  <ShieldCheck className="w-4 h-4 text-[#00A3E8]" />
                  <span>{lang === 'ar' ? 'فحص وتدقيق دوري لضمان الامتثال' : 'Audited & Verified for Industrial Safety'}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* FULLSCREEN LIGHTBOX MODAL for Certificate Preview        */}
      {/* ========================================================= */}
      {showCertModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all"
          onClick={() => setShowCertModal(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-slate-950 border-2 border-[#00A3E8]/60 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#00A3E8]" />
                <span className="text-sm sm:text-base font-black text-white">
                  {content.certTitle} — Treco Technologies
                </span>
              </div>

              <button
                onClick={() => setShowCertModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00A3E8] text-white hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Container */}
            <div className="relative max-h-[75vh] overflow-y-auto flex items-center justify-center bg-black rounded-xl p-2 border border-slate-800">
              <img 
                src={certificateImg} 
                alt="Treco Technologies ISO 9001:2015 Official Certificate" 
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-3 mt-3 text-xs text-slate-400">
              <span>Registration No: E20260244809</span>
              <button
                onClick={() => setShowCertModal(false)}
                className="px-4 py-1.5 rounded-lg bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                {content.certBtnClose}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default FaqAndCertificate;
