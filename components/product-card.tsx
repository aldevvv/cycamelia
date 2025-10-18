"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleBuyNow = () => {
    // Redirect to single product checkout
    window.location.href = `/pembayaran/${id}`;
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 card-hover animate-fade-in">
      <div className="relative overflow-hidden">
        <div className="aspect-square relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors duration-200"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        {/* New Badge */}
        {id <= 5 && (
          <div className="absolute top-4 left-4 animate-scale-in">
            <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
              New
            </span>
          </div>
        )}
      </div>

      <CardContent className="p-5 flex flex-col h-full">
        <div className="space-y-3 flex-grow">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight line-clamp-2">
            {name}
          </h3>
          
          {description && (
            <p className="text-gray-600 text-sm line-clamp-2">
              {description}
            </p>
          )}

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-red-700">
                {formatPrice(price)}
              </div>
              <div className="text-xs text-gray-500">
                Harga spesial
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <Button
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white transition-all duration-200 group/btn premium-btn focus-modern"
            onClick={handleBuyNow}
          >
            <ShoppingBag className="h-4 w-4 mr-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
            Beli Sekarang
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}