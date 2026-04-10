import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Program() {
  const titleRef = useScrollReveal("animate-slideUp");
  const cardsRef = useScrollReveal("animate-slideUp200");
  const goalsRef = useScrollReveal("animate-slideUp400");
  const networkRef = useScrollReveal("animate-fadeIn");

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="container px-6 bg-white py-10 rounded-lg max-w-7xl mx-auto shadow-lg shadow-black/50">

        <h2 ref={titleRef} className="text-3xl font-bold text-center mb-10 opacity-0 flex items-center justify-center gap-3">
          <img src="/icons/loyalty-program.png" alt="info icon" className="w-12 h-12" />

          Our Program
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto opacity-0">

          {/* Training - Regular */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-3 text-gray-800">
              Entrepreneurship Training
            </h3>
            <p className="mb-3 text-gray-600">
              A 12-week intensive program equipping participants with practical business skills.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Business model development</li>
              <li>Financial management</li>
              <li>Digital marketing & customer acquisition</li>
              <li>Leadership & ethical entrepreneurship</li>
              <li>Social impact business design</li>
            </ul>
          </div>

          {/* Mentorship - PREMIUM */}
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg scale-105 border-2 border-blue-300">

            {/* Premium badge */}
            <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
              PREMIUM
            </span>

            <h3 className="font-semibold text-xl mb-3">
              Mentorship & Incubation
            </h3>

            <p className="mb-3 text-blue-100">
              A 6-month incubation program providing hands-on support.
            </p>

            <ul className="list-disc pl-5 text-sm space-y-1 text-blue-50">
              <li>One-on-one mentorship</li>
              <li>Peer learning groups</li>
              <li>Business plan refinement</li>
              <li>Market entry strategies</li>
            </ul>
          </div>

          {/* Funding - Regular */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-3 text-gray-800">
              Seed Funding
            </h3>
            <p className="mb-3 text-gray-600">
              Selected participants receive startup capital through a pitch competition.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>$500 – $2,000 startup grants</li>
              <li>Ongoing mentorship support</li>
              <li>Priority sectors: Agribusiness, Tech, Retail</li>
            </ul>
          </div>

        </div>

        {/* Goals */}
        <div ref={goalsRef} className="mt-12 max-w-4xl mx-auto text-center opacity-0">
          <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-3">
            <img src="/icons/target.png" alt="target icon" className="w-10 h-10" />
            Our Goals</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Train 300 returned missionaries</li>
            <li>Launch 100 sustainable businesses</li>
            <li>Create over 300 employment opportunities</li>
          </ul>
        </div>

        {/* Network */}
        <div ref={networkRef} className="mt-10 max-w-3xl mx-auto text-center opacity-0">
          <p className="text-gray-700">
            The program also builds a strong entrepreneur network to encourage collaboration,
            mentorship, and long-term business growth.
          </p>
        </div>
      </div>

    </section >
  );
}