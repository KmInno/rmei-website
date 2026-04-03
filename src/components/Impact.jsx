import { content } from "../data/content";

export default function Impact() {
  return (
    <section className="bg-blue-900 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">
        Our Expected Impact
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {content.impact.map((item, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-yellow-400">
              {item.number}
            </h3>
            <p className="mt-2 text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}