import { Link } from "react-router-dom";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const titleRef = useScrollReveal("animate-slideUp");

  return (
    <section ref={titleRef} className="py-16 px-6 bg-white text-center">
      <div className="container px-6 bg-white py-10 rounded-lg max-w-7xl mx-auto shadow-lg shadow-black/50">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 text-blue-900 flex items-center justify-center gap-2">
            <img src="/icons/info.png" alt="info icon" className="w-10 h-10" />
            About the Initiative
          </h2>

          <p className="text-gray-700 mb-4">
            The Return Missionary Entrepreneur Initiative (RMEI) empowers returned missionaries
            in Uganda to become entrepreneurs and job creators.
          </p>

          <p className="text-gray-600 mb-6">
            Through training, mentorship, and funding, the program helps participants
            build sustainable businesses and contribute to economic growth.
          </p>

          <Link
            to="/about"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg"
          >
            Learn More
          </Link>

        </div>
      </div>
    </section>
  );
}