export default function Services() {
  return (
    <section id="services" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-orbitron text-neon mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "High-performance websites and portals using modern stacks.",
            },
            {
              title: "UI/UX Design",
              desc: "Stunning, user-centric interfaces with clarity.",
            },
            {
              title: "Custom Applications",
              desc: "Custom platforms and solutions tailored to your unique needs.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-gray-800 p-6 rounded-lg border border-accent shadow-md hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-accent mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
