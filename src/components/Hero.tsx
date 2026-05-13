import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function Hero() {
  const { language } = useLanguage();
  const { scrollY } = useScroll();
  const t = translations[language].hero;

  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Media with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=2048"
          alt="Sushi Preparation"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center md:text-left px-8 md:px-16 w-full max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">
            The Art of the Roll
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.1]">
            {t.title}<br />
            <span className="text-2xl md:text-4xl italic opacity-60 font-light block mt-4">
              {language === 'pl' ? 'Where Art Meets Taste' : 'Sztuka spotyka smak'}
            </span>
          </h1>
          <p className="text-sm md:text-base text-[#E0E0E0]/40 font-light max-w-md leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
