import { kieletSEO } from "@/seo";

export const metadata = kieletSEO;

export default function KieletLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
