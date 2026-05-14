import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, Clock, CheckCircle2, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Reservation() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Reservation Submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="reservation" className="relative bg-main py-24 sm:py-32">
      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-cursive text-3xl text-primary">{t('reservation.subtitle')}</span>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-widest text-white sm:text-5xl leading-tight">
              {t('reservation.title')}
            </h2>
            <div className="mt-8 h-px w-24 bg-primary/30" />
            
            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 transition-colors group-hover:bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-sm uppercase tracking-widest text-white">Select Date</h4>
                  <p className="mt-2 font-sans text-sm text-white/50 leading-relaxed">Choose your preferred dining date. We recommend booking at least 2 days in advance for weekends.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 transition-colors group-hover:bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-sm uppercase tracking-widest text-white">Party Size</h4>
                  <p className="mt-2 font-sans text-sm text-white/50 leading-relaxed">Tell us how many guests to expect. For parties larger than 8, please call us directly.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md sm:p-12">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/80 ml-1">
                        {t('reservation.form.name')}
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('reservation.form.name_ph')}
                        className="w-full border-b border-white/20 bg-transparent px-2 py-4 font-sans text-lg text-white transition-all focus:border-primary focus:outline-none placeholder:text-white/20"
                      />
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/80 ml-1">
                          {t('reservation.form.email')}
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('reservation.form.email_ph')}
                          className="w-full border-b border-white/20 bg-transparent px-2 py-4 font-sans text-lg text-white transition-all focus:border-primary focus:outline-none placeholder:text-white/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/80 ml-1">
                          {t('reservation.form.guests')}
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full appearance-none border-b border-white/20 bg-transparent px-2 py-4 font-sans text-lg text-white transition-all focus:border-primary focus:outline-none"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                            <option key={n} value={n} className="bg-[#080d0e]">{n} {t('reservation.form.people')}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/80 ml-1">
                          {t('reservation.form.date')}
                        </label>
                        <input
                          required
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full border-b border-white/20 bg-transparent px-2 py-4 font-sans text-lg text-white transition-all focus:border-primary focus:outline-none [color-scheme:dark]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/80 ml-1">
                          {t('reservation.form.time')}
                        </label>
                        <select
                          required
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full appearance-none border-b border-white/20 bg-transparent px-2 py-4 font-sans text-lg text-white transition-all focus:border-primary focus:outline-none"
                        >
                          <option value="" className="bg-[#080d0e]">Select Time</option>
                          {['12:00', '12:30', '13:00', '13:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(t => (
                            <option key={t} value={t} className="bg-[#080d0e]">{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group relative mt-10 w-full overflow-hidden bg-primary px-8 py-5 font-display text-xs uppercase tracking-[0.5em] text-main transition-all duration-500 hover:bg-white"
                    >
                      <span className="relative z-10">{t('reservation.form.submit')}</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="font-display text-2xl uppercase tracking-widest text-white">
                      {t('reservation.success_title')}
                    </h3>
                    <p className="mt-4 font-sans text-base font-light leading-relaxed text-white/60">
                      {t('reservation.success_msg')}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-10 font-display text-[10px] uppercase tracking-widest text-primary hover:text-white transition-colors"
                    >
                      {t('reservation.back_btn')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
