import type { Metadata } from "next";

const homeSEO: Metadata = {
  title: "Sam's Care Oy | Compassionate & Reliable Home Care in Finland",
  description:
    "Sam's Care Oy delivers high-quality, unhurried home care, home nursing, and personal assistance across Helsinki, Espoo, Lohja, Vantaa, and the wider Uusimaa region. Familiar nurses, flexible scheduling, and 24/7 on-call support.",
  keywords: [
    "home care Finland",
    "home nursing Espoo",
    "personal assistance Finland",
    "elderly care Helsinki",
    "kotihoito Lohja",
    "kotisairaanhoito Espoo",
    "henkilökohtainen apu",
    "palveluseteli",
    "kotitalousvähennys",
    "Sam's Care Oy",
    "care services Uusimaa",
    "24/7 home care Finland",
  ],
  alternates: {
    canonical: "https://www.samscare.fi/",
    languages: {
      "fi-FI": "https://www.samscare.fi/",
      "en-US": "https://www.samscare.fi/",
      "sv-SE": "https://www.samscare.fi/",
    },
  },
  openGraph: {
    title: "Sam's Care Oy | Compassionate & Reliable Home Care in Finland",
    description:
      "Familiar personal nurses, unhurried home visits, and personalised healthcare services across Uusimaa, Finland.",
    url: "https://www.samscare.fi/",
    siteName: "Sam's Care Oy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.samscare.fi/Images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Sam's Care Oy — Home Care Services in Finland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam's Care Oy | Home Care in Finland",
    description:
      "Compassionate & reliable home care, home nursing, and personal assistance across Uusimaa, Finland.",
    images: ["https://www.samscare.fi/Images/og-home.jpg"],
  },
};

export default homeSEO;
