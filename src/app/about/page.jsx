"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function AboutPage() {
  return (
    <div>
        <Navbar />
        <main className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-black">
        About <span>Rentistaan</span>
      </h1>
      <p className="text-lg text-green-900 text-center mb-10 max-w-2xl">
        Revolutionizing rentals in Pakistan with cutting-edge technology and community-first values.
      </p>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Who We Are */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-2 text-black">
            Who We Are
          </h2>
          <p className="text-green-900">
            Rentistaan is a modern MERN stack platform where you can rent or list items like cameras, tools, and vehicles. We connect people to help them earn or save money through secure, tech-driven rentals.
          </p>
        </div>
        {/* Our Purpose */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-2 text-black">
            Our Purpose
          </h2>
          <ul className="list-disc pl-5 text-green-900 space-y-1">
            <li>Empower people to earn by renting their items.</li>
            <li>Help others save by avoiding unnecessary purchases.</li>
            <li>Provide a seamless, safe, and user-friendly experience.</li>
          </ul>
        </div>
        {/* Our Vision */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-2 text-black">
            Our Vision
          </h2>
          <p className="text-green-900">
            To become Pakistan’s leading rental marketplace, fostering a culture of sharing and sustainability, and making quality items accessible to everyone.
          </p>
        </div>
        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-2 text-black">
            How It Works
          </h2>
          <ul className="list-decimal pl-5 text-green-900 space-y-1">
            <li>Sign up and create your profile.</li>
            <li>List your items or browse available rentals.</li>
            <li>Connect, rent, and enjoy a secure transaction process.</li>
          </ul>
        </div>
        {/* Our Values */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-2 text-black">
            Our Values
          </h2>
          <ul className="list-disc pl-5 text-green-900 space-y-1">
            <li>Trust & Transparency</li>
            <li>Innovation & Simplicity</li>
            <li>Community & Sustainability</li>
          </ul>
        </div>
        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-2 text-black">
            Why Choose Us?
          </h2>
          <p className="text-green-900">
            We offer a secure, easy-to-use platform with verified users, responsive support, and a growing community. Your satisfaction and safety are our top priorities.
          </p>
        </div>
        {/* Meet the Team */}
        <div className="bg-white rounded-2xl shadow p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-2 text-black">
            Meet the Team
          </h2>
          <p className="text-green-900">
            Our passionate team of developers, designers, and support staff is dedicated to making Rentistaan the best rental experience in Pakistan. We believe in technology, trust, and teamwork.
          </p>
        </div>
      </div>
    </main>
    <Footer/>
    </div>
  );
}