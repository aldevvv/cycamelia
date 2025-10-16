"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/use-cart";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  const handleBuyNow = () => {
    // Redirect to single product checkout
    window.location.href = `/pembayaran/${id}`;
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
          <div className="absolute top-4 left-4">
            <span className="bg-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              New
            </span>
          </div>
        )}
      </div>

      <CardContent className="p-5">
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight line-clamp-2">
            {name}
          </h3>
          
          {description && (
            <p className="text-gray-600 text-sm line-clamp-2">
              {description}
            </p>
          )}

          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-amber-600">
                {formatPrice(price)}
              </div>
              <div className="text-xs text-gray-500">
                Harga spesial
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline"
              className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50 transition-colors duration-200"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Keranjang
            </Button>
            <Button 
              className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white transition-all duration-200 group/btn"
              onClick={handleBuyNow}
            >
              <ShoppingBag className="h-4 w-4 mr-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
              Beli Sekarang
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}