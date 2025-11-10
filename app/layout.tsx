import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dahayu Jewelry - Keindahan Abadi dalam Kilau Alam",
  description:
    "Perhiasan emas premium yang terinspirasi oleh alam dan keindahan Bali. Koleksi eksklusif kalung, anting, gelang, dan cincin dengan sentuhan seni tradisional Bali.",
  keywords: [
    "perhiasan bali",
    "emas",
    "jewelry",
    "dahayu",
    "perhiasan alam",
    "handcrafted jewelry",
  ],
  openGraph: {
    title: "Dahayu Jewelry - Keindahan Abadi dalam Kilau Alam",
    description:
      "Perhiasan emas premium yang terinspirasi oleh alam dan keindahan Bali",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased bg-cream text-green-dark`}
      >
        {children}
      </body>
    </html>
  );
}
