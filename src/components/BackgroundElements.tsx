import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export default function BackgroundElements() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
      {/* Grain Overlay */}
      <div className="grain" />

      {/* Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Side Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4">
        <div className="h-20 w-px bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-gold"
            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold vertical-text text-white/20">
          Scroll
        </span>
      </div>

      {/* Japanese Watermarks */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none">
        <motion.div 
          style={{ y: watermarkY }}
          className="absolute top-1/4 -left-20 text-[20vw] font-serif text-white/[0.02] rotate-90 leading-none"
        >
          鳥
        </motion.div>
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
          className="absolute bottom-1/4 -right-10 text-[15vw] font-serif text-white/[0.02] -rotate-12 leading-none"
        >
          寿司
        </motion.div>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </>
  );
}
