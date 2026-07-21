import { useScrollReveal } from "../hooks/useScrollReveal";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function CTA() {
  const fadein = useScrollReveal("animate-slideUp");

  return (
    <section
      className="relative text-white py-24 px-5 flex justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/together.jpg')" }}
    >
      {/* 
        Upgraded Overlay: A gradient looks much richer than a flat black box. 
        It blends your dark blue theme smoothly into the background image.
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-black/70"></div>

      <div ref={fadein} className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center">
        
        {/* Heart Icon: Anchors the top of the CTA and sets an emotional tone */}
        <HeartIcon className="w-12 h-12 text-yellow-500 mb-6 drop-shadow-md" />

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg text-white">
          Be Part of the Impact
        </h2>

        <p className="mb-10 text-lg md:text-xl text-blue-50 leading-relaxed drop-shadow max-w-2xl">
          Join us in empowering the next generation of entrepreneurs and creating
          lasting economic change in Uganda.
        </p>

        {/* Styled Quote Box */}
        <blockquote className="mb-12 border-l-4 border-yellow-500 bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-r-2xl shadow-xl text-left max-w-2xl w-full">
          <p className="text-lg md:text-xl font-medium italic mb-3 text-white leading-relaxed">
            "By small and simple things are great things brought to pass."
          </p>
          <footer className="text-yellow-400 font-bold tracking-wider text-sm uppercase">
            — Alma 37:6
          </footer>
        </blockquote>

        {/* Semantic Link instead of a button click handler */}
        <a 
          href="/contact"
          className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-yellow-500/20"
        >
          Support This Initiative
        </a>
        
      </div>
    </section>
  );
}