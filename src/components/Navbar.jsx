import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/program", label: "Program" },
  { to: "/impact", label: "Impact" },
  // { to: "/team", label: "Team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="bg-[#0c1b33] border-b border-white/[0.07] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/rmei_logo.png"
            alt="RMEI logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif text-[18px] font-semibold text-white tracking-wide leading-none">
              RMEI
            </span>
            <span className="text-[10px] uppercase tracking-[0.08em] text-white/50 mt-1">
              Missionary Entrepreneur Initiative
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-[14px] px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                pathname === to
                  ? "text-white bg-white/10 shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/[0.07]"
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="w-px h-5 bg-white/10 mx-2" aria-hidden="true" />

          <Link
            to="/contact"
            className="ml-1 text-[13.5px] font-bold text-[#0c1b33] bg-[#e8c96a] hover:bg-[#f0d87e] px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`block w-6 h-0.5 bg-white/80 rounded-sm transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white/80 rounded-sm transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white/80 rounded-sm transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu with smooth transition feel */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0e2040] border-b border-white/[0.07] ${
          isOpen ? "max-h-96 py-4 px-6 opacity-100" : "max-h-0 py-0 px-6 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1.5">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                pathname === to
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block mt-2 px-4 py-3 text-sm font-bold text-center text-[#0c1b33] bg-[#e8c96a] hover:bg-[#f0d87e] rounded-lg transition-colors duration-200 shadow"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}