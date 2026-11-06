import type { Metadata } from "next";

const asiakkaatKertovatSEO: Metadata = {
  title: "Testimonials | Sam's Care Oy – What Our Clients Say",
  description:
    "Read real stories from clients and families who have experienced Sam's Care Oy's home care, nursing, and personal assistance services across Uusimaa, Finland. Authentic reviews and feedback.",
  keywords: [
    "Sam's Care reviews",
    "home care testimonials Finland",
    "kotihoito kokemuksia",
    "care provider reviews Uusimaa",
    "Sam's Care Oy asiakaspalaute",
    "home nursing testimonials Finland",
    "trusted care provider Finland",
  ],
  alternates: {
    canonical: "https://www.samscare.fi/asiakkaat-kertovat",
  },
  openGraph: {
    title: "Testimonials | Sam's Care Oy",
    description:
      "Authentic stories from clients and families who trust Sam's Care Oy for their home care needs across Uusimaa.",
    url: "https://www.samscare.fi/asiakkaat-kertovat",
    siteName: "Sam's Care Oy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.samscare.fi/Images/og-testimonials.jpg",
        width: 1200,
        height: 630,
        alt: "Client Testimonials – Sam's Care Oy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials | Sam's Care Oy",
    description:
      "Real client stories and reviews for Sam's Care Oy home care services in Finland.",
    images: ["https://www.samscare.fi/Images/og-testimonials.jpg"],
  },
};

export default asiakkaatKertovatSEO;
