import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Globe,
  Headphones,
  MessageSquareQuote,
  Phone,
  Stethoscope,
} from 'lucide-react';

export const metadata = {
  title: "More | Sam's Care Oy",
  description:
    'Find multilingual care information, client testimonials, job opportunities, and contact details.',
};

const moreLinks = [
  {
    title: 'Appointment',
    href: '/ajanvaraus',
    description:
      'Book a free consultation or request a home care visit.',
    icon: Calendar,
  },
  {
    title: 'Testimonials',
    href: '/asiakkaat-kertovat',
    description: 'Read community feedback and experiences from our clients.',
    icon: MessageSquareQuote,
  },
  {
    title: 'Contact us',
    href: '/ota-yhteytta',
    description:
      'Get in touch with our care team and discuss your needs.',
    icon: Phone,
  },
  {
    title: 'Services',
    href: '/palvelut',
    description: 'Explore our home care and nursing services.',
    icon: Stethoscope,
  },
  {
    title: 'Swedish-speaking care',
    href: '/kielet',
    description:
      'Learn about our Swedish-speaking care and other language support.',
    icon: Globe,
  },
  {
    title: 'Apply for a job',
    href: '/hae-tyota',
    description:
      'Join our team and help people live safely and comfortably at home.',
    icon: Briefcase,
  },
];

export default function MorePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="More information about Sam's Care"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-6xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 backdrop-blur-sm">
              <Headphones className="h-3.5 w-3.5" />
              More information
            </span>
            <h1 className="text-3xl font-black tracking-tight text-[#62ddc9] sm:text-5xl">
              More about Sam&apos;s Care
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Explore the extra pages that support your care journey, from
              multilingual service information to contact and team opportunities.
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
                Open page
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
