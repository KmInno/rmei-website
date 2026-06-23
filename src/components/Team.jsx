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
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Meet Our Team
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated leaders who guide and support our mission.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              {/* Profile Image */}
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
                />
              </div>

              {/* Info */}
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {member.name}
              </h3>

              <p className="text-blue-600 font-semibold mt-1">
                {member.position}
              </p>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}