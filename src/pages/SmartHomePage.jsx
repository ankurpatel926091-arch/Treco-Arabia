import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Sparkles, ShieldCheck, 
  Smartphone, Sliders, Zap 
} from 'lucide-react';
import RoomVisualizer from '../components/RoomVisualizer';
import VoiceDemo from '../components/VoiceDemo';
import smartHomeBg from '../assets/header_background_img/smart-home.png';

function SmartHomePage({ t, lang, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    {
      icon: Smartphone,
      title: lang === 'ar' ? 'تحكم كامل عبر الهاتف الذكي' : 'Mobile & Remote Control',
      desc: lang === 'ar' 
        ? 'تحكم في كافة مرافق منزلك من أي مكان في العالم عبر تطبيقات iOS و Android الذكية.' 
        : 'Manage your lighting, curtains, climate, and security from anywhere in the world using intuitive iOS & Android apps.'
    },
    {
      icon: Sliders,
      title: lang === 'ar' ? 'سيناريوهات وأجواء مخصصة' : 'Custom Ambient Scenes',
      desc: lang === 'ar' 
        ? 'بضغطة واحدة يمكنك تفعيل وضع (السينما)، (الاسترخاء)، أو (مغادرة المنزل).' 
        : 'One tap sets the perfect atmosphere: "Movie Night", "Dinner", or "Away Mode" adjusts lights, AC, and shades in unison.'
    },
    {
      icon: ShieldCheck,
      title: lang === 'ar' ? 'حماية وأمان معزز' : 'Advanced Security & Locks',
      desc: lang === 'ar' 
        ? 'أقفال رقمية ذكية وحساسات أمان تنبهك فوراً لأي حركة مشبوهة أو تسرب مياه.' 
        : 'Yale & ABEZ smart locks with instant smartphone alerts for unexpected entry, gas leaks, or water intrusion.'
    },
    {
      icon: Zap,
      title: lang === 'ar' ? 'توفير استهلاك الكهرباء حتى ٣٥٪' : 'Energy Savings up to 35%',
      desc: lang === 'ar' 
        ? 'جدولة التكييف والإضاءة بحسب درجة الحرارة وساعات اليوم لتقليل فواتير الطاقة بالسعودية.' 
        : 'Intelligent HVAC and lighting automation tailored for Saudi weather conditions, dramatically reducing electricity bills.'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      
      {/* Smart Home Hero Banner */}
      <section className="relative py-16 sm:py-20 bg-black text-white border-b border-slate-800 overflow-hidden">
        {/* Background Image Layer - Bright and clearly visible */}
        <img 
          src={smartHomeBg} 
          alt="Smart Home Automation Background" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 sm:scale-105 opacity-85"
        />

        {/* Balanced Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-slate-950/90 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest mb-4 drop-shadow-md">
            <Link to="/" className="hover:text-[#00A3E8] transition-colors">
              {t.nav.home}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            <span className="text-[#00A3E8]">{t.nav.smartHome}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#00A3E8] font-bold text-xs uppercase tracking-wider mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-white">{lang === 'ar' ? 'حلول المنازل الذكية الفاخرة' : 'Next-Gen Smart Living for Saudi Villas'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {lang === 'ar' 
              ? 'حوّل منزلك إلى مساحة ذكية متكاملة ومترفة' 
              : 'Next-Generation Smart Home Automation'}
          </h1>

          <p className="text-slate-100 text-xs sm:text-base max-w-2xl mx-auto font-medium leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            {lang === 'ar'
              ? 'تريكو العربية تقدم حلولاً هندسية متكاملة لأتمتة الإضاءة، التكييف، الستائر، والأقفال الذكية المصممة خصيصاً للفلل والشقق العصرية بالمملكة.'
              : 'Seamlessly connect lighting, HVAC climate control, motorized curtains, and high-security biometric locks engineered for modern residential architecture in Saudi Arabia.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/contact"
              className="px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(0,163,232,0.4)] transition-all cursor-pointer"
            >
              {lang === 'ar' ? 'اطلب استشارة مجانية' : 'Request Free Consultation'}
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

      {/* Feature Highlights Grid */}
      <section className="py-20 relative bg-gradient-to-b from-white via-[#F0F7FF] to-white border-b border-slate-200 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00A3E8]/8 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-7 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-[0_10px_30px_rgba(0,163,232,0.08)] hover:shadow-[0_20px_45px_rgba(0,163,232,0.2)] hover:border-[#00A3E8] hover:-translate-y-1.5 transition-all group relative overflow-hidden"
                >
                  {/* Top Subtle Border Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A3E8]/15 to-[#00A3E8]/5 border border-[#00A3E8]/30 text-[#00A3E8] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#00A3E8] group-hover:text-white transition-all shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2.5 group-hover:text-[#00A3E8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Room Visualizer Section */}
      <RoomVisualizer t={t} />

      {/* Voice Control Interactive Demo */}
      <VoiceDemo t={t} />

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
                {lang === 'ar' ? 'جاهز لتحويل منزلك إلى منزل ذكي؟' : 'Ready to Build Your Dream Smart Home?'}
              </h2>
              <p className="text-slate-300 text-xs sm:text-base mb-8 leading-relaxed font-normal">
                {lang === 'ar' 
                  ? 'تواصل مع مهندسينا في جدة واحصل على مخطط تفصيلي وتكلفة تقديرية لمشروعك.' 
                  : 'Connect with our Jeddah engineering team for an on-site villa assessment and turnkey smart home plan.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 sm:py-4 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(0,163,232,0.4)] transition-all cursor-pointer"
                >
                  {lang === 'ar' ? 'طلب عرض سعر سريع' : 'Get Instant Quote'}
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all backdrop-blur-sm"
                >
                  {lang === 'ar' ? 'زيارة مكتبنا بجدة' : 'Visit Our Jeddah Office'}
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default SmartHomePage;
