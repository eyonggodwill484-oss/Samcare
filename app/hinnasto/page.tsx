import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock } from "lucide-react";
import { hinnastoSEO } from "@/seo";

export const metadata = hinnastoSEO;

export default function HinnastoPage() {
  return (
    <div className="w-full">
      <section className="relative isolate min-h-[360px] w-full overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Selkeä hinnoittelu ja kotitalousvähennys"
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
              Selkeät hinnat
            </span>
            <h1 className="text-3xl font-black leading-tight tracking-tight text-[#62ddc9] sm:text-5xl">
              Hinnasto ja kotitalousvähennys
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Ei piilokuluja. Sosiaali- ja terveyspalvelumme ovat arvonlisäverottomia
              (alv 0 %), ja palvelut voivat oikeuttaa kotitalousvähennykseen.
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
              Palveluhinnat
            </p>
            <h2
              id="service-rates-title"
              className="mt-2 text-3xl font-bold tracking-tight text-[#14384b] sm:text-4xl"
            >
              Palveluiden hinnasto
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Kaikki hinnaston hinnat ovat alv 0 %.
            </p>

            <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              <li className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-medium text-slate-700">
                  Kotihoito ja kotisairaanhoito
                </span>
                <span className="shrink-0 text-lg font-bold text-[#045184]">
                  56,80 € <span className="text-sm font-medium">/ tunti</span>
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-medium text-slate-700">
                  Henkilökohtainen avustaja
                </span>
                <span className="shrink-0 text-lg font-bold text-[#045184]">
                  35 € <span className="text-sm font-medium">/ tunti</span>
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-medium text-slate-700">Kotisiivous</span>
                <span className="shrink-0 text-lg font-bold text-[#045184]">
                  35 € <span className="text-sm font-medium">/ tunti</span>
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-medium text-slate-700">
                  Verinäytteenotto
                  <span className="mt-1 block text-sm font-normal text-slate-500">
                    Ei aikaperusteista maksua
                  </span>
                </span>
                <span className="shrink-0 text-lg font-bold text-[#045184]">
                  62 € <span className="text-sm font-medium">/ käynti</span>
                </span>
              </li>
            </ul>

            <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-[#c8e8e2] bg-[#eff9f7] px-4 py-3">
              <span className="font-semibold text-[#14384b]">
                Kertaluonteinen käyntimaksu
              </span>
              <span className="shrink-0 font-bold text-[#045184]">
                +6,50 € / käynti
              </span>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 text-[#045184]">
                <Clock aria-hidden="true" className="h-5 w-5" />
                <h3 className="text-lg font-bold text-[#14384b]">
                  Ilta-, yö- ja viikonloppulisät
                </h3>
              </div>
              <ul className="mt-3 divide-y divide-slate-200 border-y border-slate-200">
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-slate-700">
                    Iltalisä <span className="text-slate-500">klo 18–21</span>
                  </span>
                  <span className="shrink-0 font-bold text-[#045184]">+15%</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-slate-700">
                    Yölisä <span className="text-slate-500">klo 21–6</span>
                  </span>
                  <span className="shrink-0 font-bold text-[#045184]">+40%</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-slate-700">
                    Lauantait <span className="text-slate-500">klo 6–20</span>
                  </span>
                  <span className="shrink-0 font-bold text-[#045184]">+25%</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-slate-700">
                    Lauantait <span className="text-slate-500">klo 20–24</span>
                  </span>
                  <span className="shrink-0 font-bold text-[#045184]">+100%</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-slate-700">Sunnuntait ja arkipyhät</span>
                  <span className="shrink-0 font-bold text-[#045184]">+100%</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative aspect-[1.35] overflow-hidden rounded-3xl bg-slate-100 shadow-lg shadow-[#045184]/10 lg:mt-12">
            <Image
              src="/Images/price%202.png"
              alt="Hoitaja viettää aikaa ikääntyneen asiakkaan kanssa kotona"
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
              alt="Hoitaja viettää lämmintä hetkeä ikääntyneen asiakkaan kanssa"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#045184]">
              Hyvä tietää
            </p>
            <h2
              id="additional-information-title"
              className="mt-2 text-3xl font-bold tracking-tight text-[#14384b] sm:text-4xl"
            >
              Lisätietoja
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Tässä muutamia käytännön tietoja kotihoito- ja
              kotisairaanhoitopalveluistamme.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  Kotihoito- ja sairaanhoitopalvelut ovat arvonlisäverottomia (alv 0 %).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  Vähimmäislaskutus on yksi tunti.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  Lasku lähetetään kerran kuukaudessa.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  Maksuehto on 14 päivää netto. Viivästyskorko määräytyy lain
                  mukaisesti.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  Matkakulut ja pysäköintimaksut sovitaan erikseen.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#045184]"
                />
                <span className="leading-6 text-slate-700">
                  Tutustumis- ja kartoituskäynti on maksuton.
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
              Verotietoa
            </p>
            <h2
              id="household-deduction-title"
              className="mt-2 text-3xl font-bold tracking-tight text-[#14384b] sm:text-4xl"
            >
              Kotitalousvähennys
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Kotitalousvähennyksen säännöt muuttuivat 1. tammikuuta 2025.
              Alla olevissa tiedoissa erotellaan vuoden 2024 säännöt vuoden
              2025 muutoksista.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-bold text-[#14384b]">
                Vuoden 2025 muutokset
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>
                  Vähennyksen enimmäismäärä on 1 600 € henkilöä kohden vuodessa
                  tai puolisoille yhteensä enintään 3 200 €.
                </li>
                <li>
                  Yritykseltä ostetusta työstä vähennys on 35 % työn osuudesta.
                </li>
                <li>
                  Työntekijän palkkaamisesta vähennys on 13 % palkasta, ja myös
                  siihen liittyvät työnantajamaksut voidaan vähentää.
                </li>
                <li>
                  Omavastuu on 150 €.
                </li>
              </ul>
            </div>

            <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
              Vuonna 2024 enimmäismäärä oli 2 250 € remonttitöistä ja 3 500 €
              kotitalous-, hoiva- ja hoitotöistä sekä fysioterapiasta. Vuodesta
              2025 alkaen näiden töiden enimmäismäärä on 1 600 €.
            </p>

            <div className="mt-4 rounded-xl border border-[#c8e8e2] bg-[#eff9f7] px-4 py-4">
              <h3 className="font-bold text-[#14384b]">
                Erillinen tieto korotetusta vähennyksestä
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Saatavilla olevissa tiedoissa mainitaan myös 60 prosentin vähennys
                työn osuudesta, enintään 3 500 € vuodessa, voimassa vuoteen 2027
                asti. Sovellettava prosentti ja enimmäismäärä voivat riippua
                vähennyksen ehdoista ja työn tyypistä. Varmista, mitkä säännöt
                koskevat omaa tilannettasi.
              </p>
            </div>

            <Link
              href="/ota-yhteytta"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#045184] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#033e65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#045184]"
            >
              Ota yhteyttä
            </Link>
          </div>

          <div className="relative aspect-[1.5] overflow-hidden rounded-3xl bg-slate-100 shadow-lg shadow-[#045184]/10">
            <Image
              src="/Images/Hygiene.png"
              alt="Hoitaja auttaa ikääntynyttä naista tarkastelemaan tietoja tabletilla"
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
