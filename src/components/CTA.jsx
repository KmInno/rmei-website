import { useScrollReveal } from "../hooks/useScrollReveal"
export default function CTA() {

  const fadein = useScrollReveal("animate-slideUp")
  return (
    <section
      ref={fadein}
      className="relative text-white py-16 px-6 text-center bg-cover bg-center shadow-lg shadow-blue/5"
      style={{ backgroundImage: "url('/images/together.jpg')" }}
    >

      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">
          Be Part of the Impact
        </h2>

        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Join us in empowering the next generation of entrepreneurs and creating
          lasting economic change in Uganda.
        </p>

        <button className="bg-blue-900 hover:bg-blue-800 px-8 py-3 rounded-lg shadow" onClick={() => window.location.href = "/contact"}>
          Support This Initiative
        </button>
      </div>
    </section>
  );
}