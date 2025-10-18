"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function Pembayaran() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to katalog page since we're not using cart anymore
    router.push("/katalog");
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag className="h-12 w-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Pilih Produk Terlebih Dahulu</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Silakan pilih produk dari katalog kami untuk melanjutkan pembayaran.
          </p>
          <Button
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
            asChild
          >
            <Link href="/katalog">
              <ArrowRight className="h-4 w-4 mr-2" />
              Lihat Katalog
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}