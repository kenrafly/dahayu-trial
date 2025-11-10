# 💎 Dahayu JewelryThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



**Keindahan Abadi dalam Kilau Alam**## Getting Started



Website e-commerce premium untuk Dahayu Jewelry - merek perhiasan emas yang terinspirasi oleh keindahan alam dan budaya Bali.First, run the development server:



![Next.js](https://img.shields.io/badge/Next.js-16.0-black)```bash

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)npm run dev

![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)# or

![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-ff0055)yarn dev

# or

## ✨ Fitur Utamapnpm dev

# or

- 🎨 **Desain Premium** - Interface elegan dengan palet warna emas, hijau tua, dan krembun dev

- ⚡ **Performa Tinggi** - Dibangun dengan Next.js 16 dan Turbopack```

- 📱 **Fully Responsive** - Tampilan sempurna di semua perangkat

- 🎭 **Animasi Halus** - Menggunakan Framer Motion untuk pengalaman visual yang memikatOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- 🎯 **SEO Optimized** - Meta tags dan struktur semantik yang optimal

- 🌊 **Smooth Scrolling** - Navigasi yang mulus dan nyamanYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



## 🎨 DesainThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.



### Palet Warna## Learn More

- **Emas**: `#C6A664` - Warna utama yang melambangkan kemewahan

- **Emas Terang**: `#E3C16F` - Untuk highlight dan hover effectsTo learn more about Next.js, take a look at the following resources:

- **Hijau Tua**: `#1B3A2F` - Representasi alam Bali

- **Krem**: `#FAF6F0` - Background yang hangat dan elegan- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- **Coklat**: `#8C715A` - Aksen alami- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



### TipografiYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

- **Heading**: Playfair Display - Serif elegan untuk judul

- **Body**: Poppins - Sans-serif modern untuk konten## Deploy on Vercel



## 🚀 TeknologiThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.



- **Framework**: Next.js 16 (App Router)Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

- **Styling**: Tailwind CSS 4
- **Animasi**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Google Fonts (Playfair Display, Poppins)

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🏗️ Struktur Project

```
dahayu/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Hero.tsx             # Hero section dengan animasi
│   │   ├── FeaturedCollection.tsx # Grid koleksi produk
│   │   ├── About.tsx            # Section tentang brand
│   │   ├── Testimonials.tsx     # Testimoni pelanggan
│   │   └── Footer.tsx           # Footer dengan kontak
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
└── package.json
```

## 🎯 Halaman & Sections

### 1. Navbar
- Transparent pada hero, solid saat scroll
- Responsive mobile menu
- Smooth scroll navigation

### 2. Hero Section
- Full-screen landing dengan animasi gradient
- Slogan utama: "Keindahan Abadi dalam Kilau Alam"
- Dua CTA buttons: "Lihat Koleksi" dan "Tentang Kami"
- Animated floating elements

### 3. Featured Collection
- Grid responsif dengan 6 produk unggulan
- Hover effects dengan zoom dan golden border
- Quick view functionality
- Kategori: Kalung, Anting, Gelang, Cincin

### 4. About Section
- Two-column layout (image + content)
- Brand philosophy dan cerita
- Value propositions dengan icons
- Floating testimonial card

### 5. Testimonials
- 3 customer testimonials dengan ratings
- Decorative golden frames
- Trust indicators (500+ pelanggan, 15+ tahun, dll)

### 6. Footer
- Informasi kontak lengkap
- Quick links dan navigasi koleksi
- Social media links (Instagram, WhatsApp, Email)
- Address dan phone

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Atau deploy langsung melalui [Vercel Dashboard](https://vercel.com/new).

### Build untuk Production

```bash
npm run build
npm run start
```

## 🎨 Kustomisasi

### Mengubah Warna

Edit `tailwind.config.ts`:

```typescript
colors: {
  gold: {
    DEFAULT: '#C6A664',  // Ubah di sini
    light: '#E3C16F',
  },
  // ...
}
```

### Menambah Produk

Edit `app/components/FeaturedCollection.tsx`:

```typescript
const products = [
  {
    id: 1,
    name: 'Nama Produk',
    price: 'Rp X.XXX.XXX',
    category: 'Kategori',
    image: 'URL_gambar',
  },
  // Tambah produk baru di sini
];
```

## 📱 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers

## 📄 License

© 2025 Dahayu Jewelry. All rights reserved.

## 👨‍💻 Author

Dibuat dengan ❤️ untuk keindahan abadi

---

**Dahayu Jewelry** - Perhiasan Emas Premium dari Bali
