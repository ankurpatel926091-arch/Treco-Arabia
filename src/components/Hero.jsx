import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, CheckCircle2, Home, Wrench } from 'lucide-react';
import defaultHeroVideo from '../assets/vdo/heroBackgroundvdo.mp4';
import heroPoster from '../assets/header_background_img/hero_clean_poster.jpg';

function Hero({ t, lang, videoUrl }) {
  const activeVideo = videoUrl || defaultHeroVideo;

  return (
    <section 
      id="home" 
      className="relative min-h-screen lg:h-screen flex flex-col justify-center items-center pt-20 pb-8 sm:pt-24 sm:pb-12 overflow-hidden bg-[#080D1A] text-white"
    >
      
      {/* ====== LAYER 1: Background Video (FULL WIDTH & HEIGHT) ====== */}
      {/* object-cover screen ko poori tarah fill karega, bina kisi khali jagah ke */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-100"
        style={{
          transform: 'translateZ(0)', // Hardware acceleration for smooth play
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <source src={activeVideo} type="video/mp4" />
      </video>

      {/* ====== LAYER 2: Cyan-Tinted Overlay ====== */}
      {/* Ye overlay text ko padhne me aasan banata hai aur video ko thoda dark karta hai */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,163,232,0.10), transparent 60%),
            radial-gradient(ellipse 50% 40% at 15% 25%, rgba(0,163,232,0.05), transparent 60%),
            linear-gradient(to bottom, 
              rgba(8, 13, 26, 0.45) 0%,
              rgba(8, 13, 26, 0.25) 30%,
              rgba(10, 22, 45, 0.35) 60%,
              rgba(8, 13, 26, 0.65) 100%
            )
          `
        }}
      />

      {/* ====== LAYER 3: Dot Grid ====== */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 90%)'
        }}
      />

      {/* ====== LAYER 4: Bottom Fade ====== */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 pointer-events-none z-[5]"
        style={{
          background: `linear-gradient(to bottom, 
            transparent 0%, 
            rgba(8,13,26,0.04) 40%,
            rgba(8,13,26,0.18) 70%,
            rgba(8,13,26,0.38) 90%,
            rgba(8,13,26,0.52) 100%
          )`
        }}
      />

      {/* ====== CONTENT ====== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* KSA Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black/55 border border-white/25 backdrop-blur-md text-xs sm:text-sm font-semibold text-white mb-5 sm:mb-7 shadow-lg tracking-wide">
            <Sparkles className="w-4 h-4 text-[#00A3E8] flex-shrink-0" />
            <span>{t.hero.badge.replace(/^🇸🇦\s*/, '')}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.14] mb-3 sm:mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            <span className="block text-white">
              {t.hero.titleLine1 || t.hero.titleStart || "Engineering the Future with"}
            </span>
            <span className="block text-[#00A3E8] my-1 sm:my-2 tracking-tight drop-shadow-[0_0_35px_rgba(0,163,232,0.6)]">
              {t.hero.titleHighlight || "Treco Arabia"}
            </span>
            <span className="block text-white text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-200">
              {t.hero.titleLine2 || t.hero.titleEnd || "in Saudi Arabia"}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-100 font-medium leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] px-2">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-12 max-w-md mx-auto">
            <Link
              to="/smart-home"
              className="flex-1 sm:flex-initial px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-[#00A3E8] hover:bg-cyan-400 text-black font-extrabold text-xs sm:text-sm shadow-[0_4px_20px_rgba(0,163,232,0.5)] transition-all cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>{t.hero.btnPrimary}</span>
            </Link>

            <Link
              to="/industrial"
              className="flex-1 sm:flex-initial px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A3E8] flex-shrink-0" />
              <span>{t.hero.btnSecondary}</span>
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-white/20 text-left">
            
            <div className="bg-black/50 backdrop-blur-md p-2.5 sm:p-4 rounded-xl border border-white/15 flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left shadow-lg">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#00A3E8]/20 border border-[#00A3E8]/40 flex items-center justify-center text-[#00A3E8] flex-shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-xl font-black text-white">500+</h4>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-300 leading-tight">{t.hero.statProjects}</p>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-md p-2.5 sm:p-4 rounded-xl border border-white/15 flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left shadow-lg">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-xl font-black text-white">460+</h4>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-300 leading-tight">{t.hero.statClients}</p>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-md p-2.5 sm:p-4 rounded-xl border border-white/15 flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left shadow-lg">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 flex-shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-xl font-black text-white">24/7</h4>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-300 leading-tight">{t.hero.statSupport}</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;