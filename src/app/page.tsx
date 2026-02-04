'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Semua logo pakai logo.jpg
const logo = '/logo.jpg';
const background = '/office.jpg';

const advantages = [
  { title: 'Terima Beres', description: 'Dari desain hingga pemasangan, kami tangani semua dengan profesional.' },
  { title: 'Kualitas Premium', description: 'Material berkualitas tinggi dengan standar internasional.' },
  { title: 'Harga Terjangkau', description: 'Solusi premium dengan harga yang kompetitif dan transparan.' },
  { title: 'Tim Profesional', description: 'Tim ahli berpengalaman di bidang interior dan konstruksi.' },
  { title: 'Material Berkualitas', description: 'Produk import dan lokal dengan kualitas terbaik.' },
  { title: 'Tepat Waktu', description: 'Penyelesaian proyek sesuai jadwal yang disepakati.' },
];

const highlights = [
  { title: 'Wall Panel', description: 'Wall panel dinding premium dengan berbagai pilihan desain dan warna.' },
  { title: 'Wallpaper', description: 'Wallpaper dan wallpaper 3D untuk mempercantik dinding ruangan.' },
  { title: 'Vinyl & SPC', description: 'Lantai vinyl dan SPC dengan berbagai motif dan tekstur realistik.' },
  { title: 'WPC Decking', description: 'Decking WPC tahan cuaca untuk outdoor dan semi-outdoor.' },
  { title: 'Pintu WPC & Baja', description: 'Pintu modern dan tahan lama dengan material berkualitas.' },
  { title: 'Jasa Interior', description: 'Layanan desain dan pemasangan interior komprehensif.' },
];

// Animate per kata
const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(' ');

  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Full */}
      <div className="fixed inset-0 -z-10">
        <Image src={background} alt="Background Office" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
        <Image src={logo} alt="Terradekor Logo" width={120} height={120} className="mb-6" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          <AnimatedText text="Solusi Interior & Konstruksi Premium" />
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-8">
          <AnimatedText text="Terima Beres" />
        </h2>

        <p className="text-xl sm:text-2xl text-gray-200 font-semibold max-w-3xl mx-auto leading-relaxed mb-8">
          <AnimatedText text="Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional." />
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/konsultasi">
            <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition transform">
              Konsultasi Gratis
            </Button>
          </Link>
          <Link href="/produk">
            <Button className="border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white px-8 py-4 rounded-lg transition transform">
              Lihat Produk
            </Button>
          </Link>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          <AnimatedText text="Mengapa Memilih Kami" />
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              className="bg-black/40 p-6 rounded-lg shadow-md hover:shadow-xl transition transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[#C9A24D] mb-2">
                <AnimatedText text={adv.title} />
              </h3>
              <p className="text-gray-200 font-medium"><AnimatedText text={adv.description} /></p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          <AnimatedText text="Produk & Layanan Premium" />
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((hl, idx) => (
            <motion.div
              key={idx}
              className="bg-black/40 p-6 rounded-lg shadow-md hover:shadow-xl transition transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[#C9A24D] mb-2">
                <AnimatedText text={hl.title} />
              </h3>
              <p className="text-gray-200 font-medium"><AnimatedText text={hl.description} /></p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          <AnimatedText text="Wujudkan Ruang Impian Anda" />
        </h2>
        <p className="text-2xl text-white/90 font-medium max-w-3xl mx-auto mb-8">
          <AnimatedText text="Bersama Terradekor, transformasi ruang Anda menjadi masterpiece yang elegan dan fungsional." />
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/konsultasi">
            <Button className="bg-white text-[#C9A24D] px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition transform">
              Konsultasi Gratis Sekarang
            </Button>
          </Link>
          <a
            href="https://wa.me/6281251511997"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition transform"
          >
            WhatsApp Kami
          </a>
        </div>
      </section>
    </div>
  );
                          }
