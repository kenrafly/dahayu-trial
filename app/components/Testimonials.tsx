"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonialsRow1 = [
  {
    id: 1,
    name: "Sarah Wijaya",
    location: "Jakarta",
    text: "Perhiasan dari Dahayu benar-benar istimewa. Desainnya unik dan kualitas emasnya luar biasa. Saya selalu mendapat pujian setiap memakainya.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 2,
    name: "Diana Putri",
    location: "Bali",
    text: "Sebagai orang Bali, saya bangga dengan karya Dahayu yang mempertahankan nilai seni dan budaya kami. Sungguh memukau!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: 3,
    name: "Amanda Chen",
    location: "Surabaya",
    text: "Kualitas premium dengan sentuhan personal. Cincin pernikahan kami dari Dahayu menjadi simbol cinta yang abadi.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
];

const testimonialsRow2 = [
  {
    id: 4,
    name: "Rina Sari",
    location: "Bandung",
    text: "Pelayanan yang ramah dan profesional. Perhiasan custom yang saya pesan sesuai harapan, bahkan melebihi ekspektasi!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
  {
    id: 5,
    name: "Putri Maharani",
    location: "Yogyakarta",
    text: "Setiap detail dikerjakan dengan sempurna. Saya merasakan energi positif dari perhiasan Dahayu yang saya pakai.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&q=80",
  },
  {
    id: 6,
    name: "Lisa Kartika",
    location: "Medan",
    text: "Investasi terbaik! Perhiasan Dahayu tidak hanya indah tapi juga bernilai tinggi. Sangat puas dengan kualitasnya.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 bg-dark-lighter overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-1/3 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-96 h-96 bg-gold-light/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-6"
        >
          <h2 className="text-gold text-sm font-light tracking-[0.3em] mb-3 font-sans uppercase">
            Testimoni
          </h2>

          <h3 className="text-4xl md:text-5xl font-serif font-bold">
            <span className="text-gradient">Cerita </span>
            <span className="text-cream">Pelanggan Kami</span>
          </h3>
        </motion.div>

        {/* Testimonials Marquee - 2 Rows Full Screen */}
        <div className="space-y-4 mb-12">
          {/* Row 1 - Left to Right */}
          <div className="relative">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-3"
            >
              {[
                ...testimonialsRow1,
                ...testimonialsRow1,
                ...testimonialsRow1,
              ].map((testimonial, index) => (
                <div
                  key={`row1-${index}`}
                  className="group relative p-4 md:p-5 glass-effect rounded-xl hover:bg-gold/5 transition-all duration-500 luxury-glow w-[calc(100vw-3rem)] md:min-w-[320px] md:w-auto shrink-0"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-3 right-3">
                    <Quote className="w-6 h-6 md:w-7 md:h-7 text-gold/20 group-hover:text-gold/40 transition-colors duration-300" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-gold text-gold"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-cream/80 text-xs md:text-sm leading-relaxed mb-4 font-sans relative z-10 h-16 md:h-18 line-clamp-3">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-2.5 pt-3 border-t border-gold/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border-2 border-gold/30"
                    />
                    <div>
                      <h4 className="font-serif font-semibold text-cream text-sm md:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-cream/50 text-[10px] md:text-xs font-sans">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative">
            <motion.div
              animate={{ x: [-1920, 0] }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-3"
            >
              {[
                ...testimonialsRow2,
                ...testimonialsRow2,
                ...testimonialsRow2,
              ].map((testimonial, index) => (
                <div
                  key={`row2-${index}`}
                  className="group relative p-4 md:p-5 glass-effect rounded-xl hover:bg-gold/5 transition-all duration-500 luxury-glow w-[calc(100vw-3rem)] md:min-w-[320px] md:w-auto shrink-0"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-3 right-3">
                    <Quote className="w-6 h-6 md:w-7 md:h-7 text-gold/20 group-hover:text-gold/40 transition-colors duration-300" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-gold text-gold"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-cream/80 text-xs md:text-sm leading-relaxed mb-4 font-sans relative z-10 h-16 md:h-18 line-clamp-3">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-2.5 pt-3 border-t border-gold/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border-2 border-gold/30"
                    />
                    <div>
                      <h4 className="font-serif font-semibold text-cream text-sm md:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-cream/50 text-[10px] md:text-xs font-sans">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6"
        >
          {[
            { value: "500+", label: "Pelanggan Setia" },
            { value: "15+", label: "Tahun Pengalaman" },
            { value: "100%", label: "Emas Murni" },
            { value: "24K", label: "Kualitas Terjamin" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="p-5 glass-effect rounded-xl luxury-glow"
            >
              <h4 className="text-4xl font-serif font-bold text-gradient mb-1">
                {stat.value}
              </h4>
              <p className="text-cream/60 font-sans text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
