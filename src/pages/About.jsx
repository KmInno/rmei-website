import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">
          About the Initiative
        </h1>

        {/* Intro */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          The Return Missionary Entrepreneur Initiative (RMEI) is a program 
          dedicated to empowering returned missionaries in Uganda to become 
          successful entrepreneurs and job creators.
        </p>

        {/* Background */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          Uganda has one of the youngest populations in the world, yet youth 
          unemployment remains a major challenge. Returned missionaries bring 
          valuable leadership skills, discipline, and global experience, but 
          often lack access to capital, mentorship, and structured opportunities.
        </p>

        {/* Solution */}
        <p className="mb-10 text-gray-700 leading-relaxed">
          RMEI addresses this gap by providing structured entrepreneurship training, 
          mentorship, and startup funding to help participants build sustainable 
          businesses and contribute to economic development.
        </p>

        {/* Vision & Goal */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-blue-900">
              Our Vision
            </h2>
            <p className="text-gray-700">
              To build a thriving community of ethical, faith-driven entrepreneurs 
              who contribute to economic development and community upliftment.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-blue-900">
              Our Goal
            </h2>
            <p className="text-gray-700">
              To equip returned missionaries with the skills, mentorship, and 
              capital necessary to launch sustainable businesses and become 
              agents of economic transformation.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}