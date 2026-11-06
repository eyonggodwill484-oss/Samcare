import type { Metadata } from "next";

const kotihoitoSEO: Metadata = {
  title: "Home Care (Kotihoito) | Sam's Care Oy – Uusimaa, Finland",
  description:
    "Unhurried, personalised home care services in Helsinki, Espoo, Lohja, Vantaa, and Raasepori. Sam's Care provides familiar caregivers for daily living support, personal hygiene, meal assistance, and companionship — all in your own home.",
  keywords: [
    "kotihoito Helsinki",
    "kotihoito Espoo",
    "kotihoito Lohja",
    "home care Uusimaa",
    "elderly home care Finland",
    "personal caregiver Finland",
    "daily living support Finland",
    "palveluseteli kotihoito",
    "kotitalousvähennys",
    "Sam's Care kotihoito",
  ],
  alternates: {
    canonical: "https://www.samscare.fi/palvelut/kotihoito",
  },
  openGraph: {
    title: "Home Care (Kotihoito) | Sam's Care Oy",
    description:
      "Personalised, unhurried home care with familiar caregivers across Uusimaa. Daily living support, personal hygiene, and companionship at home.",
    url: "https://www.samscare.fi/palvelut/kotihoito",
    siteName: "Sam's Care Oy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.samscare.fi/Images/og-kotihoito.jpg",
        width: 1200,
        height: 630,
        alt: "Home Care Services – Sam's Care Oy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Care | Sam's Care Oy – Finland",
    description:
      "Unhurried home care with familiar caregivers across Uusimaa, Finland.",
    images: ["https://www.samscare.fi/Images/og-kotihoito.jpg"],
  },
};

export default kotihoitoSEO;
