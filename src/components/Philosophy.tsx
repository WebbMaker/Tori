import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function Philosophy() {
  const { language } = useLanguage();
  const t = translations[language].philosophy;

  return (
    <section id="story" className="py-24 md:py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          {/* Left Side: Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:pr-12 order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
               {t.title}
            </h2>
            <div className="space-y-6 text-white/40 leading-relaxed text-sm md:text-base font-light">
              <p>{t.description}</p>
            </div>
            
            <div className="pt-8 flex items-center space-x-6">
              <div className="w-12 h-[1px] bg-gold opacity-40"></div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium max-w-xs">
                {t.discount}
              </p>
            </div>
          </motion.div>

          {/* Right Side: Photography */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative group max-w-md mx-auto lg:ml-auto lg:mr-0">
              {/* Subtle Glow/Blend Shadow */}
              <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full -z-10 group-hover:bg-gold/10 transition-colors duration-1000" />
              
              <div className="aspect-[3/4] relative overflow-hidden rounded-full -rotate-3 border border-white/10 bg-zinc-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200"
                  alt="Premium Poke Bowl"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                  referrerPolicy="no-referrer"
                />
                {/* Vignette for blending */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Label */}
              <div className="absolute -bottom-6 -right-6 bg-dark/80 backdrop-blur-md p-8 border border-white/5 shadow-2xl z-20">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2 font-bold">Urban Zen</p>
                <h3 className="font-serif text-2xl italic tracking-wide">Purity & Balance</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
