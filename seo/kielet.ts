import type { Metadata } from "next";

const kieletSEO: Metadata = {
  title: "Multilingual Care (SV/FR/ES) | Sam's Care Oy – Care in Your Language",
  description:
    "Sam's Care Oy offers home care services in Finnish, Swedish, French, Spanish, and other languages across Uusimaa. Receive compassionate care from a caregiver who speaks your language.",
  keywords: [
    "multilingual home care Finland",
    "Swedish-speaking home care Finland",
    "care in French Finland",
    "care in Spanish Finland",
    "ruotsinkielinen kotihoito",
    "hemvård på svenska Finland",
    "vård på franska Finland",
    "Sam's Care languages",
    "international care Uusimaa",
    "foreign language caregiver Finland",
  ],
  alternates: {
    canonical: "https://www.samscare.fi/kielet",
    languages: {
      "sv-SE": "https://www.samscare.fi/kielet",
    },
  },
  openGraph: {
    title: "Multilingual Care | Sam's Care Oy – SV / FR / ES",
    description:
      "Care in your own language — Swedish, French, Spanish, and more. Sam's Care brings cultural understanding to every home visit.",
    url: "https://www.samscare.fi/kielet",
    siteName: "Sam's Care Oy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.samscare.fi/Images/og-kielet.jpg",
        width: 1200,
        height: 630,
        alt: "Multilingual Care – Sam's Care Oy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multilingual Care | Sam's Care Oy",
    description:
      "Home care delivered in Swedish, French, Spanish, and more across Uusimaa, Finland.",
    images: ["https://www.samscare.fi/Images/og-kielet.jpg"],
  },
};

export default kieletSEO;
