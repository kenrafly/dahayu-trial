"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Kalung Dewi",
    price: "Rp 8.500.000",
    category: "Kalung",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80",
  },
  {
    id: 2,
    name: "Anting Melati",
    price: "Rp 3.200.000",
    category: "Anting",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80",
  },
  {
    id: 3,
    name: "Gelang Frangipani",
    price: "Rp 5.800.000",
    category: "Gelang",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80",
  },
  {
    id: 4,
    name: "Cincin Surya",
    price: "Rp 4.500.000",
    category: "Cincin",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80",
  },
  {
    id: 5,
    name: "Kalung Lotus",
    price: "Rp 9.200.000",
    category: "Kalung",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80",
  },
  {
    id: 6,
    name: "Anting Ratna",
    price: "Rp 3.800.000",
    category: "Anting",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=500&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function FeaturedCollection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="koleksi" className="py-20 px-4 md:px-8 lg:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold-light text-sm md:text-base font-light tracking-widest mb-4 font-sans uppercase">
            Koleksi Unggulan
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-green-dark mb-6">
            Karya Seni Emas Kami
          </h3>
          <p className="text-brown text-lg max-w-2xl mx-auto font-sans">
            Setiap perhiasan dirancang dengan teliti, menggabungkan keindahan
            alam dengan kemewahan emas murni
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden shimmer">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === product.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay with golden border effect */}
                <div
                  className={`absolute inset-0 border-4 transition-all duration-500 ${
                    hoveredId === product.id
                      ? "border-gold shadow-[inset_0_0_40px_rgba(198,166,100,0.3)]"
                      : "border-transparent"
                  }`}
                />

                {/* Quick view button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredId === product.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center bg-green-dark/50 backdrop-blur-sm"
                >
                  <button className="px-6 py-3 bg-gold text-green-dark font-semibold rounded-full hover:bg-gold-light transition-colors duration-300 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Lihat Detail
                  </button>
                </motion.div>
              </div>

              <div className="p-6">
                <p className="text-gold text-sm font-medium mb-2 font-sans tracking-wider">
                  {product.category}
                </p>
                <h4 className="text-2xl font-serif font-semibold text-green-dark mb-3">
                  {product.name}
                </h4>
                <p className="text-brown text-lg font-semibold">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-block px-10 py-4 bg-green-dark text-gold font-semibold rounded-full hover:bg-green-dark/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Lihat Semua Koleksi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
