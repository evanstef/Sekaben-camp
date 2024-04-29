import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/Navbar";
import Footer from "./_component/Footer";
import Head from "next/head";

const inter = Poppins({weight : ["400", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sekaben Camp - Sewa Alat Camping Di PangkalPinang",
  description: "Sekaben Camp merupakan penyedia sewa alat camping di kota Pangkalpinang,Bangka Belitung Indonesia. dikarenakan tidak semua orang mempunyai alat camping dan juga melihat potensi wisata alam yang besar di Bangka Belitung jadi buat temen-temen yang hobby berkemah atau camping gunakan jasa Sekaben Camp ini untuk menyewa alat camping.",
  openGraph : {
    title : "Sekaben Camp",
    description : "Sekaben Camp merupakan penyedia sewa alat camping di kota Pangkalpinang, Bangka Belitung Indonesia. Dikarenakan tidak semua orang mempunyai alat camping dan juga melihat potensi wisata alam yang besar di Bangka Belitung jadi buat temen-temen yang hobby berkemah atau camping gunakan jasa Sekaben Camp ini untuk menyewa alat camping.",
    url : "https://sekabencamp.vercel.app/",
    images : [
      {
        url : "https://sekabencamp.vercel.app/../public/Logo.png",
        width : 800,
        height : 600,
        alt : "Sekaben Camp Logo"
      }
    ]
  },
  keywords : ["Sekaben Camp", "Sewa Alat Camping", "Pangkalpinang", "Bangka Belitung", "Wisata Alam", "Kemah", "Camping"],
  robots : "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-cream-susu ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
