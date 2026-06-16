"use client";

import { FaBolt, FaSearch, FaShieldAlt, FaMobileAlt } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose <span className="text-blue-600">GadgetStore</span>
        </h2>

        <p className="text-gray-600 mt-3">
          Everything you need to manage your gadgets efficiently
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-4 sm:grid-cols-2">

          {/* Card 1 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <FaBolt className="text-3xl text-blue-600 mx-auto" />
            <h3 className="font-semibold mt-4">Fast Performance</h3>
            <p className="text-sm text-gray-600 mt-2">
              Lightning fast experience for managing your items.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <FaSearch className="text-3xl text-blue-600 mx-auto" />
            <h3 className="font-semibold mt-4">Easy Search</h3>
            <p className="text-sm text-gray-600 mt-2">
              Quickly find any gadget with smart filtering.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <FaShieldAlt className="text-3xl text-blue-600 mx-auto" />
            <h3 className="font-semibold mt-4">Secure Data</h3>
            <p className="text-sm text-gray-600 mt-2">
              Your data is safe and protected at all times.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <FaMobileAlt className="text-3xl text-blue-600 mx-auto" />
            <h3 className="font-semibold mt-4">Responsive UI</h3>
            <p className="text-sm text-gray-600 mt-2">
              Works perfectly on mobile, tablet, and desktop.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Features;