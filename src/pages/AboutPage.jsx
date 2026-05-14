import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-[#080d0e] min-h-screen pt-24">
      <Navbar />
      
      <main>
        {/* About Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] select-none">
            <h2 className="font-display text-[20vw] uppercase leading-none text-white whitespace-nowrap">Authentic</h2>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-cursive text-3xl text-primary block mb-4"
              >
                {t('about.subtitle')}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-6xl font-display tracking-[0.2em] text-white uppercase leading-tight"
              >
                OUR <span className="text-primary">JOURNEY</span>
              </motion.h1>
              <div className="mt-6 mx-auto h-[1px] w-24 bg-primary/50" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-display text-white tracking-widest uppercase">
                  THE ART OF TRADITIONAL FLAVORS
                </h3>
                <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
                  <p>
                    {t('about.description')}
                  </p>
                  <p>
                    At Magic Knife, we believe that cooking is an art form passed down through generations. Our recipes are deeply rooted in Indian tradition, using techniques that have been perfected over centuries.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <h4 className="text-primary font-display text-2xl mb-2">{t('about.stats.heritage')}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">{t('about.stats.heritage_label')}</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-display text-2xl mb-2">{t('about.stats.spices')}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">{t('about.stats.spices_label')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
                    alt="Magic Knife Story"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="absolute -bottom-10 -left-10 hidden sm:block w-64 h-64 border-8 border-[#080d0e] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1596797038530-2c39fa80227e?q=80&w=600&auto=format&fit=crop"
                    alt="Magic Knife Cuisine"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=600&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-3xl text-white tracking-widest uppercase mb-8">OUR PHILOSOPHY</h2>
              <p className="text-white/70 italic text-xl font-sans font-light leading-relaxed">
                "{t('about.quote')}"
              </p>
              <div className="mt-12 flex justify-center gap-12">
                <div className="flex flex-col items-center">
                  <div className="size-16 rounded-full border border-primary/30 flex items-center justify-center mb-4">
                    <span className="text-primary text-2xl">🌿</span>
                  </div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">100% Vegetarian</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="size-16 rounded-full border border-primary/30 flex items-center justify-center mb-4">
                    <span className="text-primary text-2xl">🌶️</span>
                  </div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Authentic Spices</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="size-16 rounded-full border border-primary/30 flex items-center justify-center mb-4">
                    <span className="text-primary text-2xl">👨‍🍳</span>
                  </div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Master Chefs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Culinary Heritage Section */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=1200&auto=format&fit=crop"
                    alt="Authentic Indian Cuisine"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1200&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 space-y-6"
              >
                <h2 className="font-display text-3xl text-white tracking-widest uppercase">CULINARY EXCELLENCE</h2>
                <p className="text-white/80 font-sans text-lg font-light leading-relaxed">
                  Our kitchen is the heart of Magic Knife. Led by master chefs from India, we combine traditional clay oven cooking with modern culinary innovation to bring you the best of both worlds. Every spice is hand-picked, every sauce is made from scratch, and every dish is a celebration of flavor.
                </p>
                <p className="text-white/80 font-sans text-lg font-light leading-relaxed">
                  Whether you're here for our famous South Indian Dosas or our signature Street Food, we promise an experience that stays with you long after the meal is over.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage
