"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Heart, Sparkles, Award } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const values = [
    {
      icon: Leaf,
      title: "Inspirasi Alam",
      description:
        "Setiap desain terinspirasi dari keindahan alam tropis Bali yang memukau dan filosofi harmoni dengan alam",
    },
    {
      icon: Heart,
      title: "Buatan Tangan",
      description:
        "Dikerjakan dengan penuh cinta oleh pengrajin berpengalaman yang mewarisi teknik tradisional Bali",
    },
    {
      icon: Sparkles,
      title: "Emas Murni 24K",
      description:
        "Menggunakan emas berkualitas tinggi untuk kilau yang abadi dan nilai investasi yang terjaga",
    },
    {
      icon: Award,
      title: "Kualitas Premium",
      description:
        "Setiap pieces melalui quality control ketat untuk memastikan kesempurnaan dalam setiap detail",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="tentang"
      className="relative py-32 px-4 md:px-8 lg:px-16 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"
        />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gold-light/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[600px] lg:h-[700px]">
              {/* Decorative frame */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/30 rounded-[40px]"
              />

              <div className="relative h-full rounded-[40px] overflow-hidden border border-gold/20">
                <img
                  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
                  alt="Artisan Jewelry Making"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />

                {/* Floating stats card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-8 left-8 right-8"
                >
                  <div className="glass-effect p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-gold text-4xl font-serif font-bold">
                          15+
                        </p>
                        <p className="text-cream/60 text-sm font-sans">
                          Tahun Pengalaman
                        </p>
                      </div>
                      <div>
                        <p className="text-gold text-4xl font-serif font-bold">
                          500+
                        </p>
                        <p className="text-cream/60 text-sm font-sans">
                          Karya Tercipta
                        </p>
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-4" />
                    <p className="text-cream/80 text-sm font-sans italic text-center">
                      "Setiap perhiasan adalah warisan yang akan dikenang"
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-32 h-32 border-2 border-gold/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-gold-light/20"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm font-light tracking-[0.3em] uppercase font-sans">
                Tentang Dahayu
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-[1.1]">
              <span className="block text-gradient">Warisan Alam,</span>
              <span className="block text-cream mt-2">Kemewahan</span>
              <span className="block text-gradient mt-2">Abadi</span>
            </h2>

            <div className="space-y-6 text-cream/70 text-lg leading-relaxed font-sans mb-12">
              <p>
                Dahayu Jewelry lahir dari kecintaan mendalam terhadap keindahan
                alam Bali dan tradisi kerajinan emas yang telah diwariskan
                turun-temurun selama berabad-abad.
              </p>
              <p>
                Setiap perhiasan kami adalah hasil karya tangan terampil
                pengrajin Bali yang menggabungkan teknik tradisional dengan
                desain kontemporer. Kami percaya bahwa perhiasan bukan sekadar
                aksesori, tetapi sebuah{" "}
                <span className="text-gold-light">
                  karya seni yang menceritakan kisah
                </span>{" "}
                alam dan spiritualitas.
              </p>
              <p>
                Dari dedaunan tropis hingga bunga frangipani yang suci, setiap
                elemen dalam desain kami terinspirasi oleh keajaiban alam pulau
                dewata.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 glass-effect rounded-2xl hover:bg-gold/5 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <value.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-semibold text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-cream/60 text-sm font-sans leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <a
                href="#koleksi"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-dark font-semibold rounded-full hover:bg-gold-light transition-all duration-300 transform hover:scale-105"
              >
                <span>Lihat Cerita Kami</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
