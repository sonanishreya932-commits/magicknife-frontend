import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact Form Submitted:', formData)
  }

  return (
    <section id="contact" className="relative bg-[#080d0e] py-24 sm:py-32 overflow-hidden border-t border-primary/10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info & Map */}
          <div className="space-y-12">
            <div>
              <span className="font-cursive text-3xl text-primary block mb-2">Get in touch</span>
              <h2 className="font-display text-4xl uppercase tracking-widest text-white sm:text-5xl">
                CONTACT <span className="text-primary">US</span>
              </h2>
              <div className="mt-6 h-[1px] w-24 bg-primary/50" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-6">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm tracking-widest text-white uppercase mb-2">Location</h4>
                  <p className="text-white/60 font-light leading-relaxed">
                    Waldschulstraße 20,<br />
                    65933 Frankfurt am Main,<br />
                    Germany
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm tracking-widest text-white uppercase mb-2">Phone</h4>
                  <p className="text-white/60 font-light leading-relaxed">
                    +49 69 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm tracking-widest text-white uppercase mb-2">Email</h4>
                  <p className="text-white/60 font-light leading-relaxed">
                    info@themagicknife.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="size-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-main transition-all shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-display text-xs uppercase tracking-widest text-white mb-2">Hours</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    Mon - Sun: 11:00 - 14:00,<br />
                    17:00 - 22:00
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[300px] rounded-2xl overflow-hidden border border-primary/20 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.8860000000003!2d8.591000000000001!3d50.091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096000000001%3A0x0!2zNTAuMDkxLCA4LjU5MQ!5e0!3m2!1sen!2sde!4v1620000000000!5m2!1sen!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-main/50 p-8 sm:p-12 rounded-3xl border border-primary/10 shadow-2xl">
            <h3 className="font-display text-2xl uppercase tracking-widest text-white mb-8">
              Send a <span className="text-primary">Message</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold ml-1">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 font-sans text-white focus:border-primary focus:outline-none transition-all placeholder:text-white/20 rounded-xl"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold ml-1">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 font-sans text-white focus:border-primary focus:outline-none transition-all placeholder:text-white/20 rounded-xl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold ml-1">Message</label>
                <textarea
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 font-sans text-white focus:border-primary focus:outline-none transition-all placeholder:text-white/20 resize-none rounded-xl"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary py-5 font-display text-sm uppercase tracking-[0.4em] text-main hover:bg-white transition-all rounded-full font-bold shadow-lg"
              >
                {t('contact.send')}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

