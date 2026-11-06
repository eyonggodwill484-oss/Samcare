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
  title: "Sam's Care Oy | Compassionate & Reliable Home Care in Finland",
  description:
    "Sam's Care Oy provides high-quality, unhurried home care, home nursing, and personal assistance across Espoo, Helsinki, Lohja, and the Uusimaa region. Familiar nurses and caring support.",
  keywords: [
    'home care Finland',
    'home nursing Espoo',
    'personal assistance Finland',
    'elderly care Helsinki',
    'service voucher',
    'palveluseteli',
    'kotitalousvähennys',
    "Sam's Care",
  ],
  authors: [{ name: "Sam's Care Oy" }],
  icons: {
    icon: '/Images/logo.avif',
    apple: '/Images/logo.avif',
  },
  openGraph: {
    title: "Sam's Care Oy | Compassionate & Reliable Home Care in Finland",
    description:
      'Familiar personal nurses, unhurried home visits, and personalized healthcare services across Uusimaa, Finland.',
    url: 'https://www.samscare.fi',
    siteName: "Sam's Care Oy",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/Images/hero-1.png',
        width: 1905,
        height: 760,
        alt: "Sam's Care Home Care",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", poppins.variable, "font-sans", inter.variable)}>
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
