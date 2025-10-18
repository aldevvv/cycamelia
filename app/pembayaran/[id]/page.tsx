"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Minus,
  Plus,
  ArrowLeft,
  ShoppingBag,
  MessageCircle
} from "lucide-react";

// Sample product data - 22 products sesuai dengan Revision.md
const allProducts = [
  {
    id: "cycamelia-ciput-arab-tali-latte",
    name: "Cycamelia Ciput Arab Tali Latte",
    price: 18000,
    image: "/images/1.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
    size: "All Size",
    details: [
      "Ciput terbuat dari bahan kaos Rayon",
      "Bahan Halus, Lembut, dan nyaman dipakai",
      "Tidak sakit di telinga",
      "Memiliki tali pengikat yang bisa diatur menyesuaikan lingkar kepala"
    ]
  },
  {
    id: "cycamelia-ciput-arab-tali-butter",
    name: "Cycamelia Ciput Arab Tali Butter",
    price: 18000,
    image: "/images/2.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
    size: "All Size",
    details: [
      "Ciput terbuat dari bahan kaos Rayon",
      "Bahan Halus, Lembut, dan nyaman dipakai",
      "Tidak sakit di telinga",
      "Memiliki tali pengikat yang bisa diatur menyesuaikan lingkar kepala"
    ]
  },
  {
    id: "cycamelia-neutral-series",
    name: "Cycamelia Neutral Series",
    price: 20000,
    image: "/images/3.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
    size: "110 × 110cm",
    details: [
      "Material Paris Premium",
      "Serat lebih padat dari paris jaman dulu",
      "Bahan katun mudah diatur",
      "Tegap di dahi, cocok banget buat daily karena bahannya PW dan gak bikin gerah",
      "Bahan lebih flowy, soft dan tegak saat dipakai"
    ]
  },
  {
    id: "cycamelia-timeless-series",
    name: "Cycamelia Timeless Series",
    price: 20000,
    image: "/images/4.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
    size: "110 × 110cm",
    details: [
      "Material Paris Premium",
      "Serat lebih padat dari paris jaman dulu",
      "Bahan katun mudah diatur",
      "Tegap di dahi, cocok banget buat daily karena bahannya PW dan gak bikin gerah",
      "Bahan lebih flowy, soft dan tegak saat dipakai"
    ]
  },
  {
    id: "cycamelia-earth-series",
    name: "Cycamelia Earth Series",
    price: 20000,
    image: "/images/5.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
    size: "110 × 110cm",
    details: [
      "Material Paris Premium",
      "Serat lebih padat dari paris jaman dulu",
      "Bahan katun mudah diatur",
      "Tegap di dahi, cocok banget buat daily karena bahannya PW dan gak bikin gerah",
      "Bahan lebih flowy, soft dan tegak saat dipakai"
    ]
  },
  {
    id: "cycamelia-ciput-arab-tali-black",
    name: "Cycamelia Ciput Arab Tali Black",
    price: 18000,
    image: "/images/6.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
    size: "All Size",
    details: [
      "Ciput terbuat dari bahan kaos Rayon",
      "Bahan Halus, Lembut, dan nyaman dipakai",
      "Tidak sakit di telinga",
      "Memiliki tali pengikat yang bisa diatur menyesuaikan lingkar kepala"
    ]
  },
  {
    id: "cycamelia-elegant-series",
    name: "Cycamelia Elegant Series",
    price: 20000,
    image: "/images/7.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
    size: "110 × 110cm",
    details: [
      "Material Paris Premium",
      "Serat lebih padat dari paris jaman dulu",
      "Bahan katun mudah diatur",
      "Tegap di dahi, cocok banget buat daily karena bahannya PW dan gak bikin gerah",
      "Bahan lebih flowy, soft dan tegak saat dipakai"
    ]
  },
  {
    id: "cycamelia-serenity-series",
    name: "Cycamelia Serenity Series",
    price: 20000,
    image: "/images/8.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
    size: "110 × 110cm",
    details: [
      "Material Paris Premium",
      "Serat lebih padat dari paris jaman dulu",
      "Bahan katun mudah diatur",
      "Tegap di dahi, cocok banget buat daily karena bahannya PW dan gak bikin gerah",
      "Bahan lebih flowy, soft dan tegak saat dipakai"
    ]
  },
  {
    id: "cycamelia-floral-series",
    name: "Cycamelia Floral Series",
    price: 20000,
    image: "/images/9.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
    size: "110 × 110cm",
    details: [
      "Material Paris Premium",
      "Serat lebih padat dari paris jaman dulu",
      "Bahan katun mudah diatur",
      "Tegap di dahi, cocok banget buat daily karena bahannya PW dan gak bikin gerah",
      "Bahan lebih flowy, soft dan tegak saat dipakai"
    ]
  },
  {
    id: "cycamelia-ciput-arab-tali-mocca",
    name: "Cycamelia Ciput Arab Tali Mocca",
    price: 18000,
    image: "/images/10.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
    size: "All Size",
    details: [
      "Ciput terbuat dari bahan kaos Rayon",
      "Bahan Halus, Lembut, dan nyaman dipakai",
      "Tidak sakit di telinga",
      "Memiliki tali pengikat yang bisa diatur menyesuaikan lingkar kepala"
    ]
  },
  {
    id: "cycamelia-ciput-arab-tali-oat",
    name: "Cycamelia Ciput Arab Tali Oat",
    price: 18000,
    image: "/images/11.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
    size: "All Size",
    details: [
      "Ciput terbuat dari bahan kaos Rayon",
      "Bahan Halus, Lembut, dan nyaman dipakai",
      "Tidak sakit di telinga",
      "Memiliki tali pengikat yang bisa diatur menyesuaikan lingkar kepala"
    ]
  },
  {
    id: "cycamelia-mist-series",
    name: "Cycamelia Mist Series",
    price: 20000,
    image: "/images/12.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
    size: "110 × 110cm",
    details: [
      "Material Paris Premium",
      "Serat lebih padat dari paris jaman dulu",
      "Bahan katun mudah diatur",
      "Tegap di dahi, cocok banget buat daily karena bahannya PW dan gak bikin gerah",
      "Bahan lebih flowy, soft dan tegak saat dipakai"
    ]
  },
  {
    id: "cycamelia-ciput-arab-tali-taupe",
    name: "Cycamelia Ciput Arab Tali Taupe",
    price: 18000,
    image: "/images/13.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
    size: "All Size",
    details: [
      "Ciput terbuat dari bahan kaos Rayon",
      "Bahan Halus, Lembut, dan nyaman dipakai",
      "Tidak sakit di telinga",
      "Memiliki tali pengikat yang bisa diatur menyesuaikan lingkar kepala"
    ]
  },
  {
    id: "cycamelia-earthtone-series",
    name: "Cycamelia Earthtone Series",
    price: 20000,
    image: "/images/14.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
    size: "110 × 110cm",
    details: [
      "Material Paris Premium",
      "Serat lebih padat dari paris jaman dulu",
      "Bahan katun mudah diatur",
      "Tegap di dahi, cocok banget buat daily karena bahannya PW dan gak bikin gerah",
      "Bahan lebih flowy, soft dan tegak saat dipakai"
    ]
  },
  {
    id: "cycamelia-ciput-arab-tali-black-2",
    name: "Cycamelia Ciput Arab Tali Black",
    price: 18000,
    image: "/images/15.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
    size: "All Size",
    details: [
      "Ciput terbuat dari bahan kaos Rayon",
      "Bahan Halus, Lembut, dan nyaman dipakai",
      "Tidak sakit di telinga",
      "Memiliki tali pengikat yang bisa diatur menyesuaikan lingkar kepala"
    ]
  },
  {
    id: "cycamelia-bloom-series",
    name: "Cycamelia Bloom Series",
    price: 20000,
    image: "/images/16.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
    size: "110 × 110cm",
    details: [
      "Material Paris Premium",
      "Serat lebih padat dari paris jaman dulu",
      "Bahan katun mudah diatur",
      "Tegap di dahi, cocok banget buat daily karena bahannya PW dan gak bikin gerah",
      "Bahan lebih flowy, soft dan tegak saat dipakai"
    ]
  },
  {
    id: "cycamelia-royale-series",
    name: "Cycamelia Royale Series",
    price: 20000,
    image: "/images/17.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
    size: "110 × 110cm",
    details: [
      "Material Paris Premium",
      "Serat lebih padat dari paris jaman dulu",
      "Bahan katun mudah diatur",
      "Tegap di dahi, cocok banget buat daily karena bahannya PW dan gak bikin gerah",
      "Bahan lebih flowy, soft dan tegak saat dipakai"
    ]
  },
  {
    id: "cycamelia-ciput-arab-tali-navy",
    name: "Cycamelia Ciput Arab Tali Navy",
    price: 18000,
    image: "/images/18.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
    size: "All Size",
    details: [
      "Ciput terbuat dari bahan kaos Rayon",
      "Bahan Halus, Lembut, dan nyaman dipakai",
      "Tidak sakit di telinga",
      "Memiliki tali pengikat yang bisa diatur menyesuaikan lingkar kepala"
    ]
  },
  {
    id: "cycamelia-delux-series",
    name: "Cycamelia Delux Series",
    price: 20000,
    image: "/images/19.jpg",
    description: "Paris Premium dengan bahan yang lebih flowy, soft dan tegak saat dipakai",
    category: "square",
    size: "110 × 110cm",
    details: [
      "Material Paris Premium",
      "Serat lebih padat dari paris jaman dulu",
      "Bahan katun mudah diatur",
      "Tegap di dahi, cocok banget buat daily karena bahannya PW dan gak bikin gerah",
      "Bahan lebih flowy, soft dan tegak saat dipakai"
    ]
  },
  {
    id: "cycamelia-ciput-arab-tali-milo",
    name: "Cycamelia Ciput Arab Tali Milo",
    price: 18000,
    image: "/images/20.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
    size: "All Size",
    details: [
      "Ciput terbuat dari bahan kaos Rayon",
      "Bahan Halus, Lembut, dan nyaman dipakai",
      "Tidak sakit di telinga",
      "Memiliki tali pengikat yang bisa diatur menyesuaikan lingkar kepala"
    ]
  },
  {
    id: "cycamelia-ciput-arab-tali-nude",
    name: "Cycamelia Ciput Arab Tali Nude",
    price: 18000,
    image: "/images/21.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
    size: "All Size",
    details: [
      "Ciput terbuat dari bahan kaos Rayon",
      "Bahan Halus, Lembut, dan nyaman dipakai",
      "Tidak sakit di telinga",
      "Memiliki tali pengikat yang bisa diatur menyesuaikan lingkar kepala"
    ]
  },
  {
    id: "cycamelia-ciput-arab-tali-abu-abu",
    name: "Cycamelia Ciput Arab Tali Abu-abu",
    price: 18000,
    image: "/images/22.jpg",
    description: "Ciput terbuat dari bahan kaos Rayon yang halus, lembut, dan nyaman dipakai",
    category: "ciput",
    size: "All Size",
    details: [
      "Ciput terbuat dari bahan kaos Rayon",
      "Bahan Halus, Lembut, dan nyaman dipakai",
      "Tidak sakit di telinga",
      "Memiliki tali pengikat yang bisa diatur menyesuaikan lingkar kepala"
    ]
  }
];

