import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative bg-[#080d0e] py-24 sm:py-32 overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] select-none">
        <h2 className="font-display text-[20vw] uppercase leading-none text-white whitespace-nowrap">Authentic</h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Images Grid */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl rounded-2xl border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop"
                alt="Magic Knife Authentic Food"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop";
                }}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
            
            {/* Overlay Small Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-10 hidden h-64 w-64 border-8 border-[#080d0e] shadow-2xl sm:block overflow-hidden rounded-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop"
                alt="Magic Knife Signature Dosa"
                crossOrigin="anonymous"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=600&auto=format&fit=crop";
                }}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="font-cursive text-4xl text-primary sm:text-5xl block mb-4">
              {t('about.subtitle')}
            </span>
            <h3 className="font-display text-4xl uppercase tracking-widest text-white sm:text-5xl leading-tight">
              {t('about.title').split(' ').slice(0, -1).join(' ')} <br /> <span className="text-primary">{t('about.title').split(' ').slice(-1)}</span>
            </h3>
            
            <div className="mt-8 h-[1px] w-24 bg-primary/50" />
            
            <p className="mt-8 font-sans text-lg font-light leading-relaxed text-white/80">
              {t('about.description')}
            </p>
            
            <p className="mt-6 font-sans text-base font-light leading-relaxed text-white/60 italic border-l-2 border-primary pl-6">
              "{t('about.quote')}"
            </p>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              {[
                { label: t('about.stats.heritage_label'), value: t('about.stats.heritage') },
                { label: t('about.stats.spices_label'), value: t('about.stats.spices') },
                { label: t('about.stats.chefs_label'), value: t('about.stats.chefs') },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-primary">{stat.value}</p>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                to="/about"
                className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-primary hover:text-white transition-colors"
              >
                {t('about.button')}
                <div className="h-[1px] w-12 bg-primary transition-all group-hover:w-20 group-hover:bg-white" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

