import React, { useEffect, useState } from "react";
import "./Gellery.css";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { Plus, X } from "lucide-react";

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  
  const images = t('gallery.items', { returnObjects: true }) || [];
  
  // Categorize images for filtering (simulated)
  const categories = ["All", "Main Course", "Street Food", "South Indian", "Desserts"];
  
  const filteredImages = images.filter(img => {
    if (filter === "All") return true;
    if (filter === "South Indian") return img.title.toLowerCase().includes("dosa") || img.title.toLowerCase().includes("idli");
    if (filter === "Street Food") return img.title.toLowerCase().includes("puri") || img.title.toLowerCase().includes("vada") || img.title.toLowerCase().includes("pav") || img.title.toLowerCase().includes("samosa") || img.title.toLowerCase().includes("chat");
    if (filter === "Desserts") return img.title.toLowerCase().includes("jamun") || img.title.toLowerCase().includes("payasam");
    if (filter === "Main Course") return !img.title.toLowerCase().includes("dosa") && !img.title.toLowerCase().includes("idli") && !img.title.toLowerCase().includes("puri") && !img.title.toLowerCase().includes("pav") && !img.title.toLowerCase().includes("jamun");
    return true;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#080d0e] min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-cursive text-3xl text-primary block mb-4"
            >
              {t('gallery.subtitle')}
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

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-primary border-primary text-main' 
                  : 'border-white/10 text-white/60 hover:border-primary/50 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer shadow-2xl"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    crossOrigin="anonymous"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=800&auto=format&fit=crop";
                    }}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                    <div className="size-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <Plus className="text-white" size={24} />
                    </div>
                    <h4 className="font-display text-xs tracking-[0.2em] text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {item.title}
                    </h4>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video sm:aspect-square lg:aspect-video overflow-hidden rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-display text-2xl tracking-[0.2em] uppercase">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
