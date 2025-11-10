"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: "Inspirasi Alam",
      description:
        "Setiap desain terinspirasi dari keindahan alam tropis Bali yang memukau",
    },
    {
      icon: Heart,
      title: "Buatan Tangan",
      description: "Dikerjakan dengan penuh cinta oleh pengrajin berpengalaman",
    },
    {
      icon: Sparkles,
      title: "Emas Murni",
      description: "Menggunakan emas berkualitas tinggi untuk kilau yang abadi",
    },
  ];

  return (
    <section
      id="tentang"
      className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-br from-cream to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
                alt="Pengrajin Bali"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-green-dark/60 to-transparent" />

              {/* Decorative golden frame */}
              <div className="absolute inset-4 border-2 border-gold/50 rounded-2xl" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border-t-4 border-gold max-w-xs"
            >
              <p className="text-green-dark font-serif text-lg italic">
                "Setiap perhiasan adalah karya seni yang menceritakan keindahan
                alam Bali"
              </p>
              <p className="text-gold font-semibold mt-2 font-sans">
                — I Wayan, Master Craftsman
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-light text-sm md:text-base font-light tracking-widest mb-4 font-sans uppercase">
              Tentang Dahayu
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-green-dark mb-6">
              Warisan Alam,
              <br />
              Kemewahan Abadi
            </h3>
            <div className="space-y-4 text-brown text-lg leading-relaxed font-sans">
              <p>
                Dahayu Jewelry lahir dari kecintaan mendalam terhadap keindahan
                alam Bali dan tradisi kerajinan emas yang telah diwariskan
                turun-temurun.
              </p>
              <p>
                Setiap perhiasan kami adalah hasil karya tangan terampil
                pengrajin Bali yang menggabungkan teknik tradisional dengan
                desain kontemporer. Kami percaya bahwa perhiasan bukan sekadar
                aksesori, tetapi sebuah karya seni yang menceritakan kisah alam
                dan spiritualitas.
              </p>
              <p>
                Dari dedaunan tropis hingga bunga frangipani yang suci, setiap
                elemen dalam desain kami terinspirasi oleh keajaiban alam pulau
                dewata.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-green-dark mb-2">
                      {value.title}
                    </h4>
                    <p className="text-brown font-sans">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
