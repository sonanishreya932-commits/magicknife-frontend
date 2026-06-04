import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { useCart } from "../context/CartContext";

const FullMenu = () => {
  console.log("🔥 FULLMENU LOADED");

  const { t } = useTranslation();
  const { addToCart } = useCart();

  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🚀 FETCH FUNCTION
  const fetchMenuItems = async () => {
    try {
      console.log("🔥 FETCHING MENU");

      setLoading(true);

      const res = await axios.get(
        "https://magicknife-backend.onrender.com/api/menu?flat=true&ts=" + Date.now(),
        {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        }
      );

      setMenuData(res.data);
    } catch (error) {
      console.log("❌ ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🚀 AUTO REFRESH (REAL FIX)
  useEffect(() => {
    console.log("🔥 COMPONENT MOUNTED");

    fetchMenuItems();

    const interval = setInterval(() => {
      fetchMenuItems();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Categories
  const categories = [
    "All",
    ...new Set(menuData.map((item) => item?.category).filter(Boolean)),
  ];

  // Filter
  const filteredData = menuData.filter(
    (item) =>
      (activeTab === "All" || item?.category === activeTab) &&
      (item?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item?.desc?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#080d0e] text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div style={{ color: "red", fontSize: "30px", textAlign: "center" }}>
          FULLMENU TEST 999
        </div>

        <div className="text-center text-red-500 mb-6">
          LIVE MENU TEST
        </div>

        {/* CATEGORY */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded border ${
                activeTab === cat
                  ? "bg-green-500 text-black"
                  : "border-gray-600 text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SEARCH */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded bg-[#111] border border-gray-700 text-white"
          />
        </div>

        {/* MENU */}
        {loading ? (
          <h1 className="text-center">Loading Menu...</h1>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={item?._id || index}
                  className="border border-gray-700 rounded p-4"
                >
                  <div className="flex justify-between">
                    <h4>{item?.name}</h4>
                    <span className="text-green-400">{item?.price}</span>
                  </div>

                  <p className="text-gray-400">{item?.desc}</p>

                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 text-black p-2 mt-2"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              ))
            ) : (
              <h2>No items found</h2>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default FullMenu;