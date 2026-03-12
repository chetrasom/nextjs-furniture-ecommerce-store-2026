import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Kantumruy_Pro, Suwannaphum } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

// Providers
import Providers from "./providers";

// Components
import ContainerWrapper from "@/components/global/ContainerWrapper";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
});

const kantumruy = Kantumruy_Pro({
  variable: "--font-kh-kantumruy",
  weight: ["100","200","300","400","500","600","700"],
  subsets: ["khmer"],
});

const suwannaphum = Suwannaphum({
  variable: "--font-kh-suwannaphum",
  weight: ["100","300","400","700","900"],
  subsets: ["khmer"],
});

export const metadata: Metadata = {
  title: 'Furnova Furniture Store',
  description: 'Shop modern furniture online with fast delivery and great prices',
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    title: 'Furnova Furniture Store',
    description: 'Shop modern furniture online with fast delivery and great prices',
    url: 'https://nextjs-furniture-ecommerce-store-20.vercel.app/',
    siteName: 'Furnova Furniture Store',
    images: [
      {
        url: '/og-image.png', // place this file in your public/ folder
        width: 1200,
        height: 630,
        alt: 'Furnova Furniture Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${kantumruy.variable} ${suwannaphum.variable} antialiased flex flex-col min-h-screen`}>
          <Providers>
            <Navbar />
            
            <main className="flex-1">
              <ContainerWrapper className="overflow-hidden pt-28 pb-16 lg:pt-32 xl:pt-40">
                {children}
              </ContainerWrapper>
            </main>

            <Footer />

          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
