import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Home, Wrench } from 'lucide-react';

function Hero({ t, lang, videoUrl }) {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
      
      {/* Background Video Layer (Supports future video URL insertion) */}
      {videoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        /* Soft Ambient Backdrop Glow (Fallback before user adds video) */
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A3E8]/15 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        </div>
      )}

      {/* Dark Overlay for Video / Contrast */}
      <div className="absolute inset-0 bg-slate-950/60 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* KSA Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-md text-xs sm:text-sm font-bold text-slate-200 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#00A3E8]" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Headline - Exact Authentic Treco Arabia Messaging */}
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            {t.hero.titleStart}
            <span className="text-[#00A3E8] inline-block px-2">{t.hero.titleHighlight}</span>
            {t.hero.titleEnd}
          </h1>

          {/* Subtitle - Short & Crisp */}
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#smart-home"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00A3E8] hover:bg-cyan-500 text-white font-extrabold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Home className="w-4 h-4" />
              <span>{t.hero.btnPrimary}</span>
            </a>

            <a
              href="#industrial"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-md border border-slate-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2.5"
            >
              <Wrench className="w-4 h-4 text-[#00A3E8]" />
              <span>{t.hero.btnSecondary}</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 text-left">
            
            <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#00A3E8]/10 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white">500+</h4>
                <p className="text-xs font-semibold text-slate-400">{t.hero.statProjects}</p>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white">460+</h4>
                <p className="text-xs font-semibold text-slate-400">{t.hero.statClients}</p>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white">24/7</h4>
                <p className="text-xs font-semibold text-slate-400">{t.hero.statSupport}</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
