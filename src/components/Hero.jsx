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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 text-center">

      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 pt-32">
        <h1 ref={heroRef} className="text-4xl md:text-5xl font-bold text-white mb-4">
          {content.hero.title}
        </h1>

        <p ref={subtitleRef} className="text-lg text-gray-200 mb-6">
          {content.hero.subtitle}
        </p>

        <button
          ref={buttonRef}
          className="bg-yellow-500 px-6 py-3 rounded-lg"
          onClick={() => window.location.href = "/contact"}
        >
          Donate Now
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-yellow-500 w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}