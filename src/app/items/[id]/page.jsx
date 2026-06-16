"use client";

import { useParams } from "next/navigation";
import itemsData from "@/data/itemsData";
import Link from "next/link";

export default function ItemDetailsPage() {
  const { id } = useParams();

  const item = itemsData.find((i) => i.id === parseInt(id));

  if (!item) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Item not found</h2>
        <Link href="/items" className="text-blue-600 mt-4 inline-block">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Back button */}
        <Link href="/items" className="text-blue-600 mb-6 inline-block">
          ← Back to Items
        </Link>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>

            <h1 className="text-3xl font-bold">
              {item.title}
            </h1>

            <p className="text-gray-600 mt-3">
              {item.fullDescription}
            </p>

            <p className="mt-4 text-lg font-bold text-blue-600">
              ${item.price}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Category: {item.category}
            </p>

            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}