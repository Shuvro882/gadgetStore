"use client";

import Link from "next/link";


const Hero = () => {
  return (
    <section className="bg-linear-to-r from-sky-50 to-sky-400 py-16">

      <div className="px-4 flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="flex-1 pt-5">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Manage Your <span className="text-blue-600">Gadgets</span> Easily & Smartly
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            A simple and modern gadget management system built with Next.js.
            Add, view, and manage your favorite gadgets in one place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/items"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Explore Items
            </Link>

            <Link
              href="/items/add"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Add Gadget
            </Link>
          </div>

        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center ">
          <img
            src="/images/gadgets.jpg"
            alt="Gadgets"
            className="w-full max-w-md h-100 rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;