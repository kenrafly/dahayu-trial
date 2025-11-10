"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/dahayujewelry",
      handle: "@dahayujewelry",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/6281234567890",
      handle: "+62 812-3456-7890",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:info@dahayujewelry.com",
      handle: "info@dahayujewelry.com",
    },
  ];

  const quickLinks = [
    { name: "Beranda", href: "#" },
    { name: "Koleksi", href: "#koleksi" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <footer className="bg-green-dark text-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 border border-gold rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 border border-gold rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-serif font-bold text-gold mb-4">
              Dahayu Jewelry
            </h3>
            <p className="text-cream/80 leading-relaxed font-sans mb-6">
              Perhiasan emas premium yang menggabungkan keindahan alam Bali
              dengan keahlian pengrajin tradisional.
            </p>
            <div className="flex items-start gap-2 text-cream/80">
              <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
              <p className="font-sans">
                Jl. Raya Ubud No. 123
                <br />
                Gianyar, Bali 80571
                <br />
                Indonesia
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-serif font-semibold text-gold mb-6">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/80 hover:text-gold transition-colors duration-300 font-sans inline-block hover:translate-x-2 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Collections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-serif font-semibold text-gold mb-6">
              Koleksi
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-gold transition-colors duration-300 font-sans inline-block hover:translate-x-2 transform"
                >
                  Kalung
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-gold transition-colors duration-300 font-sans inline-block hover:translate-x-2 transform"
                >
                  Anting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-gold transition-colors duration-300 font-sans inline-block hover:translate-x-2 transform"
                >
                  Gelang
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream/80 hover:text-gold transition-colors duration-300 font-sans inline-block hover:translate-x-2 transform"
                >
                  Cincin
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-serif font-semibold text-gold mb-6">
              Hubungi Kami
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/80 hover:text-gold transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:shadow-lg group-hover:shadow-gold/50 transition-all duration-300">
                    <social.icon className="w-5 h-5 group-hover:text-green-dark transition-colors duration-300" />
                  </div>
                  <span className="font-sans text-sm">{social.handle}</span>
                </a>
              ))}
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-3 text-cream/80 hover:text-gold transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:shadow-lg group-hover:shadow-gold/50 transition-all duration-300">
                  <Phone className="w-5 h-5 group-hover:text-green-dark transition-colors duration-300" />
                </div>
                <span className="font-sans text-sm">+62 812-3456-7890</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-cream/20 text-center"
        >
          <p className="text-cream/60 font-sans text-sm">
            © {new Date().getFullYear()} Dahayu Jewelry. Seluruh hak cipta
            dilindungi.
          </p>
          <p className="text-cream/40 font-sans text-xs mt-2">
            Dibuat dengan ❤️ untuk keindahan abadi
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
