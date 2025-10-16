import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cycamelia - Premium Hijab Collection",
  description: "Cycamelia menyediakan koleksi hijab premium dengan desain eksklusif untuk segmen menengah ke atas. Nikmati kemewahan dan kenyamanan dalam setiap helaian hijab kami.",
  keywords: ["hijab premium", "hijab eksklusif", "hijab berkualitas", "Cycamelia"],
  authors: [{ name: "Cycamelia" }],
  openGraph: {
    title: "Cycamelia - Premium Hijab Collection",
    description: "Koleksi hijab premium dengan desain eksklusif untuk segmen menengah ke atas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
