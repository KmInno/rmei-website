import { content } from "../data/content";

export default function Problem() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">
        {content.problems.title}
      </h2>

      <p className="max-w-3xl mx-auto text-gray-700 text-lg">
        {content.problems.text}
      </p>
    </section>
  );
}