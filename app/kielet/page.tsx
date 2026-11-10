"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Globe, 
  CheckCircle2, 
  Phone, 
  MessageSquare
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";

export default function KieletPage() {
  const [activeTab, setActiveTab] = useState<"sv" | "en" | "fr" | "es">("sv");

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Monikieliset kotihoitopalvelut"
            fill
            className="page-header-image h-full w-full object-cover"
          />
        </div>
        <div className="page-header-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Globe className="w-3.5 h-3.5 text-cyan-300" />
              Monikieliset kotipalvelut
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Hoivaa omalla äidinkielelläsi
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Hoidon laatu ja turvallisuuden tunne syntyvät sujuvasta vuorovaikutuksesta. Tarjoamme kotihoitoa ja kotisairaanhoitoa suomeksi, ruotsiksi, englanniksi, ranskaksi ja espanjaksi.
            </p>
          </div>
        </div>
      </section>

      {/* Language Switcher Tabs */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab("sv")}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "sv"
                  ? "bg-cyan-700 text-white shadow-lg shadow-cyan-900/20 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>🇸🇪</span>
              <span>Ruotsinkieliset palvelut</span>
            </button>

            <button
              onClick={() => setActiveTab("en")}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "en"
                  ? "bg-cyan-700 text-white shadow-lg shadow-cyan-900/20 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>🇬🇧</span>
              <span>Englanninkieliset palvelut</span>
            </button>

            <button
              onClick={() => setActiveTab("fr")}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "fr"
                  ? "bg-cyan-700 text-white shadow-lg shadow-cyan-900/20 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>🇫🇷</span>
              <span>Ranskankieliset palvelut</span>
            </button>

            <button
              onClick={() => setActiveTab("es")}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "es"
                  ? "bg-cyan-700 text-white shadow-lg shadow-cyan-900/20 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>🇪🇸</span>
              <span>Espanjankieliset palvelut</span>
            </button>
          </div>
        </div>
      </section>

      {/* Language Tab Content Area */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Ruotsinkieliset palvelut */}
          {activeTab === "sv" && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🇸🇪</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Kotihoitoa ruotsiksi Uudellamaalla
                  </h2>
                  <div className="text-sm text-cyan-700 font-semibold">
                    Lohja, Raasepori, Espoo, Helsinki, Vantaa, Hanko ja Inkoo
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                Sam&apos;s Care tarjoaa kotihoitoa ruotsiksi laadukkaasti ja lämpimällä otteella. Kohtaamme jokaisen asiakkaan rauhassa, kunnioittavasti ja aidosti välittäen. Olemme hyväksytty palvelusetelituottaja.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg">Ruotsinkielisiin palveluihimme kuuluvat:</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Kotihoito:</strong> Tukea arkeen, henkilökohtaiseen hygieniaan, ruokailuun ja yhdessäoloon.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Kotisairaanhoito:</strong> Lääkehoitoa, haavahoitoa, verinäytteiden ottoa ja kuntoutusta.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Henkilökohtainen apu:</strong> Vammaispalvelulain mukaisesti ja hyvinvointialueen päätöksen mukaan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Palvelusetelit:</strong> Hyväksymme hyvinvointialueen myöntämät palvelusetelit.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-cyan-950 text-lg">Ota yhteyttä ruotsinkielisistä palveluista</h3>
                    <p className="text-xs text-cyan-800 leading-relaxed mt-1">
                      Voit soittaa alueemme hoitajille tai varata maksuttoman kartoituskäynnin kotiisi. Kerro yhteydenotossasi, jos toivot palvelua ruotsiksi.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <a
                      href="tel:0447631820"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Raasepori ja ruotsinkieliset palvelut: 044 763 1820</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Englanninkieliset palvelut */}
          {activeTab === "en" && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🇬🇧</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Kotihoitoa ja kotisairaanhoitoa englanniksi
                  </h2>
                  <div className="text-sm text-cyan-700 font-semibold">
                    Palvelemme Espoossa, Helsingissä, Vantaalla, Lohjalla ja muualla Uudellamaalla
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                Hoivan ja terveyspalveluiden järjestäminen Suomessa voi olla haastavaa, jos suomi ei ole äidinkielesi. Sam&apos;s Care tarjoaa englanninkielistä kotihoitoa ja kotisairaanhoitoa sinulle tai läheisellesi tutussa kotiympäristössä.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg">Palveluihimme kuuluvat:</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Kotisairaanhoito:</strong> Pistokset, haavojen sidonta, lääkehoito ja verinäytteiden otto.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Henkilökohtainen hoiva:</strong> Pukeutumisessa ja peseytymisessä avustaminen, ruoanlaitto ja saattaminen lääkärikäynneille.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Kotitalousvähennys:</strong> Hoivapalvelut voivat oikeuttaa kotitalousvähennykseen voimassa olevien ehtojen mukaisesti.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Palvelusetelit:</strong> Hyväksymme hyvinvointialueiden myöntämiä palveluseteleitä.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-cyan-950 text-lg">Varaa maksuton kartoituskäynti</h3>
                    <p className="text-xs text-cyan-800 leading-relaxed mt-1">
                      Tulemme maksuttomalle kartoituskäynnille kotiisi ja suunnittelemme palvelut yksilöllisten tarpeidesi mukaan.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <a
                      href="tel:0505551187"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Soita hoitajalle: +358 50 555 1187</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ranskankieliset palvelut */}
          {activeTab === "fr" && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🇫🇷</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Kotihoitoa ja henkilökohtaista apua ranskaksi
                  </h2>
                  <div className="text-sm text-cyan-700 font-semibold">
                    Tietoa ranskankielisistä palveluistamme
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                Sam&apos;s Care tarjoaa Suomessa asuville ranskankielisille asiakkaille kotihoitoa ja kotisairaanhoitoa. Kokeneet hoitajamme työskentelevät lämminhenkisesti ja ammattitaitoisesti.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg">Kotiin tuotaviin palveluihimme kuuluvat:</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Päivittäinen hygienia:</strong> Apu vuoteesta nousemisessa, peseytymisessä, hampaiden hoidossa ja ihonhoidossa.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Ravitsemus ja ateriat:</strong> Ruoan valmistaminen, riittävästä juomisesta huolehtiminen ja tarvittaessa ruokailussa avustaminen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Lääkehoito:</strong> Lääkkeiden ottamisen seuranta, pistokset, haavojen sidonta ja voinnin seuranta.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Kotiaskareet:</strong> Imurointi, pyykinpesu, järjestely ja lähiympäristön asiointiapu.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-cyan-950 text-lg">Pyydä maksutonta kartoituskäyntiä</h3>
                    <p className="text-xs text-cyan-800 leading-relaxed mt-1">
                      Tulemme tapaamaan sinua ja arvioimaan palvelutarpeesi maksutta ja ilman sitoumuksia. Palvelut voivat oikeuttaa Suomen kotitalousvähennykseen ehtojen mukaisesti.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <a
                      href="mailto:info@samscare.fi"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Ota yhteyttä sähköpostitse: info@samscare.fi</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Espanjankieliset palvelut */}
          {activeTab === "es" && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🇪🇸</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Kotihoitoa ja sairaanhoitoa espanjaksi
                  </h2>
                  <div className="text-sm text-cyan-700 font-semibold">
                    Ammattitaitoista ja lämminhenkistä hoivaa
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                Sam&apos;s Care tarjoaa Suomessa asuville espanjankielisille asiakkaille kotihoitoa ja kotisairaanhoitoa. Huolehdimme asiakkaistamme lämpimästi ja ammattitaitoisesti sekä kunnioitamme heidän tapojaan ja äidinkieltään.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg">Kotiin tuotaviin palveluihimme kuuluvat:</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Henkilökohtainen hoiva ja hygienia:</strong> Suihku ja peseytyminen, pukeutuminen, riittävästä juomisesta huolehtiminen ja ihonhoito.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Sairaanhoito ja lääkehoito:</strong> Lääkkeiden ottamisen seuranta, pistokset ja haavahoito.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Ruokailu ja kotiaskareet:</strong> Terveellisten aterioiden valmistus, kaupassa käynti ja kodin järjestely.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Seura ja saattaminen:</strong> Lääkärikäynnit, ulkoilu ja kiireetön keskustelu.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-cyan-950 text-lg">Pyydä maksutonta kartoituskäyntiä</h3>
                    <p className="text-xs text-cyan-800 leading-relaxed mt-1">
                      Tutustu hoitajiimme maksuttomalla palvelutarpeen arviointikäynnillä omassa kodissasi.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <a
                      href="tel:0447937886"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Soita meille: +358 44 793 7886</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Booking Form Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm 
            title="Ota yhteyttä omalla kielelläsi"
            subtitle="Kirjoita meille suomeksi, ruotsiksi, englanniksi, ranskaksi tai espanjaksi."
          />
        </div>
      </section>
    </div>
  );
}
