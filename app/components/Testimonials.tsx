"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
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

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold-light text-sm md:text-base font-light tracking-widest mb-4 font-sans uppercase">
            Testimoni
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-green-dark mb-6">
            Cerita Pelanggan Kami
          </h3>
          <p className="text-brown text-lg max-w-2xl mx-auto font-sans">
            Kepercayaan dan kepuasan pelanggan adalah kebanggaan kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-gold relative group"
            >
              {/* Decorative quote mark */}
              <div className="absolute -top-4 left-8 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white text-3xl font-serif shadow-lg">
                ❝
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-green-dark text-base leading-relaxed mb-6 font-sans italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Customer info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gold/20">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <h4 className="font-serif font-semibold text-green-dark text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-brown text-sm font-sans">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Hover effect glow */}
              <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <h4 className="text-4xl font-serif font-bold text-gold mb-2">
              500+
            </h4>
            <p className="text-brown font-sans">Pelanggan Setia</p>
          </div>
          <div>
            <h4 className="text-4xl font-serif font-bold text-gold mb-2">
              15+
            </h4>
            <p className="text-brown font-sans">Tahun Pengalaman</p>
          </div>
          <div>
            <h4 className="text-4xl font-serif font-bold text-gold mb-2">
              100%
            </h4>
            <p className="text-brown font-sans">Emas Murni</p>
          </div>
          <div>
            <h4 className="text-4xl font-serif font-bold text-gold mb-2">
              24K
            </h4>
            <p className="text-brown font-sans">Kualitas Terjamin</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
