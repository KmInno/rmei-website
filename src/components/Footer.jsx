import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Footer() {
  const footerRef = useScrollReveal("animate-fadeIn");

  return (
<footer ref={footerRef} className="bg-black text-white py-10 px-6 text-center opacity-0">

  <h3 className="text-xl font-bold mb-2">
    Return Missionary Entrepreneur Initiative
  </h3>

  <div className="flex flex-col md:flex-row items-center justify-center gap-4">

    <p className="text-sm flex items-center justify-center gap-3">
      <img src="/icons/location.png" alt="location icon" className="w-10 h-10" />
      kansanga kiwafu zone
    </p>

    <p className="text-sm flex items-center justify-center gap-3">
      <img src="/icons/email.png" alt="email icon" className="w-10 h-10" />
      mail: kennethlubuulwa1820@gmail.com
    </p>

    <p className="text-sm flex items-center justify-center gap-3">
      <img src="/icons/telephone.png" alt="telephone icon" className="w-10 h-10" />
      contact: +256 772 211 3151
    </p>

  </div>

  <p className="text-sm mt-4">
    © {new Date().getFullYear()} RMEI. All rights reserved.
  </p>

</footer>
  );
}