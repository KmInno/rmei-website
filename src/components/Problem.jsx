import { content } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Problem() {
  const titleRef = useScrollReveal("animate-slideUp");
  const cardRef = useScrollReveal("animate-slideUp200"); // ← add this

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 ref={titleRef} className="opacity-0 text-3xl font-bold mb-6 flex items-center justify-center gap-3">
        <img src="/icons/target.png" alt="target icon" className="w-12 h-12" />
        {content.problems.title}
      </h2>

      <p ref={cardRef} className="opacity-0 max-w-3xl mx-auto text-gray-700 text-lg">
        {content.problems.text}
      </p>
    </section>
  );
}