'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Phone, MessageCircle, ArrowRight, Star, Award, Clock, Shield, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

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
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Background Image + Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/office.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Floating futuristic shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ top: '10%', left: '5%' }}
            className="absolute w-32 h-32 bg-gradient-to-r from-[#C9A24D]/50 to-[#B89B5E]/50 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            style={{ top: '50%', left: '70%' }}
            className="absolute w-24 h-24 bg-gradient-to-r from-[#D4AF6A]/50 to-[#C9A24D]/50 rounded-full blur-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link href="/konsultasi">
              <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white px-8 py-4 rounded-lg shadow-2xl hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 mr-2" /> Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/produk">
              <Button variant="outline" className="border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg hover:bg-[#C9A24D] hover:text-white transition-all">
                Lihat Produk <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/layanan">
              <Button variant="outline" className="border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg hover:bg-[#C9A24D] hover:text-white transition-all">
                Lihat Layanan <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a
              href="https://wa.me/6281251511997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-lg shadow-2xl hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" /> <span>Hubungi Kami</span>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Tentang <span className="text-[#C9A24D]">Terradekor</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-800 font-bold mb-4">
            PT. Opulent Interior Indonesia (Terradekor.id) adalah produsen dan importir produk interior premium serta penyedia jasa interior dan kontraktor terpadu.
          </p>
          <p className="text-lg text-gray-700 font-semibold">
            Dengan pengalaman bertahun-tahun, kami berkomitmen untuk memberikan solusi interior terbaik dengan kualitas premium dan harga terjangkau. Tim profesional kami siap membantu mewujudkan ruang impian Anda.
          </p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Mengapa Memilih <span className="text-[#C9A24D]">Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <Card key={i} className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#C9A24D]/20 p-6 hover:border-[#C9A24D] transform hover:scale-105 transition-all">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
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

      {/* Product & Service Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Produk & Layanan <span className="text-[#C9A24D]">Premium</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-700 font-bold mb-8 max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan interior dan konstruksi Anda
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-white border-2 border-gray-200 p-8 hover:border-[#C9A24D] transform hover:scale-105 transition-all">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-6xl">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 font-semibold">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/produk">
              <Button size="lg" className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white px-8 py-4 rounded-lg transform hover:scale-105 transition-transform">
                Lihat Semua Produk <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/layanan">
              <Button size="lg" variant="outline" className="border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg hover:bg-[#C9A24D] hover:text-white transition-all">
                Lihat Layanan <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C9A24D] via-[#D4AF6A] to-[#B89B5E] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            Wujudkan Ruang Impian Anda
          </h2>
          <p className="text-2xl text-white/90 font-bold max-w-3xl mx-auto">
            Bersama Terradekor, transformasi ruang Anda menjadi masterpiece yang elegan dan fungsional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/konsultasi">
              <Button size="lg" className="bg-white text-[#C9A24D] px-8 py-4 rounded-lg shadow-2xl hover:scale-105 transition-transform">
                <Heart className="w-5 h-5 mr-2" /> Konsultasi Gratis Sekarang
              </Button>
            </Link>
            <a href="https://wa.me/6281251511997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-lg shadow-2xl hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" /> <span>WhatsApp Kami</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
          }
