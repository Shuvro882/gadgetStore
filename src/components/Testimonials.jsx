"use client";

import { FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahim Uddin",
      review:
        "GadgetStore is very easy to use. I can manage all my gadgets in one place.",
    },
    {
      name: "Ayesha Khan",
      review:
        "Beautiful UI and smooth experience. Loved the responsive design!",
    },
    {
      name: "Tanvir Hasan",
      review:
        "Very helpful app for organizing my devices. Clean and modern layout.",
    },
  ];

  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <span className="text-blue-600">Users Say</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Real feedback from GadgetStore users
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50"
            >

              <div className="flex items-center gap-3 mb-4">
                <FaUserCircle className="text-3xl text-blue-600" />
                <h3 className="font-semibold">{item.name}</h3>
              </div>

              <p className="text-gray-600 text-sm">
                "{item.review}"
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;