import React from 'react';
import { 
  Lightbulb, Wind, Fan, CloudRain, Thermometer, Tv, 
  Blinds, Video, Volume2, Activity, Warehouse, DoorOpen, Lock, Bell 
} from 'lucide-react';

function OfferingsSection({ lang }) {
  const items = [
    { label: "Lights", icon: Lightbulb },
    { label: "A/C", icon: Wind },
    { label: "Fan", icon: Fan },
    { label: "Sprinkler", icon: CloudRain },
    { label: "HVAC", icon: Thermometer },
    { label: "TV", icon: Tv },
    { label: "Curtain", icon: Blinds },
    { label: "CCTV", icon: Video },
    { label: "Speakers", icon: Volume2 },
    { label: "Sensors", icon: Activity },
    { label: "Garage doors", icon: Warehouse },
    { label: "Gates", icon: DoorOpen },
    { label: "Locks", icon: Lock },
    { label: "Video door bell", icon: Bell },
  ];

  return (
    <section id="offerings" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-1">
            <span className="text-xs font-bold tracking-widest text-[#00A3E8] uppercase mb-2 block">
              {lang === 'ar' ? 'حلولنا الشاملة' : 'WHAT WE OFFER'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              {lang === 'ar' ? 'تقنيات لأسلوب حياة ذكي ومريح' : 'Connecting Every Aspect of Your Living Space'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {lang === 'ar' 
                ? 'نحن متخصصون في تطوير حلول الأتمتة للمنازل والمباني عبر تقنيات سحابية تجعل كل جزء في المساحة متصلاً، بديهياً، وآمناً.' 
                : 'We specialize in home and building automation systems through smart technology solutions that make your space connected, intuitive, and completely safe.'}
            </p>
          </div>

          {/* Right Icon Grid Boxes */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {items.map(({ label, icon: Icon }, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 hover:bg-[#00A3E8] hover:border-[#00A3E8] hover:text-white transition-all duration-300 p-4 rounded-xl text-center flex flex-col items-center justify-center gap-2 cursor-pointer group shadow-sm"
              >
                <Icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                <span className="text-xs font-bold text-slate-800 group-hover:text-white transition-colors">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default OfferingsSection;
