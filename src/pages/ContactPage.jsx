import React, { useEffect } from 'react';
import { ChevronRight, MapPin, Sparkles } from 'lucide-react';
import ContactSection from '../components/ContactSection';

function ContactPage({ t, lang, onBackHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-24 bg-white min-h-screen">
      
      {/* Contact Page Hero Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            <button 
              onClick={onBackHome}
              className="hover:text-[#00A3E8] transition-colors cursor-pointer"
            >
              {t.nav.home}
            </button>
            <ChevronRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            <span className="text-[#00A3E8]">{t.nav.contact}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E8]/10 text-[#00A3E8] font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'تواصل مع فريق تريكو' : 'Get in Touch with Treco Engineers'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {lang === 'ar' ? 'اتصل بنا واحصل على استشارة تقنية' : 'Contact Us & Request Technical Consultation'}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            {lang === 'ar' 
              ? 'فريقنا الهندسي في جدة جاهز للإجابة على جميع استفساراتك وتصميم الحل المناسب لمشروعك.' 
              : 'Our engineering team in Jeddah is ready to assist you with tailored smart home and industrial automation engineering.'}
          </p>

        </div>
      </section>

      {/* Main Contact Form & Location Details */}
      <ContactSection t={t} />

      {/* Google Maps / Jeddah Location Box */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00A3E8]/10 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8] flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'ar' ? 'موقعنا على الخريطة' : 'Visit Our Jeddah Office'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Majid Noor near Baladia Camp, Wadi Mraykh, Jeddah, Saudi Arabia 23254
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/PXm3ZaU5nD68Ek9G7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-[#00A3E8] text-white hover:text-black font-extrabold text-xs transition-all shadow-sm whitespace-nowrap cursor-pointer"
            >
              {lang === 'ar' ? 'عرض على خرائط جوجل' : 'Open in Google Maps'}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactPage;
