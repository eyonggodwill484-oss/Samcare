import { ExternalLink, FileText, ShieldCheck } from "lucide-react";
import Button from "@/components/Button";

const documents = [
  {
    href: "https://www.samscare.fi/_files/ugd/07cdcf_786c7f65bebe4018b4d1edda2661fe7e.pdf",
    label: "Rekisteriseloste Sam's Care Oy",
    Icon: ShieldCheck,
  },
  {
    href: "https://www.samscare.fi/_files/ugd/07cdcf_dc8499f6737a405ebb1b23c684e98392.pdf",
    label: "Helsingin kotihoidon tarkastuskäynti raportti",
    Icon: FileText,
  },
  {
    href: "https://www.samscare.fi/_files/ugd/07cdcf_a7750b01242e4f07ba65c9c62727a194.pdf",
    label: "Henkilökohtaisen avun omavalvontasuunnitelma",
    Icon: ShieldCheck,
  },
  {
    href: "https://www.samscare.fi/_files/ugd/07cdcf_c4ff94b73b214cf6a0b1b03d7bceb4e8.pdf",
    label: "Omavalvontasuunnitelma",
    Icon: FileText,
  },
];

export default function ServiceDocuments() {
  return (
    <section
      aria-labelledby="site-documents-title"
      className="border-t border-slate-200 bg-slate-50 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="site-documents-title"
          className="mb-4 text-center text-sm font-semibold text-slate-700"
        >
          Sam&apos;s Care -asiakirjat
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
          {documents.map(({ href, label, Icon }) => (
            <Button
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="w-full whitespace-normal text-center leading-tight"
            >
              <Icon aria-hidden="true" className="size-5 shrink-0" />
              <span>{label}</span>
              <ExternalLink aria-hidden="true" className="size-4 shrink-0" />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
