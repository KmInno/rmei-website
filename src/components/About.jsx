import { Link } from "react-router-dom";
import { 
  InformationCircleIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  BanknotesIcon 
} from "@heroicons/react/24/outline";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const containerRef = useScrollReveal("animate-slideUp");

  // Breaking the text into scannable pillars
  const pillars = [
    { name: "Training", icon: AcademicCapIcon, description: "Equipping participants with practical business skills." },
    { name: "Mentorship", icon: UserGroupIcon, description: "Guidance from experienced entrepreneurs and leaders." },
    { name: "Funding", icon: BanknotesIcon, description: "Providing the capital needed to launch sustainable ideas." },
  ];

  return (
    <section className="py-20 px-5 bg-slate-50">
      {/* 
        Changed to a softer shadow. shadow-black/50 is often too harsh for a white background. 
        Using a tinted shadow (shadow-blue-900/10) makes it look much more premium.
      */}
      <div 
        ref={containerRef} 
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl shadow-blue-900/10 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Column: Text Content */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              {/* Using the imported Heroicon */}
              <InformationCircleIcon className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
                About RMEI
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The Return Missionary Entrepreneur Initiative (RMEI) empowers returned missionaries 
              in Uganda to transition from their service into becoming dynamic entrepreneurs and job creators.
            </p>

            {/* Core Pillars List */}
            <div className="space-y-5 mb-10">
              {pillars.map((pillar) => (
                <div key={pillar.name} className="flex items-start gap-4">
                  <div className="bg-blue-50 p-2.5 rounded-lg text-blue-900 shrink-0">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{pillar.name}</h3>
                    <p className="text-sm text-gray-600">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Read Our Full Story
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative min-h-[400px] lg:min-h-full hidden md:block">
            {/* You can drop one of your edited team/gallery photos here */}
            <img 
              src="/images/ken-about.webp" 
              alt="Return missionaries collaborating" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Optional subtle color overlay to tie the image into your theme */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          </div>

        </div>
      </div>
    </section>
  );
}