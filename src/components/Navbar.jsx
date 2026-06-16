"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-200 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          GadgetStore
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/items" className="hover:text-blue-600">Items</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
        </div>

        {/* Right Side (Desktop Auth Buttons) */}
        <div className="hidden md:flex items-center gap-3">
          <Link href='/login' className="px-4 py-1.5 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition">
            Login
          </Link>

          <Link href="/register" className="px-4 py-1.5 text-sm rounded border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
            Register
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t bg-white">

          <Link href="/" className="block py-2" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/items" className="block py-2" onClick={() => setOpen(false)}>
            Items
          </Link>

          <Link href="/about" className="block py-2" onClick={() => setOpen(false)}>
            About
          </Link>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-2 mt-3">
            <Link href='/login' className="w-full px-4 py-2 rounded bg-blue-600 text-white">
              Login
            </Link>

            <Link href='/register' className="w-full px-4 py-2 rounded border border-blue-600 text-blue-600">
              Register
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;