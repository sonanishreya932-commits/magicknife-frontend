import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { Plus, X } from "lucide-react";

const BASE_URL = "https://magicknife-backend.onrender.com";

const Gallery = () => {
  console.log("🔥 GALLERY.JSX IS RUNNING");

  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    "All",
    "Main Course",
    "Street Food",
    "South Indian",
    "Desserts",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchGallery = () => {
      axios
        .get(`${BASE_URL}/api/gallery?ts=${Date.now()}`, {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        })
        .then((res) => {
          console.log("🔥 LIVE GALLERY API:", res.data);

          setImages(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("❌ Gallery Error:", err);
          setLoading(false);
        });
    };

    fetchGallery(); // initial load

    const interval = setInterval(fetchGallery, 5000); // auto refresh

    return () => clearInterval(interval);
  }, []);

  const filteredImages = images.filter((img) => {
    const title = img.title?.toLowerCase() || "";

    if (filter === "All") return true;

    if (filter === "South Indian")
      return title.includes("dosa") || title.includes("idli");

    if (filter === "Street Food")
      return (
        title.includes("puri") ||
        title.includes("vada") ||
        title.includes("pav") ||
        title.includes("samosa") ||
        title.includes("chat")
      );

    if (filter === "Desserts")
      return (
        title.includes("jamun") ||
        title.includes("payasam") ||
        title.includes("dessert")
      );

    if (filter === "Main Course")
      return (
        !title.includes("dosa") &&
        !title.includes("idli") &&
        !title.includes("puri") &&
        !title.includes("pav") &&
        !title.includes("jamun")
      );

    return true;
  });

  return (
    <div className="bg-[#080d0e] min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* DEBUG */}
          <div style={{
            color: "red",
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}>
            LIVE GALLERY API WORKING
          </div>

          {/* Heading */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-cursive text-3xl text-primary block mb-4"
            >
              {t("gallery.subtitle")}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-7xl font-display tracking-[0.2em] text-white uppercase"
            >
              OUR <span className="text-primary">GALLERY</span>
            </motion.h1>

            <div className="mt-8 mx-auto h-[1px] w-32 bg-primary/50" />
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat
                    ? "bg-primary border-primary text-main"
                    : "border-white/10 text-white/60 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Loading */}
          {loading && (
            <h2 className="text-center text-white text-2xl">
              Loading Gallery...
            </h2>
          )}

          {/* Empty */}
          {!loading && filteredImages.length === 0 && (
            <h2 className="text-center text-red-500 text-2xl">
              No Gallery Images Found
            </h2>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredImages.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer shadow-2xl"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image || item.src}
                    alt={item.title || item.name}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Plus className="text-white" size={30} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            <motion.img
              src={selectedImage.image || selectedImage.src}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;