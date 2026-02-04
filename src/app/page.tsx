'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import AnimatedText from '@/components/AnimatedText';

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

const ScrollFadeIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
    else controls.start({ opacity: 0, y: 50 });
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-20"
        src="/office.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>
      {/* Particle Background */}
      <div className="particle-bg fixed inset-0 -z-15"></div>

      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
        <ScrollFadeIn>
          <AnimatedText className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white shimmer">
            {sections[0].title}
          </AnimatedText>
          <AnimatedText className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C9A24D] animate-float">
            {sections[0].subtitle}
          </AnimatedText>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {sections[0].description}
          </p>
        </ScrollFadeIn>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {sections[0].cta.map((btn, idx) =>
            btn.type === 'link' ? (
              <Link key={idx} href={btn.href}>
                <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-6 py-3 rounded-lg shadow-2xl premium-hover hover:scale-105 transition-transform">
                  {btn.text}
                </Button>
              </Link>
            ) : (
              <a
                key={idx}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg shadow-2xl premium-hover hover:scale-105 transition-transform"
              >
                {btn.text}
              </a>
            )
          )}
        </div>
      </section>

      {/* Section lainnya bisa kamu copy dari sebelumnya */}
    </div>
  );
}
