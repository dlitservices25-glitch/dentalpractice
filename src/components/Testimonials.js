export default function Testimonials() {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Patient Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="p-6 shadow rounded-2xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Fantastic experience.
            </p>
          </div>

          <div className="p-6 shadow rounded-2xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Friendly and professional team.
            </p>
          </div>

          <div className="p-6 shadow rounded-2xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Highly recommended.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}