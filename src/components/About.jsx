import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 text-blue-900">
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
    </section>
  );
}