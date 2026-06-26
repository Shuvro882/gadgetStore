"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import PrivateRoute from "@/components/shared/PrivateRoute";

export default function ManageItemsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem("gadgets")) || [];

    setItems(storedItems);
  }, []);

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);

    localStorage.setItem(
      "gadgets",
      JSON.stringify(updatedItems)
    );

    toast.success("Product Deleted Successfully");
  };

  return (
    <PrivateRoute>

      <div className="min-h-screen bg-gray-100 py-10 px-4">

        <div className="max-w-7xl mx-auto">

          <div className="mb-8">

            <h1 className="text-3xl font-bold">
              Manage Products
            </h1>

            <p className="text-gray-600 mt-2">
              View and manage all your added gadgets.
            </p>

          </div>

          {items.length === 0 ? (

            <div className="bg-white rounded-xl shadow p-10 text-center">

              <h2 className="text-2xl font-semibold">
                No Products Found
              </h2>

              <p className="text-gray-500 mt-3">
                Please add your first product.
              </p>

              <Link
                href="/items/add"
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Add Product
              </Link>

            </div>

          ) : (

            <div className="overflow-x-auto bg-white rounded-xl shadow">

              <table className="w-full">

                <thead className="bg-blue-600 text-white">

                  <tr>

                    <th className="px-5 py-4 text-left">
                      Image
                    </th>

                    <th className="px-5 py-4 text-left">
                      Product
                    </th>

                    <th className="px-5 py-4 text-left">
                      Price
                    </th>

                    <th className="px-5 py-4 text-center">
                      Actions
                    </th>

                  </tr>

                </thead>

               <tbody>
                                  {items.map((item) => (

                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50 transition"
                    >

                      <td className="px-5 py-4">

                        {item.image ? (

                          <Image
                            src={item.image}
                            alt={item.title}
                            width={70}
                            height={70}
                            className="rounded-lg object-cover"
                          />

                        ) : (

                          <div className="w-[70px] h-[70px] rounded-lg bg-gray-200 flex items-center justify-center text-sm">
                            No Image
                          </div>

                        )}

                      </td>

                      <td className="px-5 py-4">

                        <h3 className="font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {item.shortDescription}
                        </p>

                      </td>

                      <td className="px-5 py-4 font-semibold">
                        ${item.price}
                      </td>

                      <td className="px-5 py-4">

                        <div className="flex justify-center gap-3">

                          <Link
                            href={`/items/${item.id}`}
                            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                          >
                            View
                          </Link>

                          <button
                            onClick={() => handleDelete(item.id)}
                            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </PrivateRoute>
  );
}