"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();

      toast.success("Logout Successful");

      setDropdown(false);
      setOpen(false);

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow border-b">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          GadgetStore
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-7 font-medium">

          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="/items"
            className="hover:text-blue-600 transition"
          >
            Items
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-600 transition"
          >
            About
          </Link>

          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>

        </div>

        {/* Desktop Right */}

        <div className="hidden md:flex items-center gap-3">

          {!user ? (

            <>

              <Link
                href="/login"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Register
              </Link>

            </>

          ) : (

            <div className="relative">

              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2"
              >

                <Image
                  src={
                    user.photoURL ||
                    "https://ui-avatars.com/api/?name=User&background=2563eb&color=fff"
                  }
                  alt="user"
                  width={42}
                  height={42}
                  className="rounded-full border object-cover"
                />

                <FaChevronDown
                  className={`transition ${dropdown ? "rotate-180" : ""
                    }`}
                />

              </button>

              {dropdown && (

                <div className="absolute right-0 mt-3 w-64 rounded-xl bg-white shadow-xl border overflow-hidden">

                  {/* User Info */}

                  <div className="px-5 py-4 border-b">

                    <h3 className="font-semibold">
                      {user.displayName || "User"}
                    </h3>

                    <p className="text-sm text-gray-500 break-all">
                      {user.email}
                    </p>

                  </div>

                  <Link
                    href="/items/add"
                    onClick={() => setDropdown(false)}
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Add Product
                  </Link>

                  <Link
                    href="/items/manage"
                    onClick={() => setDropdown(false)}
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Manage Products
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-5 py-3 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>

                </div>

              )}

            </div>

          )}

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">

          <div className="px-4 py-4 space-y-2">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/items"
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-blue-600"
            >
              Items
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <hr className="my-2" />

            {!user ? (
              <div className="space-y-2">

                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center rounded-lg bg-blue-600 text-white py-2 hover:bg-blue-700"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center rounded-lg border border-blue-600 text-blue-600 py-2 hover:bg-blue-50"
                >
                  Register
                </Link>

              </div>
            ) : (
              <div>

                {/* User Info */}

                <div className="flex items-center gap-3 py-3">

                  <Image
                    src={
                      user.photoURL ||
                      "https://ui-avatars.com/api/?name=User&background=2563eb&color=fff"
                    }
                    alt="user"
                    width={48}
                    height={48}
                    className="rounded-full border"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {user.displayName || "User"}
                    </h3>

                    <p className="text-xs text-gray-500 break-all">
                      {user.email}
                    </p>
                  </div>

                </div>

                <hr className="my-2" />

                <Link
                  href="/items/add"
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-blue-600"
                >
                  Add Product
                </Link>

                <Link
                  href="/items/manage"
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-blue-600"
                >
                  Manage Products
                </Link>

                <button
                  onClick={handleLogout}
                  className="mt-3 w-full rounded-lg bg-red-500 text-white py-2 hover:bg-red-600 transition"
                >
                  Logout
                </button>

              </div>
            )}

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;