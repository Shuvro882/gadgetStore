"use client";

import { useState } from "react";
import itemsData from "@/data/itemsData";
import Link from "next/link";

export default function Items() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    // unique categories
    const categories = ["All", ...new Set(itemsData.map((i) => i.category))];

    // filtering logic
    const filteredItems = itemsData.filter((item) => {
        const matchSearch = item.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory =
            category === "All" || item.category === category;

        return matchSearch && matchCategory;
    });

    return (
        <section className="py-10">

            <div className="max-w-7xl mx-auto px-4">

                {/* Title */}
                <h1 className="text-3xl font-bold mb-6">
                    All <span className="text-blue-600">Items</span>
                </h1>

                {/* Search + Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search gadgets..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border p-2 rounded w-full"
                    />

                    {/* Filter */}
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border p-2 rounded w-full md:w-1/3"
                    >
                        {categories.map((cat, i) => (
                            <option key={i} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>

                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">

                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-xl shadow-sm hover:shadow-md transition bg-white flex flex-col h-full overflow-hidden"
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

                                {/* Title (fixed height area) */}
                                <h3 className="font-semibold text-lg line-clamp-1">
                                    {item.title}
                                </h3>

                                {/* Description (fixed 2 lines) */}
                                <p className="text-sm text-gray-600 mt-1 line-clamp-2 min-h-[40px]">
                                    {item.shortDescription}
                                </p>

                                {/* Price */}
                                <p className="mt-2 font-bold text-blue-600">
                                    ${item.price}
                                </p>

                                {/* Button always bottom */}
                                <div className="mt-auto pt-4">
                                    <Link
                                        href={`/items/${item.id}`}
                                        className="block text-center w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
}