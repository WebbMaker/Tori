import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

const images = [
  "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=800", // Shrimp
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800", // Poke
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800", // Futomaki
  "https://images.unsplash.com/photo-1511690656052-7a170c79e647?auto=format&fit=crop&q=80&w=800", // Chia
];

export default function ProductShowcase() {
  const { language } = useLanguage();
  const t = translations[language].showcase;

  return (
    <section id="menu" className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6">{t.title}</h2>
          <div className="w-24 h-px bg-gold mx-auto opacity-40" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/5">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group flex flex-col justify-between p-10 h-[350px] transition-all duration-500 hover:bg-white/5 cursor-none interactive ${index !== t.items.length - 1 ? 'lg:border-r border-white/5' : ''} border-b lg:border-b-0 border-white/5`}
            >
              <div className="flex flex-col gap-6">
                <span className="text-[10px] opacity-40 uppercase tracking-[0.3em] font-bold">
                  0{index + 1}. {index === 0 ? 'Signature' : index === 1 ? 'Seasonal' : index === 2 ? 'Classic' : 'Sweet'}
                </span>
                <h4 className="font-serif text-2xl lg:text-3xl leading-tight group-hover:text-gold transition-colors duration-500">
                  {item.name}
                </h4>
              </div>
              
              <div className="flex flex-col gap-8">
                 <p className="text-xs text-white/30 leading-relaxed max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {item.ingredients}
                </p>
                <div className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-500">
                  <span className="text-xl transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
