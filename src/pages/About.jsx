import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import SEO from "../components/SEO";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { 
  BuildingOffice2Icon, 
  EyeIcon, 
  TrophyIcon, 
  UserCircleIcon 
} from "@heroicons/react/24/outline";

export default function About() {
  const titleRef = useScrollReveal("animate-slideUp");
  const introRef = useScrollReveal("animate-slideUp200");
  const founderRef = useScrollReveal("animate-slideUp400");
  const visionRef = useScrollReveal("animate-fadeIn");
  const goalRef = useScrollReveal("animate-slideUp200");

  return (
    <>
      <SEO title="About RMEI Uganda | Mission and Vision" description="Learn how RMEI Uganda equips returned missionaries with training, mentorship, and seed capital to launch ethical businesses and uplift communities." />
      <Navbar />

      <main className="py-20 px-5 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 ref={titleRef} className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              About the Initiative
            </h1>
            <p ref={introRef} className="text-lg md:text-xl text-gray-600 leading-relaxed">
              The Return Missionary Entrepreneur Initiative (RMEI) is dedicated to empowering returned missionaries 
              in Uganda to transition from their service into successful entrepreneurs and local job creators.
            </p>
          </div>

          {/* Context / Background Card */}
          <div ref={visionRef} className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                <BuildingOffice2Icon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                The Challenge & The Solution
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Uganda features one of the youngest populations globally, yet youth unemployment remains a major societal challenge. 
                Returned missionaries return home equipped with exceptional leadership skills, self-discipline, and invaluable global experience.
              </p>
              <p>
                However, they often lack immediate access to capital, structured mentorship, and business networks. RMEI bridges this gap 
                by providing comprehensive entrepreneurship training, incubation support, and seed funding.
              </p>
            </div>
          </div>

          {/* Founder Biography Spotlight Card */}
          <div ref={founderRef} className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute -right-10 -bottom-10 text-white/5 pointer-events-none">
              <UserCircleIcon className="w-96 h-96" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              <img
                src="/images/ken-port.webp"
                alt="Kenneth Lubuulwa, Founder of RMEI"
                className="w-48 h-48 md:w-56 md:h-56 object-cover object-center rounded-2xl shadow-2xl ring-4 ring-white/20 shrink-0"
              />
              <div className="flex flex-col text-center md:text-left">
                <span className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-2">
                  Founder & Director
                </span>
                <h2 className="text-3xl font-bold mb-4">
                  Kenneth Lubuulwa
                </h2>
                <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                  RMEI was founded by Kenneth Lubuulwa, a returned missionary from the Zambia Lusaka Mission (2023–2025) 
                  and a service missionary at BYU-Pathway Worldwide (2026–2027). His vision is to channel the unmatched drive 
                  gained during missionary service into sustainable economic transformation across Uganda.
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Goal Grid */}
          <div ref={goalRef} className="grid md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-yellow-50 p-3 rounded-xl text-yellow-600">
                    <EyeIcon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To build a thriving, interconnected community of ethical, faith-driven entrepreneurs 
                  who permanently contribute to economic development and community upliftment in East Africa.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <img
                  src="/images/hero-2.webp"
                  alt="RMEI Community"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Goal Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
                    <TrophyIcon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Goal</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To equip returned missionaries with the rigorous practical skills, ongoing mentorship, 
                  and critical startup capital necessary to launch enduring businesses and become agents of change.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <img
                  src="/images/ken-about.webp"
                  alt="Returned missionaries working"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl"
                />
              </div>
            </div>

          </div>

          {/* Embedded Team Section */}
          <div className="pt-10">
            <Team />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}