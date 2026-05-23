import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const titleRef = useScrollReveal("animate-slideUp");
  const formRef = useScrollReveal("animate-slideUp200");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", "New Contact Message");
    formData.append("from_name", "RMEI Website");
    formData.append("replyto", formData.get("email"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");
        event.target.reset();
      } else {
        setResult("error");
      }
    } catch {
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="py-16 px-6">
        <div className="bg-gray-100 py-10 px-8 rounded-lg max-w-2xl mx-auto shadow-lg shadow-black/20">

          <h1 ref={titleRef} className="text-3xl font-bold mb-8 opacity-0">
            Contact Us
          </h1>

          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="flex flex-col gap-4 opacity-0"
          >
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              minLength={2}
              className="form-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-input"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              minLength={3}
              className="form-input"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              minLength={10}
              className="form-textarea"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-900 text-white py-3 rounded font-medium disabled:opacity-60 disabled:cursor-not-allowed transition-opacity duration-200"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            <div aria-live="polite" className="text-center text-sm font-medium">
              {result === "success" && (
                <p className="text-green-600">
                  ✅ Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {result === "error" && (
                <p className="text-red-600">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}