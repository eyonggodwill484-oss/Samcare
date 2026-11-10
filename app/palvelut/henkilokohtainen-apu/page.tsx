import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Briefcase,
  GraduationCap,
  Palmtree,
  Home
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";
import { henkilokohtainenApuSEO } from "@/seo";

export const metadata = henkilokohtainenApuSEO;

export default function PersonalAssistancePage() {
  const useCases = [
    { title: "Arjen askareet kotona", desc: "Apua ruoanlaittoon, siivoukseen, pukeutumiseen ja kodin askareisiin.", icon: Home },
    { title: "Työ ja työelämä", desc: "Avustaja tukee työpäivässä, työmatkoilla ja työtehtävissä.", icon: Briefcase },
    { title: "Opiskelu ja koulutus", desc: "Tukea luennoilla, muistiinpanojen tekemisessä ja opiskeluarjessa.", icon: GraduationCap },
    { title: "Vapaa-aika ja harrastukset", desc: "Apua harrastuksiin, teatteriin, kulttuuriin, liikuntaan ja matkustamiseen.", icon: Palmtree },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Henkilökohtainen apu ja itsenäinen arki"
            fill
            className="page-header-image h-full w-full object-cover"
          />
        </div>
        <div className="page-header-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Henkilökohtaista apua vammaispalvelulain mukaisesti
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Henkilökohtaista apua sinun ehdoillasi
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Sinä päätät, kuka tulee kotiisi avustamaan. Sam&apos;s Care toimii kokeneena työnantajakumppaninasi, joten sinun ei tarvitse huolehtia palkanmaksusta, veroista tai sijaisjärjestelyistä.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Miksi valita Sam&apos;s Care henkilökohtaisen avun kumppaniksi?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Työnantajana toimiminen voi tuntua kuormittavalta. Huolehdimme hallinnollisista tehtävistä, jotta avustajan järjestäminen olisi sinulle mahdollisimman vaivatonta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-slate-900">Oikea ihminen oikeaan tehtävään</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Etsimme toiveisiisi ja henkilökemiaasi sopivan avustajan. Saat aina tavata ja hyväksyä avustajan ennen työn aloittamista.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold text-slate-900">Ei työnantajahuolia eikä paperitöitä</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Huolehdimme työsopimuksista, palkanmaksusta, lomakorvauksista, työterveyshuollosta ja tapaturmavakuutuksesta. Sinä ohjaat avustajan päivittäistä työtä.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold text-slate-900">Luotettavat sijaisjärjestelyt</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Jos avustajasi sairastuu tai on poissa, järjestämme tilalle osaavan sijaisen, jotta arkipäiväsi jatkuu mahdollisimman sujuvasti.
              </p>
            </div>
          </div>

          {/* Where can assistant help */}
          <div className="pt-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Missä asioissa henkilökohtainen avustaja voi auttaa?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((uc, i) => {
                const Icon = uc.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-slate-900">{uc.title}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{uc.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm 
            title="Pyydä henkilökohtaista apua"
            subtitle="Autamme palveluun liittyvissä kysymyksissä ja avustajan valinnassa."
          />
        </div>
      </section>
    </div>
  );
}
