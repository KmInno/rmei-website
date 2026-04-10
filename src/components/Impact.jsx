import { content } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Impact() {
  const titleRef = useScrollReveal("animate-slideUp");
  const card1Ref = useScrollReveal("animate-slideUp200");
  const card2Ref = useScrollReveal("animate-slideUp400");
  const card3Ref = useScrollReveal("animate-fadeIn");

  return (
    <section className="bg-blue-900 text-white py-16 px-6 text-center">
      <h2 ref={titleRef} className="text-3xl font-bold mb-10 opacity-0 flex items-center justify-center gap-3">
        <img src="/icons/goal.png" alt="goal icon" className="w-10 h-10" />

        Our Expected Impact
      </h2>

      <div className=" container grid md:grid-cols-3 gap-8 shadow-lg shadow-blue/50">
        <div ref={card1Ref} className="opacity-0">
          <h3 className="text-4xl font-bold text-yellow-400">
            {content.impact[0].number}
          </h3>
          <p className="mt-2 text-lg">{content.impact[0].label}</p>
        </div>
        <div ref={card2Ref} className="opacity-0">
          <h3 className="text-4xl font-bold text-yellow-400">
            {content.impact[1].number}
          </h3>
          <p className="mt-2 text-lg">{content.impact[1].label}</p>
        </div>
        <div ref={card3Ref} className="opacity-0">
          <h3 className="text-4xl font-bold text-yellow-400">
            {content.impact[2].number}
          </h3>
          <p className="mt-2 text-lg">{content.impact[2].label}</p>
        </div>
      </div>
    </section>
  );
}