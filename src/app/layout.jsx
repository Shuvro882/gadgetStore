import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/AuthProvider";

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

        <AuthProvider>

          <div className="max-w-7xl mx-auto w-full flex flex-col min-h-screen">

            <header>
              <Navbar />
            </header>

            <main className="flex-1">
              {children}
            </main>

            <Footer />

          </div>

        </AuthProvider>

        <Toaster position="top-right" />

      </body>
    </html>
  );
}