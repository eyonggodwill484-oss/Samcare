import type { Metadata } from "next";

const henkilokohtainenApuSEO: Metadata = {
  title: "Personal Assistance (Henkilökohtainen Apu) | Sam's Care Oy – Finland",
  description:
    "Sam's Care Oy acts as your employer of record for personal assistants across Finland. The assistance is completely free to you — costs are covered by wellbeing regions via service vouchers or purchase-service contracts. You decide; we handle payroll, taxes, and substitutes.",
  keywords: [
    "henkilökohtainen apu Finland",
    "personal assistance Finland",
    "disability support Finland",
    "employer of record personal assistant",
    "palveluseteli henkilökohtainen apu",
    "vammaispalvelut Finland",
    "työnantajamalli henkilökohtainen apu",
    "Sam's Care henkilökohtainen apu",
    "personal assistant Uusimaa",
    "independent living support Finland",
  ],
  alternates: {
    canonical: "https://www.samscare.fi/palvelut/henkilokohtainen-apu",
  },
  openGraph: {
    title: "Personal Assistance | Sam's Care Oy – Free for the Client",
    description:
      "You decide who supports you. Sam's Care handles all employer responsibilities so you can focus on living independently. Completely free — paid by your wellbeing region.",
    url: "https://www.samscare.fi/palvelut/henkilokohtainen-apu",
    siteName: "Sam's Care Oy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.samscare.fi/Images/og-henkilokohtainen-apu.jpg",
        width: 1200,
        height: 630,
        alt: "Personal Assistance – Sam's Care Oy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Assistance | Sam's Care Oy",
    description:
      "Free personal assistance with Sam's Care as your employer of record. You choose your assistant — we handle the rest.",
    images: ["https://www.samscare.fi/Images/og-henkilokohtainen-apu.jpg"],
  },
};

export default henkilokohtainenApuSEO;
