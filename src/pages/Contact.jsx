import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const titleRef = useScrollReveal("animate-slideUp");
  const formRef = useScrollReveal("animate-slideUp200");

  return (
    <>
      <Navbar />

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <div className="container px-6 bg-gray-100 py-10 rounded-lg max-w-7xl mx-auto shadow-lg shadow-black/50">

          <h1 ref={titleRef} className="text-3xl font-bold mb-6 opacity-0">Contact Us</h1>

          <form ref={formRef} className="flex flex-col gap-4 opacity-0">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded"
            />

            <textarea
              placeholder="Your Message"
              className="p-3 border rounded"
              rows="5"
            />

            <button className="bg-blue-900 text-white py-3 rounded">
              Send Message
            </button>
          </form>
        </div>

      </section>

      <Footer />
    </>
  );
}