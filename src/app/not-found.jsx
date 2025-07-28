"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center bg-gray-50">
      <h1
        className="text-6xl font-extrabold text-green-700 mb-4"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-green-900 h1 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}