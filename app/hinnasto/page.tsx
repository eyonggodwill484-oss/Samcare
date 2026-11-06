import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock } from "lucide-react";

export const metadata = {
  title: "Service Prices | Sam's Care Oy",
  description:
    "Service prices for home care, home nursing, personal assistance, childcare and blood sample collection, with visit fees and time-based surcharges.",
};

export default function HinnastoPage() {
  return (
    <div className="w-full">
      <section className="relative isolate min-h-[360px] w-full overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Transparent pricing and household tax deduction"
            fill
            sizes="100vw"
            className="page-header-image h-full w-full object-cover"
            priority
          />
        </div>
        <div className="page-header-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-100 backdrop-blur-sm">
              Transparent Rates
            </span>
            <h1 className="text-3xl font-black leading-tight tracking-tight text-[#62ddc9] sm:text-5xl">
              Pricing & Household Tax Deduction
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              No hidden costs. All our healthcare and social care services are
              exempt from VAT (0% VAT) and qualify for Finland&apos;s generous
              60% household tax deduction (Kotitalousvähennys).
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="service-rates-title"
        className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#045184]">
              Service rates
            </p>
            <h2
              id="service-rates-title"
              className="mt-2 text-3xl font-bold tracking-tight text-[#14384b] sm:text-4xl"
            >
              Service price list
            </h2>

            <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              <li className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-medium text-slate-700">
                  Home care and home nursing
                </span>
                <span className="shrink-0 text-lg font-bold text-[#045184]">
                  €56.80 <span className="text-sm font-medium">/ hour</span>
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-medium text-slate-700">
                  Personal assistant
                </span>
                <span className="shrink-0 text-lg font-bold text-[#045184]">
                  €35 <span className="text-sm font-medium">/ hour</span>
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-medium text-slate-700">Childcare</span>
                <span className="shrink-0 text-lg font-bold text-[#045184]">
                  €51.55 <span className="text-sm font-medium">/ hour</span>
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-medium text-slate-700">
                  Blood sample collection
                  <span className="mt-1 block text-sm font-normal text-slate-500">
                    No time charge
                  </span>
                </span>
                <span className="shrink-0 text-lg font-bold text-[#045184]">
                  €62 <span className="text-sm font-medium">/ time</span>
                </span>
              </li>
            </ul>

            <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-[#c8e8e2] bg-[#eff9f7] px-4 py-3">
              <span className="font-semibold text-[#14384b]">
                One-time visit fee
              </span>
              <span className="shrink-0 font-bold text-[#045184]">
                +€6.50 / time
              </span>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 text-[#045184]">
                <Clock aria-hidden="true" className="h-5 w-5" />
                <h3 className="text-lg font-bold text-[#14384b]">
                  Evening, night & weekend supplements
                </h3>
              </div>
              <ul className="mt-3 divide-y divide-slate-200 border-y border-slate-200">
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-slate-700">
                    Evening supplement <span className="text-slate-500">6–9 pm</span>
                  </span>
                  <span className="shrink-0 font-bold text-[#045184]">+15%</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-slate-700">
                    Night supplement <span className="text-slate-500">9 pm–6 am</span>
                  </span>
                  <span className="shrink-0 font-bold text-[#045184]">+40%</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-slate-700">
                    Saturdays <span className="text-slate-500">6 am–8 pm</span>
                  </span>
                  <span className="shrink-0 font-bold text-[#045184]">+25%</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-slate-700">
                    Sundays / holidays{" "}
                    <span className="text-slate-500">
                      Saturday 8 pm–Sunday 12 pm
                    </span>
                  </span>
                  <span className="shrink-0 font-bold text-[#045184]">+100%</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-slate-700">
                    Eve <span className="text-slate-500">12 pm–8 pm</span>
                  </span>
                  <span className="shrink-0 font-bold text-[#045184]">+100%</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative aspect-[1.35] overflow-hidden rounded-3xl bg-slate-100 shadow-lg shadow-[#045184]/10 lg:mt-12">
            <Image
              src="/Images/price%202.png"
              alt="A caregiver spending time with an older client at home"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="additional-information-title"
        className="bg-[#f3faf9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[1.5] overflow-hidden rounded-3xl bg-slate-100 shadow-lg shadow-[#045184]/10">
            <Image
              src="/Images/personalcare.png"
              alt="A caregiver spending a warm moment with an older client"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#045184]">
              Good to know
            </p>
            <h2
              id="additional-information-title"
              className="mt-2 text-3xl font-bold tracking-tight text-[#14384b] sm:text-4xl"
            >
              Additional information
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Here are a few practical details about our home health care and
              nursing services.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  Home health care and nursing services are tax-free (VAT 0%).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  The minimum billing period is one hour.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  Billing is sent once a month.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  Payment term is 14 days net. Default interest is charged
                  according to law.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  Travel reimbursements and parking costs are agreed separately.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  The introductory and assessment visit is free.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="household-deduction-title"
        className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#045184]">
              Tax information
            </p>
            <h2
              id="household-deduction-title"
              className="mt-2 text-3xl font-bold tracking-tight text-[#14384b] sm:text-4xl"
            >
              Household deduction
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The household deduction rules changed on January 1, 2025. The
              figures below distinguish the 2024 rules from the changes for
              2025.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-bold text-[#14384b]">
                Changes from 2025
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>
                  The maximum deduction is €1,600 per person per year, or up
                  to €3,200 combined for spouses.
                </li>
                <li>
                  When work is purchased from a company, the deduction is 35%
                  of the work portion.
                </li>
                <li>
                  When hiring an employee, the deduction is 13% of wages, and
                  related employer side costs can also be deducted.
                </li>
                <li>
                  The deductible amount is €150.
                </li>
              </ul>
            </div>

            <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
              In 2024, the maximum was €2,250 for renovation work and €3,500
              for household, care and nursing work, and physiotherapy. From
              2025, the maximum is €1,600 for these types of work.
            </p>

            <div className="mt-4 rounded-xl border border-[#c8e8e2] bg-[#eff9f7] px-4 py-4">
              <h3 className="font-bold text-[#14384b]">
                Separate increased-deduction information
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                The information provided also notes a deduction of 60% of the
                work portion, up to €3,500 per year, valid until 2027. The
                applicable rate and maximum may depend on eligibility and the
                type of work; please confirm which rules apply to your
                situation.
              </p>
            </div>

            <Link
              href="/ota-yhteytta"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#045184] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#033e65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#045184]"
            >
              Contact us
            </Link>
          </div>

          <div className="relative aspect-[1.5] overflow-hidden rounded-3xl bg-slate-100 shadow-lg shadow-[#045184]/10">
            <Image
              src="/Images/Hygiene.png"
              alt="A caregiver helping an older woman review information on a tablet"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
