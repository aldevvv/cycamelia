import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Cycamelia
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Koleksi hijab premium dengan desain eksklusif untuk segmen
              menengah ke atas. Nikmati kemewahan dan kenyamanan dalam setiap
              helaian hijab kami.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-700">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-red-700 transition-colors duration-200"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/katalog"
                  className="text-gray-600 hover:text-red-700 transition-colors duration-200"
                >
                  Katalog
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-gray-600 hover:text-red-700 transition-colors duration-200"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-700">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-sm">089635757921</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-sm">support@cycamelia.my.id</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600">
                <MapPin className="h-4 w-4 text-red-600 mt-0.5" />
                <span className="text-sm">
                  Jl. A.P Pettarani, Kota Makassar 90222
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Cycamelia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-red-700 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-red-700 text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
