"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
} from "lucide-react";

export default function Kontak() {
  const handleWhatsAppContact = () => {
    const message = "Halo, saya ingin bertanya tentang produk Cycamelia.";
    const whatsappUrl = `https://wa.me/6289635757921?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const whatsappMessage = `Halo, saya ${name} (${email}). ${message}`;
    const whatsappUrl = `https://wa.me/6289635757921?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Hubungi Kami</h1>
            <p className="text-lg text-amber-50 max-w-2xl mx-auto">
              Kami siap membantu Anda menemukan hijab sempurna untuk setiap
              occasion
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Informasi Kontak
              </h2>
              <p className="text-gray-600">
                Tim customer service kami siap membantu Anda dengan senang hati.
                Hubungi kami melalui berbagai cara berikut:
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp */}
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg">
                        WhatsApp
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Respon tercepat untuk pertanyaan dan pemesanan
                      </p>
                      <div className="mt-3">
                        <Button
                          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
                          onClick={handleWhatsAppContact}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Chat via WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        Telepon
                      </h3>
                      <p className="text-gray-600 mt-1">089635757921</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Senin - Sabtu, 09:00 - 18:00 WIB
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        Email
                      </h3>
                      <p className="text-gray-600 mt-1">
                        support@cycamelia.my.id
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Respon dalam 24 jam
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        Alamat
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Jl. A.P Pettarani
                        <br />
                        Kota Makassar 90222
                        <br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                Ikuti Kami
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/cycamelia.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Kirim Pesan</h2>
              <p className="text-gray-600">
                Isi formulir di bawah ini dan kami akan menghubungi Anda segera
                melalui WhatsApp.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Nama Lengkap
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Masukkan nama Anda"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700"
                    >
                      Subjek
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Tentang apa Anda ingin bertanya?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Tuliskan pesan Anda di sini..."
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-amber-400 hover:to-amber-500 text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Kirim via WhatsApp
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Pesan Anda akan langsung terkirim ke WhatsApp kami untuk
                    respon lebih cepat
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-3">
                      Jam Operasional
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Senin - Jumat</span>
                        <span className="text-gray-900 font-medium">
                          09:00 - 18:00 WIB
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sabtu</span>
                        <span className="text-gray-900 font-medium">
                          09:00 - 15:00 WIB
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Minggu</span>
                        <span className="text-gray-900 font-medium">Tutup</span>
                      </div>
                    </div>
                  </div>
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
