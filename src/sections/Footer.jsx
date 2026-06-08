import { useTranslation } from 'react-i18next'
import { Phone, Mail, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE } from '../constants/site'

export default function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/menu', label: t('nav.menu') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/about', label: t('nav.about') },
    { to: '/#reservation', label: t('nav.reservation') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <footer className="relative bg-[#080d0e] pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-16 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="text-primary font-bold italic text-2xl leading-none">MK</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-display uppercase tracking-widest text-white">
                  MAGIC <span className="text-primary">KNIFE</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                  VEGETARIAN CUISINE
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm font-light text-center md:text-left leading-relaxed max-w-[250px]">
              {SITE.address.full}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-primary font-display text-lg tracking-[0.2em] uppercase mb-8">
              {t('footer.opening_hours_title')}
            </h4>
            <ul className="space-y-3 w-full max-w-[280px]">
              {days.map((day) => (
                <li key={day} className="flex justify-between text-white/60 text-sm font-light gap-4">
                  <span>{t(`footer.days.${day}`)}:</span>
                  <span>{SITE.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-primary font-display text-lg tracking-[0.2em] uppercase mb-8">
              {t('footer.site_links_title')}
            </h4>
            <nav className="flex flex-col gap-4 text-white/60 text-sm font-light">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-primary transition-colors uppercase tracking-widest text-[10px] font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-10">
            <div>
              <h4 className="text-primary font-display text-lg tracking-[0.2em] uppercase mb-8">
                {t('footer.follow_us_title')}
              </h4>
              <div className="flex gap-6">
                <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-primary font-display text-lg tracking-[0.2em] uppercase mb-8">
                {t('footer.contact_info_title')}
              </h4>
              <div className="space-y-4">
                <a href={`tel:${SITE.phone.landline}`} className="flex items-center gap-4 text-white/60 hover:text-primary transition-colors text-sm font-light">
                  <Phone size={18} className="text-primary" />
                  {SITE.phone.landline}
                </a>
                <a href={`tel:${SITE.phone.mobile.replace(/\s/g, '')}`} className="flex items-center gap-4 text-white/60 hover:text-primary transition-colors text-sm font-light">
                  <Phone size={18} className="text-primary" />
                  {SITE.phone.mobile}
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 text-white/60 hover:text-primary transition-colors text-sm font-light">
                  <Mail size={18} className="text-primary" />
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-light">
            © {new Date().getFullYear()} <span className="text-white/60 font-medium">{SITE.name}</span>, All Right Reserved.{' '}
            <span className="text-primary/60 italic ml-2">{t('footer.vegetarian')}</span>
          </p>
          <div className="flex gap-4 text-[10px] uppercase tracking-widest font-bold text-primary">
            <a href="#" className="hover:text-white transition-colors">{t('footer.impressum')}</a>
            <span className="text-white/20">||</span>
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-8 z-[60]">
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="size-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

      <div className="fixed bottom-8 right-8 z-[60]">
        <button
          onClick={scrollToTop}
          className="size-14 bg-primary rounded-full flex items-center justify-center text-main shadow-lg hover:bg-white transition-all group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  )
}
