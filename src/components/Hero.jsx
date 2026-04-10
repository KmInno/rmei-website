import { content } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Hero() {
  const heroRef = useScrollReveal("animate-fadeIn");
  const subtitleRef = useScrollReveal("animate-fadeIn200");
  const buttonRef = useScrollReveal("animate-fadeIn400");

  return (
<section className="relative min-h-screen bg-hero bg-cover bg-center flex items-center justify-center px-5 text-center">
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 pt-32">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slideUp">
      {content.hero.title}
    </h1>

    <p className="text-lg text-gray-200 mb-6 animate-slideUp200">
      {content.hero.subtitle}
    </p>

    <button className="bg-yellow-500 px-6 py-3 rounded-lg animate-slideUp400" onClick={() => window.location.href = "/contact"}>
      Donate Now
    </button>
  </div>

</section>
  );
}