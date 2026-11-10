import type { Metadata } from "next";

const siteUrl = "https://www.samscare.fi";
const socialImage = `${siteUrl}/Images/hero-1.png`;

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords: string[];
}): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Sam's Care Oy",
      locale: "fi_FI",
      type: "website",
      images: [{ url: socialImage, alt: "Sam's Care Oy" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
