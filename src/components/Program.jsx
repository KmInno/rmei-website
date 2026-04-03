export default function Program() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Program
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Training */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-xl mb-3">Entrepreneurship Training</h3>
          <p className="mb-3 text-gray-700">
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

        {/* Mentorship */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-xl mb-3">Mentorship & Incubation</h3>
          <p className="mb-3 text-gray-700">
            A 6-month incubation program providing hands-on support.
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>One-on-one mentorship</li>
            <li>Peer learning groups</li>
            <li>Business plan refinement</li>
            <li>Market entry strategies</li>
          </ul>
        </div>

        {/* Funding */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-xl mb-3">Seed Funding</h3>
          <p className="mb-3 text-gray-700">
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
      <div className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-4">Our Goals</h3>
        <ul className="space-y-2 text-gray-700">
          <li>Train 300 returned missionaries</li>
          <li>Launch 100 sustainable businesses</li>
          <li>Create over 300 employment opportunities</li>
        </ul>
      </div>

      {/* Network */}
      <div className="mt-10 max-w-3xl mx-auto text-center">
        <p className="text-gray-700">
          The program also builds a strong entrepreneur network to encourage collaboration,
          mentorship, and long-term business growth.
        </p>
      </div>
    </section>
  );
}