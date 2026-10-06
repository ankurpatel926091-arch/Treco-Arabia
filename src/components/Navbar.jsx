import React, { useState, useEffect } from 'react';
import { Phone, Globe, Menu, X, Cpu, ChevronRight } from 'lucide-react';

function Navbar({ lang, setLang, t, currentPage, setCurrentPage }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isContactPage = currentPage === 'contact';

  // Dynamic Scroll Spy on Home Page
  useEffect(() => {
    if (isContactPage) return;

    const handleScroll = () => {
      const sections = ['industrial', 'offerings', 'smart-home', 'home'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isContactPage]);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
    document.documentElement.setAttribute('dir', nextLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', nextLang);
  };

  const handleNavClick = (sectionId) => {
    setMobileMenu(false);
    if (isContactPage) {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setActiveSection(sectionId);
    }
  };

  const goToContact = () => {
    setMobileMenu(false);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItemClass = (key) => {
    const isActive = isContactPage ? key === 'contact' : activeSection === key;
    return `transition-all py-1 font-bold text-sm border-b-2 cursor-pointer ${
      isActive
        ? 'text-[#00A3E8] border-[#00A3E8]'
        : 'text-slate-700 border-transparent hover:text-[#00A3E8]'
    }`;
  };

  const mobileItemClass = (key) => {
    const isActive = isContactPage ? key === 'contact' : activeSection === key;
    return `transition-colors py-1 cursor-pointer text-left ${
      isActive ? 'text-[#00A3E8] font-black' : 'text-slate-800 hover:text-[#00A3E8]'
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Navigates to Home */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-[#00A3E8]/10 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8] group-hover:bg-[#00A3E8] group-hover:text-white transition-all">
            <Cpu className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-slate-900 flex items-center gap-1">
              TRECO <span className="text-[#00A3E8]">ARABIA</span>
            </span>
            <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
              {lang === 'ar' ? 'جدة - المملكة العربية السعودية' : 'Jeddah - Saudi Arabia'}
            </span>
          </div>
        </button>

        {/* Desktop Nav Links with Dynamic Active Indicator */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavClick('home')}
            className={navItemClass('home')}
          >
            {t.nav.home}
          </button>

          <button 
            onClick={() => handleNavClick('smart-home')}
            className={navItemClass('smart-home')}
          >
            {t.nav.smartHome}
          </button>

          <button 
            onClick={() => handleNavClick('offerings')}
            className={navItemClass('offerings')}
          >
            {lang === 'ar' ? 'خدماتنا' : 'What We Offer'}
          </button>

          <button 
            onClick={() => handleNavClick('industrial')}
            className={navItemClass('industrial')}
          >
            {t.nav.industrial}
          </button>

          <button 
            onClick={goToContact}
            className={navItemClass('contact')}
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Actions (Language Toggle, Phone & Contact Us Button) */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:border-[#00A3E8] text-xs font-bold text-slate-700 transition-all cursor-pointer"
          >
            <Globe className="w-4 h-4 text-[#00A3E8]" />
            <span>{t.nav.langName}</span>
          </button>

          {/* Phone Contact */}
          <a 
            href="tel:+966500761791"
            className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-[#00A3E8] transition-colors dir-ltr"
          >
            <div className="w-8 h-8 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8]">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>+966 500761791</span>
          </a>

          {/* Contact Us CTA Button */}
          <button
            onClick={goToContact}
            className={`px-5 py-2.5 rounded-xl font-extrabold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              isContactPage 
                ? 'bg-slate-900 text-white' 
                : 'bg-[#00A3E8] hover:bg-cyan-500 text-white'
            }`}
          >
            <span>{t.nav.contact}</span>
            <ChevronRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="px-2.5 py-1 rounded-lg border border-slate-300 bg-slate-50 text-xs font-bold text-[#00A3E8]"
          >
            {t.nav.langName}
          </button>

          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 text-slate-700 hover:text-slate-900"
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 text-sm font-bold text-slate-800">
          <button onClick={() => handleNavClick('home')} className={mobileItemClass('home')}>
            {t.nav.home}
          </button>
          <button onClick={() => handleNavClick('smart-home')} className={mobileItemClass('smart-home')}>
            {t.nav.smartHome}
          </button>
          <button onClick={() => handleNavClick('offerings')} className={mobileItemClass('offerings')}>
            {lang === 'ar' ? 'خدماتنا' : 'What We Offer'}
          </button>
          <button onClick={() => handleNavClick('industrial')} className={mobileItemClass('industrial')}>
            {t.nav.industrial}
          </button>
          <button onClick={goToContact} className={mobileItemClass('contact')}>
            {t.nav.contact}
          </button>
          
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a href="tel:+966500761791" className="flex items-center gap-2 text-[#00A3E8]">
              <Phone className="w-4 h-4" />
              <span>+966 500761791</span>
            </a>
            <button
              onClick={goToContact}
              className="w-full py-3 rounded-xl bg-[#00A3E8] text-white font-extrabold text-center block"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
