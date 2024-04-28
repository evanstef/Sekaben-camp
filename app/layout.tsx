import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/Navbar";
import Footer from "./_component/Footer";
import Head from "next/head";

const inter = Poppins({weight : ["400", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sekaben Camp",
  description: "Sewa Alat Camping",
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
