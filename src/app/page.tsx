'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Assets
const logo = '/logo.jpg';
const background = '/office.jpg';

// Data
const advantages = [
  { title: 'Terima Beres', description: 'Dari desain hingga pemasangan, kami tangani semua dengan profesional.' },
  { title: 'Kualitas Premium', description: 'Material berkualitas tinggi dengan standar internasional.' },
  { title: 'Harga Terjangkau', description: 'Solusi premium dengan harga yang kompetitif dan transparan.' },
  { title: 'Tim Profesional', description: 'Tim ahli berpengalaman di bidang interior dan konstruksi.' },
  { title: 'Material Berkualitas', description: 'Produk import dan lokal dengan kualitas terbaik.' },
  { title: 'Tepat Waktu', description: 'Penyelesaian proyek sesuai jadwal yang disepakati.' },
];

const sections = [
  {
    title: 'Solusi Interior & Konstruksi Premium',
    subtitle: 'Terima Beres',
    description: 'Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional.',
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
    description: 'Bersama Terradekor, transformasi ruang Anda menjadi masterpiece elegan dan fungsional.',
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

// Components
const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(' ');
  return (
    <>
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
    </>
  );
};

const ScrollFadeIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 });
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

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image src={background} alt="Background Office" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <FloatingWhatsApp />

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <Image src={logo} alt="Logo" width={120} height={120} className="mb-6" />
        <h1 className="text-5xl font-bold text-white mb-4">
          <AnimatedText text="Solusi Interior & Konstruksi Premium" />
        </h1>
        <h2 className="text-4xl font-bold text-[#C9A24D] mb-6">
          <AnimatedText text="Terima Beres" />
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl">
          <AnimatedText text={sections[0].description} />
        </p>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
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

      {/* PRODUCTS */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          <AnimatedText text="Produk & Layanan Premium" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {sections[2].items.map((item, i) => (
            <ScrollFadeIn key={i}>
              <div className="bg-black/40 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-5xl font-bold text-white mb-6">{sections[3].title}</h2>
        <p className="text-xl text-gray-200 mb-8">{sections[3].description}</p>
        <div className="flex gap-4 justify-center">
          <Link href="/konsultasi">
            <Button> Konsultasi Gratis </Button>
          </Link>
          <a href="https://wa.me/6281251511997" target="_blank">
            <Button className="bg-green-600 text-white">WhatsApp</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
