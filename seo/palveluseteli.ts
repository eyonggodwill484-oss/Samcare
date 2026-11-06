import type { Metadata } from "next";

const palveluseteliSEO: Metadata = {
  title: "Service Voucher (Palveluseteli) | Sam's Care Oy – Accepted Provider",
  description:
    "Sam's Care Oy is an approved service voucher provider for home care and personal assistance across Uusimaa. Use your municipality or wellbeing region voucher and choose familiar, unhurried caregivers — no extra cost to you.",
  keywords: [
    "palveluseteli kotihoito",
    "service voucher home care Finland",
    "palveluseteli Espoo",
    "palveluseteli Helsinki",
    "palveluseteli Lohja",
    "palveluseteli Vantaa",
    "approved service voucher provider Finland",
    "Kela service voucher",
    "wellbeing services county voucher",
    "Sam's Care palveluseteli",
    "kotitalousvähennys",
  ],
  alternates: {
    canonical: "https://www.samscare.fi/palvelut/palveluseteli",
  },
  openGraph: {
    title: "Service Voucher (Palveluseteli) | Sam's Care Oy",
    description:
      "Have a municipal or wellbeing region service voucher? Choose Sam's Care — familiar caregivers at your home, no out-of-pocket cost.",
    url: "https://www.samscare.fi/palvelut/palveluseteli",
    siteName: "Sam's Care Oy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.samscare.fi/Images/og-palveluseteli.jpg",
        width: 1200,
        height: 630,
        alt: "Service Voucher – Sam's Care Oy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Voucher | Sam's Care Oy",
    description:
      "Approved service voucher provider. Use your municipal voucher for home care with Sam's Care Oy.",
    images: ["https://www.samscare.fi/Images/og-palveluseteli.jpg"],
  },
};

export default palveluseteliSEO;
