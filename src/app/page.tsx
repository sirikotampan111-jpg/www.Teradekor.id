'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

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
const sections = [
  {
    title: 'Solusi Interior & Konstruksi Premium',
    subtitle: 'Terima Beres',
    description:
      'Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional.',
    cta: [
      { text: 'Konsultasi Gratis', href: '/konsultasi', type: 'link' },
      { text: 'Lihat Produk', href: '/produk', type: 'link' },
      { text: 'Hubungi Kami', href: 'https://wa.me/6281251511997', type: 'external' },
    ],
  },
  {
    title: 'Mengapa Memilih Kami',
    items: [
      { title: 'Terima Beres', desc: 'Dari desain hingga pemasangan, kami tangani profesional.' },
      { title: 'Kualitas Premium', desc: 'Material berkualitas tinggi standar internasional.' },
      { title: 'Harga Terjangkau', desc: 'Solusi premium dengan harga kompetitif dan transparan.' },
      { title: 'Tim Profesional', desc: 'Ahli berpengalaman di interior & konstruksi.' },
      { title: 'Material Berkualitas', desc: 'Produk import & lokal terbaik.' },
      { title: 'Tepat Waktu', desc: 'Penyelesaian proyek sesuai jadwal.' },
    ],
  },
  {
    title: 'Produk & Layanan Premium',
    items: [
      { title: 'Wall Panel', desc: 'Wall panel dinding premium dengan berbagai desain.' },
      { title: 'Wallpaper', desc: 'Wallpaper 2D & 3D untuk mempercantik ruangan.' },
      { title: 'Vinyl & SPC', desc: 'Lantai vinyl & SPC motif realistik.' },
      { title: 'WPC Decking', desc: 'Decking tahan cuaca untuk outdoor/semi-outdoor.' },
      { title: 'Pintu WPC & Baja', desc: 'Pintu modern & tahan lama.' },
      { title: 'Jasa Interior', desc: 'Desain & pemasangan interior komprehensif.' },
    ],
  },
  {
    title: 'Wujudkan Ruang Impian Anda',
    description:
      'Bersama Terradekor, transformasi ruang Anda menjadi masterpiece elegan dan fungsional.',
    cta: [
      { text: 'Konsultasi Gratis Sekarang', href: '/konsultasi', type: 'link' },
      { text: 'WhatsApp Kami', href: 'https://wa.me/6281251511997', type: 'external' },
    ],
  },
];

const highlights = [
  { title: 'Wall Panel', description: 'Wall panel dinding premium dengan berbagai pilihan desain dan warna.' },
  { title: 'Wallpaper', description: 'Wallpaper dan wallpaper 3D untuk mempercantik dinding ruangan.' },
  { title: 'Vinyl & SPC', description: 'Lantai vinyl dan SPC dengan berbagai motif dan tekstur realistik.' },
  { title: 'WPC Decking', description: 'Decking WPC tahan cuaca untuk outdoor dan semi-outdoor.' },
  { title: 'Pintu WPC & Baja', description: 'Pintu modern dan tahan lama dengan material berkualitas.' },
  { title: 'Jasa Interior', description: 'Layanan desain dan pemasangan interior komprehensif.' },
];
const ScrollFadeIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-50px' });
  const controls = useAnimation();

// Animate per kata
const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(' ');
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

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
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Full */}
      <div className="fixed inset-0 -z-10">
        <Image src={background} alt="Background Office" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/50"></div>
        <Image
          src="/office.jpg"
          alt="Background Office"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
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
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
        <ScrollFadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            {sections[0].title}
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#C9A24D] mb-6">
            {sections[0].subtitle}
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {sections[0].description}
          </p>
        </ScrollFadeIn>

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
          {sections[0].cta.map((btn, idx) =>
            btn.type === 'link' ? (
              <Link key={idx} href={btn.href}>
                <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
                  {btn.text}
                </Button>
              </Link>
            ) : (
              <a
                key={idx}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                {btn.text}
              </a>
            )
          )}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          <AnimatedText text="Mengapa Memilih Kami" />
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <ScrollFadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{sections[1].title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
          </ScrollFadeIn>
        </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections[1].items.map((item, idx) => (
            <ScrollFadeIn key={idx}>
              <div className="bg-black/40 border-2 border-[#C9A24D]/20 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          <AnimatedText text="Produk & Layanan Premium" />
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <ScrollFadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{sections[2].title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
          </ScrollFadeIn>
        </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections[2].items.map((item, idx) => (
            <ScrollFadeIn key={idx}>
              <div className="bg-black/40 border-2 border-[#C9A24D]/20 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            </ScrollFadeIn>
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
        <ScrollFadeIn>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{sections[3].title}</h2>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">{sections[3].description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {sections[3].cta.map((btn, idx) =>
              btn.type === 'link' ? (
                <Link key={idx} href={btn.href}>
                  <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    {btn.text}
                  </Button>
                </Link>
              ) : (
                <a
                  key={idx}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                  {btn.text}
                </a>
              )
            )}
          </div>
        </ScrollFadeIn>
      </section>
    </div>
  );
                          }
   }
