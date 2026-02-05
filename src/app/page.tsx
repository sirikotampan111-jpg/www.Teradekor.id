'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Semua logo pakai logo.jpg
const logo = '/logo.jpg';
const background = '/office.jpg';

/* =======================
   PLACEHOLDER – ADVANTAGES
   ======================= */
const advantages = [
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
];

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
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
    ],
  },
  {
    title: 'Produk & Layanan Premium',
    items: [
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
      { title: 'Placeholder Title', desc: 'Placeholder description goes here.' },
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

/* =======================
   PLACEHOLDER – HIGHLIGHTS
   ======================= */
const highlights = [
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
  { title: 'Placeholder Title', description: 'Placeholder description goes here.' },
];

const ScrollFadeIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
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
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image src={background} alt="Background Office" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <FloatingWhatsApp />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <Image src={logo} alt="Terradekor Logo" width={120} height={120} className="mb-6" />
        <h1 className="text-6xl font-bold text-white mb-4">
          <AnimatedText text="Solusi Interior & Konstruksi Premium" />
        </h1>
        <h2 className="text-5xl font-bold text-[#C9A24D] mb-6">
          <AnimatedText text="Terima Beres" />
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mb-8">
          <AnimatedText text="Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional." />
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/konsultasi"><Button>Konsultasi Gratis</Button></Link>
          <Link href="/produk"><Button variant="outline">Lihat Produk</Button></Link>
        </div>
      </section>

      {/* Mengapa Memilih Kami */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          <AnimatedText text="Mengapa Memilih Kami" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              className="bg-black/40 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{adv.title}</h3>
              <p className="text-gray-200">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Produk & Layanan */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          <AnimatedText text="Produk & Layanan Premium" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((hl, i) => (
            <motion.div
              key={i}
              className="bg-black/40 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{hl.title}</h3>
              <p className="text-gray-200">{hl.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
                }
