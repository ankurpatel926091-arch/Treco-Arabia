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
      : 'Let’s discuss industrial automation, advanced control systems, and tailored solutions to improve your plant performance.',
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
      className="relative isolate overflow-hidden border-y border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white"
    >
      {/* Ambient background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,163,232,0.15),transparent_65%)]" />
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#00A3E8]/10 blur-[100px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="relative mx-auto max-w-4xl text-center">

          {/* Eyebrow */}
          <div className="mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#00A3E8]/30 bg-[#00A3E8]/10 px-4 py-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00A3E8]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00A3E8] sm:text-xs sm:tracking-[0.22em]">
              {content.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-4xl text-3xl font-semibold leading-[1.2] tracking-tight sm:text-5xl sm:leading-[1.15] lg:text-6xl text-white">
            {content.title}
          </h2>

          <div className="mx-auto mb-6 mt-6 h-[2px] w-16 rounded-full bg-[#00A3E8]" />

          {/* Description */}
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            {content.desc}
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              to="/contact"
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-[#00A3E8] px-7 py-4 text-sm font-black text-slate-950 shadow-[0_4px_25px_rgba(0,163,232,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E8] sm:min-w-[230px]"
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
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-[#00A3E8] hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E8] sm:min-w-[210px]"
            >
              <Phone className="h-4 w-4 shrink-0 text-[#00A3E8]" />
              <span>{content.secondaryBtn}</span>
            </a>
          </div>

          {/* Supporting details */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 border-t border-slate-800 pt-6 sm:grid-cols-2 sm:gap-8">
            <div className="flex items-center justify-center gap-3 text-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#00A3E8]/20 bg-[#00A3E8]/10">
                <MapPin className="h-4 w-4 text-[#00A3E8]" />
              </span>
              <div className="min-w-0">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {isArabic ? 'موقعنا' : 'OUR LOCATION'}
                </p>
                <p className="text-xs leading-5 text-slate-200 sm:text-sm">
                  {isArabic
                    ? 'وادي مريّخ، جدة، المملكة العربية السعودية'
                    : 'Wadi Mraykh, Jeddah, Saudi Arabia'}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#00A3E8]/20 bg-[#00A3E8]/10">
                <ShieldCheck className="h-4 w-4 text-[#00A3E8]" />
              </span>
              <div className="min-w-0">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {isArabic ? 'دعم المشاريع' : 'INDUSTRIAL PROJECTS'}
                </p>
                <p className="text-xs leading-5 text-slate-200 sm:text-sm">
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