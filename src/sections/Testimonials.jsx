import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      text: "Das beste Dosa, das ich je in Frankfurt gegessen habe! Authentischer Geschmack und toller Service.",
      author: "James W.",
      role: "Feinschmecker",
      stars: 5
    },
    {
      text: "Magic Knife bringt die wahren Aromen von Mumbai Street Food. Das Pav Bhaji ist ein Muss!",
      author: "Sarah L.",
      role: "Stammgast",
      stars: 5
    },
    {
      text: "Phantastisches südindisches Essen. Das Sambar ist perfekt gewürzt und die Idlis sind so weich.",
      author: "Robert D.",
      role: "Liebhaber indischer Küche",
      stars: 5
    },
    {
      text: "Ein verstecktes Juwel in Griesheim. Tolle Atmosphäre und noch bessere vegetarische Optionen.",
      author: "Michael K.",
      role: "Local Guide",
      stars: 5
    }
  ]

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#080d0e] py-24 sm:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-cursive text-3xl text-primary"
          >
            {t('testimonials.subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 font-display text-4xl uppercase tracking-widest text-white sm:text-5xl"
          >
            {t('testimonials.title')}
          </motion.h2>
          <div className="mt-6 mx-auto h-[1px] w-24 bg-primary/50" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-white/5 p-8 transition-all hover:bg-white/10 border border-white/5 hover:border-primary/20"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10 transition-colors group-hover:text-primary/20" />
              
              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="mb-8 font-sans text-base font-light leading-relaxed text-white/70 italic min-h-[100px]">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-sm uppercase tracking-widest text-white">
                    {testimonial.author}
                  </h4>
                  <p className="mt-1 font-sans text-[10px] uppercase tracking-widest text-primary/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <a 
            href="https://www.google.com/search?q=Magic+Knife+Frankfurt+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 text-white/60 hover:text-primary hover:border-primary transition-all text-xs font-bold uppercase tracking-widest"
          >
            <span>View all Google Reviews</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
