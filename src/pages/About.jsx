import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const titleRef = useScrollReveal("animate-slideUp");
  const introRef = useScrollReveal("animate-slideUp200");
  const backgroundRef = useScrollReveal("animate-slideUp400");
  const solutionRef = useScrollReveal("animate-fadeIn");
  const gridRef = useScrollReveal("animate-slideUp200");

  return (
    <>
      <Navbar />

      <section className="py-20 px-6 max-w-7xl mx-auto ">
        <h1 ref={titleRef} className="text-4xl font-bold mb-8 text-black opacity-0 text-center">
          About the Initiative
        </h1>

        {/* Intro */}
        <div className="container px-6 bg-gray-100 py-10 rounded-lg max-w-7xl mx-auto shadow-lg shadow-black/50">
          <p ref={introRef} className="mb-6 text-black leading-relaxed opacity-0">
            The Return Missionary Entrepreneur Initiative (RMEI) is a program
            dedicated to empowering returned missionaries in Uganda to become
            successful entrepreneurs and job creators.
          </p>

          {/* Background */}
          <p ref={backgroundRef} className="mb-6 text-black leading-relaxed opacity-0">
            Uganda has one of the youngest populations in the world, yet youth
            unemployment remains a major challenge. Returned missionaries bring
            valuable leadership skills, discipline, and global experience, but
            often lack access to capital, mentorship, and structured opportunities.
          </p>

          {/* Solution */}
          <p ref={solutionRef} className="mb-10 text-black leading-relaxed opacity-0">
            RMEI addresses this gap by providing structured entrepreneurship training,
            mentorship, and startup funding to help participants build sustainable
            businesses and contribute to economic development.
          </p>
        </div>


        {/* Vision & Goal */}
        <div ref={gridRef} className="flex flex-col gap-6 mt-10 opacity-0">
          <div className="flex-1 bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center gap-4 shadow-lg shadow-black/50">

            <div>
              <h2 className="text-xl font-semibold mb-2 text-black text-center">
                Biography
              </h2>
              <p className="text-black text-center">
                The REMEI was founded by Kenneth Lubuulwa, a return missionary from Zambia Lusaka mission 2023-2025 and service missionary at Byupathway worldwide 2026-2027.
              </p>
            </div>
            <img
              src="/images/ken-port.webp"
              alt="hero-2 image"
              className="md:w-300 md:h-300 object-cover rounded flex-shrink-0 w-500 h-500"
            />
          </div>


          <div className="flex-1 bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center gap-4 shadow-lg shadow-black/50">
            <img
              src="/images/hero-2.webp"
              alt="hero-2 image"
              className="md:w-300 md:h-300 object-cover rounded flex-shrink-0 w-500 h-500"
            />
            <div>
              <h2 className="text-xl font-semibold mb-2 text-black text-center">
                Our Vision
              </h2>
              <p className="text-black text-center">
                To build a thriving community of ethical, faith-driven entrepreneurs
                who contribute to economic development and community upliftment.
              </p>
            </div>
          </div>

          <div className="flex-1 bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center gap-4 shadow-lg shadow-black/50">
            <div className="order-2 md:order-1">
              <h2 className="text-xl font-semibold mb-2 text-black text-center">
                Our Goal
              </h2>
              <p className="text-gray-700 text-center">
                To equip returned missionaries with the skills, mentorship, and
                capital necessary to launch sustainable businesses and become
                agents of economic transformation.
              </p>
            </div>
            <img
              src="/images/ken-about.webp"
              alt="ken-about image"
              className="md:w-300 md:h-300 object-cover rounded flex-shrink-0 order-1 md:order-2 w-500 h-500"
            />
          </div>

        </div>

      </section >

      <Footer />
    </>
  );
}