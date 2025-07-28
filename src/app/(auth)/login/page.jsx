"use client";
import { useState } from "react";
import React from "react";
import axios from "@/utils/axios";
import Link from "next/link";   

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("/user/login", form);
      // Store token in sessionStorage
      if (res.data && res.data.token) {
        sessionStorage.setItem("token", res.data.token);
      }
      window.location.href = "/"; // Redirect to home after successful login
    } catch (error) {
      setLoading(false);
      setError("Invalid credentials");
    }   
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-3xl font-extrabold text-black text-center mb-2">
          Login to <span>Rentistaan</span>
        </h1>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-green-900 text-sm font-medium text-black mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A07C2C]"
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-green-900 text-sm font-medium text-black mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A07C2C]"
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#2C662C] text-white font-bold py-2 rounded-lg hover:bg-[#2C662C] transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-green-900 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}