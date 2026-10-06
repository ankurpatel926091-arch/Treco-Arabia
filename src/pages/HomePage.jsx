import React from 'react';
import Hero from '../components/Hero';
import RoomVisualizer from '../components/RoomVisualizer';
import OfferingsSection from '../components/OfferingsSection';
import VoiceDemo from '../components/VoiceDemo';
import IndustrialSection from '../components/IndustrialSection';
import StatsSection from '../components/StatsSection';

function HomePage({ t, lang, onOpenQuote }) {
  return (
    <div>
      <Hero t={t} lang={lang} />
      <RoomVisualizer t={t} />
      <OfferingsSection lang={lang} />
      <VoiceDemo t={t} />
      <IndustrialSection t={t} lang={lang} onOpenQuote={onOpenQuote} />
      <StatsSection t={t} />
    </div>
  );
}

export default HomePage;
