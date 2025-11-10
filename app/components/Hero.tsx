"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-linear-to-br from-green-dark via-brown to-green-dark">
      {/* Background overlay with texture */}
      <div className="absolute inset-0 bg-texture opacity-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gold-light/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-gold-light text-lg md:text-xl font-light tracking-widest mb-4 font-sans">
            DAHAYU JEWELRY
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream mb-6 leading-tight">
            Keindahan Abadi
            <br />
            dalam Kilau Alam
          </h1>
          <p className="text-cream/80 text-lg md:text-xl font-light max-w-2xl mx-auto font-sans">
            Perhiasan emas premium yang menggabungkan keindahan alam tropis Bali
            dengan keahlian pengrajin tradisional
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a
            href="#koleksi"
            className="px-8 py-4 bg-gold text-green-dark font-semibold rounded-full hover:bg-gold-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold/50"
          >
            Lihat Koleksi
          </a>
          <a
            href="#tentang"
            className="px-8 py-4 bg-transparent border-2 border-cream text-cream font-semibold rounded-full hover:bg-cream hover:text-green-dark transition-all duration-300 transform hover:scale-105"
          >
            Tentang Kami
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
