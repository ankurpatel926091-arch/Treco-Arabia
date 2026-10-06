import React, { useState } from 'react';
import { Lightbulb, Blinds, Lock, Thermometer, Volume2, Power, CheckCircle, Zap } from 'lucide-react';

function RoomVisualizer({ t }) {
  const [activeTab, setActiveTab] = useState('lighting');
  const [isOn, setIsOn] = useState(true);

  const modules = [
    { key: 'lighting', icon: Lightbulb },
    { key: 'curtains', icon: Blinds },
    { key: 'locks', icon: Lock },
    { key: 'climate', icon: Thermometer },
    { key: 'audio', icon: Volume2 },
  ];

  const currentModule = t.visualizer.modules[activeTab];

  return (
    <section id="smart-home" className="py-24 relative bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E8]/10 text-[#00A3E8] font-bold text-xs uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.visualizer.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            {t.visualizer.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            {t.visualizer.subtitle}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {modules.map(({ key, icon: Icon }) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-lg scale-105 border-2 border-[#00A3E8]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#00A3E8]' : 'text-slate-500'}`} />
                <span>{t.visualizer.modules[key].title}</span>
              </button>
            );
          })}
        </div>

        {/* Clean Light Solution Card */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Description Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-[#00A3E8] rounded-full"></div>
              <h3 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                {currentModule.title}
              </h3>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              {currentModule.desc}
            </p>

            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 mb-8 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#00A3E8] flex-shrink-0" />
              <span className="text-sm font-bold text-slate-800">{currentModule.stat}</span>
            </div>

            {/* Simulated Live Action Button */}
            <button
              onClick={() => setIsOn(!isOn)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer shadow-md ${
                isOn 
                  ? 'bg-[#00A3E8] text-black shadow-[0_0_20px_rgba(0,163,232,0.4)]'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              <Power className="w-4 h-4" />
              <span>{isOn ? 'Interactive Demo: ONLINE' : 'Interactive Demo: PAUSED'}</span>
            </button>
          </div>

          {/* Right Visualizer Room Simulator Box */}
          <div className="relative h-80 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 flex flex-col justify-between overflow-hidden shadow-2xl text-white">
            
            {/* Ambient Lighting Beam */}
            <div 
              className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                isOn ? 'opacity-100' : 'opacity-10'
              }`}
              style={{
                background: 'radial-gradient(circle at 50% 30%, rgba(0,163,232,0.35) 0%, transparent 70%)'
              }}
            />

            {/* Header info */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E8] animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Villa Suite - Jeddah
                </span>
              </div>
              <span className="text-xs font-bold text-[#00A3E8] bg-[#00A3E8]/10 px-3 py-1 rounded-full border border-[#00A3E8]/30">
                Treco IoT Live
              </span>
            </div>

            {/* Central Icon */}
            <div className="my-auto text-center relative z-10">
              <div className="inline-flex p-6 rounded-2xl bg-white/10 border border-white/20 mb-3 text-[#00A3E8] shadow-lg">
                {activeTab === 'lighting' && <Lightbulb className="w-12 h-12 animate-pulse" />}
                {activeTab === 'curtains' && <Blinds className="w-12 h-12" />}
                {activeTab === 'locks' && <Lock className="w-12 h-12 text-emerald-400" />}
                {activeTab === 'climate' && <Thermometer className="w-12 h-12" />}
                {activeTab === 'audio' && <Volume2 className="w-12 h-12 animate-bounce" />}
              </div>
              <h4 className="text-2xl font-bold">
                {isOn ? `${currentModule.title}` : 'System Standby'}
              </h4>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3 relative z-10 font-mono">
              <span>Saudi Arabia Wireless Mesh</span>
              <span>Latency &lt; 10ms</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default RoomVisualizer;
