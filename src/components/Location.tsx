import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';
import { MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function Location() {
  const { language } = useLanguage();
  const t = translations[language].location;

  return (
    <section id="location" className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000"
          alt="Tori Sushi Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-5xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-12 leading-tight">
            {t.title}
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Address</div>
                <p className="text-lg font-light">{t.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Status</div>
                <p className="text-lg font-light">{t.status}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface p-12 border border-white/5 rounded-sm"
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">{t.status}</span>
          </div>
          
          <div className="space-y-4 mb-12">
            <p className="text-xl font-serif">{t.address}</p>
            <p className="text-sm text-white/30 font-light max-w-xs leading-relaxed">
              Find us in the heart of the city, where tradition meets contemporary urban pace.
            </p>
          </div>

          <div className="flex gap-8 opacity-40">
            <a 
              href="https://www.instagram.com/tori_sushiolsztyn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/torisushiolsztyn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
