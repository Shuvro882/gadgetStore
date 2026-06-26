export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-gray-800">
            Contact <span className="text-blue-600">Us</span>
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Have a question about our gadgets or services? We'd love to hear
            from you. Fill out the form below and we'll get back to you as soon
            as possible.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-lg">📍 Address</h3>
                <p className="text-gray-600 mt-1">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📧 Email</h3>
                <p className="text-gray-600 mt-1">
                  support@gadgetstore.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📞 Phone</h3>
                <p className="text-gray-600 mt-1">
                  +880 1700-000000
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">🕒 Working Hours</h3>
                <p className="text-gray-600 mt-1">
                  Saturday - Thursday
                </p>

                <p className="text-gray-600">
                  9:00 AM - 8:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">

              <div>

                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}