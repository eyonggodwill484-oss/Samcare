import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  CheckCircle2,
  ShieldCheck,
  Activity,
  HeartPulse,
  Pill,
  Syringe,
  FileCheck
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";
import { kotisairaanhoitoSEO } from "@/seo";

export const metadata = kotisairaanhoitoSEO;

export default function KotisairaanhoitoPage() {
  const procedures = [
    { title: "Lääkehoito", desc: "Lääkkeiden annostelu, reseptien uusiminen, apteekkiasiointi ja säännöllisestä lääkityksestä huolehtiminen.", icon: Pill },
    { title: "Pistokset", desc: "Insuliini-, Klexane- ja B12-vitamiinipistokset sekä rokotukset turvallisesti kotona.", icon: Syringe },
    { title: "Haavahoito", desc: "Kroonisten ja leikkaushaavojen hoito, sidosten vaihto ja paranemisen seuranta.", icon: ShieldCheck },
    { title: "Näytteenotto kotona", desc: "Verinäytteet ja pikatestit (INR, CRP, verensokeri) ilman laboratoriossa odottamista.", icon: Activity },
    { title: "Ompeleiden poisto", desc: "Leikkauksen jälkeisten ompeleiden poisto kotona.", icon: FileCheck },
    { title: "Katetri- ja PEG-hoito", desc: "Virtsakatetrin vaihto ja huuhtelu sekä PEG-letkun hoito kokeneen henkilöstön toteuttamana.", icon: HeartPulse },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Kotisairaanhoitoa tutussa ympäristössä"
            fill
            className="page-header-image h-full w-full object-cover"
          />
        </div>
        <div className="page-header-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Stethoscope className="w-3.5 h-3.5 text-cyan-300" />
              Laillistetut sairaanhoitajat ja hoitajat
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Kotisairaanhoitoa ammattitaidolla ja turvallisesti kotonasi
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Vältä tarpeettomat matkat terveysasemalle tai sairaalaan. Sam&apos;s Caren kokeneet sairaanhoitajat tulevat luoksesi ja tekevät tarvittavat hoitotoimenpiteet tutussa ja turvallisessa kotiympäristössä.
            </p>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Monipuoliset sairaanhoidon toimenpiteet kotona
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Perushoidon lisäksi toteutamme vaativampia toimenpiteitä ja teemme tiivistä yhteistyötä hoitavan lääkärin ja erikoissairaanhoidon kanssa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-lg transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Post‑surgery and Palliative Care */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
                Leikkauksesta toipuminen ja palliatiivinen hoito
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Tukea vaativiin elämäntilanteisiin
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Ammattitaitoiset sairaanhoitajamme tukevat leikkauksen jälkeistä hoitoa, jotta asiakas voi keskittyä toipumiseen kotona ilman ylimääräistä kuormitusta.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Tarjoamme myös palliatiivista hoitoa, jossa huolehdimme oireiden lievityksestä ja tuemme asiakasta sekä hänen läheisiään kunnioittavasti.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Jatkuvuus ja tuttu hoitaja lisäävät turvallisuutta</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Kivun ja oireiden seuranta sekä lääkehoito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Henkinen ja käytännön tuki läheisille</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">
                Verinäytteet kotona ilman jonottamista
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Tulemme aamulla ottamaan lääkärin määräämät laboratorio- ja verinäytteet kotonasi. Hinta on 62 € käynniltä ilman lisämaksuja. Toimitamme näytteet laboratorioon analysoitaviksi.
              </p>
              <div className="pt-2">
                <Link
                  href="/ajanvaraus"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
                >
                  Varaa verinäytteenotto kotiin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm 
            title="Pyydä kotisairaanhoitoa"
            subtitle="Kerro toimenpiteen tarpeesta tai toivotusta ajankohdasta, niin sairaanhoitajamme ottaa sinuun yhteyttä."
          />
        </div>
      </section>
    </div>
  );
}
