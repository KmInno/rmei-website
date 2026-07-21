import { useScrollReveal } from "../hooks/useScrollReveal";
import { 
  BanknotesIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ChartPieIcon
} from "@heroicons/react/24/outline";

export default function Investment() {
  const headerRef = useScrollReveal("animate-slideUp");
  const gridRef = useScrollReveal("animate-slideUp200");
  const outroRef = useScrollReveal("animate-fadeIn");

  const budgetItems = [
    { label: "Training & Workshops", amount: 18000 },
    { label: "Mentorship & Incubation", amount: 12000 },
    { label: "Seed Funding Grants", amount: 45000 },
    { label: "Program Coordination", amount: 15000 },
  ];

  // Calculate the total dynamically so it never falls out of sync
  const totalBudget = budgetItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section className="bg-gray-100 py-24 px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
              <BanknotesIcon className="w-10 h-10" strokeWidth={1.5} />
            </div>
            Investment & Partnership
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Investing in RMEI is a high-impact opportunity to empower disciplined, ethical, 
            and service-driven individuals to become the next generation of job creators in Uganda.
          </p>
        </div>

        {/* Two-Column Pitch & Budget Layout */}
        <div ref={gridRef} className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          
          {/* Left Column: Why This Works */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
              <ShieldCheckIcon className="w-8 h-8 text-blue-500" />
              The RMEI Advantage
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full h-fit shadow-sm text-blue-600">
                  <UserGroupIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Proven Leadership</h4>
                  <p className="text-gray-600">Returned missionaries enter the program with a strong baseline of resilience, time management, and rigorous discipline.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full h-fit shadow-sm text-blue-600">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Ethical Foundation</h4>
                  <p className="text-gray-600">They possess deeply ingrained values of honesty, hard work, and a profound commitment to uplifting their local communities.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full h-fit shadow-sm text-blue-600">
                  <GlobeAltIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Global Perspective</h4>
                  <p className="text-gray-600">Years of international exposure and language acquisition provide them with a broader worldview and higher operational standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Budget Breakdown */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <ChartPieIcon className="w-8 h-8 text-emerald-500" />
              Budget Allocation
            </h3>

            <div className="space-y-2">
              {budgetItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">{item.label}</span>
                  <span className="text-gray-900 font-bold font-mono text-lg">
                    ${item.amount.toLocaleString()}
                  </span>
                </div>
              ))}
              
              {/* Total Row */}
              <div className="flex justify-between items-center pt-6 mt-2">
                <span className="text-xl font-bold text-gray-900 uppercase tracking-wider">Total Funding Required</span>
                <span className="text-3xl font-extrabold text-emerald-600 font-mono">
                  ${totalBudget.toLocaleString()}
                </span>
              </div>
            </div>
            
            {/* Optional Context Note */}
            <div className="mt-8 bg-emerald-50 p-4 rounded-xl text-sm text-emerald-800 border border-emerald-100">
              <strong>Note:</strong> This budget covers an entire cohort from initial training through to fully funded business launches.
            </div>
          </div>

        </div>

        {/* Callout Quote */}
        <div ref={outroRef} className="max-w-4xl mx-auto text-center bg-blue-900 rounded-2xl p-8 md:p-10 shadow-lg text-white">
          <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
            "With the right support, this initiative will create sustainable businesses, 
            generate employment, and transform communities across Uganda."
          </p>
        </div>

      </div>
    </section>
  );
}