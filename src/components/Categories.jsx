"use client";

import { FaMobileAlt, FaLaptop, FaTabletAlt, FaClock, FaHeadphones } from "react-icons/fa";

const Categories = () => {
  const categories = [
    { name: "Smartphones", icon: <FaMobileAlt /> },
    { name: "Laptops", icon: <FaLaptop /> },
    { name: "Tablets", icon: <FaTabletAlt /> },
    { name: "Smart Watches", icon: <FaClock /> },
    { name: "Accessories", icon: <FaHeadphones /> },
  ];

  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Browse By <span className="text-blue-600">Categories</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Find gadgets based on your interest
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-5">

          {categories.map((cat, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer text-center"
            >

              <div className="text-3xl text-blue-600 flex justify-center">
                {cat.icon}
              </div>

              <h3 className="mt-3 font-semibold text-lg">
                {cat.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;