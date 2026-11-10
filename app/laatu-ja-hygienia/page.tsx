import Image from "next/image";
import {
  ShieldCheck,
  FileText,
} from "lucide-react";
import { laatuSEO } from "@/seo";

export const metadata = laatuSEO;

export default function LaatuJaHygieniaPage() {
  const documents = [
    {
      title: "Sam's Care Oy:n omavalvontasuunnitelma",
      desc: "Sosiaalihuoltolain ja terveydenhuoltolain mukainen omavalvontasuunnitelma palvelun laadun ja asiakasturvallisuuden varmistamiseksi.",
      type: "PDF-raportti",
    },
    {
      title: "Helsingin kaupungin kotihoidon tarkastuskertomus",
      desc: "Viranomaisen laatima tarkastuskertomus Sam's Care Oy:n toiminnan laadusta ja vaatimustenmukaisuudesta.",
      type: "Tarkastuskertomus",
    },
    {
      title: "Henkilökohtaisen avun omavalvontasuunnitelma",
      desc: "Vammaispalvelulain mukaisia tukipalveluja koskeva laatu- ja eettinen suunnitelma.",
      type: "Virallinen asiakirja",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Hygieniaohjeet ja asiakasturvallisuus"
            fill
            priority
            className="page-header-image h-full w-full object-cover"
          />
        </div>
        <div className="page-header-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Laatu, hygienia ja omavalvonta
            </h1>
            <p className="mx-auto max-w-2xl text-slate-100 text-base sm:text-lg leading-relaxed">
              Hygienia on tärkeä osa asiakas-, potilas- ja työturvallisuutta. Noudatamme huolellisia tavanomaisia varotoimia jokaisella kotikäynnillä.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <Image
                src="/Images/Hygiene.png"
                alt="Kotihoidon hygieniaohjeet asiakkaille"
                width={1200}
                height={900}
                priority
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>

            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-[#62ddc9]/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a68]">
                Kotihoidon hygieniaohjeet
              </span>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Sam&apos;s Care Oy
              </h2>
              <h3 className="text-xl font-bold text-slate-800 sm:text-2xl">
                Kaikkia asiakkaita koskevat hygieniakäytännöt kotikäynneillä
              </h3>
              <div className="space-y-4 text-slate-700">
                <p className="text-base leading-relaxed">
                  <span className="font-bold text-slate-900">TAVANOMAISET VAROTOIMET</span> hoitotoimenpiteissä.
                </p>
                <p className="text-base leading-relaxed">
                  Hygienia on osa potilas- ja asiakasturvallisuutta sekä työturvallisuutta.
                </p>
                <p className="text-base leading-relaxed text-slate-600">
                  Tavanomaiset varotoimet muodostavat infektioiden torjunnan perustason. Niillä ehkäistään mikrobien leviämistä tavallisissa kotihoito- ja avustamistilanteissa sekä esimerkiksi epidemian aikana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
            <div className="space-y-7 text-slate-700">
              <div>
                <h3 className="text-xl font-black uppercase tracking-[0.08em] text-slate-900 sm:text-2xl">
                  Tavanomaiset varotoimet hoitotoimenpiteissä
                </h3>
                <p className="mt-3 text-base leading-relaxed">
                  Tavanomaisia varotoimia noudatetaan kaikissa asiakaskontakteissa, myös ESBL- ja MRSA-kantajien sekä tunnettujen veriteitse tarttuvien virusten (hepatiitti B ja C sekä HIV) kantajien hoidossa ja käsiteltäessä verta tai muita eritteitä (oksennusta, virtsaa, ulostetta, ihosolukkoa, hikeä ja sylkeä).
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Verivarotoimet sisältyvät tavanomaisiin varotoimiin.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Käsihygienia</h4>
                <p className="mt-3 text-base leading-relaxed">
                  Käsihygienian onnistumiseksi työntekijä ei käytä rannekelloa, rannekoruja tai aktiivisuusranneketta, sormuksia, rakenne- tai geelikynsiä, pitkiä kynsiä eikä kynsilakkaa. Työvaatteiden hihat pidetään lyhyinä tai kääritään kyynärvarteen.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Huolehdi käsien ihon kunnosta. Pese kädet nestesaippualla työvuoron alussa ja aina, kun kädet ovat likaiset. Jos asiakkaalla on ripulia tai oksentelua, pese kädet vedellä ja nestesaippualla. Kuivaa kädet talouspaperiin, ei asiakkaan käsipyyhkeeseen. Pese tai puhdista kädet suojakäsineiden riisumisen jälkeen ennen käsihuuhteen käyttöä.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Käsien desinfiointi käsihuuhteella</h4>
                <p className="mt-3 text-base leading-relaxed">
                  Desinfioi kädet käsihuuhteella asiakkaan kotiin saapuessa ja sieltä lähtiessä sekä aina ennen työtehtäviä: lääkkeiden käsittelyä ja jakamista, ruoan käsittelyä, haavahoitoa, vaippojen, virtsakatetrien tai dreeneiden käsittelyä sekä ennen suojakäsineiden ja muiden suojainten pukemista ja niiden riisumisen jälkeen.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Ota käsihuuhdetta riittävästi, vähintään 2–3 painallusta (3–5 ml) tai kämmenkuppiin mahtuva määrä. Hiero huuhdetta kaikkialle käsiin: sormenpäihin, peukaloihin, sormiväleihin, käsien reunoihin ja kämmeniin sekä ranteiden uurteisiin. Hiero, kunnes kädet ovat kuivat. Älä pyyhi käsihuuhdetta pois. Tehokas käsihuuhteen käyttö kestää noin 30 sekuntia.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Suojakäsineiden käyttö</h4>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed">
                  <li>Käsiteltäessä haavoja, rikkoutunutta ihoa, limakalvoja, verta, virtsaa, ulostetta tai muita eritteitä ja likaista pyykkiä.</li>
                  <li>Haavahoidossa, vaippaa vaihdettaessa, virtsakatetripussia tai dreeniä käsiteltäessä sekä desinfiointi- tai puhdistusaineita käytettäessä.</li>
                  <li>Aina, kun ollaan fyysisessä kontaktissa kosketusvarotoimia edellyttävän asiakkaan tai hänen lähiympäristönsä kanssa.</li>
                </ul>
                <p className="mt-3 text-base leading-relaxed">
                  Suojakäsineet vaihdetaan siirryttäessä likaisesta työvaiheesta puhtaaseen sekä käsineiden rikkoutuessa. Käsineet riisutaan heti, kun niitä ei enää tarvita, ja kädet desinfioidaan.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Muiden suojainten käyttö</h4>
                <p className="mt-3 text-base leading-relaxed">
                  Käytä kertakäyttöistä muoviesiliinaa, jos eritteet voivat tahrata työvaatteet. Hihoilla varustettua kertakäyttöesiliinaa käytetään asiakkaan pesuissa ja lähikontaktia vaativissa hoitotilanteissa sekä syyhyn ja muiden loisten hoidossa ja kosketusvarotoimia edellyttävien asiakkaiden hoidossa.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Käytä suu-nenäsuojainta, jos veri tai muut eritteet voivat roiskua, haavaa hoidettaessa sekä yskivää tai aivastavaa asiakasta hoidettaessa. Jatkuvassa käytössä oleva visiiri desinfioidaan jokaisen asiakaskäynnin jälkeen. Käytä jokaisella käynnillä omia kengänsuojia ja hävitä ne päivän käyntien päätyttyä. Riisu suojaimet heti käytön jälkeen ja desinfioi kädet.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Veritapaturmien ehkäisy</h4>
                <p className="mt-3 text-base leading-relaxed">
                  Veritapaturmalla tarkoitetaan verialtistusta, jossa veri voi aiheuttaa työntekijälle tartunnan. Tällaisia ovat pisto tai viilto verisellä neulalla tai muulla esineellä, veren joutuminen suun limakalvolle tai silmän sidekalvolle sekä veren joutuminen haavaiselle tai ihottumaiselle iholle.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Ensiapu annetaan aina heti. Limakalvoille roiskunut veri huuhdellaan runsaalla juoksevalla vedellä. Myös pisto- tai viiltoalue puhdistetaan runsaalla juoksevalla vedellä ja heti sen jälkeen 80-prosenttisella alkoholilla (A12T Dilutus 80 %). Haavaa ei saa puristaa. Alkoholikäsittelyä jatketaan iholla kahden minuutin ajan. Jokaisessa veri- tai altistustapauksessa otetaan yhteyttä terveydenhuoltoon, joka konsultoi tarvittaessa infektiolääkäriä.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Hoitovälineet sekä jätteiden lajittelu ja käsittely</h4>
                <p className="mt-3 text-base leading-relaxed">
                  Käytämme kertakäyttöisiä välineitä. Hoito- ja tutkimusvälineet desinfioidaan käytön jälkeen. Verenpainemittari ja mansetti, stetoskooppi sekä muut vastaavat välineet pyyhitään alkoholilla, desinfiointipyyhkeellä tai A12T 80-prosenttisella etanolilla ennen niiden käyttöä seuraavalla asiakkaalla. Asiakkaan käytössä oleville terveydenhuollon laitteille, kuten imulaitteelle ja lisähapen antamiseen tarvittaville välineille sekä happipullolle, on laitekohtaiset käyttö- ja desinfiointiohjeet. Noudata niitä.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Injektioneulat, kyretit ja muut terävät välineet laitetaan heti käytön jälkeen särmäisjäteastiaan. Jäteastiat toimitetaan paikalliseen keräyspisteeseen asianmukaista hävittämistä varten. Kertakäyttöiset hoitovälineet ja -tarvikkeet sekä käytetyt suojaimet laitetaan käytön jälkeen jätepussiin. Tartuntavaarallinen jäte hävitetään vaarallisena jätteenä erillisten ohjeiden mukaisesti.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Muistettavaa kotikäynnillä</h4>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed">
                  <li>Suojaimet kerätään muovipusseihin puhtain ja desinfioiduin käsin.</li>
                  <li>Ota suojaimet pussista aina desinfioiduin käsin.</li>
                  <li>Jokaiselle asiakkaalle varataan puhtaat suojaimet, jotka eivät ole kontaminoituneet aiemmilla asiakaskäynneillä.</li>
                  <li>Kotona käsien pesuun ja tarvittaessa pintojen puhdistamiseen käytetään pesulapusta otettua pyyhettä.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viranomaisvalvonta ja asiakirjat */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
              Julkiset raportit ja valvonta
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Omavalvonta- ja tarkastusasiakirjat
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Sam&apos;s Care Oy toimii avoimesti. Otamme palautetta mielellämme vastaan ja kehitämme toimintaamme jatkuvasti viranomaisohjeiden mukaisesti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md flex items-start justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-cyan-700 text-xs font-bold uppercase tracking-wider">
                    <FileText className="w-4 h-4" />
                    <span>{doc.type}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">{doc.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{doc.desc}</p>
                </div>
                <div className="shrink-0 p-3 rounded-2xl bg-slate-100 text-slate-500">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
