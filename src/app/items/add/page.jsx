"use client";

import PrivateRoute from "@/components/shared/PrivateRoute";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddItemPage() {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      title,
      shortDescription,
      fullDescription,
      price,
      image,
    };

    const existingItems =
      JSON.parse(localStorage.getItem("gadgets")) || [];

    existingItems.push(newItem);

    localStorage.setItem(
      "gadgets",
      JSON.stringify(existingItems)
    );

    toast.success("Product Added Successfully 🎉");

    setTitle("");
    setShortDescription("");
    setFullDescription("");
    setPrice("");
    setImage("");
  };

  return (
    <PrivateRoute>
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          Add New Gadget
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Fill in the details to add a new gadget.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">
              Title
            </label>

            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter gadget title"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block mb-2 font-medium">
              Short Description
            </label>

            <input
              type="text"
              required
              value={shortDescription}
              onChange={(e) =>
                setShortDescription(e.target.value)
              }
              placeholder="Short description"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="block mb-2 font-medium">
              Full Description
            </label>

            <textarea
              rows={5}
              required
              value={fullDescription}
              onChange={(e) =>
                setFullDescription(e.target.value)
              }
              placeholder="Full description"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-medium">
              Price
            </label>

            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-medium">
              Image URL (Optional)
            </label>

            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Paste image URL"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>
    </PrivateRoute>
  );
}