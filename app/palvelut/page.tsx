import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  HeartHandshake, 
  Stethoscope, 
  UserCheck, 
  Ticket, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";
import { palvelutSEO } from "@/seo";

export const metadata = palvelutSEO;

export default function PalvelutPage() {
  const serviceList = [
    {
      title: "Kotihoito",
      href: "/palvelut/kotihoito",
      icon: HeartHandshake,
      color: "from-cyan-600 to-teal-600",
      intro: "Lämminhenkistä tukea turvalliseen ja hyvään arkeen kotona.",
      details: "Kotihoito suunnitellaan ikääntyneiden, omaishoitajien sijaishoitoa tarvitsevien, sairaudesta tai leikkauksesta toipuvien sekä mielenterveyskuntoutujien tarpeisiin. Teemme tiivistä yhteistyötä kuntien kotihoidon kanssa.",
      items: [
        "Aamuaskareet, pukeutuminen ja henkilökohtaisesta hygieniasta huolehtiminen",
        "Ravitsevien aterioiden valmistus ja ruokailussa avustaminen",
        "Ruoka- ja apteekkiasiointi sekä ulkoilu",
        "Seura, keskustelu ja mielekäs yhdessä tekeminen",
        "Voinnin seuranta, turvallisuudesta huolehtiminen ja yhteydenpito omaisiin"
      ]
    },
    {
      title: "Kotisairaanhoito",
      href: "/palvelut/kotisairaanhoito",
      icon: Stethoscope,
      color: "from-blue-600 to-cyan-600",
      intro: "Ammattitaitoista sairaanhoitoa tutussa kotiympäristössä.",
      details: "Sairaanhoitajamme toteuttavat tarvittavat hoitotoimenpiteet kotonasi rauhallisesti, kunnioittavasti ja ammattitaidolla. Näin vältyt ylimääräisiltä ja kuormittavilta matkoilta vastaanotolle.",
      items: [
        "Lääkehoito, lääkkeiden antaminen ja pistokset",
        "Haavahoito, sidosten vaihto ja ompeleiden poisto",
        "Verinäytteiden otto ja pikatestit kotona",
        "Verenpaineen, verensokerin ja peruselintoimintojen seuranta",
        "Katetrointi ja leikkauksesta toipumisen tuki",
        "Palliatiivinen hoito ja saattohoidon tuki"
      ]
    },
    {
      title: "Henkilökohtainen apu",
      href: "/palvelut/henkilokohtainen-apu",
      icon: UserCheck,
      color: "from-teal-600 to-emerald-600",
      intro: "Vammaispalvelulain mukaista apua, jossa sinä päätät.",
      details: "Sinä päätät, kuka sinua avustaa. Sam's Care toimii vastuullisena työnantajakumppanina ja huolehtii palkanmaksusta, vakuutuksista ja sijaisjärjestelyistä, jotta voit elää itsenäisesti ilman työnantajavelvoitteiden paperitöitä.",
      items: [
        "Avustaminen päivittäisissä toimissa kotona ja kodin ulkopuolella",
        "Tuki työssä ja opiskelussa",
        "Harrastukset, kulttuuritapahtumat ja sosiaalinen osallistuminen",
        "Avustajan sovittaminen asiakkaan toiveisiin ja tarpeisiin",
        "Palvelu on asiakkaalle maksutonta päätöksen mukaisesti"
      ]
    },
    {
      title: "Palveluseteli",
      href: "/palvelut/palveluseteli",
      icon: Ticket,
      color: "from-amber-500 to-orange-600",
      intro: "Hyödynnä hyvinvointialueesi myöntämä palveluseteli.",
      details: "Palveluseteli on kunnan tai hyvinvointialueen myöntämä sitoumus, jonka avulla voit valita Sam's Caren palveluntuottajaksesi. Neuvomme sinua kaikissa vaiheissa maksutta.",
      items: [
        "Palveluntuottajana Länsi-Uudellamaalla, Helsingissä ja Vantaa-Keravalla",
        "Valitse laadukasta hoivaa tutuilta hoitajilta",
        "Palvelusetelin omavastuuosuus voi oikeuttaa kotitalousvähennykseen",
        "Maksutonta neuvontaa ja opastusta palvelusetelin käyttöön"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Itsenäistä arkea tukevat hoivapalvelumme"
            fill
            className="page-header-image h-full w-full object-cover"
          />
        </div>
        <div className="page-header-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              Monipuoliset kotiin tuotavat palvelut
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Palvelumme tukevat itsenäistä arkea
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Tervetuloa tutustumaan Sam&apos;s Caren monipuoliseen sosiaali- ja terveyspalveluvalikoimaan. Sam&apos;s Care tuo asiakkaan kotiin kattavan hoiva-, kuntoutus- ja tukipalveluiden kirjon. Tarjoamme myös kunnille ja yrityksille vastaanottopalveluita sekä räätälöityjä ratkaisuja. Palveluidemme piiriin voi hakeutua suoraan tai oman kunnan kautta palvelusetelillä sekä ostopalveluna. Ota yhteyttä niin löydämme yhdessä joustavan palveluratkaisun yksilölliseen tilanteeseesi.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {serviceList.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${srv.color} text-white shadow-md`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        {srv.title}
                      </h2>
                      <div className="text-sm font-semibold text-cyan-700">
                        {srv.intro}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {srv.details}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Palveluun voi sisältyä:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.items.map((it, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/70 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Näin pääset alkuun
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      Maksuton kartoitus tai yhteydenotto
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Keskustellaan sinun tai läheisesi tarpeista. Voit hankkia palvelut itse maksaen, palvelusetelillä tai ostopalveluna.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href={srv.href}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <span>Lue lisää palvelusta</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </Link>

                    <Link
                      href="/ajanvaraus"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <span>Varaa maksuton kartoituskäynti</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Booking Form Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm />
        </div>
      </section>
    </div>
  );
}
