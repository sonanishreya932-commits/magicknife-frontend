import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language?.startsWith('de') ? 'en' : 'de'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex h-8 w-16 items-center rounded-full border border-primary/30 bg-main/80 p-1 transition-all hover:border-primary/60"
      aria-label="Toggle Language"
    >
      {/* Background Pill */}
      <motion.div
        className="absolute h-6 w-7 rounded-full bg-primary"
        animate={{
          x: i18n.language === 'de' ? 0 : 28,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      
      {/* Labels */}
      <div className="relative z-10 flex w-full items-center justify-around font-sans text-[10px] font-bold tracking-tighter">
        <span className={i18n.language === 'de' ? 'text-main' : 'text-white'}>DE</span>
        <span className={i18n.language === 'en' ? 'text-main' : 'text-white'}>EN</span>
      </div>
    </button>
  )
}
