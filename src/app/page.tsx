'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, MessageCircle, ArrowRight, Star, Award, Clock, Shield, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="fixed bottom-4 right-4 z-50">
        <FloatingWhatsApp />
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/office.jpg')" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(201,162,77,0.1) 50px, rgba(201,162,77,0.1) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(201,162,77,0.1) 50px, rgba(201,162,77,0.1) 51px)',
            }}
          />
        </div>

        {/* Overlay Gambar / Logo dengan Parallax */}
        <motion.img
          src="/logo-overlay.png" // ganti dengan logo/foto kamu
          alt="Overlay Logo"
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 md:w-96 opacity-90"
          style={{ y: offsetY * 0.3 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C9A24D]/20 to-[#B89B5E]/20 border border-[#C9A24D]/30 px-6 py-3 rounded-full"
          >
            <Star className="w-5 h-5 text-[#C9A24D]" />
            <span className="text-[#C9A24D] font-bold text-sm uppercase tracking-wider">
              Solusi Interior Premium
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight"
          >
            Solusi Interior &<br />
            Konstruksi Premium<br />
            <span className="bg-gradient-to-r from-[#C9A24D] via-[#D4AF6A] to-[#C9A24D] bg-clip-text text-transparent">
              Terima Beres
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 font-bold max-w-4xl mx-auto leading-relaxed"
          >
            Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/konsultasi">
              <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transition transform hover:scale-105 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" /> Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/produk">
              <Button className="border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white font-bold px-8 py-4 rounded-lg transition transform hover:scale-105 flex items-center">
                Lihat Produk <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a
              href="https://wa.me/6281251511997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transition transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Mengapa Memilih <span className="text-[#C9A24D]">Kami</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <Card
                key={i}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#C9A24D]/20 p-6 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <adv.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#C9A24D]">{adv.title}</h3>
                  <p className="text-gray-300 font-semibold">{adv.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights, CTA, dll bisa ditambahkan sama logika parallax yang sama */}
    </div>
  );
          }
