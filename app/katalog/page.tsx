"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Grid, List } from "lucide-react";

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
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Katalog Produk</h1>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto">
              Temukan koleksi hijab premium kami dengan berbagai pilihan desain eksklusif
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  <SelectItem value="square">Segi Empat</SelectItem>
                  <SelectItem value="instant">Instant</SelectItem>
                  <SelectItem value="pashmina">Pashmina</SelectItem>
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
              {sortedProducts.map((product) => (
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
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}