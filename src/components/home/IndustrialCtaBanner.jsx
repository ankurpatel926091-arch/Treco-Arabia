import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

function IndustrialCtaBanner({ t, lang }) {
  const isArabic = lang === 'ar';

  const content = t?.industrialHome?.ctaBanner || {
    eyebrow: isArabic
      ? 'التحول الصناعي السعودي'
      : 'KSA INDUSTRIAL TRANSFORMATION',
    title: isArabic
      ? 'جاهزون لتطوير عملياتك الصناعية؟'
      : 'Ready to Elevate Your Industrial Operations?',
    desc: isArabic
      ? 'تواصل مع فريقنا لمناقشة حلول الأتمتة الصناعية وتحديث أنظمة التحكم وتحسين أداء منشأتك.'
      : "Let's discuss industrial automation, advanced control systems, and tailored solutions to improve your plant performance.",
    primaryBtn: isArabic
      ? 'اطلب استشارة فنية'
      : 'Request a Technical Consultation',
    secondaryBtn: isArabic
      ? 'اتصل بفريقنا'
      : 'Talk to Our Team',
  };

  return (
    <section
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative isolate overflow-hidden border-t border-slate-200 text-slate-900"
    >
      {/* ====== LAYER 1: Rich Multi-Stop Premium Light Gradient ====== */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 15% -10%, rgba(0, 163, 232, 0.16), transparent 55%),
            radial-gradient(ellipse 70% 70% at 85% 110%, rgba(99, 102, 241, 0.12), transparent 60%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(224, 242, 254, 0.7), transparent 70%),
            radial-gradient(ellipse 50% 40% at 90% 10%, rgba(6, 182, 212, 0.10), transparent 60%),
            linear-gradient(155deg, 
              #FFFFFF 0%, 
              #FAFCFF 15%, 
              #F0F7FF 30%, 
              #E8F4FE 50%, 
              #E0F2FE 65%, 
              #EBF8FF 80%, 
              #F8FCFF 92%, 
              #FFFFFF 100%
            )
          `
        }}
      />

      {/* ====== LAYER 2: Ambient Cyan Blob — Top Left ====== */}
      <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#00A3E8]/15 to-transparent blur-[150px] pointer-events-none" />

      {/* ====== LAYER 3: Ambient Indigo Blob — Bottom Right ====== */}
      <div className="absolute -right-32 -bottom-32 h-[550px] w-[550px] rounded-full bg-gradient-to-tl from-indigo-400/12 to-transparent blur-[160px] pointer-events-none" />

      {/* ====== LAYER 4: Center Top Glow ====== */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 163, 232, 0.10), transparent 65%)'
        }}
      />

      {/* ====== LAYER 5: Dot Grid ====== */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(#00A3E8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 35%, transparent 100%)'
        }}
      />

      {/* ====== LAYER 6: Diagonal Streaks ====== */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 120px,
            #00A3E8 120px,
            #00A3E8 121px
          )`
        }}
      />

      {/* ====== LAYER 7: Top Glow Border ====== */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3E8]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="relative mx-auto max-w-4xl text-center">

          {/* Eyebrow Badge */}
          <div className="mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#00A3E8]/35 bg-gradient-to-r from-[#00A3E8]/15 via-[#00A3E8]/8 to-transparent px-4 py-2 shadow-[0_4px_20px_rgba(0,163,232,0.15)] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00A3E8] shadow-[0_0_10px_rgba(0,163,232,0.8)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00A3E8] sm:text-xs sm:tracking-[0.22em]">
              {content.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-4xl text-3xl font-semibold leading-[1.2] tracking-tight sm:text-5xl sm:leading-[1.15] lg:text-6xl">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              {content.title}
            </span>
          </h2>

          {/* Divider */}
          <div className="mx-auto mb-6 mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-transparent via-[#00A3E8] to-transparent shadow-[0_0_15px_rgba(0,163,232,0.5)]" />

          {/* Description */}
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {content.desc}
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              to="/contact"
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00A3E8] to-[#0086C4] px-7 py-4 text-sm font-black text-white shadow-[0_8px_25px_rgba(0,163,232,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-400 hover:to-[#00A3E8] hover:shadow-[0_12px_35px_rgba(0,163,232,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E8] sm:min-w-[230px]"
            >
              <span>{content.primaryBtn}</span>
              {isArabic ? (
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-0.5" />
              ) : (
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </Link>

            <a
              href="tel:+966500761791"
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white/80 backdrop-blur-sm px-7 py-4 text-sm font-bold text-slate-900 transition-all duration-300 hover:border-[#00A3E8] hover:bg-white hover:text-[#00A3E8] hover:shadow-[0_8px_25px_rgba(0,163,232,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E8] sm:min-w-[210px]"
            >
              <Phone className="h-4 w-4 shrink-0 text-[#00A3E8]" />
              <span>{content.secondaryBtn}</span>
            </a>
          </div>

          {/* Supporting details */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-2 sm:gap-8">
            <div className="flex items-center justify-center gap-3 text-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#00A3E8]/25 bg-[#00A3E8]/10 shadow-[0_2px_10px_rgba(0,163,232,0.1)]">
                <MapPin className="h-4 w-4 text-[#00A3E8]" />
              </span>
              <div className="min-w-0">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {isArabic ? 'موقعنا' : 'OUR LOCATION'}
                </p>
                <p className="text-xs leading-5 text-slate-700 sm:text-sm">
                  {isArabic
                    ? 'وادي مريّخ، جدة، المملكة العربية السعودية'
                    : 'Wadi Mraykh, Jeddah, Saudi Arabia'}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#00A3E8]/25 bg-[#00A3E8]/10 shadow-[0_2px_10px_rgba(0,163,232,0.1)]">
                <ShieldCheck className="h-4 w-4 text-[#00A3E8]" />
              </span>
              <div className="min-w-0">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {isArabic ? 'دعم المشاريع' : 'INDUSTRIAL PROJECTS'}
                </p>
                <p className="text-xs leading-5 text-slate-700 sm:text-sm">
                  {isArabic
                    ? 'تواصل معنا لمناقشة متطلبات مشروعك'
                    : 'Discuss your project requirements with our team'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default IndustrialCtaBanner;