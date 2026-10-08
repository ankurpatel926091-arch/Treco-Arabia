import React, { useState } from 'react';
import { Mic, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

function VoiceDemo({ t }) {
  const [activePreset, setActivePreset] = useState(0);

  return (
    <section className="py-12 sm:py-16 relative bg-gradient-to-b from-[#EBF5FC]/70 via-[#F0F7FF] to-white text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Decorative Radiant Cyan & Sky Ambient Glows */}
      <div className="absolute top-10 right-10 w-[600px] h-[350px] bg-[#00A3E8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-sky-400/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle Micro-Dot Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Solution Card with Frosted Glass & Cyan Glow */}
        <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(0,163,232,0.15),0_10px_30px_-5px_rgba(15,23,42,0.06)] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
          
          {/* Subtle Top Cyan Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent pointer-events-none" />

          {/* Left Description */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00A3E8]/30 text-[#00A3E8] font-extrabold text-xs uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.voice.tag}</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              {t.voice.title}
            </h2>

            <p className="text-slate-600 text-base mb-8 font-normal leading-relaxed">
              {t.voice.subtitle}
            </p>

            {/* Voice Presets */}
            <div className="space-y-3 mb-8">
              {t.voice.presets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePreset(idx)}
                  className={`w-full text-left p-4 rounded-2xl font-bold text-sm transition-all cursor-pointer flex items-center justify-between border ${
                    activePreset === idx
                      ? 'bg-[#00A3E8] text-white border-[#00A3E8] shadow-[0_8px_25px_rgba(0,163,232,0.35)] scale-[1.02]'
                      : 'bg-slate-50/90 border-slate-200/90 text-slate-800 hover:bg-white hover:border-[#00A3E8]/40 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Mic className={`w-4 h-4 ${activePreset === idx ? 'text-white animate-pulse' : 'text-[#00A3E8]'}`} />
                    <span>"{preset.label}"</span>
                  </div>
                  {activePreset === idx && <Sparkles className="w-4 h-4 text-white" />}
                </button>
              ))}
            </div>

            <p className="text-xs text-slate-500 font-extrabold mb-3 uppercase tracking-wider">
              {t.voice.ecosystems}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-800 font-bold">
              <span className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-[#00A3E8] transition-colors">Apple HomeKit</span>
              <span className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-[#00A3E8] transition-colors">Amazon Alexa</span>
              <span className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-[#00A3E8] transition-colors">Google Assistant</span>
            </div>
          </div>

          {/* Right Response Simulation (Framed Tech Screen) */}
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 rounded-2xl border border-slate-800 shadow-2xl ring-4 ring-slate-100/90">
            
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00A3E8]/15 border border-[#00A3E8]/35 flex items-center justify-center text-[#00A3E8]">
                  <Volume2 className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Voice Command Response</h4>
                  <p className="text-xs text-emerald-400 font-mono">Treco Hub Live</p>
                </div>
              </div>
              <span className="text-xs bg-[#00A3E8] text-white font-extrabold px-3 py-1 rounded-full shadow-xs">
                ACTIVE
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 shadow-inner">
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider block mb-1">Command Input</span>
                <p className="text-base font-extrabold text-[#00A3E8]">
                  "{t.voice.presets[activePreset].label}"
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-[11px] text-emerald-400 uppercase font-bold tracking-wider block mb-1">Actions Executed</span>
                <p className="text-sm text-slate-200 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{t.voice.presets[activePreset].action}</span>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default VoiceDemo;
