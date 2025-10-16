"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/use-cart";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartItemsCount, isLoaded } = useCart();

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Katalog", href: "/katalog" },
    { name: "Kontak", href: "/kontak" },
  ];

  const cartItemsCount = isLoaded ? getCartItemsCount() : 0;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Cycamelia
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Cart Icon */}
          <Link href="/keranjang" className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount > 99 ? "99+" : cartItemsCount}
                </span>
              )}
            </Button>
          </Link>
          
          <Button 
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
            asChild
          >
            <Link href="/katalog">Lihat Koleksi</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-amber-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Cart */}
              <Link
                href="/keranjang"
                className="flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-amber-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemsCount > 99 ? "99+" : cartItemsCount}
                    </span>
                  )}
                </div>
                <span>Keranjang ({cartItemsCount})</span>
              </Link>
              
              <Button 
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white w-full mt-4"
                asChild
              >
                <Link href="/katalog" onClick={() => setIsOpen(false)}>
                  Lihat Koleksi
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}