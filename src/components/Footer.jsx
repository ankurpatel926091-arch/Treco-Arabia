import React from 'react';
import { 
  Cpu, Phone, Mail, MapPin, ChevronRight, Lock
} from 'lucide-react';

function Footer({ t, lang, onNavigateHome, onNavigateContact }) {
  const handleScrollTo = (id) => {
    onNavigateHome();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <footer className="bg-[#051329] text-slate-200 text-base border-t-2 border-[#00A3E8] relative z-10">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <button onClick={onNavigateHome} className="flex items-center gap-3 cursor-pointer text-left">
              <div className="w-11 h-11 rounded-xl bg-[#00A3E8] flex items-center justify-center text-white shadow-md">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white tracking-wider">
                TRECO <span className="text-[#00A3E8]">ARABIA</span>
              </span>
            </button>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {lang === 'ar' 
                ? 'تريكو العربية هي الشركة الرائدة في حلول أتمتة المنازل الذكية والأتمتة الصناعية في المملكة العربية السعودية.' 
                : 'Treco Arabia is a leading Smart Home and Industrial Automation company offering turnkey residential, commercial, and industrial solutions across Saudi Arabia.'}
            </p>

            <p className="text-sm font-bold text-white pt-1">
              {lang === 'ar' ? 'مهندسون وفنيون معتمدون في الأتمتة' : 'Certified Automation Engineers & Technicians'}
            </p>

            {/* Social Icons (Inline SVGs) */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800/90 hover:bg-[#00A3E8] hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800/90 hover:bg-[#00A3E8] hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800/90 hover:bg-[#00A3E8] hover:text-white border border-slate-700 flex items-center justify-center text-slate-300 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-black text-base uppercase tracking-widest mb-6">
              {lang === 'ar' ? 'روابط سريعة' : 'QUICK LINKS'}
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold text-slate-200">
              <li>
                <button onClick={onNavigateHome} className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer">
                  <ChevronRight className={`w-4 h-4 text-[#00A3E8] ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>{t.nav.home}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('smart-home')} className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer">
                  <ChevronRight className={`w-4 h-4 text-[#00A3E8] ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>{t.nav.smartHome}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('offerings')} className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer">
                  <ChevronRight className={`w-4 h-4 text-[#00A3E8] ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>{lang === 'ar' ? 'خدماتنا' : 'What We Offer'}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('industrial')} className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer">
                  <ChevronRight className={`w-4 h-4 text-[#00A3E8] ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>{t.nav.industrial}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('stats')} className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer">
                  <ChevronRight className={`w-4 h-4 text-[#00A3E8] ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>{t.nav.about}</span>
                </button>
              </li>
              <li>
                <button onClick={onNavigateContact} className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer">
                  <ChevronRight className={`w-4 h-4 text-[#00A3E8] ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>{t.nav.contact}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services / Products */}
          <div>
            <h4 className="text-white font-black text-base uppercase tracking-widest mb-6">
              {lang === 'ar' ? 'خدماتنا ومنتجاتنا' : 'OUR SERVICES'}
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold text-slate-200">
              <li>
                <button onClick={() => handleScrollTo('smart-home')} className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer">
                  <ChevronRight className={`w-4 h-4 text-[#00A3E8] ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>Lighting Automation</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('smart-home')} className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer">
                  <ChevronRight className={`w-4 h-4 text-[#00A3E8] ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>Smart Motorized Curtains</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('smart-home')} className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer">
                  <ChevronRight className={`w-4 h-4 text-[#00A3E8] ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>Yale & ABEZ Digital Locks</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('smart-home')} className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer">
                  <ChevronRight className={`w-4 h-4 text-[#00A3E8] ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>HVAC & AC Controllers</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('industrial')} className="hover:text-[#00A3E8] transition-colors flex items-center gap-2 cursor-pointer">
                  <ChevronRight className={`w-4 h-4 text-[#00A3E8] ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>Industrial Control Rooms</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-white font-black text-base uppercase tracking-widest mb-6">
              {lang === 'ar' ? 'اتصل بنا' : 'CONTACT US'}
            </h4>
            <div className="space-y-5 text-sm font-medium">
              
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-[#00A3E8] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">{lang === 'ar' ? 'اتصال / واتساب' : 'Phone Call / WhatsApp'}</span>
                  <a href="tel:+966500761791" className="font-extrabold text-white hover:text-[#00A3E8] transition-colors dir-ltr block text-base mt-0.5">
                    +966 500761791
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-[#00A3E8] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">{lang === 'ar' ? 'الدعم البريدي' : 'Email Support'}</span>
                  <a href="mailto:info@treco.in" className="font-extrabold text-white hover:text-[#00A3E8] transition-colors block text-base mt-0.5">
                    info@treco.in
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-[#00A3E8] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">{lang === 'ar' ? 'المقر الرئيسي' : 'Corporate Office'}</span>
                  <span className="font-bold text-slate-200 block text-xs sm:text-sm leading-relaxed mt-0.5">
                    Majid Noor near Baladia Camp, Wadi Mraykh, Jeddah, KSA 23254
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#030C1C] border-t border-slate-800/80 py-6 text-xs sm:text-sm text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <div className="font-semibold">
            © 2026 Treco Arabia. All rights reserved.
          </div>

          {/* Links & Admin Button */}
          <div className="flex flex-wrap items-center gap-4 font-bold text-slate-200">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            
            {/* Admin Login Badge */}
            {/* <a href="/login" className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-white font-extrabold flex items-center gap-1.5 border border-slate-700">
              <Lock className="w-3.5 h-3.5 text-[#00A3E8]" />
              <span>Admin</span>
            </a> */}
          </div>

          {/* Designer Credit */}
          <div className="flex items-center gap-1.5 text-slate-400 font-semibold">
            <span>Designed by</span>
            <a href="https://codecrafter.co.in" target="_blank" rel="noreferrer" className="font-extrabold text-[#00A3E8] hover:underline">
              Code Crafter
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
