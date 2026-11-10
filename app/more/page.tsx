import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Globe,
  Headphones,
  FileText,
  MessageSquareQuote,
  Phone,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { moreSEO } from '@/seo';

export const metadata = moreSEO;

const moreLinks = [
  {
    title: 'Ajanvaraus',
    href: '/ajanvaraus',
    description:
      'Varaa maksuton kartoituskäynti tai pyydä kotikäyntiä.',
    icon: Calendar,
  },
  {
    title: 'Asiakkaat kertovat',
    href: '/asiakkaat-kertovat',
    description: 'Lue asiakkaidemme kokemuksia ja palautteita.',
    icon: MessageSquareQuote,
  },
  {
    title: 'Ota yhteyttä',
    href: '/ota-yhteytta',
    description:
      'Ota yhteyttä hoitotiimiimme ja keskustele palvelutarpeistasi.',
    icon: Phone,
  },
  {
    title: 'Palvelut',
    href: '/palvelut',
    description: 'Tutustu kotihoito- ja sairaanhoitopalveluihimme.',
    icon: Stethoscope,
  },
  {
    title: 'Hinnasto',
    href: '/hinnasto',
    description: 'Tutustu kotihoidon ja muiden hoivapalvelujen hintoihin.',
    icon: FileText,
  },
  {
    title: 'Laatu ja hygienia',
    href: '/laatu-ja-hygienia',
    description: 'Lue kotihoidon hygieniakäytännöistä ja omavalvonnasta.',
    icon: ShieldCheck,
  },
  {
    title: 'Monikielinen hoiva',
    href: '/kielet',
    description:
      'Lue lisää ruotsinkielisestä hoivasta ja muusta kielituestamme.',
    icon: Globe,
  },
  {
    title: 'Hae työtä',
    href: '/hae-tyota',
    description:
      'Liity tiimiimme ja auta ihmisiä asumaan turvallisesti ja mukavasti kotona.',
    icon: Briefcase,
  },
];

export default function MorePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Lisätietoa Sam's Caresta"
            fill
            className="page-header-image h-full w-full object-cover"
          />
        </div>
        <div className="page-header-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-6xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 backdrop-blur-sm">
              <Headphones className="h-3.5 w-3.5" />
              Lisätietoa
            </span>
            <h1 className="text-3xl font-black tracking-tight text-[#62ddc9] sm:text-5xl">
              Lisää Sam&apos;s Caresta
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Tutustu palveluitamme tukeviin lisäsivuihin: löydät tietoa
              monikielisistä palveluista, yhteydenotosta ja työmahdollisuuksista.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {moreLinks.map(({ title, href, description, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-50 p-3 text-cyan-700">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
                Avaa sivu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
