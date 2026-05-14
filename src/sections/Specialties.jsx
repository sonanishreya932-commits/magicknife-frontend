import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ChevronRight } from 'lucide-react'

export default function Specialties() {
  const { t } = useTranslation();

  const specialtyItems = [
    {
      title: "SIGNATURE MASALA DOSA",
      subtitle: "South Indian Classic",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800",
      description: "A golden crispy rice crepe filled with spiced potato mash, served with authentic sambar and coconut chutney."
    },
    {
      title: "PANEER TIKKA SIZZLER",
      subtitle: "Tandoori Masterpiece",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
      description: "Marinated cottage cheese cubes grilled to perfection in a traditional clay oven, served with mint chutney."
    },
    {
      title: "BOMBAY STREET CHAAT",
      subtitle: "Flavor Explosion",
      image: "https://images.unsplash.com/photo-1626132646529-5aa212ddbae1?auto=format&fit=crop&q=80&w=800",
      description: "A vibrant mix of crispy puris, tangy tamarind, cool yogurt, and aromatic spices. The soul of Mumbai street food."
    }
  ];

  return (
    <section id="specialties" className="relative bg-[#080d0e] py-24 sm:py-32 overflow-hidden border-t border-primary/10">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] flex items-center justify-center select-none">
        <h2 className="font-display text-[25vw] uppercase leading-none text-white whitespace-nowrap">Signature</h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-cursive text-3xl text-primary block mb-4"
          >
            {t('specialties.subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl uppercase tracking-[0.3em] text-white sm:text-6xl"
          >
            OUR <span className="text-primary">SPECIALTIES</span>
          </motion.h2>
          <div className="mt-8 mx-auto h-[1px] w-24 bg-primary/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {specialtyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8">
                <img
                src={item.image}
                alt={item.title}
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop";
                }}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-primary font-display text-[10px] tracking-[0.3em] uppercase block mb-2">
                    {item.subtitle}
                  </span>
                  <h3 className="text-white font-display text-xl tracking-widest uppercase">
                    {item.title}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-4 px-2">
                <p className="font-sans text-sm text-white/60 leading-relaxed font-light">
                  {item.description}
                </p>
                <a href="#menu" className="inline-flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors">
                  Explore Recipe <ChevronRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
