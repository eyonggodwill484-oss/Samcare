import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SitePageTransition from '@/components/SitePageTransition';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import SiteScrollProgress from '@/components/SiteScrollProgress';
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.samscare.fi'),
  title: "Sam's Care Oy | Luotettava kotihoito Suomessa",
  description:
    "Sam's Care Oy tarjoaa rauhallista ja laadukasta kotihoitoa, kotisairaanhoitoa ja henkilökohtaista tukea Espoossa, Helsingissä, Lohjalla ja laajemmalla Uudenmaan alueella.",
  keywords: [
    'kotihoito Suomi',
    'kotisairaanhoito Espoo',
    'henkilökohtainen apu',
    'ikääntyneiden hoito Helsinki',
    'palveluseteli',
    'kotihoito Lohja',
    'kotitalousvähennys',
    "Sam's Care",
  ],
  authors: [{ name: "Sam's Care Oy" }],
  icons: {
    icon: '/Images/Logo.png',
    apple: '/Images/Logo.png',
  },
  openGraph: {
    title: "Sam's Care Oy | Luotettava kotihoito Suomessa",
    description:
      'Tutut hoitajat, rauhalliset kotikäynnit ja henkilökohtainen hoiva koko Uudenmaan alueella Suomessa.',
    url: 'https://www.samscare.fi',
    siteName: "Sam's Care Oy",
    locale: 'fi_FI',
    type: 'website',
    images: [{ url: '/Images/hero-1.png', alt: "Sam's Care kotihoito" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className={cn("scroll-smooth", poppins.variable, "font-sans", inter.variable)}>
      <body className="min-h-screen flex flex-col bg-white text-brand-black antialiased selection:bg-brand-turquoise selection:text-brand-black">
        <Navbar />
        <main className="flex-1">
          <SitePageTransition>{children}</SitePageTransition>
        </main>
        <Footer />
        <ScrollProgressIndicator />
        <SiteScrollProgress />
      </body>
    </html>
  );
}
