import React from 'react'

const About = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold">
          About GadgetStore
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-lg">
          GadgetStore is a modern gadget management platform built with
          Next.js. Users can browse gadgets, view detailed information,
          and manage products through a clean and responsive interface.
        </p>

        {/* Optional Image */}
        <div className="mt-10">
          <img
            src="/images/about-gadget.webp"
            alt="About GadgetStore"
            className="w-full max-w-xl mx-auto rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>

  )
}

export default About