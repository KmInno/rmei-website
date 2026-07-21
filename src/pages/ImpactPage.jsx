import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Impact from "../components/Impact";
import SEO from "../components/SEO";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { 
  BriefcaseIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  ArrowRightIcon, 
  CheckBadgeIcon 
} from "@heroicons/react/24/outline";

export default function ImpactPage() {
  const introRef = useScrollReveal("animate-slideUp");
  const pillarsRef = useScrollReveal("animate-slideUp200");
  const storyRef = useScrollReveal("animate-fadeIn");

  const impactPillars = [
    {
      title: "Job Creation & Employment",
      description: "Every business launched by a returned missionary doesn't just support one family—it creates multiple local jobs, lowering youth unemployment rates across Uganda.",
      icon: BriefcaseIcon,
      stat: "300+ Jobs Targeted"
    },
    {
      title: "Ethical Leadership",
      description: "Missionaries bring years of intensive discipline, honesty, and community trust. They inject a high standard of integrity into the local business ecosystem.",
      icon: UserGroupIcon,
      stat: "100% Value-Driven"
    },
    {
      title: "Sustainable Innovation",
      description: "Focusing on high-growth priority sectors like agribusiness, retail, and tech ensures that supported businesses withstand market fluctuations.",
      icon: LightBulbIcon,
      stat: "100 Businesses"
    }
  ];

  return (
    <>
      <SEO title="RMEI Impact | Jobs, Leadership and Growth" description="See how RMEI Uganda creates measurable impact through entrepreneurship, jobs, leadership development, and sustainable economic growth." />
      <Navbar />

      <main className="bg-slate-50 min-h-screen">
        
        {/* Page Header / Intro */}
        <section className="py-20 px-5 text-center max-w-4xl mx-auto">
          <div ref={introRef} className="space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-4 py-1.5 rounded-full inline-block">
              Measurable Results
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Transforming Service Into Sustainable Economic Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              At RMEI, we don't just measure capital distributed; we measure independence, 
              community stability, and the multiplier effect of empowering ethical young leaders in Uganda.
            </p>
          </div>
        </section>

        {/* The Core Stats Banner Component you already have */}
        <Impact />

        {/* Pillars of Impact Section */}
        <section className="py-24 px-5 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Measure Our Footprint
            </h2>
            <p className="text-gray-600">
              Our framework ensures that every resource contributed creates structural, long-lasting improvements.
            </p>
          </div>

          <div ref={pillarsRef} className="grid md:grid-cols-3 gap-8">
            {impactPillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
              >
                <div>
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 w-fit mb-6">
                    <pillar.icon className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {pillar.stat}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Story / Human Element Preview */}
        <section className="py-16 px-5 max-w-6xl mx-auto mb-20">
          <div ref={storyRef} className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-6">
              <span className="text-yellow-400 font-bold uppercase tracking-wider text-xs bg-white/10 px-3 py-1.5 rounded-md">
                Real World Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                From Missionary Service to Marketplace Leadership
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Returned missionaries spend years serving others, building resilience, and developing cross-cultural communication. 
                When combined with RMEI's training and seed capital, that discipline transforms into thriving enterprises that employ community members.
              </p>
              <div className="flex items-center gap-3 text-emerald-400 font-semibold">
                <CheckBadgeIcon className="w-6 h-6" /> Rigorous vetting and mentorship for every participant
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center space-y-4">
                <h3 className="text-2xl font-bold text-white">Want to see our cohorts in action?</h3>
                <p className="text-blue-100 text-sm">
                  Explore our gallery and team pages to meet the minds behind the initiative.
                </p>
                <div className="pt-2 flex justify-center gap-4">
                  <a 
                    href="/about" 
                    className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    Meet the Team <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}