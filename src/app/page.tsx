'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const logo = '/logo.jpg';

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

// Scroll-based letter animation
const AnimatedText = ({ text }: { text: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.02, type: 'spring', stiffness: 120 }
      }));
    } else {
      controls.start(i => ({
        y: 20,
        opacity: 0,
      }));
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="inline-flex flex-wrap justify-center">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          animate={controls}
          initial={{ y: 20, opacity: 0 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image src="/office.jpg" alt="Background Office" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
        <Image src={logo} alt="Terradekor Logo" width={120} height={120} className="mb-6" />

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          <AnimatedText text="Solusi Interior & Konstruksi Premium" />
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24D] via-[#D4AF6A] to-[#C9A24D] mb-8">
          <AnimatedText text="Terima Beres" />
        </h2>

        <p className="text-xl sm:text-2xl text-gray-200 font-semibold max-w-3xl mx-auto mb-8">
          <AnimatedText text="Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional." />
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/konsultasi">
            <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <span>Konsultasi Gratis</span>
            </Button>
          </Link>
          <Link href="/produk">
            <Button className="border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg hover:bg-[#C9A24D] hover:text-white transition-colors">
              Lihat Produk
            </Button>
          </Link>
          <a href="https://wa.me/6281251511997" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all">
            WhatsApp Kami
          </a>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <AnimatedText text="Mengapa Memilih Kami" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {advantages.map((adv, idx) => (
            <Card key={idx} className="bg-black/40 border-2 border-[#C9A24D]/20 p-6 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <Image src={logo} alt={adv.title} width={48} height={48} className="rounded-full" />
                <h3 className="text-xl font-bold text-[#C9A24D]"><AnimatedText text={adv.title} /></h3>
                <p className="text-gray-200 font-semibold"><AnimatedText text={adv.description} /></p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <AnimatedText text="Produk & Layanan Premium" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {highlights.map((hl, idx) => (
            <Card key={idx} className="bg-black/40 border-2 border-[#C9A24D]/20 p-8 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <Image src={logo} alt={hl.title} width={48} height={48} className="rounded-full" />
                <h3 className="text-2xl font-bold text-[#C9A24D]"><AnimatedText text={hl.title} /></h3>
                <p className="text-gray-200 font-semibold"><AnimatedText text={hl.description} /></p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          <AnimatedText text="Wujudkan Ruang Impian Anda" />
        </h2>
        <p className="text-2xl text-white/90 font-bold max-w-3xl mx-auto mb-8">
          <AnimatedText text="Bersama Terradekor, transformasi ruang Anda menjadi masterpiece yang elegan dan fungsional." />
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/konsultasi">
            <Button className="bg-white text-[#C9A24D] px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
              Konsultasi Gratis Sekarang
            </Button>
          </Link>
          <a href="https://wa.me/6281251511997" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all">
            WhatsApp Kami
          </a>
        </div>
      </section>
    </div>
  );
}
