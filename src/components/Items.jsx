"use client";
import React, { useState, useEffect } from "react";
import axios from "@/utils/axios";

export default function Items() {
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  // Hardcoded demo items
  const demoItems = [
    { name: "Camera Canon EOS 1500D", description: "Perfect for photography projects and events.", pricePerDay: 100, isRented: false },
    { name: "Electric Drill Machine", description: "Heavy-duty drill for home and professional use.", pricePerDay: 80, isRented: false },
    { name: "Mountain Bike", description: "Ideal for city rides and off-road adventures.", pricePerDay: 120, isRented: false },
    { name: "Projector Epson X05", description: "Bright projector for meetings and movie nights.", pricePerDay: 150, isRented: false },
    { name: "DSLR Nikon D3500", description: "Capture high-quality images and videos.", pricePerDay: 110, isRented: false },
    { name: "Camping Tent 4-Person", description: "Spacious tent for outdoor camping trips.", pricePerDay: 70, isRented: false },
    { name: "GoPro Hero 9", description: "Action camera for sports and travel.", pricePerDay: 90, isRented: false },
    { name: "Car Jack Hydraulic", description: "Reliable jack for car maintenance.", pricePerDay: 60, isRented: false },
    { name: "Power Washer 2000W", description: "Efficient cleaning for vehicles and patios.", pricePerDay: 100, isRented: false }
  ];

  async function fetchItems() {
    try {
      const response = await axios.get("/item");
      setItems(response.data.items);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  // Combine demoItems and fetched items
  const allItems = [...demoItems, ...items];

  return (
    <div className="py-8 px-2 md:px-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-green-900">Available Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {allItems.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-green-100 hover:shadow-2xl transition"
          >
            <div>
              <h2 className="text-xl font-bold text-green-800 mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-green-700 mb-1">
                Price: <span className="font-bold">{item.pricePerDay} RS / day</span>
              </p>
             <div className="flex items-center gap-2 bg-green-900 text-white px-3 py-1 rounded-lg w-fit mt-2">
  <span className="font-bold">Status:</span>
  <span
    className={`ml-2 px-3 py-1 rounded-full font-bold bg-white ${
      item.isRented ? "text-red-600" : "text-black"
    }`}
  >
    {item.isRented ? "Rented" : "Available"}
  </span>
</div>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < allItems.length && (
        <button
          className="block mx-auto mt-8 px-8 py-3 rounded-lg bg-green-900 text-white font-semibold hover:bg-green-800 transition"
          onClick={() => setVisibleCount(visibleCount + 8)}
        >
          Load More Items
        </button>
      )}
    </div>
  );
}