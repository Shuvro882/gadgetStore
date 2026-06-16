"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-300 mt-10">
      
      <div className="px-4 py-10 grid gap-8 md:grid-cols-3">

        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold text-blue-600">GadgetStore</h2>
          <p className="text-sm text-gray-600 mt-2">
            A simple gadget management app built with Next.js.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/items" className="hover:text-blue-600">Items</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-600">
            Email: support@gadgetstore.com <br />
            Phone: +880 123 456 789
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GadgetStore. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;