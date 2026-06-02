"use client";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(
      formData.entries()
    );

    console.log(data);

    // send to NestJS API
  }

  return (
    <section
      id="contact"
      className="py-24 bg-sky-50"
    >
      <div className="max-w-xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Book Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-10"
        >

          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl border"
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl border"
          />

          <input
            name="phone"
            placeholder="Phone"
            className="w-full p-4 rounded-xl border"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="w-full p-4 rounded-xl border"
          />

          <button
            className="w-full bg-sky-600 text-white py-4 rounded-xl"
          >
            Submit
          </button>

        </form>

      </div>
    </section>
  );
}