'use client';

import Link from 'next/link';
import { Check, Phone, MessageCircle, ArrowRight, Star, Award, Clock, Shield, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { motion } from 'framer-motion';

// AnimatedText: Huruf muncul dari kiri/kanan menyatu
const AnimatedText = ({ text }: { text: string }) => (
  <span className="inline-flex flex-wrap justify-center overflow-hidden">
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ x: i % 2 === 0 ? -80 : 80, opacity: 0, skewX: i % 2 === 0 ? 15 : -15 }}
        whileInView={{ x: 0, opacity: 1, skewX: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, delay: i * 0.03 }}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </span>
);

export default function Home() {
  const advantages = [
    { icon: Check, title: 'Terima Beres', description: 'Dari desain hingga pemasangan, kami tangani semua dengan profesional.' },
    { icon: Award, title: 'Kualitas Premium', description: 'Material berkualitas tinggi dengan standar internasional.' },
    { icon: Shield, title: 'Harga Terjangkau', description: 'Solusi premium dengan harga yang kompetitif dan transparan.' },
    { icon: Star, title: 'Tim Profesional', description: 'Tim ahli berpengalaman di bidang interior dan konstruksi.' },
    { icon: Zap, title: 'Material Berkualitas', description: 'Produk import dan lokal dengan kualitas terbaik.' },
    { icon: Clock, title: 'Tepat Waktu', description: 'Penyelesaian proyek sesuai jadwal yang disepakati.' },
  ];

  const highlights = [
    { title: 'Wall Panel', description: 'Wall panel dinding premium dengan berbagai pilihan desain dan warna.', icon: '🏠' },
    { title: 'Wallpaper', description: 'Wallpaper dan wallpaper 3D untuk mempercantik dinding ruangan.', icon: '🎨' },
    { title: 'Vinyl & SPC', description: 'Lantai vinyl dan SPC dengan berbagai motif dan tekstur realistik.', icon: '🪵' },
    { title: 'WPC Decking', description: 'Decking WPC tahan cuaca untuk outdoor dan semi-outdoor.', icon: '🌿' },
    { title: 'Pintu WPC & Baja', description: 'Pintu modern dan tahan lama dengan material berkualitas.', icon: '🚪' },
    { title: 'Jasa Interior', description: 'Layanan desain dan pemasangan interior komprehensif.', icon: '🛠️' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay Foto */}
        <div className="absolute inset-0">
          <img
            src="/office.jpg"
            alt="Office Background"
            className="w-full h-full object-cover object-top fixed top-0 left-0"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C9A24D]/20 to-[#B89B5E]/20 border border-[#C9A24D]/30 px-6 py-3 rounded-full mb-8"
          >
            <Star className="w-5 h-5 text-[#C9A24D]" />
            <span className="text-[#C9A24D] font-bold text-sm uppercase tracking-wider">
              Solusi Interior Premium
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
            <AnimatedText text="Solusi Interior & Konstruksi Premium" />
            <br />
            <AnimatedText text="Terima Beres" />
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-300 font-bold max-w-4xl mx-auto leading-relaxed mt-6">
            <AnimatedText text="Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional." />
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/konsultasi">
              <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
                <MessageCircle className="w-5 h-5 mr-2" />
                <AnimatedText text="Konsultasi Gratis" />
              </Button>
            </Link>
            <Link href="/produk">
              <Button variant="outline" className="border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-bold transition-transform transform hover:scale-105">
                <AnimatedText text="Lihat Produk" />
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a
              href="https://wa.me/6281251511997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <AnimatedText text="Hubungi Kami" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src="/office.jpg" alt="Office Overlay" className="w-full h-full object-cover object-top fixed top-0 left-0" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <AnimatedText text="Tentang Terradekor" />
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            <AnimatedText text="PT. Opulent Interior Indonesia (Terradekor.id) adalah produsen dan importir produk interior premium serta penyedia jasa interior dan kontraktor terpadu." />
          </p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src="/office.jpg" alt="Office Overlay" className="w-full h-full object-cover object-top fixed top-0 left-0" />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            <AnimatedText text="Mengapa Memilih Kami" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="bg-black/40 border border-[#C9A24D]/30 p-6 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <adv.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#C9A24D]"><AnimatedText text={adv.title} /></h3>
                  <p className="text-gray-200 font-semibold"><AnimatedText text={adv.description} /></p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src="/office.jpg" alt="Office Overlay" className="w-full h-full object-cover object-top fixed top-0 left-0" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            <AnimatedText text="Produk & Layanan Premium" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <Card key={idx} className="bg-black/50 border border-[#C9A24D]/30 p-8 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="flex flex-col items-center text-center space-y-4">
                  <img src="/logo.jpg" alt={item.title} className="w-16 h-16 object-contain" />
                  <h3 className="text-2xl font-bold text-[#C9A24D]"><AnimatedText text={item.title} /></h3>
                  <p className="text-gray-200 font-semibold"><AnimatedText text={item.description} /></p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/produk">
              <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
                <AnimatedText text="Lihat Semua Produk" />
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/layanan">
              <Button variant="outline" className="border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-bold transition-transform transform hover:scale-105">
                <AnimatedText text="Lihat Layanan" />
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src="/office.jpg" alt="Office Overlay" className="w-full h-full object-cover object-top fixed top-0 left-0" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            <AnimatedText text="Wujudkan Ruang Impian Anda" />
          </h2>
          <p className="text-2xl text-white/90 font-bold max-w-3xl mx-auto leading-relaxed mb-8">
            <AnimatedText text="Bersama Terradekor, transformasi ruang Anda menjadi masterpiece yang elegan dan fungsional" />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/konsultasi">
              <Button className="bg-white text-[#C9A24D] font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
                <Heart className="w-5 h-5 mr-2" />
                <AnimatedText text="Konsultasi Gratis Sekarang" />
              </Button>
            </Link>
            <a href="https://wa.me/6281251511997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gray-900 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105">
              <Phone className="w-5 h-5" />
              <AnimatedText text="WhatsApp Kami" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
                }
