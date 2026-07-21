import { useScrollReveal } from "../hooks/useScrollReveal";

const teamMembers = [
  {
    id: 1,
    name: "Nyamwiza Sheillah",
    position: "Operations Manager",
    image: "/images/operations-manager.webp",
    description:
      "Oversees daily operations and ensures the organization runs efficiently.",
  },
  {
    id: 2,
    name: "Kenneth Lubuulwa",
    position: "Chairman Director",
    image: "/images/chairman-director.webp",
    description:
      "Provides strategic leadership and guides the organization's vision.",
  },
  {
    id: 3,
    name: "Innocent Muwanda",
    position: "IT Manager",
    image: "/images/it-manager.webp",
    description:
      "Manages technology systems, security, and digital initiatives.",
  },
];

export default function Team() {
  const headerRef = useScrollReveal("animate-slideUp");
  const gridRef = useScrollReveal("animate-slideUp200");

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Heading */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Leadership
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The dedicated team guiding our mission to empower returning missionaries 
            and foster sustainable economic growth across Uganda.
          </p>
        </div>

        {/* Team Grid */}
        <div ref={gridRef} className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300 text-center"
            >
              {/* Profile Image Container */}
              <div className="flex justify-center mb-6 relative">
                {/* Decorative background blur that activates on hover */}
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  className="relative z-10 w-40 h-40 rounded-full object-cover object-center ring-4 ring-blue-50 group-hover:ring-blue-100 transition-all duration-300"
                />
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>

              <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">
                {member.position}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}