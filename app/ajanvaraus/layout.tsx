import { ajanvarausSEO } from "@/seo";

export const metadata = ajanvarausSEO;

export default function AjanvarausLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
