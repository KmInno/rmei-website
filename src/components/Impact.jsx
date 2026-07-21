import { content } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function Impact() {
  const headerRef = useScrollReveal("animate-slideUp");
  const statsRef = useScrollReveal("animate-slideUp200");

  return (
    <section className="relative bg-blue-900 py-24 px-5 overflow-hidden">
      
      {/* Subtle background radial gradient to give the blue some depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-4">
            {/* Replaced PNG with a vibrant Heroicon */}
            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
              <RocketLaunchIcon className="w-8 h-8 text-yellow-400" strokeWidth={2} />
            </div>
            Our Expected Impact
          </h2>
        </div>

        {/* Stats Grid using .map() instead of hardcoding indexes */}
        <div 
          ref={statsRef} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center divide-y md:divide-y-0 md:divide-x divide-blue-700/50"
        >
          {content.impact.map((item, index) => (
            <div 
              key={index} 
              className="pt-8 md:pt-0 flex flex-col items-center justify-center px-4"
            >
              <h3 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-3 drop-shadow-md">
                {item.number}
              </h3>
              <p className="text-lg md:text-xl text-blue-100 font-medium tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}