import type { Metadata } from "next";

const hinnastoSEO: Metadata = {
  title: "Service Prices | Sam's Care Oy",
  description:
    "Service prices for home care, home nursing, personal assistance, childcare and blood sample collection, with visit fees and time-based surcharges.",
  keywords: [
    "home care pricing Finland",
    "kotihoito hinnasto",
    "childcare prices Finland",
    "blood sample collection price",
    "Sam's Care service prices",
  ],
  alternates: {
    canonical: "https://www.samscare.fi/hinnasto",
  },
  openGraph: {
    title: "Service Prices | Sam's Care Oy",
    description:
      "Service rates for home care, nursing, personal assistance, childcare and blood sample collection.",
    url: "https://www.samscare.fi/hinnasto",
    siteName: "Sam's Care Oy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.samscare.fi/Images/og-hinnasto.jpg",
        width: 1200,
        height: 630,
        alt: "Pricing – Sam's Care Oy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Prices | Sam's Care Oy",
    description:
      "Service rates for home care, nursing, personal assistance, childcare and blood sample collection.",
    images: ["https://www.samscare.fi/Images/og-hinnasto.jpg"],
  },
};

export default hinnastoSEO;
