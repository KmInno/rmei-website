import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Footer() {
  const footerRef = useScrollReveal("animate-fadeIn");

  return (
    <footer ref={footerRef} className="bg-black text-white py-10 px-6 text-center">
      <h3 className="text-xl font-bold mb-2">
        Return Missionary Entrepreneur Initiative
      </h3>

      <p className="text-sm flex items-center justify-center gap-3">
                <img src="/icons/location.png" alt="location icon" className="w-10 h-10" />

        Kampala, Uganda
      </p>
      <p className="text-sm mt-2 flex items-center justify-center gap-3">
                <img src="/icons/email.png" alt="email icon" className="w-10 h-10" />

        Contact: kennethlubuulwa1820@gmail.com
      </p>
    
      <p className="text-sm mt-4">
        © {new Date().getFullYear()} RMEI. All rights reserved.
      </p>
    </footer>
  );
}