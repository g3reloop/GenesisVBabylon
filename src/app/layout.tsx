import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import GenesisNavigation from "./components/GenesisNavigation";
import GenesisMusicPlayer from "./components/GenesisMusicPlayer";
import { AdvancedMusicPlayerProvider } from "./components/music/AdvancedMusicPlayerProvider";
import PWAInstaller from "./components/PWAInstaller";
import PerformanceMonitor from "./components/PerformanceMonitor";
import { songs } from "../lib/songs-data";

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
      <body
            className={`${inter.variable} ${montserrat.variable} antialiased font-sans`}
      >
            <AdvancedMusicPlayerProvider songs={songs}>
              <GenesisNavigation />
              <main className="min-h-screen pt-16">
                {children}
              </main>
              <GenesisMusicPlayer />
              <footer className="bg-black/90 backdrop-blur-xl text-cloud-white text-center py-6 border-t border-electric-violet/30">
                <p>© 2025 Genesis Parallel Civilisation: Genesis V Babylon</p>
              </footer>
              <PWAInstaller />
              <PerformanceMonitor />
            </AdvancedMusicPlayerProvider>
      </body>
    </html>
  );
}
