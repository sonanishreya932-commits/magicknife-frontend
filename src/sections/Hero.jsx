import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1920&auto=format&fit=crop",
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle')
    },
    {
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1920&auto=format&fit=crop",
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle')
    },
    {
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1920&auto=format&fit=crop",
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <motion.img
            src={slides[currentSlide].image}
            alt="Hero Background"
            crossOrigin="anonymous"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop";
            }}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="font-cursive text-3xl text-primary sm:text-5xl lg:text-6xl mb-6 block drop-shadow-lg"
          >
            {slides[currentSlide].subtitle}
          </motion.span>
          
          <h1 className="mt-4 font-display text-5xl uppercase tracking-[0.3em] text-white sm:text-8xl lg:text-9xl leading-tight drop-shadow-2xl">
            {slides[currentSlide].title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-primary" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center"
          >
            <Link
              to="/menu"
              className="group relative overflow-hidden px-16 py-5 border border-primary text-primary transition-all duration-500 hover:text-white"
            >
              <span className="relative z-10 font-display text-xs font-bold uppercase tracking-[0.5em]">
                {t('hero.button1')}
              </span>
              <div className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-700 ease-in-out group-hover:translate-x-0" />
            </Link>
            
            <a
              href="#reservation"
              className="group flex items-center gap-4 font-display text-xs font-bold uppercase tracking-[0.5em] text-white hover:text-primary transition-all duration-300"
            >
              <span className="border-b border-transparent group-hover:border-primary pb-1">
                {t('hero.button2')}
              </span>
              <div className="size-2 rounded-full bg-primary animate-pulse" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-8">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        <span className="rotate-90 text-[10px] uppercase tracking-[1em] text-white/30 whitespace-nowrap origin-left ml-[1px]">
          ESTABLISHED 2009
        </span>
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 z-30 flex -translate-x-1/2 gap-6 items-center">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="group relative py-4"
          >
            <div className={`h-[1px] transition-all duration-500 ${
              currentSlide === idx ? 'w-16 bg-primary' : 'w-8 bg-white/20 group-hover:bg-white/50'
            }`} />
            <span className={`absolute -top-2 left-0 text-[8px] font-bold transition-opacity duration-500 ${
              currentSlide === idx ? 'opacity-100 text-primary' : 'opacity-0'
            }`}>
              0{idx + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
