import type { Metadata } from "next";

const kotisairaanhoitoSEO: Metadata = {
  title: "Home Nursing (Kotisairaanhoito) | Sam's Care Oy – Licensed Nurses at Home",
  description:
    "Professional in-home nursing in Helsinki, Espoo, Lohja, Vantaa, and Raasepori. Sam's Care nurses administer medications, perform injections, wound care, lab sampling, catheter care, and post-surgery recovery support — all in your own home.",
  keywords: [
    "kotisairaanhoito Helsinki",
    "kotisairaanhoito Espoo",
    "home nursing Finland",
    "in-home nurse Uusimaa",
    "wound care home Finland",
    "medication administration home",
    "INR sampling at home",
    "home blood test Finland",
    "palliative care home Finland",
    "post-surgery home nursing",
    "Sam's Care kotisairaanhoito",
  ],
  alternates: {
    canonical: "https://www.samscare.fi/palvelut/kotisairaanhoito",
  },
  openGraph: {
    title: "Home Nursing | Sam's Care Oy – Licensed Nurses at Your Door",
    description:
      "Avoid hospital trips — our licensed nurses come to you. Wound care, injections, lab sampling, and more across Uusimaa, Finland.",
    url: "https://www.samscare.fi/palvelut/kotisairaanhoito",
    siteName: "Sam's Care Oy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.samscare.fi/Images/og-kotisairaanhoito.jpg",
        width: 1200,
        height: 630,
        alt: "Home Nursing – Sam's Care Oy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Nursing | Sam's Care Oy – Finland",
    description:
      "Licensed nurses delivering professional medical care in your own home across Uusimaa, Finland.",
    images: ["https://www.samscare.fi/Images/og-kotisairaanhoito.jpg"],
  },
};

export default kotisairaanhoitoSEO;
