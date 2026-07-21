import { content } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { 
  ExclamationTriangleIcon,
  ChartBarIcon,
  BanknotesIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

export default function Problem() {
  const titleRef = useScrollReveal("animate-slideUp");
  const introRef = useScrollReveal("animate-slideUp200");
  const gridRef = useScrollReveal("animate-slideUp400");

  // We expand on the problem by breaking it into three distinct, visual points.
  // You can move this array into your content.js file later if you prefer.
  const problemPoints = [
    {
      title: "The Unemployment Gap",
      description: "Uganda faces significant youth unemployment, leaving talented and driven young adults struggling to find sustainable livelihoods after their service.",
      icon: ChartBarIcon,
    },
    {
      title: "Lack of Capital",
      description: "Despite returning with immense leadership and discipline, these individuals rarely have the startup capital required to launch their own ventures.",
      icon: BanknotesIcon,
    },
    {
      title: "Missing Networks",
      description: "Without established business networks and experienced mentorship, even the most promising entrepreneurial ideas struggle to get off the ground.",
      icon: UserGroupIcon,
    }
  ];

  return (
    <section className="py-24 px-5 bg-slate-100 flex justify-center">
      {/* Increased width to max-w-6xl to give the section much more presence on desktop */}
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl shadow-slate-200 p-10 md:p-16 lg:p-20 relative overflow-hidden">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-2 bg-rose-500"></div>

        <div className="flex flex-col items-center text-center">
          
          <h2 
            ref={titleRef} 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 flex flex-col md:flex-row items-center gap-4"
          >
            <div className="bg-rose-50 p-4 rounded-full text-rose-500 shrink-0">
              <ExclamationTriangleIcon className="w-10 h-10" strokeWidth={2} />
            </div>
            {content.problems.title}
          </h2>

          <div ref={introRef} className="max-w-3xl mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {content.problems.text}
            </p>
          </div>
          
          {/* Expanded Content Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-gray-100 pt-16">
            {problemPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="bg-white p-4 rounded-full shadow-sm mb-5 text-rose-500">
                  <point.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}