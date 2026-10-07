import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import RoomVisualizer from '../components/RoomVisualizer';
import OfferingsSection from '../components/OfferingsSection';
import VoiceDemo from '../components/VoiceDemo';
import IndustrialSection from '../components/IndustrialSection';
function HomePage({ t, lang, onOpenQuote }) {
  return (
    <div>
      <Hero t={t} lang={lang} />
      <AboutSection lang={lang} onOpenQuote={onOpenQuote} />
      <RoomVisualizer t={t} />
      <IndustrialSection t={t} lang={lang} onOpenQuote={onOpenQuote} />
      <OfferingsSection lang={lang} onOpenQuote={onOpenQuote} />
      <VoiceDemo t={t} />
      
    </div>
  );
}

export default HomePage;
