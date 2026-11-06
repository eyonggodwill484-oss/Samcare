import type { Metadata } from "next";

const ajanvarausSEO: Metadata = {
  title: "Book a Free Consultation | Sam's Care Oy – Home Care Finland",
  description:
    "Book a free no-obligation home care consultation with Sam's Care Oy. We'll assess your needs and match you with a familiar caregiver. Covering Helsinki, Espoo, Vantaa, Lohja, and Raasepori.",
  keywords: [
    "book home care Finland",
    "free home care consultation",
    "kotihoito ajanvaraus",
    "home care assessment Finland",
    "Sam's Care book appointment",
    "home nursing booking Uusimaa",
    "care consultation Helsinki",
    "care consultation Espoo",
  ],
  alternates: {
    canonical: "https://www.samscare.fi/ajanvaraus",
  },
  openGraph: {
    title: "Book a Free Consultation | Sam's Care Oy",
    description:
      "Start your care journey with a free, no-obligation consultation. We come to you across Uusimaa, Finland.",
    url: "https://www.samscare.fi/ajanvaraus",
    siteName: "Sam's Care Oy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.samscare.fi/Images/og-ajanvaraus.jpg",
        width: 1200,
        height: 630,
        alt: "Book Consultation – Sam's Care Oy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Free Consultation | Sam's Care Oy",
    description:
      "Free home care consultation available across Helsinki, Espoo, Lohja, and Uusimaa. No obligation.",
    images: ["https://www.samscare.fi/Images/og-ajanvaraus.jpg"],
  },
};

export default ajanvarausSEO;
