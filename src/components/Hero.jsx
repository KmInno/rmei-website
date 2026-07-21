import { useState, useEffect } from "react";
import { content } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

const images = [
  "/images/hero-image.webp",
  "/images/hero-2.webp",
  "/images/ken-about.webp",
];

export default function Hero() {
  const heroRef = useScrollReveal("animate-fadeIn");
  const subtitleRef = useScrollReveal("animate-fadeIn200");
  const buttonRef = useScrollReveal("animate-fadeIn400");
  const [current, setCurrent] = useState(0);

  // Pause auto-slide when a user is hovering/interacting
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-5 text-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${img})`,
            opacity: i === current ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Content Container */}
      <div className="relative z-10 pt-32 max-w-4xl mx-auto flex flex-col items-center">
        <h1 
          ref={heroRef} 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md"
        >
          {content.hero.title}
        </h1>

        <p 
          ref={subtitleRef} 
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl drop-shadow"
        >
          {content.hero.subtitle}
        </p>

        {/* Call to Action Buttons */}
        <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <a
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-3.5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center"
          >
            Donate Now
          </a>
          
          {/* Secondary CTA */}
          <a
            href="/gallery"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-3.5 rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
          >
            See Our Impact
          </a>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current 
                  ? "bg-yellow-500 w-8" 
                  : "bg-white/50 w-2.5 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}