import { useScrollReveal } from "../hooks/useScrollReveal";
import { 
  ShieldCheckIcon, 
  ChartBarSquareIcon, 
  ArrowPathRoundedSquareIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/outline";

export default function Sustainability() {
  const headerRef = useScrollReveal("animate-slideUp");
  const gridRef = useScrollReveal("animate-slideUp200");

  return (
    <section className="py-24 px-5 bg-slate-50 flex justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Header Section */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-teal-100 rounded-full mb-6">
            {/* Shield icon visually communicates trust and accountability */}
            <ShieldCheckIcon className="w-10 h-10 text-teal-600" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sustainability & Accountability
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are committed to long-term impact. Our initiative is built on transparent monitoring 
            systems and self-sustaining funding models to ensure every contribution creates lasting value.
          </p>
        </div>

        {/* Two-Column Card Layout */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Accountability / Monitoring */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                <ChartBarSquareIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Measuring Impact</h3>
            </div>
            
            <ul className="space-y-5">
              {[
                "Tracking real-time business performance and job creation",
                "Measuring baseline vs. actual revenue growth",
                "Monitoring 12–24 month business survival rates",
                "Providing transparent quarterly evaluations and reports"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckBadgeIcon className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Sustainability Strategy */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-teal-50 p-3 rounded-xl text-teal-600">
                <ArrowPathRoundedSquareIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Future Sustainability</h3>
            </div>
            
            <ul className="space-y-5">
              {[
                "Revolving loan funds to continuously support new cohorts",
                "Alumni program requiring give-back mentorship and contributions",
                "Strategic partnerships with the private sector and business leaders",
                "Generating internal revenue through specialized training programs"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckBadgeIcon className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}