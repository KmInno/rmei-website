import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <form className="flex flex-col gap-4">
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
      </section>

      <Footer />
    </>
  );
}