import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative size-14 flex items-center justify-center">
            {/* Circular Text Placeholder (Visual Only) */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="size-11 rounded-full border-2 border-primary flex items-center justify-center bg-black/20">
              <span className="text-primary font-bold italic text-xl leading-none">MK</span>
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-display uppercase tracking-[0.2em] text-white group-hover:text-primary transition-colors">
              MAGIC <span className="text-primary">KNIFE</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.5em] text-white/60 font-medium">
              VEGETARIAN CUISINE
            </span>
          </div>
        </Link>

        {/* CENTER - Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-xs font-medium transition-colors tracking-widest uppercase relative py-1 ${
              isActive('/') ? 'text-white border-b border-primary' : 'text-white/70 hover:text-white'
            }`}
          >
            {t('nav.home')}
          </Link>
          <Link 
            to="/menu" 
            className={`text-xs font-medium transition-colors tracking-widest uppercase relative py-1 ${
              isActive('/menu') ? 'text-white border-b border-primary' : 'text-white/70 hover:text-white'
            }`}
          >
            {t('nav.menu')}
          </Link>
          <Link 
            to="/gallery" 
            className={`text-xs font-medium transition-colors tracking-widest uppercase relative py-1 ${
              isActive('/gallery') ? 'text-white border-b border-primary' : 'text-white/70 hover:text-white'
            }`}
          >
            {t('nav.gallery')}
          </Link>
          <Link 
            to="/about" 
            className={`text-xs font-medium transition-colors tracking-widest uppercase relative py-1 ${
              isActive('/about') ? 'text-white border-b border-primary' : 'text-white/70 hover:text-white'
            }`}
          >
            {t('nav.about')}
          </Link>
          <Link 
            to="/contact" 
            className={`text-xs font-medium transition-colors tracking-widest uppercase relative py-1 ${
              isActive('/contact') ? 'text-white border-b border-primary' : 'text-white/70 hover:text-white'
            }`}
          >
            {t('nav.contact') || 'Contact'}
          </Link>
          <Link 
            to="/#reservation" 
            className="text-xs font-medium text-white/70 hover:text-white transition-colors tracking-widest uppercase"
          >
            {t('nav.reservation')}
          </Link>
        </nav>

        {/* RIGHT - Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Link 
            to="/#reservation" 
            className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/40 px-6 py-2.5 hover:bg-primary hover:text-main transition-all"
          >
            {t('nav.reservation')}
          </Link>
          <Link 
            to="/menu" 
            className="text-[10px] font-bold uppercase tracking-widest text-main bg-primary px-8 py-2.5 hover:bg-white transition-all shadow-[0_0_20px_rgba(201,171,129,0.3)]"
          >
            {t('nav.order')}
          </Link>
          <LanguageSwitcher />
        </div>


        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-b border-white/10 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-6 text-center">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-white/70 hover:text-white tracking-widest uppercase">{t('nav.home')}</Link>
            <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-white/70 hover:text-white tracking-widest uppercase">{t('nav.menu')}</Link>
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-white/70 hover:text-white tracking-widest uppercase">{t('nav.gallery')}</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-white/70 hover:text-white tracking-widest uppercase">{t('nav.about')}</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-white/70 hover:text-white tracking-widest uppercase">{t('nav.contact') || 'Contact'}</Link>
            <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
              <Link 
                to="/#reservation" 
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-widest text-white border border-white/40 px-6 py-3"
              >
                {t('nav.reservation')}
              </Link>
              <Link 
                to="/menu" 
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-widest text-black bg-primary px-6 py-3"
              >
                {t('nav.order')}
              </Link>

              <div className="flex justify-center pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
