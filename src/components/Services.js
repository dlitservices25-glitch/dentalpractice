const services = [
  {
    title: "General Dentistry",
    description: "Routine exams and preventive care."
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments."
  },
  {
    title: "Dental Implants",
    description: "Long-lasting tooth replacement."
  },
  {
    title: "Invisalign",
    description: "Straighten teeth discreetly."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-xl mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}