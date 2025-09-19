import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { MusicPlayerProvider } from "./components/PersistentMusicPlayer";
import PWAInstaller from "./components/PWAInstaller";
import { songs } from "../lib/songs-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genesis Parallel Civilisation: Genesis V Babylon",
  description: "A complete civilizational ontology comparing Babylon's Corrupted Recursive Loops (CRLs) with Genesis' Stabilized Recursive Loops (SRLs).",
  manifest: "/manifest.json",
  themeColor: "#10b981",
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
            className={`${inter.variable} ${montserrat.variable} antialiased bg-emerald-900 text-emerald-50 font-sans`}
      >
            <MusicPlayerProvider songs={songs}>
              <Navigation />
              <main className="min-h-screen">
                {children}
              </main>
              <footer className="bg-emerald-900 text-emerald-300 text-center py-6 border-t border-emerald-700">
                <p>&copy; 2025 Genesis Parallel Civilisation: Genesis V Babylon</p>
              </footer>
              <PWAInstaller />
            </MusicPlayerProvider>
      </body>
    </html>
  );
}
