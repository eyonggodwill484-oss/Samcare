import React from "react";
import Image from "next/image";
import {
  Ticket,
  HelpCircle,
  ShieldCheck
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";
import { palveluseteliSEO } from "@/seo";

export const metadata = palveluseteliSEO;

export default function ServiceVoucherPage() {
  const steps = [
    {
      step: "1",
      title: "Hyvinvointialueen palvelupäätös",
      desc: "Hyvinvointialueesi sosiaalityöntekijä arvioi palvelutarpeesi ja myöntää palvelusetelin. Palveluseteliä käytetään esimerkiksi Länsi-Uudellamaalla, Helsingissä ja Vantaa-Keravalla.",
    },
    {
      step: "2",
      title: "Palveluseteli lisätään portaaliin",
      desc: "Saat sähköisen palvelusetelin portaaliin, esimerkiksi Palse.fi- tai ParastaPalvelua.fi-palveluun. Setelistä näet myönnetyt tunnit tai arvon.",
    },
    {
      step: "3",
      title: "Valitse Sam's Care Oy",
      desc: "Valitse Sam's Care palveluntuottajaksesi portaalissa tai ota meihin yhteyttä, niin autamme valinnan tekemisessä.",
    },
    {
      step: "4",
      title: "Palvelu alkaa kotonasi",
      desc: "Sovimme toiveisiisi sopivan aikataulun ja järjestämme sinulle tutun hoitajan. Palvelu alkaa turvallisesti ja rauhallisesti.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Käytä kuntasi palveluseteli Sam's Caren palveluihin"
            fill
            className="page-header-image h-full w-full object-cover"
          />
        </div>
        <div className="page-header-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Ticket className="w-3.5 h-3.5 text-amber-300" />
              Hyväksytty palvelusetelituottaja
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Hanki Sam&apos;s Caren palvelut palvelusetelillä
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Oletko saanut kunnalta tai hyvinvointialueelta palvelusetelin kotihoitoon tai henkilökohtaiseen apuun? Valitse meidät palveluntuottajaksi ja saat tutut hoitajat kotiisi kiireettömästi.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Steps Walkthrough */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Näin saat palvelusetelin käyttöön
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Opastamme sinua jokaisessa vaiheessa, jotta palvelusetelin käyttäminen olisi mahdollisimman helppoa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white font-black text-xl flex items-center justify-center shadow-md">
                    {st.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
                <div className="text-amber-600 text-xs font-semibold pt-2">
                  Vaihe {st.step} / 4 →
                </div>
              </div>
            ))}
          </div>

          {/* FAQ & Information Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="bg-amber-50/60 border border-amber-200/80 rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-lg">
                <HelpCircle className="w-5 h-5 text-amber-600" />
                <span>Mikä palveluseteli on?</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Palveluseteli on kunnan tai hyvinvointialueen myöntämä sitoumus, jolla katetaan hoivapalvelun kustannukset joko kokonaan tai osittain. Sen avulla voit valita itsellesi luotettavan ja laadukkaan palveluntuottajan.
              </p>
            </div>

            <div className="bg-cyan-50/60 border border-cyan-200/80 rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-2 text-cyan-900 font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-cyan-600" />
                <span>Kuka voi saada palvelusetelin?</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Palveluseteli voidaan myöntää henkilölle, joka tarvitsee säännöllistä tai tilapäistä kotihoitoa, henkilökohtaista apua tai omaishoitajan sijaishoitoa. Jos sinulla ei vielä ole palveluseteliä, ota yhteyttä oman alueesi sosiaalipalveluihin tai kysy meiltä neuvoa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Consultation Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm 
            title="Kysy palvelusetelistä tai pyydä hoitajaa"
            subtitle="Kerro tilanteestasi ja palvelusetelistäsi, niin autamme mielellämme."
          />
        </div>
      </section>
    </div>
  );
}
