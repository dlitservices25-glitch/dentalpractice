export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <img
          src="dentist.jpg"
          alt="Clinic"
          className="rounded-3xl"
        />

        <div>

          <h2 className="text-4xl font-bold">
            Modern Dental Care
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We combine advanced technology,
            experienced clinicians, and a caring
            approach to provide outstanding dental
            treatment for every patient.
          </p>

        </div>

      </div>
    </section>
  );
}