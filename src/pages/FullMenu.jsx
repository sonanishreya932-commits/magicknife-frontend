<h1 style={{ color: "red", fontSize: "40px" }}>
  UPDATED LIVE WEBSITE TEST
</h1>
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Plus, ShoppingCart, X, ChevronRight, ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import { useCart } from '../context/CartContext'

export default function FullMenu() {
  const { t } = useTranslation()
  const { addToCart, cartItems } = useCart()
  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [menuData, setMenuData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    try {
     fetch('https://magicknife-backend.onrender.com/api/menu')
      if (response.ok) {
        const data = await response.json()
        setMenuData(data)
      } else {
        // Fallback to i18n data if server is not running
        setMenuData(t('menu_preview.categories', { returnObjects: true }) || [])
      }
    } catch (error) {
      console.error('Error fetching menu:', error)
      setMenuData(t('menu_preview.categories', { returnObjects: true }) || [])
    } finally {
      setLoading(false)
    }
  }

  const categories = ['All', ...menuData.map(c => c.name)]
  
  const filteredData = menuData.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      (activeTab === 'All' || cat.name === activeTab) &&
      (item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       item.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(cat => cat.items.length > 0)

  return (
    <div className="min-h-screen bg-[#080d0e] text-white font-sans">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-cursive text-3xl text-primary block mb-4"
            >
              {t('menu_preview.subtitle')}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-display text-5xl uppercase tracking-[0.2em] text-white sm:text-7xl"
            >
              {t('menu_preview.title')}
            </motion.h1>
            <div className="mt-8 flex justify-center">
              <div className="h-[1px] w-32 bg-primary/50" />
            </div>
          </div>

          {/* Search & Tabs */}
          <div className="mb-16 space-y-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
              <input 
                type="text"
                placeholder="Search your favorite dish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:border-primary focus:outline-none transition-all"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeTab === cat 
                    ? 'bg-primary border-primary text-main' 
                    : 'border-white/10 text-white/60 hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-white/60 font-display tracking-widest uppercase text-xs">Loading Menu...</p>
            </div>
          ) : (
            <>
              {/* Menu Grid */}
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-20">
            <AnimatePresence mode="wait">
              {filteredData.map((section) => (
                <motion.div 
                  key={section.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-8"
                >
                  <h3 className="mb-10 font-display text-2xl uppercase tracking-widest text-primary border-b border-primary/20 pb-4 flex items-center justify-between">
                    {section.name}
                    <Filter size={16} className="text-primary/30" />
                  </h3>
                  <div className="space-y-10">
                    {section.items.map((item) => (
                      <div key={item.name} className="group relative">
                        <div className="flex items-baseline justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <button 
                              onClick={() => addToCart(item)}
                              className="size-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-main transition-all shrink-0"
                            >
                              <Plus size={18} />
                            </button>
                            <div>
                              <h4 className="font-sans text-xl font-light tracking-wide text-white transition-colors group-hover:text-primary">
                                {item.name}
                              </h4>
                              <p className="mt-2 font-sans text-sm font-light text-white/40 leading-relaxed max-w-sm">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                          <div className="flex-1 border-b border-dashed border-primary/10 mx-4" />
                          <span className="font-sans text-xl text-primary font-light whitespace-nowrap">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          </>
          )}

          {/* Footer Note */}
          <div className="mt-24 text-center">
            <div className="inline-block p-10 rounded-3xl border border-primary/10 bg-white/5 backdrop-blur-sm max-w-3xl">
              <p className="font-cursive text-3xl text-primary mb-6">Experience True Indian Hospitality</p>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                All our dishes are prepared fresh daily using authentic spices imported from India. 
                We take pride in serving 100% pure vegetarian cuisine in the heart of Frankfurt.
              </p>
              <a
                href="/#reservation"
                className="inline-block bg-primary px-12 py-5 font-display text-xs uppercase tracking-[0.4em] text-main font-bold transition-all hover:bg-white rounded-full shadow-2xl"
              >
                Book Your Experience
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
