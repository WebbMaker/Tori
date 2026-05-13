/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import BackgroundElements from './components/BackgroundElements';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-dark selection:bg-gold/30">
        <BackgroundElements />
        <Navbar />
        
        <main>
          <Hero />
          <Philosophy />
          <ProductShowcase />
          <Testimonials />
          <Location />
        </main>
        
        <footer className="py-12 px-6 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2026 Tori Sushi Olsztyn. All rights reserved. Designed for Excellence.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}

