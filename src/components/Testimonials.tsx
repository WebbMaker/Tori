import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section id="experience" className="py-32 px-6 overflow-hidden bg-dark">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex gap-1 mb-12">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold opacity-60" />
            ))}
          </div>
          
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-16">
            {t.title}
          </h2>

          <blockquote className="text-2xl md:text-4xl font-serif italic mb-12 leading-relaxed opacity-90">
            "{t.review}"
          </blockquote>

          <div className="flex flex-col items-center">
            <cite className="not-italic font-bold tracking-widest text-sm uppercase">
              {t.author}
            </cite>
            <span className="text-[10px] text-white/30 uppercase tracking-widest mt-2">Verified Review</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
