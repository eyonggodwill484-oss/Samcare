import { haeTyotaSEO } from "@/seo";

export const metadata = haeTyotaSEO;

export default function HaeTyotaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
