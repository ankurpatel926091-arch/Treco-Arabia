import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import IndustrialSolutionsGrid from '../components/home/IndustrialSolutionsGrid';
import IndustrialShowcase from '../components/home/IndustrialShowcase';
import EngineeringStandards from '../components/home/EngineeringStandards';
import SmartHomeSecondary from '../components/home/SmartHomeSecondary';
import FaqAndCertificate from '../components/home/FaqAndCertificate';
import IndustrialCtaBanner from '../components/home/IndustrialCtaBanner';

function HomePage({ t, lang, onOpenQuote }) {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* 1. Cinematic Industrial Hero Section */}
      <Hero t={t} lang={lang} />

      {/* 2. Visual & Minimalistic About Section */}
      <AboutSection lang={lang} onOpenQuote={onOpenQuote} />

      {/* 3. Visual Industrial Solutions Section (Asymmetric Editorial Grid) */}
      <IndustrialSolutionsGrid t={t} lang={lang} />

      {/* 3. Industrial Showcase & Equipment Gallery */}
      <IndustrialShowcase t={t} lang={lang} />

      {/* 4. Engineering Standards, SASO/IEC Compliance & Trust Section */}
      <EngineeringStandards t={t} lang={lang} />

      {/* 5. Smart Home Division (Secondary, restrained luxury showcase) */}
      <SmartHomeSecondary t={t} lang={lang} />

      {/* 6. Frequently Asked Questions & ISO 9001:2015 Certification */}
      <FaqAndCertificate t={t} lang={lang} />

      {/* 7. High-Impact Industrial Call-To-Action Banner */}
      <IndustrialCtaBanner t={t} lang={lang} />
    </div>
  );
}

export default HomePage;
