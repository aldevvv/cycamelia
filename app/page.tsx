import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ProductCard from "@/components/product-card";
import { ArrowRight, Star, Shield, Truck, RefreshCw } from "lucide-react";

// Sample product data - 22 products sesuai dengan gambar yang ada
const allProducts = [
  {
    id: 1,
    name: "Elegant Premium Square",
    price: 250000,
    image: "/images/1.jpg",
    description: "Hijab segi empat premium dengan bahan silk yang nyaman dan elegan",
    category: "square",
  },
  {
    id: 2,
    name: "Luxury Instant Hijab",
    price: 350000,
    image: "/images/2.jpg",
    description: "Hijab instan praktis dengan detail bordir eksklusif",
    category: "instant",
  },
  {
    id: 3,
    name: "Royal Pashmina",
    price: 450000,
    image: "/images/3.jpg",
    description: "Pashmina premium dengan tekstur lembut dan warna eksklusif",
    category: "pashmina",
  },
  {
    id: 4,
    name: "Classic Square Collection",
    price: 200000,
    image: "/images/4.jpg",
    description: "Koleksi hijab segi empat klasik dengan motif timeless",
    category: "square",
  },
  {
    id: 5,
    name: "Modern Square Pattern",
    price: 275000,
    image: "/images/5.jpg",
    description: "Hijab segi empat modern dengan pattern kontemporer",
    category: "square",
  },
  {
    id: 6,
    name: "Premium Instant Series",
    price: 325000,
    image: "/images/6.jpg",
    description: "Seri hijab instan premium dengan material terbaik",
    category: "instant",
  },
  {
    id: 7,
    name: "Silk Pashmina Deluxe",
    price: 550000,
    image: "/images/7.jpg",
    description: "Pashmina silk deluxe dengan finishing premium",
    category: "pashmina",
  },
  {
    id: 8,
    name: "Casual Square Daily",
    price: 180000,
    image: "/images/8.jpg",
    description: "Hijab segi empat casual untuk daily wear",
    category: "square",
  },
  {
    id: 9,
    name: "Elegant Instant Premium",
    price: 380000,
    image: "/images/9.jpg",
    description: "Hijab instan elegan dengan detail premium",
    category: "instant",
  },
  {
    id: 10,
    name: "Classic Pashmina",
    price: 320000,
    image: "/images/10.jpg",
    description: "Pashmina klasik dengan warna timeless",
    category: "pashmina",
  },
  {
    id: 11,
    name: "Floral Square Collection",
    price: 290000,
    image: "/images/11.jpg",
    description: "Koleksi hijab segi empat dengan motif floral eksklusif",
    category: "square",
  },
  {
    id: 12,
    name: "Premium Instant Basic",
    price: 295000,
    image: "/images/12.jpg",
    description: "Hijab instan basic premium dengan berbagai pilihan warna",
    category: "instant",
  },
  {
    id: 13,
    name: "Signature Square Exclusive",
    price: 420000,
    image: "/images/13.jpg",
    description: "Hijab segi empat eksklusif dengan desain signature",
    category: "square",
  },
  {
    id: 14,
    name: "Luxury Instant Max",
    price: 480000,
    image: "/images/14.jpg",
    description: "Hijab instan mewah dengan detail premium maksimal",
    category: "instant",
  },
  {
    id: 15,
    name: "Diamond Pashmina",
    price: 650000,
    image: "/images/15.jpg",
    description: "Pashmina premium kelas diamond dengan kualitas tertinggi",
    category: "pashmina",
  },
  {
    id: 16,
    name: "Vintage Square Heritage",
    price: 310000,
    image: "/images/16.jpg",
    description: "Hijab segi empat dengan motif vintage yang elegan",
    category: "square",
  },
  {
    id: 17,
    name: "Smart Instant Pro",
    price: 360000,
    image: "/images/17.jpg",
    description: "Hijab instan profesional dengan fitur smart design",
    category: "instant",
  },
  {
    id: 18,
    name: "Velvet Pashmina Royal",
    price: 580000,
    image: "/images/18.jpg",
    description: "Pashmina velvet dengan sentuhan royal yang mewah",
    category: "pashmina",
  },
  {
    id: 19,
    name: "Geometric Square Modern",
    price: 265000,
    image: "/images/19.jpg",
    description: "Hijab segi empat dengan motif geometric modern",
    category: "square",
  },
  {
    id: 20,
    name: "Instant Elegant Plus",
    price: 410000,
    image: "/images/20.jpg",
    description: "Hijab instan elegan dengan tambahan fitur premium",
    category: "instant",
  },
  {
    id: 21,
    name: "Bamboo Pashmina Eco",
    price: 520000,
    image: "/images/21.jpg",
    description: "Pashmina eco-friendly dari material bamboo premium",
    category: "pashmina",
  },
  {
    id: 22,
    name: "Artisan Square Limited",
    price: 750000,
    image: "/images/22.jpg",
    description: "Hijab segi empat limited edition dengan sentuhan artisan",
    category: "square",
  },
];

// Featured products (first 4 products)
const featuredProducts = allProducts.slice(0, 4);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Premium Quality</h3>
              <p className="text-sm text-gray-600">Material berkualitas tinggi dengan standar premium</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-sm text-gray-600">Pengiriman gratis untuk pembelian minimal Rp 500.000</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <RefreshCw className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Easy Return</h3>
              <p className="text-sm text-gray-600">Pengembalian mudah dalam 7 hari</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Exclusive Design</h3>
              <p className="text-sm text-gray-600">Desain eksklusif yang tidak ada di tempat lain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Koleksi Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan pilihan terbaik dari koleksi premium kami yang dirancang khusus untuk Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-6"
              asChild
            >
              <Link href="/katalog">
                Lihat Semua Koleksi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Tentang Cycamelia
              </h2>
              <div className="space-y-4 text-gray-600">
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
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
                asChild
              >
                <Link href="/katalog">
                  Jelajahi Koleksi Kami
                </Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/5.jpg"
                alt="Cycamelia Story"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Temukan Hijab Sempurna untuk Anda
            </h2>
            <p className="text-lg text-amber-100">
              Konsultasi gratis dengan tim kami untuk menemukan koleksi yang sesuai dengan gaya dan kebutuhan Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-6"
                asChild
              >
                <Link href="/kontak">
                  Konsultasi Gratis
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-amber-700 px-8 py-6"
                asChild
              >
                <Link href="https://wa.me/6281234567890" target="_blank">
                  Hubungi WhatsApp
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
