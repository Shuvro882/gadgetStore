"use client";

import itemsData from "@/data/itemsData";
import Link from "next/link";

const FeaturedGadgets = () => {
    const featuredItems = itemsData.slice(0, 4);

    return (
        <section className="py-16 bg-white">

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Featured <span className="text-blue-600">Gadgets</span>
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Discover our most popular and trending gadgets
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">

                    {featuredItems.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-xl shadow-sm hover:shadow-md transition bg-white overflow-hidden flex flex-col h-full"
                        >

                            {/* Image (fixed ratio) */}
                            <div className="w-full aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col flex-1">

                                <h3 className="font-semibold text-lg">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                    {item.shortDescription}
                                </p>

                                <p className="mt-2 font-bold text-blue-600">
                                    ${item.price}
                                </p>

                                {/* Button fixed at bottom */}
                                <div className="mt-auto pt-4">
                                    <Link
                                        href={`/items/${item.id}`}
                                        className="block text-center w-full text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                    >
                                        View Details
                                    </Link>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default FeaturedGadgets;