import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Investment() {
  const sectionRef = useScrollReveal("animate-slideUp");

  return (
    <section ref={sectionRef} className="bg-gray-100 py-16 px-6 text-center">
      <div className="container px-6 bg-white py-10 rounded-lg max-w-7xl mx-auto shadow-lg shadow-black/50">

        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
          <img src="/icons/profit.png" alt="profit icon" className="w-12 h-12" />

          Investment Opportunity
        </h2>

        <p className="max-w-3xl mx-auto mb-6 text-gray-700">
          Investing in this initiative is a high-impact opportunity to empower
          disciplined, ethical, and service-driven individuals to become job creators.
        </p>

        <div className="max-w-2xl mx-auto text-left mb-6">
          <h3 className="font-bold mb-2">Why This Works:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Returned missionaries already have leadership and discipline</li>
            <li>Strong ethical foundation and community trust</li>
            <li>Global exposure and commitment to service</li>
          </ul>
        </div>

        <div className="max-w-2xl mx-auto text-left mb-6">
          <h3 className="font-bold mb-2">Budget Overview:</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Training: $18,000</li>
            <li>Mentorship: $12,000</li>
            <li>Seed Funding: $45,000</li>
            <li>Program Coordination: $15,000</li>
            <li className="font-bold mt-2">Total: $105,000</li>
          </ul>
        </div>

        <p className="max-w-3xl mx-auto text-gray-700 font-medium">
          With the right support, this initiative will create sustainable businesses,
          generate employment, and transform communities across Uganda.
        </p>
      </div>
    </section>
  );
}