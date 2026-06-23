import { useScrollReveal } from "../hooks/useScrollReveal";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Our Impact", href: "#impact" },
  { label: "Contact Us", href: "#contact" },
];

const supportLinks = [
  { label: "Frequently Asked Questions", href: "#faq" },
  { label: "How to Contact Us", href: "#contact" },
  { label: "Application Process", href: "#apply" },
  { label: "Partner With Us", href: "#partner" },
  { label: "Privacy Policy", href: "#privacy" },
];

const socials = [
  {
    title: "Facebook",
    href: "#",
    icon: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    title: "Twitter / X",
    href: "#",
    icon: (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4l16 16M4 20L20 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    href: "#",
    icon: (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    href: "#",
    icon: (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useScrollReveal("animate-fadeIn");

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white opacity-0"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="px-8 pt-16 pb-0 border-t border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-neutral-900">

          {/* Col 1 — Brand + About + Socials */}
          <div>
            <h2 className="text-xl font-bold text-white leading-snug mb-3">
              Return Missionary<br />Entrepreneur Initiative
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Empowering returned missionaries through entrepreneurship,
              mentorship, and community-driven impact across Uganda and beyond.
            </p>
            <p className="text-xs uppercase tracking-widest text-yellow-600 mb-3">
              Follow Us
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-950 text-neutral-500 hover:border-yellow-600 hover:text-yellow-500 transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-yellow-600 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-yellow-500 flex items-center gap-2 transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Support */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-yellow-600 mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-yellow-500 flex items-center gap-2 transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-yellow-600 mb-5">
              Contact Us
            </h4>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-sm">
                📍
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-600 mb-1">Address</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Kansanga, Kiwafu Zone<br />Kampala, Uganda
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-sm">
                ✉️
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-600 mb-1">Email</p>
                <p className="text-sm text-neutral-400">kennethlubuulwa1820@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-sm">
                📞
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-600 mb-1">Telephone</p>
                <p className="text-sm text-neutral-400">+256 77211 3151</p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} RMEI — Return Missionary Entrepreneur Initiative. All rights reserved.
          </p>
          <span className="text-xs text-neutral-700">Built with purpose 🌍</span>
        </div>
      </div>
    </footer>
  );
}