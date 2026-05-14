import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

export default function FoodGallery() {
  const { t } = useTranslation();

  const galleryItems = t('gallery.items', { returnObjects: true }) || [];

  return (
    <section id="gallery" className="relative bg-main py-24 sm:py-32 overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-cursive text-3xl text-primary block mb-4"
            >
              {t('gallery.subtitle')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl uppercase tracking-[0.3em] text-white sm:text-6xl"
            >
              VISUAL <span className="text-primary">FEAST</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-white/60 hover:text-primary transition-all duration-300"
            >
              <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                <svg size={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest">Follow us on</span>
                <span className="text-sm font-display tracking-widest text-white">@themagicknife</span>
              </div>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.slice(0, 12).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer"
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
              <div className="absolute inset-0 bg-black/40 md:bg-primary/20 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[1px] md:backdrop-blur-[2px]">
                <div className="size-8 md:size-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 scale-100 md:scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <Plus className="text-white" size={24} />
                </div>
                <h4 className="font-display text-[10px] md:text-xs tracking-[0.2em] text-white uppercase opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/gallery" 
            className="group inline-flex items-center gap-6 px-12 py-5 border border-primary text-primary font-display text-xs font-bold uppercase tracking-[0.5em] hover:bg-primary hover:text-white transition-all duration-500"
          >
            {t('gallery.button')}
            <div className="w-8 h-px bg-primary group-hover:bg-white group-hover:w-12 transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}

