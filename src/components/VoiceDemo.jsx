import React, { useState } from 'react';
import { Mic, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

function VoiceDemo({ t }) {
  const [activePreset, setActivePreset] = useState(0);

  return (
    <section className="py-24 relative bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white p-8 sm:p-14 rounded-3xl border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Description */}
          <div>
            <span className="text-xs font-bold tracking-widest text-[#00A3E8] uppercase mb-2 block">
              {t.voice.tag}
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              {t.voice.title}
            </h2>

            <p className="text-slate-600 text-base mb-8 font-normal">
              {t.voice.subtitle}
            </p>

            {/* Voice Presets */}
            <div className="space-y-3 mb-8">
              {t.voice.presets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePreset(idx)}
                  className={`w-full text-left p-4 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center justify-between border ${
                    activePreset === idx
                      ? 'bg-[#00A3E8] text-white border-[#00A3E8] shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
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

            <p className="text-xs text-slate-500 font-bold mb-3 uppercase tracking-wider">
              {t.voice.ecosystems}
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-800 font-bold">
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200">Apple HomeKit</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200">Amazon Alexa</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200">Google Home</span>
            </div>
          </div>

          {/* Right Response Simulation */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/30 flex items-center justify-center text-[#00A3E8]">
                  <Volume2 className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Voice Command Response</h4>
                  <p className="text-xs text-emerald-400 font-mono">Treco Hub Live</p>
                </div>
              </div>
              <span className="text-xs bg-[#00A3E8] text-white font-extrabold px-3 py-1 rounded-full">
                ACTIVE
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Command Input</span>
                <p className="text-base font-extrabold text-[#00A3E8]">
                  "{t.voice.presets[activePreset].label}"
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-xs text-emerald-400 uppercase tracking-wider block mb-1">Actions Executed</span>
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
