import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const headerRef = useScrollReveal("animate-slideUp");
  const contentRef = useScrollReveal("animate-slideUp200");

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
      <SEO title="Contact RMEI Uganda" description="Get in touch with RMEI Uganda to partner, support a cohort, or learn more about the initiative." />
      <Navbar />

      <main className="bg-slate-50 min-h-screen py-20 px-5">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              We'd Love to Hear From You
            </h1>
            <p className="text-lg text-gray-600">
              Whether you want to partner with us, support a cohort, or learn more about the initiative, our team is ready to connect.
            </p>
          </div>

          {/* Two-Column Grid: Contact Info + Form */}
          <div ref={contentRef} className="grid lg:grid-cols-3 gap-10 items-start">
            
            {/* Left Column: Direct Info Card */}
            <div className="lg:col-span-1 bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8 md:p-10 rounded-3xl shadow-xl space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Contact Info</h2>
                <p className="text-blue-100 text-sm">Reach out to us directly through any of the channels below.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-yellow-400 shrink-0">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-1">Office Location</h3>
                    <p className="text-sm text-white leading-relaxed">Kansanga, Kiwafu Zone<br />Kampala, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-yellow-400 shrink-0">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-1">Email Us</h3>
                    <p className="text-sm text-white break-all">kennethlubuulwa1820@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-yellow-400 shrink-0">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-1">Call Us</h3>
                    <p className="text-sm text-white">+256 77211 3151</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-blue-200 italic">
                  "By small and simple things are great things brought to pass." — Alma 37:6
                </p>
              </div>
            </div>

            {/* Right Column: Web3Forms Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              <form onSubmit={onSubmit} className="space-y-5">
                {/* Honeypot Spam Protection */}
                <input
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Smith"
                      required
                      minLength={2}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 focus:bg-white focus:border-blue-900 focus:outline-none transition-colors text-gray-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 focus:bg-white focus:border-blue-900 focus:outline-none transition-colors text-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    required
                    minLength={3}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 focus:bg-white focus:border-blue-900 focus:outline-none transition-colors text-gray-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows="5"
                    required
                    minLength={10}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-gray-200 focus:bg-white focus:border-blue-900 focus:outline-none transition-colors text-gray-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <PaperAirplaneIcon className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Status Feedback Alerts */}
                <div aria-live="polite" className="pt-2">
                  {result === "success" && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm font-medium">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 shrink-0" />
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  {result === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm font-medium">
                      <ExclamationCircleIcon className="w-5 h-5 text-red-600 shrink-0" />
                      Something went wrong. Please check your connection and try again.
                    </div>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}