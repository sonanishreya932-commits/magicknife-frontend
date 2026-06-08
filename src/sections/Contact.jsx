import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE } from '../constants/site'

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative bg-[#080d0e] py-24 sm:py-32 overflow-hidden border-t border-primary/10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <span className="font-cursive text-3xl text-primary block mb-2">{t('contact.subtitle')}</span>
              <h2 className="font-display text-4xl uppercase tracking-widest text-white sm:text-5xl">
                {t('contact.title')}
              </h2>
              <div className="mt-6 h-[1px] w-24 bg-primary/50" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-6">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm tracking-widest text-white uppercase mb-2">{t('contact.location')}</h4>
                  <p className="text-white/60 font-light leading-relaxed">
                    {SITE.address.street},<br />
                    {SITE.address.city},<br />
                    {SITE.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm tracking-widest text-white uppercase mb-2">{t('contact.phone')}</h4>
                  <a href={`tel:${SITE.phone.landline}`} className="text-white/60 font-light hover:text-primary transition-colors block">
                    {SITE.phone.landline}
                  </a>
                  <a href={`tel:${SITE.phone.mobile.replace(/\s/g, '')}`} className="text-white/60 font-light hover:text-primary transition-colors block">
                    {SITE.phone.mobile}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm tracking-widest text-white uppercase mb-2">{t('contact.email_label')}</h4>
                  <a href={`mailto:${SITE.email}`} className="text-white/60 font-light hover:text-primary transition-colors">
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="size-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-main transition-all shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-display text-xs uppercase tracking-widest text-white mb-2">{t('contact.hours')}</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {SITE.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-[300px] rounded-2xl overflow-hidden border border-primary/20 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src={SITE.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Magic Knife Location"
              />
            </div>
          </div>

          <div className="bg-main/50 p-8 sm:p-12 rounded-3xl border border-primary/10 shadow-2xl">
            <h3 className="font-display text-2xl uppercase tracking-widest text-white mb-8">
              {t('contact.form_title')}
            </h3>
            {submitted ? (
              <p className="text-white/70 font-light text-center py-12">{t('contact.success')}</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold ml-1">{t('contact.name')}</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 font-sans text-white focus:border-primary focus:outline-none transition-all rounded-xl"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold ml-1">{t('contact.email')}</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 font-sans text-white focus:border-primary focus:outline-none transition-all rounded-xl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold ml-1">{t('contact.message')}</label>
                  <textarea
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 font-sans text-white focus:border-primary focus:outline-none transition-all resize-none rounded-xl"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary py-5 font-display text-sm uppercase tracking-[0.4em] text-main hover:bg-white transition-all rounded-full font-bold shadow-lg"
                >
                  {t('contact.send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
