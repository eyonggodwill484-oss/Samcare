import React from "react";
import Image from "next/image";
import { 
  Heart, 
  Quote, 
  Star
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";

export const metadata = {
  title: "Asiakkaat Kertovat | Sam's Care Oy - Kokemuksia ja Palautteita",
  description: "Lue omaisten ja asiakkaiden aitoja kokemuksia Sam's Caren kotihoidosta ja sairaanhoidosta. Tyytyväisyys ja luottamus ovat toimintamme perusta.",
};

export default function AsiakkaatKertovatPage() {
  const reviews = [
    {
      author: "Päivi",
      tag: "Omainen (Lohja)",
      headline: "Minäkin olen saanut oman elämäni takaisin!",
      text: "Monta vuotta vanhempieni asioita hoitaneena tuntuu, että nyt kun saimme Sam's Care -kotihoidon heille, minäkin olen saanut oman elämäni takaisin! Uskomatonta miten suurella sydämellä vanhemmistani huolehditaan joka ikinen päivä.",
    },
    {
      author: "Omaishoitaja",
      tag: "Omainen ja ALS-potilaan puoliso (Espoo)",
      headline: "Pelkkiä ruusuja toiminnastanne, eikä yhtään risua!",
      text: "Mieheni on ALS-potilas ja hänelle tulee jatkuvasti uusia oireita. Hyvä potilas-hoitajasuhde on meille elintärkeä. Palveluohjaajanne auttoi meitä löytämään todella lyhyellä varoitusajalla loistavan hoitajan miehelleni. Haluaisimme ainoastaan antaa teille ruusuja toiminnastanne!",
    },
    {
      author: "Kotihoidon asiakas",
      tag: "Helsinki",
      headline: "Erityiskiitos, että hoitaja pyritään pitämään samana.",
      text: "Hoitajille lämmin kiitos myös maalaisjärjen ja korkean ammattitaidon käytöstä. Ei hosumista tai kiirettä, vaan aitoa ihmisen kohtaamista.",
    },
    {
      author: "Senioriasiakas",
      tag: "Raasepori",
      headline: "Ystävällinen ja avulias hoitajanne oli luonani.",
      text: "Päivä meni todella mukavasti. Meillä oli paljon yhteisiä keskustelun aiheita ja leppoisa tunnelma. Odotan aina hoitajan seuraavaa käyntiä.",
    },
    {
      author: "Omainen",
      tag: "Vantaa",
      headline: "Teille on aina niin helppo soittaa.",
      text: "Aina kun soitan, langan päässä on ystävällinen ja asiantunteva ihminen, joka tuntee isämme tilanteen ja järjestää asiat viipymättä kuntoon.",
    },
    {
      author: "Perheenjäsen",
      tag: "Lohja",
      headline: "Valitsimme teidät suositusten perusteella.",
      text: "Suositukset pitivät täysin paikkansa. Kaikki luonamme käyneet hoitajat ovat olleet ahkeria, empaattisia ja työtä pelkäämättömiä ammattilaisia.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Client experiences and recommendations"
            fill
            className="page-header-image h-full w-full object-cover"
          />
        </div>
        <div className="page-header-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
              Asiakkaidemme suositukset
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Asiakkaamme kertovat
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Laadukas palvelu ja tyytyväinen asiakas kulkevat käsi kädessä. Hoivapalvelut tuotetaan aina ihmiseltä ihmiselle, lähimmäiseltä toiselle.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Systemaattista laatutyötä ja jatkuvaa kuuntelua
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Me pyrimme asettamaan riman korkealle ja tehtävämme on olla kaikissa tilanteissa asiakkaidemme ja heidän omaistensa luottamuksen arvoinen. Sam&apos;s Caressa tehdään systemaattista laatutyötä ja selvitämme säännöllisesti asiakkaidemme tyytyväisyyttä.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-cyan-200" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    &ldquo;{r.headline}&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{r.author}</div>
                    <div className="text-slate-500">{r.tag}</div>
                  </div>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full text-[11px]">
                    Vahvistettu
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Free consultation banner */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm 
            title="Koe Sam's Caren ero itse"
            subtitle="Tilaa maksuton kartoituskäynti ja tutustu lämpimään omahoitajaamme."
          />
        </div>
      </section>
    </div>
  );
}
