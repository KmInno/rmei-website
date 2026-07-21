import { useScrollReveal } from "../hooks/useScrollReveal";
import { 
  MapIcon, 
  TrophyIcon, 
  CheckCircleIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

export default function Program() {
  const titleRef = useScrollReveal("animate-slideUp");
  const cardsRef = useScrollReveal("animate-slideUp200");
  const goalsRef = useScrollReveal("animate-slideUp400");
  const networkRef = useScrollReveal("animate-fadeIn");

  return (
    <section className="py-20 px-5 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <MapIcon className="w-8 h-8" strokeWidth={2} />
            </div>
            The RMEI Roadmap
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive, three-phase journey designed to turn ideas into sustainable, job-creating businesses.
          </p>
        </div>

        {/* 3-Step Program Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20 relative">
          
          {/* Optional: Connecting line behind cards for desktop */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

          {/* Phase 1: Training */}
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300">
            <span className="text-blue-600 font-bold tracking-wider text-sm mb-2 block uppercase">Phase 01</span>
            <h3 className="font-bold text-2xl mb-3 text-gray-900">
              Entrepreneurship Training
            </h3>
            <p className="mb-6 text-gray-600 text-sm leading-relaxed">
              A 12-week intensive program equipping participants with practical business skills.
            </p>
            <ul className="space-y-3">
              {['Business model development', 'Financial management', 'Digital marketing', 'Leadership & ethics', 'Social impact design'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phase 2: Mentorship (Highlighted) */}
          <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8 rounded-2xl shadow-xl md:scale-105 border-4 border-white z-10">
            <span className="absolute -top-4 right-6 bg-yellow-500 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md flex items-center gap-1">
              <SparklesIcon className="w-4 h-4" /> Core Focus
            </span>
            <span className="text-blue-300 font-bold tracking-wider text-sm mb-2 block uppercase">Phase 02</span>
            <h3 className="font-bold text-2xl mb-3">
              Mentorship & Incubation
            </h3>
            <p className="mb-6 text-blue-100 text-sm leading-relaxed">
              A 6-month incubation program providing hands-on support and peer accountability.
            </p>
            <ul className="space-y-3 text-blue-50">
              {['One-on-one mentorship', 'Peer learning groups', 'Business plan refinement', 'Market entry strategies'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircleIcon className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phase 3: Funding */}
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300">
            <span className="text-blue-600 font-bold tracking-wider text-sm mb-2 block uppercase">Phase 03</span>
            <h3 className="font-bold text-2xl mb-3 text-gray-900">
              Seed Funding
            </h3>
            <p className="mb-6 text-gray-600 text-sm leading-relaxed">
              Selected participants receive startup capital through a competitive pitch process.
            </p>
            <ul className="space-y-3">
              {['$500 – $2,000 startup grants', 'Ongoing mentorship support', 'Priority: Agribusiness, Tech, Retail'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Impact Goals Panel */}
        <div ref={goalsRef} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 mb-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold flex items-center justify-center gap-3 text-gray-900">
              <TrophyIcon className="w-8 h-8 text-yellow-500" strokeWidth={2} />
              Our Target Impact
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="pt-4 md:pt-0">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">300</div>
              <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">Returned Missionaries Trained</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">100</div>
              <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">Sustainable Businesses Launched</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">300+</div>
              <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">New Jobs Created in Uganda</div>
            </div>
          </div>
        </div>

        {/* Network Footer */}
        <div ref={networkRef} className="text-center max-w-2xl mx-auto bg-blue-50 p-6 rounded-xl border border-blue-100">
          <p className="text-blue-900 font-medium">
            Beyond funding, we build a lifelong entrepreneur network to encourage collaboration, mentorship, and long-term business growth across Uganda.
          </p>
        </div>

      </div>
    </section>
  );
}