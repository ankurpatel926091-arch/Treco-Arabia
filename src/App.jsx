import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuoteModal from './components/QuoteModal';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  const [lang, setLang] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const t = translations[lang];

  // Sync with browser back/forward or hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact-page') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    if (window.location.hash === '#contact-page') {
      setCurrentPage('contact');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToContact = () => {
    window.location.hash = 'contact-page';
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00A3E8] selection:text-black flex flex-col justify-between">
      
      {/* Navigation Header */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        currentPage={currentPage}
        setCurrentPage={(page) => page === 'contact' ? navigateToContact() : navigateToHome()}
      />

      {/* Page View Rendering (Zero router overhead) */}
      <main className="flex-grow">
        {currentPage === 'contact' ? (
          <ContactPage 
            t={t} 
            lang={lang} 
            onBackHome={navigateToHome}
          />
        ) : (
          <HomePage 
            t={t} 
            lang={lang} 
            onOpenQuote={() => setIsQuoteOpen(true)} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        t={t} 
        lang={lang} 
        onNavigateHome={navigateToHome}
        onNavigateContact={navigateToContact}
      />

      {/* Floating KSA WhatsApp & Action Buttons */}
      <FloatingWhatsApp lang={lang} />

      {/* Quote Request Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        t={t} 
      />

    </div>
  );
}

export default App;
