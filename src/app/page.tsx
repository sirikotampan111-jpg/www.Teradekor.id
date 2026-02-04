'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check, Phone, MessageCircle, ArrowRight, Star, Award, Clock, Shield, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const logo = '/logo.jpg'; // Semua logo pakai logo.jpg

const advantages = [
  { icon: logo, title: 'Terima Beres', description: 'Dari desain hingga pemasangan, kami tangani semua dengan profesional.' },
  { icon: logo, title: 'Kualitas Premium', description: 'Material berkualitas tinggi dengan standar internasional.' },
  { icon: logo, title: 'Harga Terjangkau', description: 'Solusi premium dengan harga yang kompetitif dan transparan.' },
  { icon: logo, title: 'Tim Profesional', description: 'Tim ahli berpengalaman di bidang interior dan konstruksi.' },
  { icon: logo, title: 'Material Berkualitas', description: 'Produk import dan lokal dengan kualitas terbaik.' },
  { icon: logo, title: 'Tepat Waktu', description: 'Penyelesaian proyek sesuai jadwal yang disepakati.' },
];

const highlights = [
  { title: 'Wall Panel', description: 'Wall panel dinding premium dengan berbagai pilihan desain dan warna.', icon: logo },
  { title: 'Wallpaper', description: 'Wallpaper dan wallpaper 3D untuk mempercantik dinding ruangan.', icon: logo },
  { title: 'Vinyl & SPC', description: 'Lantai vinyl dan SPC dengan berbagai motif dan tekstur realistik.', icon: logo },
  { title: 'WPC Decking', description: 'Decking WPC tahan cuaca untuk outdoor dan semi-outdoor.', icon: logo },
  { title: 'Pintu WPC & Baja', description: 'Pintu modern dan tahan lama dengan material berkualitas.', icon: logo },
  { title: 'Jasa Interior', description: 'Layanan desain dan pemasangan interior komprehensif.', icon: logo },
];

// Animate each letter from left/right (magnet effect)
const AnimatedText = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.03, type: 'spring', stiffness: 100 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Overlay Full */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/office.jpg"
          alt="Background Office"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C9A24D]/20 to-[#B89B5E]/20 border border-[#C9A24D]/30 px-6 py-3 rounded-full mb-8">
          <Star className="w-5 h-5 text-[#C9A24D]" />
          <span className="text-[#C9A24D] font-bold text-sm uppercase tracking-wider">
            <AnimatedText text="Solusi Interior Premium" />
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-4">
          <AnimatedText text="Solusi Interior & Konstruksi Premium" />
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24D] via-[#D4AF6A] to-[#C9A24D] mb-12">
          <AnimatedText text="Terima Beres" />
        </h2>

        <p className="text-xl sm:text-2xl text-gray-200 font-bold max-w-4xl mx-auto leading-relaxed mb-8">
          <AnimatedText text="Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional." />
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/konsultasi">
            <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" /> <span>Konsultasi Gratis</span>
            </Button>
          </Link>
          <Link href="/produk">
            <Button className="border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              Lihat Produk <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <a
            href="https://wa.me/6281251511997"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5" /> <span>Hubungi Kami</span>
          </a>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            <AnimatedText text="Mengapa Memilih Kami" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {advantages.map((adv, idx) => (
            <Card key={idx} className="bg-black/40 border-2 border-[#C9A24D]/20 p-6 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center">
                  <Image src={adv.icon} alt={adv.title} width={48} height={48} />
                </div>
                <h3 className="text-xl font-bold text-[#C9A24D]">
                  <AnimatedText text={adv.title} />
                </h3>
                <p className="text-gray-200 font-semibold"><AnimatedText text={adv.description} /></p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            <AnimatedText text="Produk & Layanan Premium" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {highlights.map((hl, idx) => (
            <Card key={idx} className="bg-black/40 border-2 border-[#C9A24D]/20 p-8 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center">
                  <Image src={hl.icon} alt={hl.title} width={48} height={48} />
                </div>
                <h3 className="text-2xl font-bold text-[#C9A24D]"><AnimatedText text={hl.title} /></h3>
                <p className="text-gray-200 font-semibold"><AnimatedText text={hl.description} /></p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center relative">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
          <AnimatedText text="Wujudkan Ruang Impian Anda" />
        </h2>
        <p className="text-2xl text-white/90 font-bold max-w-3xl mx-auto leading-relaxed mb-8">
          <AnimatedText text="Bersama Terradekor, transformasi ruang Anda menjadi masterpiece yang elegan dan fungsional" />
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/konsultasi">
            <Button className="bg-white text-[#C9A24D] hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center">
              <Heart className="w-5 h-5 mr-2" /> <span>Konsultasi Gratis Sekarang</span>
            </Button>
          </Link>
          <a
            href="https://wa.me/6281251511997"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5" /> <span>WhatsApp Kami</span>
          </a>
        </div>
      </section>
    </div>
  );
}
