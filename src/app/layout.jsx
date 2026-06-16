import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gadget Store",
  description: "A simple gadget management app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">

        {/* Shared container wrapper */}
        <div className="max-w-7xl mx-auto w-full flex flex-col min-h-screen">

          {/* Navbar */}
          <header>
            <Navbar />
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </div>

        {/* Toast */}
        <Toaster position="top-right" />

      </body>
    </html>
  );
}