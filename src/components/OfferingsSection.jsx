import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, Wind, CloudRain, Thermometer, Tv, 
  Blinds, Video, Volume2, Activity, DoorOpen, 
  Lock, Bell, Sparkles, Smartphone, ArrowRight
} from 'lucide-react';

function OfferingsSection({ lang, onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', labelEn: 'All Categories', labelAr: 'كافة الأجهزة' },
    { id: 'lighting_climate', labelEn: 'Lighting & Climate', labelAr: 'الإضاءة والتكييف' },
    { id: 'security', labelEn: 'Security & Access', labelAr: 'الأمان والمداخل' },
    { id: 'entertainment_automation', labelEn: 'Entertainment & Automation', labelAr: 'الترفيه والأتمتة' },
  ];

  const devices = [
    // --- 1. Lighting & Climate (4 items) ---
    {
      id: 'lights',
      cat: 'lighting_climate',
      icon: Lightbulb,
      titleEn: 'Smart Lighting',
      titleAr: 'الإضاءة الذكية',
      descEn: 'Dimming, RGB scenes & automated schedules',
      descAr: 'تحكم بالسطوع، الألوان والمشاهد التلقائية',
      tagEn: 'DALI • Zigbee 3.0',
      tagAr: 'بروتوكول دالي • مشهد ذكي',
      colorGradient: 'from-amber-500/15 via-yellow-400/10 to-amber-500/5',
      borderColor: 'border-amber-400/30',
      iconColor: 'text-amber-500',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200/80',
    },
    {
      id: 'ac',
      cat: 'lighting_climate',
      icon: Wind,
      titleEn: 'Smart A/C Control',
      titleAr: 'مكيفات الهواء الذكية',
      descEn: 'Inverter sync & adaptive temperature zoning',
      descAr: 'توفير الطاقة وجدولة درجات الحرارة الذكية',
      tagEn: 'Inverter • Smart Eco',
      tagAr: 'توفير طاقة • ضبط ذكي',
      colorGradient: 'from-cyan-500/15 via-sky-400/10 to-cyan-500/5',
      borderColor: 'border-[#00A3E8]/30',
      iconColor: 'text-[#00A3E8]',
      badgeClass: 'bg-cyan-50 text-cyan-800 border-cyan-200/80',
    },
    {
      id: 'hvac',
      cat: 'lighting_climate',
      icon: Thermometer,
      titleEn: 'Central HVAC Systems',
      titleAr: 'التكييف المركزي VRF',
      descEn: 'Multi-zone VRV & building climate integration',
      descAr: 'تحكم مركزي متعدد المناطق للمباني والفلل',
      tagEn: 'Modbus • BACnet',
      tagAr: 'ربط مركزي وتجاري',
      colorGradient: 'from-blue-600/15 via-indigo-500/10 to-blue-600/5',
      borderColor: 'border-blue-400/30',
      iconColor: 'text-blue-600',
      badgeClass: 'bg-blue-50 text-blue-800 border-blue-200/80',
    },
    {
      id: 'curtain',
      cat: 'lighting_climate',
      icon: Blinds,
      titleEn: 'Motorized Curtains',
      titleAr: 'الستائر الكهربائية',
      descEn: 'Sunrise auto-open, voice & touch motion',
      descAr: 'فتح وإغلاق صوتي وتلقائي مع ضوء الشمس',
      tagEn: 'Ultra-Quiet Motor',
      tagAr: 'محرك صامت فائق الدقة',
      colorGradient: 'from-violet-500/15 via-purple-400/10 to-violet-500/5',
      borderColor: 'border-violet-400/30',
      iconColor: 'text-violet-600',
      badgeClass: 'bg-violet-50 text-violet-800 border-violet-200/80',
    },

    // --- 2. Security & Access (4 items) ---
    {
      id: 'locks',
      cat: 'security',
      icon: Lock,
      titleEn: 'Biometric Smart Locks',
      titleAr: 'الأقفال الذكية والبصمة',
      descEn: 'Fingerprint, passcode, RFID card & remote OTP',
      descAr: 'بصمة حيوية، بطاقة وكود مؤقت للزوار',
      tagEn: 'Bank-Grade AES 256',
      tagAr: 'تشفير مصرفي معتمد',
      colorGradient: 'from-rose-500/15 via-red-400/10 to-rose-500/5',
      borderColor: 'border-rose-400/30',
      iconColor: 'text-rose-600',
      badgeClass: 'bg-rose-50 text-rose-800 border-rose-200/80',
    },
    {
      id: 'cctv',
      cat: 'security',
      icon: Video,
      titleEn: 'CCTV & AI Cameras',
      titleAr: 'كاميرات المراقبة الذكية',
      descEn: '4K color night vision, AI face & vehicle detection',
      descAr: 'رؤية ليلية 4K وتعرف ذكي بالوجوه والسيارات',
      tagEn: 'AI Human & Vehicle',
      tagAr: 'كشف ذكي للمحيط',
      colorGradient: 'from-indigo-600/15 via-blue-500/10 to-indigo-600/5',
      borderColor: 'border-indigo-400/30',
      iconColor: 'text-indigo-600',
      badgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200/80',
    },
    {
      id: 'doorbell',
      cat: 'security',
      icon: Bell,
      titleEn: 'Smart Video Doorbell',
      titleAr: 'الجرس المرئي والإنتركوم',
      descEn: 'Two-way audio intercom & live phone streaming',
      descAr: 'تواصل صوتي ومرئي مباشر وفوري مع هاتفك',
      tagEn: 'Instant Push Alerts',
      tagAr: 'تنبيه فوري على الجوال',
      colorGradient: 'from-sky-500/15 via-cyan-400/10 to-sky-500/5',
      borderColor: 'border-sky-400/30',
      iconColor: 'text-sky-600',
      badgeClass: 'bg-sky-50 text-sky-800 border-sky-200/80',
    },
    {
      id: 'gates',
      cat: 'security',
      icon: DoorOpen,
      titleEn: 'Automatic Gates',
      titleAr: 'البوابات الأوتوماتيكية',
      descEn: 'License plate readers & high-speed gate motors',
      descAr: 'فتح عن بعد وقارئ لوحات للسيارات والمداخل',
      tagEn: 'Heavy-Duty Motor',
      tagAr: 'محركات للقصور والفلل',
      colorGradient: 'from-emerald-500/15 via-green-400/10 to-emerald-500/5',
      borderColor: 'border-emerald-400/30',
      iconColor: 'text-emerald-600',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    },

    // --- 3. Entertainment & Automation (4 items) ---
    {
      id: 'tv',
      cat: 'entertainment_automation',
      icon: Tv,
      titleEn: 'Smart TVs & Cinema',
      titleAr: 'شاشات وسينما منزلية',
      descEn: 'One-touch movie macros & motorized hidden lifts',
      descAr: 'تحكم بمسارح السينما والمصاعد المخفية للشاشات',
      tagEn: 'Cinema Scene Macro',
      tagAr: 'مشهد السينما الموحد',
      colorGradient: 'from-purple-500/15 via-fuchsia-400/10 to-purple-500/5',
      borderColor: 'border-purple-400/30',
      iconColor: 'text-purple-600',
      badgeClass: 'bg-purple-50 text-purple-800 border-purple-200/80',
    },
    {
      id: 'speakers',
      cat: 'entertainment_automation',
      icon: Volume2,
      titleEn: 'Multi-Room Audio',
      titleAr: 'النظام الصوتي الموزع',
      descEn: 'Lossless in-ceiling audio & multi-zone party sync',
      descAr: 'توزيع صوتي سحابي متزامن وعالي الدقة لكل غرفة',
      tagEn: 'AirPlay 2 • Spotify',
      tagAr: 'بث صوتي متعدد المناطق',
      colorGradient: 'from-pink-500/15 via-rose-400/10 to-pink-500/5',
      borderColor: 'border-pink-400/30',
      iconColor: 'text-pink-600',
      badgeClass: 'bg-pink-50 text-pink-800 border-pink-200/80',
    },
    {
      id: 'sensors',
      cat: 'entertainment_automation',
      icon: Activity,
      titleEn: 'Safety & Smart Sensors',
      titleAr: 'الحساسات وكواشف الأمان',
      descEn: 'Smoke, water leak, gas & precision presence tracking',
      descAr: 'كواشف الدخان، تسريب المياه ورادار الحركة البشري',
      tagEn: 'Auto Valve Shutoff',
      tagAr: 'إغلاق صمامات فوري',
      colorGradient: 'from-amber-600/15 via-orange-400/10 to-amber-600/5',
      borderColor: 'border-amber-400/30',
      iconColor: 'text-amber-600',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200/80',
    },
    {
      id: 'sprinkler',
      cat: 'entertainment_automation',
      icon: CloudRain,
      titleEn: 'Smart Irrigation',
      titleAr: 'ري الحدائق الذكي',
      descEn: 'Weather-adaptive soil moisture & scheduled watering',
      descAr: 'ري تلقائي يراعي الطقس ورطوبة التربة لتوفير المياه',
      tagEn: 'Eco Water Save 50%',
      tagAr: 'توفير مياه حتى 50%',
      colorGradient: 'from-cyan-600/15 via-teal-400/10 to-cyan-600/5',
      borderColor: 'border-cyan-400/30',
      iconColor: 'text-cyan-600',
      badgeClass: 'bg-cyan-50 text-cyan-800 border-cyan-200/80',
    },
  ];

  const filteredDevices = activeCategory === 'all'
    ? devices
    : devices.filter(d => d.cat === activeCategory);

  return (
    <section id="offerings" className="py-24 relative bg-gradient-to-b from-white via-[#F0F7FF] to-[#EBF5FC]/70 text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Decorative Ambient Cyan Glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[300px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-sky-400/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Subtle Micro-Dot Tech Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title and 4 Category Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'منظومة الأجهزة الذكية' : 'ALL-IN-ONE SMART ECOSYSTEM'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              {lang === 'ar' 
                ? 'حلول أتمتة شاملة لكافة مرافق مساحتك' 
                : 'Smart Devices & Ecosystem Categories'}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              {lang === 'ar' 
                ? 'استكشف منظومتنا الشاملة من الأجهزة والأنظمة الذكية المصممة للفلل السكنية، المجمعات والمشاريع التجارية في المملكة.' 
                : 'Explore our complete hardware and automation lineup engineered for luxury residences, commercial towers, and smart facilities in Saudi Arabia.'}
            </p>
          </div>

          {/* 4 Category Filter Tabs (Single clean row on desktop) */}
          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all' 
                ? devices.length 
                : devices.filter(d => d.cat === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 shadow-xs ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]'
                      : 'bg-white/95 text-slate-600 hover:text-slate-950 hover:bg-white border border-slate-200/90 hover:border-[#00A3E8]/50'
                  }`}
                >
                  <span>{lang === 'ar' ? cat.labelAr : cat.labelEn}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                    isActive 
                      ? 'bg-[#00A3E8] text-slate-950' 
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* 12 Devices Grid - Exactly 3 balanced rows of 4 cards on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredDevices.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="bg-white/95 backdrop-blur-sm border border-slate-200/90 hover:border-[#00A3E8] p-3.5 sm:p-7 rounded-2xl sm:rounded-3xl text-center flex flex-col items-center justify-between group shadow-[0_4px_15px_rgba(0,163,232,0.05)] sm:shadow-[0_8px_25px_rgba(0,163,232,0.06)] hover:shadow-[0_16px_40px_rgba(0,163,232,0.16)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden select-none"
              >
                {/* Top Subtle Border Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Status Dot */}
                <div className="w-full flex items-center justify-between mb-1 sm:mb-2 text-[9px] sm:text-[10px] font-bold text-slate-400">
                  <span className="flex items-center gap-1 sm:gap-1.5 text-emerald-600 font-extrabold">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{lang === 'ar' ? 'متصل' : 'Active'}</span>
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-400 group-hover:text-[#00A3E8] transition-colors">
                    Treco IoT
                  </span>
                </div>

                {/* Centered Colorful Icon Badge - Compact on Mobile, Grand on Desktop */}
                <div className={`w-11 h-11 sm:w-20 sm:h-20 rounded-xl sm:rounded-3xl bg-gradient-to-br ${item.colorGradient} border ${item.borderColor} flex items-center justify-center my-1.5 sm:my-3 group-hover:scale-110 group-hover:rotate-1 transition-all duration-300 shadow-xs`}>
                  <Icon className={`w-5 h-5 sm:w-9 sm:h-9 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                </div>

                {/* Title & Description */}
                <div className="my-0.5 sm:my-2 w-full">
                  <h3 className="text-xs sm:text-lg font-black text-slate-900 group-hover:text-[#00A3E8] transition-colors mb-0.5 sm:mb-1.5 leading-snug">
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight sm:leading-relaxed line-clamp-2">
                    {lang === 'ar' ? item.descAr : item.descEn}
                  </p>
                </div>

                {/* Bottom Protocol Pill Badge */}
                <div className="mt-2.5 pt-2 sm:mt-4 sm:pt-3 border-t border-slate-100 w-full flex items-center justify-center">
                  <span className={`text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border ${item.badgeClass} transition-colors`}>
                    {lang === 'ar' ? item.tagAr : item.tagEn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Unified Platform Callout Card */}
        <div className="mt-12 bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-[0_15px_35px_rgba(0,163,232,0.08)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#00A3E8]/10 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8] flex-shrink-0 mx-auto md:mx-0 group-hover:scale-110 group-hover:bg-[#00A3E8] group-hover:text-slate-950 transition-all duration-300">
              <Smartphone className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900 group-hover:text-[#00A3E8] transition-colors">
                {lang === 'ar' ? 'هل تريد تخصيص باقة تجمع هذه الأجهزة لمشروعك؟' : 'Need a Tailored Hardware Package for Your Villa or Project?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                {lang === 'ar'
                  ? 'مهندسونا في جدة يصممون لك منظومة متكاملة تجمع كافة هذه الأجهزة الـ 12 في تطبيق واحد وشاشات تحكم موحدة.'
                  : 'All 12 systems can be integrated into one single application, luxury wall pads, and Apple Home / Alexa voice control.'}
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_4px_15px_rgba(0,163,232,0.3)] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <span>{lang === 'ar' ? 'طلب عرض سعر للأجهزة' : 'Request Device Quote'}</span>
            <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default OfferingsSection;
