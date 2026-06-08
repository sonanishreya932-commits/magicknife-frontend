import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { useCart } from "../context/CartContext";
import { SITE } from "../constants/site";

const FullMenu = () => {

  console.log("FULLMENU COMPONENT LOADED");
  
  const { t } = useTranslation();
  const { addToCart } = useCart();

  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {

    console.log("API BASE =", SITE.apiBase);

      console.log("🔄 FullMenu fetching at:", new Date().toLocaleTimeString());
      try {
        const res = await axios.get(
          `${SITE.apiBase}/api/menu?flat=true&ts=${Date.now()}`,
          { headers: { "Cache-Control": "no-cache", Pragma: "no-cache" } }
        );
        console.log("📥 FullMenu got data:", res.data.slice(0, 5));

        console.log("FIRST ITEM NAME:", res.data[0]?.name);

        setMenuData(res.data);
      } catch (err) {
        console.error("❌ FullMenu fetch error:", err);
        const fallback = t("menu_preview.categories", { returnObjects: true }) || [];
        const flat = fallback.flatMap((cat) =>
          (cat.items || []).map((item) => ({ ...item, category: cat.name }))
        );
        setMenuData(flat);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
    const interval = setInterval(fetchMenuItems, 5000);
    return () => clearInterval(interval);
  }, [t]);

  const categories = [
    t("menu_page.all"),
    ...new Set(menuData.map((item) => item?.category).filter(Boolean)),
  ];

  const filteredData = menuData.filter(
    (item) =>
      (activeTab === t("menu_page.all") || item?.category === activeTab) &&
      (item?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item?.desc || item?.description)?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#080d0e] text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-cursive text-3xl text-primary block mb-4"
            >
              {t("menu_page.subtitle")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl uppercase tracking-[0.3em] text-white sm:text-6xl"
            >
              {t("menu_page.title")}
            </motion.h1>
            <div className="mt-8 mx-auto h-[1px] w-24 bg-primary/30" />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeTab === cat
                    ? "bg-primary border-primary text-main"
                    : "border-white/10 text-white/60 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-md mx-auto mb-12">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              size={18}
            />
            <input
              type="text"
              placeholder={t("menu_page.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-all"
            />
          </div>

          {loading ? (
            <p className="text-center text-white/50 font-light tracking-widest uppercase text-sm">
              {t("menu_page.loading")}
            </p>
          ) : filteredData.length === 0 ? (
            <p className="text-center text-white/50 font-light tracking-widest uppercase text-sm">
              {t("menu_page.empty")}
            </p>
          ) : (
            <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {filteredData.map((item, index) => (
                <motion.div
                  key={item?._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.3em] text-primary/60 block mb-2">
                        {item?.category}
                      </span>
                      <h4 className="font-display text-lg tracking-widest text-white group-hover:text-primary transition-colors uppercase">
                        {item?.name}
                      </h4>
                    </div>
                    <span className="font-sans text-primary font-bold shrink-0">
                      {item?.price}
                    </span>
                  </div>

                  <p className="text-white/40 font-sans text-sm leading-relaxed mb-6">
                    {item?.desc || item?.description}
                  </p>

                  <button
                    onClick={() => addToCart(item)}
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary hover:text-white transition-colors"
                  >
                    <Plus size={14} />
                    {t("menu_page.add")}
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FullMenu;
