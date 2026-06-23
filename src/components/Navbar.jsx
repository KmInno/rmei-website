import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/program", label: "Program" },
  { to: "/impact", label: "Impact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="bg-[#0c1b33] border-b border-white/[0.07] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[68px]">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/rmei_logo.png"
            alt="RMEI logo"
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif text-[18px] font-semibold text-white tracking-wide leading-none">
              RMEI
            </span>
            <span className="text-[10px] uppercase tracking-[0.08em] text-white/40 mt-0.5">
              Missionary Entrepreneur Initiative
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-[13.5px] px-[14px] py-1.5 rounded-md transition-all duration-200 tracking-[0.01em] ${
                pathname === to
                  ? "text-white bg-white/10"
                  : "text-white/60 hover:text-white hover:bg-white/[0.07]"
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="w-px h-[18px] bg-white/10 mx-1" aria-hidden="true" />

          <Link
            to="/contact"
            className="ml-1 text-[13px] font-medium text-[#0c1b33] bg-[#e8c96a] hover:bg-[#f0d87e] px-[18px] py-[7px] rounded-md transition-all duration-200 hover:-translate-y-px"
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`block w-[22px] h-[1.5px] bg-white/70 rounded-sm transition-all duration-250 origin-center ${isOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-white/70 rounded-sm transition-all duration-250 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-white/70 rounded-sm transition-all duration-250 origin-center ${isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0e2040] border-t border-white/[0.07] px-6 pb-4 pt-3">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 text-sm rounded-md transition-all duration-200 ${
                pathname === to
                  ? "text-white bg-white/10"
                  : "text-white/65 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block mt-3 px-3 py-2.5 text-sm font-medium text-center text-[#0c1b33] bg-[#e8c96a] hover:bg-[#f0d87e] rounded-md transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}