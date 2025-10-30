import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ProductCard from "@/components/product-card";
import { ArrowRight, Star, Shield, Truck, RefreshCw, Heart, Sparkles, Crown } from "lucide-react";

// Sample product data - 22 products sesuai dengan file Produk Cycamelia.docx
const allProducts = [
  {
    id: "cycamelia-earthone-series",
    name: "Cycamelia Earthone Series",
    price: 20000,
    image: "/images/1.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
  },
  {
    id: "cycamelia-delux-series",
    name: "Cycamelia Delux Series",
    price: 20000,
    image: "/images/2.jpg",
    description: "Paris Premium dengan bahan yang flowy, soft, dan tegak saat dipakai",
    category: "Square",
  },
  {
    id: "cycamelia-neutral-series",
    name: "Cycamelia Neutral Series",
    price: 20000,
    image: "/images/3.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
  },
  {
    id: "cycamelia-neutral-series-2",
    name: "Cycamelia Neutral Series",
    price: 20000,
    image: "/images/4.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "Square",
  },
  {
    id: "cycamelia-earth-series",
    name: "Cycamelia Earth Series",
    price: 20000,
    image: "/images/5.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
  },
  {
    id: "cycamelia-serenity-series",
    name: "Cycamelia Serenity Series",
    price: 20000,
    image: "/images/6.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
  },
  {
    id: "cycamelia-royale-series",
    name: "Cycamelia Royale series",
    price: 20000,
    image: "/images/7.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
  },
  {
    id: "cycamelia-bloom-series",
    name: "Cycamelia Bloom Series",
    price: 20000,
    image: "/images/8.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
  },
  {
    id: "cycamelia-elegant-series",
    name: "Cycamelia Elegant Series",
    price: 20000,
    image: "/images/9.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
  },
  {
    id: "cycamelia-mist-series",
    name: "Cycamelia Mist series",
    price: 20000,
    image: "/images/10.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
  },
  {
    id: "cycamelia-floral-series",
    name: "Cycamelia Floral Series",
    price: 20000,
    image: "/images/11.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
  },
  {
    id: "cycamelia-ciput-arab-tali-black",
    name: "Cycamelia Ciput Arab Tali Black",
    price: 18000,
    image: "/images/12.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
  },
  {
    id: "cycamelia-ciput-arab-tali-nude",
    name: "Cycamelia Ciput Arab Tali Navy",
    price: 18000,
    image: "/images/13.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
  },
  {
    id: "cycamelia-ciput-arab-tali-taupe",
    name: "Cycamelia Ciput Arab Tali Taupe",
    price: 18000,
    image: "/images/14.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
  },
  {
    id: "cycamelia-ciput-arab-tali-dark-grey",
    name: "Cycamelia Ciput Arab Tali Dark Grey",
    price: 18000,
    image: "/images/15.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
  },
  {
    id: "cycamelia-ciput-arab-tali-abu-abu",
    name: "Cycamelia Ciput Arab Tali Abu-abu",
    price: 18000,
    image: "/images/16.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
  },
  {
    id: "cycamelia-ciput-arab-tali-milo",
    name: "Cycamelia Ciput Arab Tali Milo",
    price: 18000,
    image: "/images/17.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
  },
  {
    id: "cycamelia-ciput-arab-tali-mocca",
    name: "Cycamelia Ciput Arab Tali Mocca",
    price: 18000,
    image: "/images/18.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
  },
  {
    id: "cycamelia-ciput-arab-tali-nude-2",
    name: "Cycamelia Ciput Arab Tali Nude",
    price: 18000,
    image: "/images/19.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
  },
  {
    id: "cycamelia-ciput-arab-tali-oat",
    name: "Cycamelia Ciput Arab Tali Oat",
    price: 18000,
    image: "/images/20.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
  },
  {
    id: "cycamelia-ciput-arab-tali-butter",
    name: "Cycamelia Ciput Arab Tali Butter",
    price: 18000,
    image: "/images/21.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
  },
  {
    id: "cycamelia-ciput-arab-tali-latte",
    name: "Cycamelia Ciput Arab Tali Latte",
    price: 18000,
    image: "/images/22.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
  }
];

// Featured products (first 8 products for better display)
const featuredProducts = allProducts.slice(0, 8);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Premium Features Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-red-50"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Crown className="w-4 h-4" />
              <span>Keunggulan Premium</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent mb-4">
              Mengapa Memilih Cycamelia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pengalaman berhijab premium dengan kualitas terbaik dan pelayanan istimewa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center space-y-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">Material berkualitas tinggi dengan standar premium yang terjamin</p>
            </div>
            <div className="group text-center space-y-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Free Shipping</h3>
              <p className="text-gray-600 leading-relaxed">Pengiriman gratis untuk pembelian minimal Rp 500.000</p>
            </div>
            <div className="group text-center space-y-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <RefreshCw className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Easy Return</h3>
              <p className="text-gray-600 leading-relaxed">Pengembalian mudah dalam 7 hari tanpa syarat rumit</p>
            </div>
            <div className="group text-center space-y-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Exclusive Design</h3>
              <p className="text-gray-600 leading-relaxed">Desain eksklusif yang tidak ada di tempat lain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4" />
              <span>Koleksi Terfavorit</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
              Koleksi Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan pilihan terbaik dari koleksi premium kami yang dirancang khusus untuk Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="h-full flex flex-col animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              asChild
            >
              <Link href="/katalog">
                Lihat Semua Koleksi
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-red-50"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium w-fit">
                <Crown className="w-4 h-4" />
                <span>Tentang Kami</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
                Cycamelia: Elegansi dalam Setiap Lembaran
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Cycamelia adalah brand hijab premium yang didedikasikan untuk menyediakan koleksi 
                  hijab berkualitas tinggi dengan desain eksklusif. Kami percaya bahwa setiap wanita 
                  layak tampil percaya diri dengan hijab yang tidak hanya indah, tetapi juga nyaman 
                  dan berkualitas.
                </p>
                <p>
                  Setiap produk Cycamelia dibuat dengan material pilihan dan melalui proses quality 
                  control yang ketat untuk memastikan Anda mendapatkan produk terbaik yang sesuai 
                  dengan standar premium.
                </p>
              </div>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                asChild
              >
                <Link href="/katalog">
                  Jelajahi Koleksi Kami
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-slide-in-right group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-800/20 z-10"></div>
              <Image
                src="/images/5.jpg"
                alt="Cycamelia Story"
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-red-900"></div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Temukan Hijab Sempurna untuk Anda
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Konsultasi gratis dengan tim kami untuk menemukan koleksi yang sesuai dengan gaya dan kebutuhan Anda
            </p>
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-red-700 hover:bg-red-50 px-8 py-6 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                asChild
              >
                <Link href="/kontak">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
