import type { Metadata } from "next";

const palvelutSEO: Metadata = {
  title: "Our Services | Sam's Care Oy – Home Care, Nursing & Personal Assistance",
  description:
    "Explore the full range of Sam's Care Oy services: home care, home nursing, personal assistance, and service voucher solutions across Helsinki, Espoo, Lohja, Vantaa, and Raasepori.",
  keywords: [
    "care services Finland",
    "home care services Uusimaa",
    "home nursing Finland",
    "personal assistance Finland",
    "service voucher Finland",
    "kotihoito kotisairaanhoito henkilökohtainen apu",
    "palvelut Sam's Care",
    "care provider Uusimaa",
  ],
  alternates: {
    canonical: "https://www.samscare.fi/palvelut",
  },
  openGraph: {
    title: "Our Services | Sam's Care Oy",
    description:
      "Home care, home nursing, personal assistance, and service voucher solutions across Uusimaa, Finland.",
    url: "https://www.samscare.fi/palvelut",
    siteName: "Sam's Care Oy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.samscare.fi/Images/og-palvelut.jpg",
        width: 1200,
        height: 630,
        alt: "Services – Sam's Care Oy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Sam's Care Oy",
    description:
      "Explore our full care services: home care, nursing, personal assistance, and voucher support across Uusimaa.",
    images: ["https://www.samscare.fi/Images/og-palvelut.jpg"],
  },
};

export default palvelutSEO;
