import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./styles/globals.css";
import Navigation from "./components/Navigation";
import MusicPlayer from "./components/MusicPlayer";
import PWAInstaller from "./components/PWAInstaller";
import PerformanceMonitor from "./components/PerformanceMonitor";
import { musicTracks } from "../lib/music-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
  preload: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
  preload: true,
});

export const metadata: Metadata = {
  title: "Genesis Parallel Civilisation: Genesis V Babylon",
  description: "A complete civilizational ontology comparing Babylon's Corrupted Recursive Loops (CRLs) with Genesis' Stabilized Recursive Loops (SRLs).",
  manifest: "/manifest.json",
  themeColor: "#7E60BF",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Genesis V Babylon",
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
  openGraph: {
    title: "Genesis Parallel Civilisation: Genesis V Babylon",
    description: "A complete civilizational ontology comparing Babylon's Corrupted Recursive Loops (CRLs) with Genesis' Stabilized Recursive Loops (SRLs).",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased font-sans`}>
        <Navigation />
        <main className="min-h-screen pt-20 pb-24">
          {children}
        </main>
        <MusicPlayer tracks={musicTracks} autoplay={true} />
        <footer className="glass-card text-center py-6 mx-4 mb-24">
          <p className="text-white/80">&copy; 2025 Genesis Parallel Civilisation: Genesis V Babylon</p>
        </footer>
        <PWAInstaller />
        <PerformanceMonitor />
      </body>
    </html>
  );
}
