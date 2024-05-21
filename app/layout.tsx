import type { Metadata } from "next";
import { Bubblegum_Sans as Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Shiba Shanti Inu",
  description: "Join us on our journey to the moon with our unique and exciting meme coin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
