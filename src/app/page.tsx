'use client';

import Link from 'next/link';
import { Check, Phone, MessageCircle, ArrowRight, Star, Award, Clock, Shield, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    { title: 'Wall Panel', description: 'Wall panel dinding premium dengan berbagai pilihan desain dan warna.', icon: '/logo.jpg' },
    { title: 'Wallpaper', description: 'Wallpaper dan wallpaper 3D untuk mempercantik dinding ruangan.', icon: '/logo.jpg' },
    { title: 'Vinyl & SPC', description: 'Lantai vinyl dan SPC dengan berbagai motif dan tekstur realistik.', icon: '/logo.jpg' },
    { title: 'WPC Decking', description: 'Decking WPC tahan cuaca untuk outdoor dan semi-outdoor.', icon: '/logo.jpg' },
    { title: 'Pintu WPC & Baja', description: 'Pintu modern dan tahan lama dengan material berkualitas.', icon: '/logo.jpg' },
    { title: 'Jasa Interior', description: 'Layanan desain dan pemasangan interior komprehensif.', icon: '/logo.jpg' },
  ];

  // Animation variants untuk huruf masuk dari kiri dan kanan
  const letterVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="relative min-h-screen">
      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Foto */}
        <div className="absolute inset-0">
          <Image
            src="/office.jpg"
            alt="Office Background"
            fill
            className="object-cover object-center"
            style={{ zIndex: -1 }}
          />
          <div className="absolute inset-0 bg-black/60" /> {/* overlay supaya teks jelas */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
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

          {/* Animated Heading */}
          <h1 className="mt-8 text-center text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-tight flex flex-wrap justify-center">
            {"Solusi Interior & Konstruksi Premium".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, type: "spring", stiffness: 100 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            className="mt-6 text-xl sm:text-2xl text-gray-200 font-bold max-w-4xl text-center leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link href="/konsultasi">
              <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" /> Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/produk">
              <Button className="border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                Lihat Produk <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="https://wa.me/6281251511997" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <Phone className="w-5 h-5" /> <span>Hubungi Kami</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative py-20">
        {/* Background */}
        <div className="absolute inset-0">
          <Image src="/office.jpg" alt="Background" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Mengapa Memilih <span className="text-[#C9A24D]">Kami</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="bg-black/30 border-2 border-[#C9A24D]/20 p-6 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                    <adv.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#C9A24D]">{adv.title}</h3>
                  <p className="text-gray-200 font-semibold">{adv.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image src="/office.jpg" alt="Background" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Produk & Layanan <span className="text-[#C9A24D]">Premium</span>
            </h2>
            <p className="text-xl text-gray-200 font-bold mt-4 max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan interior dan konstruksi Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <Card key={idx} className="bg-black/30 border-2 border-[#C9A24D]/20 p-8 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Image src={item.icon} width={64} height={64} alt={item.title} className="rounded-full"/>
                  <h3 className="text-2xl font-bold text-[#C9A24D]">{item.title}</h3>
                  <p className="text-gray-200 font-semibold">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image src="/office.jpg" alt="Background" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            Wujudkan Ruang Impian Anda
          </h2>
          <p className="text-2xl text-white/90 font-bold max-w-3xl mx-auto mt-4">
            Bersama Terradekor, transformasi ruang Anda menjadi masterpiece yang elegan dan fungsional
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/konsultasi">
              <Button className="bg-white text-[#C9A24D] hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center">
                <Heart className="w-5 h-5 mr-2"/> Konsultasi Gratis Sekarang
              </Button>
            </Link>
            <a href="https://wa.me/6281251511997" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <Phone className="w-5 h-5"/> <span>WhatsApp Kami</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
