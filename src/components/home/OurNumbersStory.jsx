import React from 'react';
import { motion } from 'framer-motion';
import globeMesh from '../../assets/syncrow/globe_mesh.webp';

function OurNumbersStory({ lang = 'en' }) {
  const isArabic = lang === 'ar';

  const rows = [
    [
      {
        num: '7,000+',
        label: isArabic ? 'أجهزة ذكية متصلة ونشطة' : 'Active Smart Devices',
      },
      {
        num: '300+',
        label: isArabic ? 'وحدات ومباني مؤتمتة' : 'Units Powered by Treco Arabia',
      },
      {
        num: '200+',
        label: isArabic ? 'مشاريع قيد التنفيذ بالمملكة' : 'Ongoing Projects',
      },
    ],
    [
      {
        num: '60+',
        label: isArabic ? 'نوع من أجهزة إنترنت الأشياء والتحكم' : 'Types of IoT & Industrial Devices',
      },
      {
        num: '50+',
        label: isArabic ? 'مهندسون وفنيون متخصصون' : 'Certified Team Members',
      },
      {
        num: '3',
        label: isArabic ? 'فروع: جدة، الرياض، الدمام' : 'Offices: Jeddah, Riyadh, Dammam',
      },
    ],
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F8FBFE] to-[#EFF6FC] text-slate-900 relative overflow-hidden border-b border-slate-200">
      
      {/* Background Ambience Layers */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00A3E8]/10 via-sky-400/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Subtle Dot Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ===================== TOP HEADER ===================== */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E8]/10 border border-[#00A3E8]/30 text-[#00A3E8] text-xs font-bold tracking-widest uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E8] animate-pulse" />
            <span>{isArabic ? 'إحصائيات وقدرات' : 'PROVEN TRACK RECORD'}</span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
          >
            {isArabic ? (
              <>أرقامنا تروي <span className="text-[#00A3E8]">قصة إنجازاتنا</span></>
            ) : (
              <>Our Numbers <span className="text-[#00A3E8]">Tell the Story</span></>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed"
          >
            {isArabic
              ? 'حلولنا تدير وتتحكم في آلاف المباني، المكاتب، والمصانع والفلل عبر منظومات ذكية متكاملة في المملكة العربية السعودية والخليج.'
              : 'Our solutions power buildings, offices, and homes through thousands of devices across the KSA and GCC.'}
          </motion.p>
        </div>

        {/* ===================== MAIN GRID: METRICS (LEFT) + 3D GLOBE (RIGHT) ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT 7 COLS: Metrics Grid with Horizontal Dividers */}
          <div className="lg:col-span-7">
            <div className="space-y-6 sm:space-y-8">
              
              {/* Row 1 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-slate-200">
                {rows[0].map((m, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#00A3E8] hover:shadow-md transition-all"
                  >
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00A3E8] tracking-tight leading-none mb-2 font-mono drop-shadow-xs">
                      {m.num}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium leading-snug">
                      {m.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                {rows[1].map((m, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#00A3E8] hover:shadow-md transition-all"
                  >
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00A3E8] tracking-tight leading-none mb-2 font-mono drop-shadow-xs">
                      {m.num}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium leading-snug">
                      {m.label}
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT 5 COLS: 3D Mesh Particle Globe inside Tech Cockpit Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Radial Aura */}
            <div className="absolute w-[350px] sm:w-[460px] h-[350px] sm:h-[460px] rounded-full bg-[#00A3E8]/10 blur-[90px] pointer-events-none" />

            {/* Globe Card Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: isArabic ? -40 : 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] sm:max-w-[460px] rounded-3xl bg-gradient-to-br from-slate-950 via-[#0B1528] to-slate-900 p-6 sm:p-8 border border-slate-800 shadow-[0_20px_50px_-10px_rgba(0,163,232,0.25)] overflow-hidden"
            >
              {/* Subtle tech grid background in card */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              <img 
                src={globeMesh} 
                alt="Treco Arabia Connected Globe Telemetry"
                className="w-full h-auto object-contain filter drop-shadow-[0_0_35px_rgba(56,189,248,0.35)] select-none pointer-events-none relative z-10"
              />

              {/* Pulsing Saudi Telemetry Location Pings */}
              <div className="absolute top-[38%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none z-20">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-sky-400 shadow-[0_0_12px_#38BDF8]" />
                </span>
                <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[9px] font-mono font-bold text-white shadow-lg">
                  KSA Hub Active
                </span>
              </div>

              {/* Orbital Glow Ring Indicator */}
              <div className="absolute inset-0 rounded-full border border-sky-400/20 animate-pulse pointer-events-none" />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OurNumbersStory;
