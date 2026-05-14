import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight } from 'lucide-react'

const MenuPreview = () => {
  const { t } = useTranslation()
  const [menuData, setMenuData] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/menu')
      if (response.ok) {
        const data = await response.json()
        setMenuData(data)
      } else {
        setMenuData(t('menu_preview.categories', { returnObjects: true }) || [])
      }
    } catch (error) {
      console.error('Error fetching menu preview:', error)
      setMenuData(t('menu_preview.categories', { returnObjects: true }) || [])
    }
  }

  if (menuData.length === 0) return null;

  return (
    <section id="menu" className="relative bg-[#080d0e] py-24 sm:py-32 overflow-hidden border-t border-primary/10">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side - Info & Navigation */}
          <div className="lg:col-span-5">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-cursive text-3xl text-primary block mb-4"
            >
              {t('menu_preview.subtitle')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-4xl uppercase tracking-[0.2em] text-white sm:text-6xl mb-8"
            >
              {t('menu_preview.title')}
            </motion.h2>

            <div className="space-y-4 mt-12">
              {menuData.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full group flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 ${
                    activeCategory === index 
                    ? 'bg-primary border-primary text-main' 
                    : 'bg-white/5 border-white/10 text-white hover:border-primary/50'
                  }`}
                >
                  <span className="font-display text-sm tracking-[0.2em] uppercase">
                    {category.name}
                  </span>
                  <ChevronRight 
                    className={`transition-transform duration-500 ${
                      activeCategory === index ? 'rotate-90' : 'group-hover:translate-x-2'
                    }`} 
                    size={20} 
                  />
                </button>
              ))}
            </div>

            <Link 
              to="/menu"
              className="mt-12 group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
            >
              <span>{t('specialties.button')}</span>
              <div className="w-12 h-[1px] bg-primary group-hover:w-20 group-hover:bg-white transition-all" />
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Side - Items List */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid gap-6"
              >
                {menuData[activeCategory]?.items.map((item, idx) => (
                  <div 
                    key={item.name}
                    className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-display text-lg tracking-widest text-white group-hover:text-primary transition-colors uppercase">
                        {item.name}
                      </h4>
                      <span className="font-sans text-primary font-bold">{item.price}</span>
                    </div>
                    <p className="text-white/40 font-sans text-sm leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview

