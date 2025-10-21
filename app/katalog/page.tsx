"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Grid, List } from "lucide-react";

// Sample product data - 22 products sesuai dengan file Produk Cycamelia.docx
const allProducts = [
  {
    id: "cycamelia-ciput-arab-tali-abu-abu",
    name: "Cycamelia Ciput Arab Tali Abu-Abu",
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
    id: "cycamelia-ciput-arab-tali-latte",
    name: "Cycamelia Ciput Arab Tali Latte",
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
    id: "cycamelia-ciput-arab-tali-black",
    name: "Cycamelia Ciput Arab Tali Black",
    price: 18000,
    image: "/images/4.jpg",
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
    id: "cycamelia-serenity-series",
    name: "Cycamelia Serenity Series",
    price: 20000,
    image: "/images/6.jpg",
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
    id: "cycamelia-ciput-arab-tali-oat",
    name: "Cycamelia Ciput Arab Tali Oat",
    price: 18000,
    image: "/images/7.jpg",
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
    id: "cycamelia-ciput-arab-tali-mocca",
    name: "Cycamelia Ciput Arab Tali Mocca",
    price: 18000,
    image: "/images/9.jpg",
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
    id: "cycamelia-floral-series",
    name: "Cycamelia Floral Series",
    price: 20000,
    image: "/images/11.jpg",
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
    image: "/images/12.jpg",
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
    id: "cycamelia-ciput-arab-tali-taupe",
    name: "Cycamelia Ciput Arab Tali Taupe",
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
    id: "cycamelia-delux-series",
    name: "Cycamelia Delux Series",
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
    id: "cycamelia-serenity-series-2",
    name: "Cycamelia Serenity Series",
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
    id: "cycamelia-ciput-arab-tali-black-2",
    name: "Cycamelia Ciput Arab Tali Black",
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
    id: "cycamelia-mist-series",
    name: "Cycamelia Mist Series",
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
    id: "cycamelia-royale-series",
    name: "Cycamelia Royale Series",
    price: 20000,
    image: "/images/21.jpg",
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
    id: "cycamelia-ciput-arab-tali-abu-abu-2",
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

export default function Katalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter products based on search and category
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "price-low") {
      return a.price - b.price;
    } else if (sortBy === "price-high") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Katalog Produk</h1>
            <p className="text-lg text-amber-50 max-w-2xl mx-auto">
              Temukan koleksi hijab premium kami dengan berbagai pilihan desain eksklusif
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white border-b animate-slide-in-left">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search - Full Width on mobile, flex-1 on desktop */}
            <div className="relative w-full lg:flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Cari produk berdasarkan nama atau kategori..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center flex-shrink-0">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  <SelectItem value="square">Hijab Segi Empat</SelectItem>
                  <SelectItem value="ciput">Ciput Arab</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nama</SelectItem>
                  <SelectItem value="price-low">Harga Terendah</SelectItem>
                  <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-500 text-lg">Tidak ada produk yang ditemukan</div>
            <p className="text-gray-400 mt-2">Coba ubah filter atau kata kunci pencarian</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Menampilkan {sortedProducts.length} produk
              </p>
            </div>

            <div className={viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
            }>
              {sortedProducts.map((product, index) => (
                <div key={product.id} className="h-full flex flex-col" style={{animationDelay: `${index * 0.1}s`}}>
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
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}