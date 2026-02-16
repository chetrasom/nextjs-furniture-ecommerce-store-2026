import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Kantumruy_Pro, Suwannaphum } from "next/font/google";
import "./globals.css";

// Providers
import Providers from "./providers";

// Components
import ContainerWrapper from "@/components/global/ContainerWrapper";
import Navbar from "@/components/navbar/Navbar";

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
  title: "Next Furniture Store",
  description: "A nifty store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${kantumruy.variable} ${suwannaphum.variable} antialiased`}>
        <Providers>
          <Navbar />
          <ContainerWrapper className="overflow-hidden pt-28 pb-16 lg:pt-32 xl:pt-40">
            {children}
          </ContainerWrapper>
        </Providers>
      </body>
    </html>
  );
}
