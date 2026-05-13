import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { scrollY } = useScroll();
  const t = translations[language].nav;

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const blur = useTransform(scrollY, [0, 100], [0, 12]);

  return (
    <motion.nav
      style={{
        backgroundColor: `rgba(10, 10, 10, ${bgOpacity.get()})`,
        backdropFilter: `blur(${blur.get()}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-8 md:px-12 border-b border-white/5"
    >
      <div className="flex-1 flex items-center">
        <motion.div 
          className="text-2xl font-serif tracking-[0.2em] font-bold"
          whileHover={{ scale: 1.02 }}
        >
          TORI
        </motion.div>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-white/60">
        <a href="#story" className="hover:text-white transition-colors">{t.story}</a>
        <a href="#menu" className="hover:text-white transition-colors">{t.menu}</a>
        <a href="#experience" className="hover:text-white transition-colors">{t.experience}</a>
        <a href="#location" className="hover:text-white transition-colors">{t.location}</a>
      </div>

      <div className="flex-1 flex justify-end items-center gap-8">
        <div className="flex items-center gap-1 text-[10px] tracking-widest font-semibold cursor-pointer group/lang">
          <button 
            onClick={() => setLanguage('pl')}
            className={`${language === 'pl' ? 'text-white border-b border-white pb-0.5' : 'text-white/40 hover:text-white transition-all'}`}
          >
            PL
          </button>
          <span className="opacity-20 mx-1 inline-block mb-0.5">|</span>
          <button 
            onClick={() => setLanguage('en')}
            className={`${language === 'en' ? 'text-white border-b border-white pb-0.5' : 'text-white/40 hover:text-white transition-all'}`}
          >
            EN
          </button>
        </div>
        <motion.button
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          whileHover={{ 
            scale: 1.05, 
            backgroundColor: 'white', 
            color: 'black',
            boxShadow: '0 0 20px rgba(255,255,255,0.2)'
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 border border-white text-[10px] uppercase tracking-widest transition-all hidden sm:block font-bold"
        >
          {t.order}
        </motion.button>
      </div>
    </motion.nav>
  );
}
