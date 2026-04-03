import { content } from "../data/content";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        {content.hero.title}
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        {content.hero.subtitle}
      </p>

      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow">
        Donate Now
      </button>
    </section>
  );
}