interface PembayaranPageProps {
  params: Promise<{ id: string }>;
}

export default function SingleProductPembayaran({ params }: PembayaranPageProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [productId, setProductId] = useState<string | null>(null);
  
  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      setProductId(resolvedParams.id);
    };
    getParams();
  }, [params]);

  const product = allProducts.find(p => p.id === productId);
  
  useEffect(() => {
    if (productId && !product) {
      router.push("/katalog");
    }
  }, [productId, product, router]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleWhatsAppCheckout = () => {
    const message = `*ORDER BARU - CYCAMELIA*\n\n` +
      `*Pesanan:*\n` +
      `${product?.name} (x${quantity}) - ${formatPrice((product?.price || 0) * quantity)}\n\n` +
      `*Total: ${formatPrice(totalWithShipping)}* (termasuk ongkir)\n\n` +
      `Mohon konfirmasi ketersediaan dan total pembayaran.`;
    
    const whatsappUrl = `https://wa.me/6289653757921?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const shippingCost = 15000; // Flat shipping cost
  const totalWithShipping = (product?.price || 0) * quantity + shippingCost;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p>Produk tidak ditemukan</p>
          <Button onClick={() => router.push("/katalog")}>Kembali ke Katalog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Link href="/katalog" className="text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-3xl font-bold">Pembayaran</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detail Produk</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 border rounded-lg">
                  <div className="w-32 h-32 relative rounded-lg overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 w-full text-center sm:text-left">
                    <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
                      <p className="text-red-600 font-semibold text-lg">{formatPrice(product.price)}</p>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded inline-block w-fit mx-auto sm:mx-0">{product.size}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
                      <span className="text-sm text-gray-700">Jumlah:</span>
                      <div className="flex items-center space-x-2 mx-auto sm:mx-0">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={quantity}
                          onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                          className="w-16 text-center"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Detail Produk</h4>
                  <ul className="space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{product.name} x {quantity}</span>
                    <span>{formatPrice(product.price * quantity)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Biaya Pengiriman</span>
                    <span>{formatPrice(shippingCost)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-red-600">{formatPrice(totalWithShipping)}</span>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <Button
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
                    onClick={handleWhatsAppCheckout}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Konfirmasi Pesanan via WhatsApp
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Anda akan diarahkan ke WhatsApp untuk konfirmasi pesanan
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}