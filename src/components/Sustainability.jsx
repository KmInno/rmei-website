import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Sustainability() {
  const sectionRef = useScrollReveal("animate-slideUp");

  return (
    <section ref={sectionRef} className="py-16 px-6 max-w-5xl mx-auto text-center">
      <div className="container px-6 bg-white py-10 rounded-lg max-w-7xl mx-auto shadow-lg shadow-black/50">

        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
          <img src="/icons/accountability.png" alt="info icon" className="w-12 h-12" />

          Sustainability & Accountability
        </h2>

        <p className="mb-6 text-gray-700">
          The initiative is designed for long-term impact through strong monitoring
          systems and sustainable funding strategies.
        </p>

        <ul className="text-left max-w-2xl mx-auto list-disc space-y-2 text-gray-700">
          <li>Tracking business performance and job creation</li>
          <li>Measuring revenue growth of supported businesses</li>
          <li>Monitoring business survival rates after 12–24 months</li>
          <li>Quarterly evaluation and reporting</li>
        </ul>

        <div className="mt-8">
          <h3 className="font-bold mb-2">Sustainability Strategy</h3>
          <ul className="text-left max-w-2xl mx-auto list-disc space-y-2 text-gray-700">
            <li>Alumni contributions and mentorship</li>
            <li>Revolving loan fund to support future entrepreneurs</li>
            <li>Partnerships with private sector and LDS entrepreneurs</li>
            <li>Revenue from training programs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}