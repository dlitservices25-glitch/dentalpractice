export default function Hero() {
  return (
    <section className="pt-32 min-h-screen flex items-center bg-gradient-to-b from-sky-50 to-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div className="flex flex-col justify-center">

          <span className="text-sky-600 font-medium">
            Trusted Family Dentistry
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Your Smile.
            <br />
            Our Priority.
          </h1>

          <p className="text-gray-600 text-lg mt-6">
            Providing exceptional dental care with
            modern technology and a friendly team.
          </p>

          <div className="mt-8">
            <button className="bg-sky-600 text-white px-8 py-4 rounded-xl hover:bg-sky-700 transition">
              Book Appointment
            </button>
          </div>

        </div>

        <div>
          <img
            src="dentist.jpg"
            alt="Dental Practice"
            className="rounded-3xl shadow-xl"
          />
        </div>

      </div>

    </section>
  );
}