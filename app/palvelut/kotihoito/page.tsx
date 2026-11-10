import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Heart
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";
import { kotihoitoSEO } from "@/seo";

export const metadata = kotihoitoSEO;

export default function KotihoitoPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Kotihoitoa tutuilta hoitajilta"
            fill
            className="page-header-image h-full w-full object-cover"
          />
        </div>
        <div className="page-header-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
              Hoivaa kodin lähellä
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Kotihoito
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Kotihoito sopii ikääntyneiden lisäksi myös omaishoitajan sijaisuuksiin, mielenterveys- ja päihdekuntoutujille, vammaisille sekä sairaudesta tai leikkauksesta toipuville. Teemme yhteistyötä kunnallisen kotihoidon kanssa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Kenelle kotihoito sopii?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Kotihoitomme räätälöidään jokaisen asiakkaan yksilöllisten toiveiden ja tarpeiden mukaan. Ammattilaisemme ja hoitajamme ovat tavoitettavissa ympäri vuorokauden:
              </p>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Ikäihmiset:</strong> Avustusta peseytymiseen, lääkkeiden ottoon, aterioihin ja turvalliseen arkeen, jotta voi asua kotona mahdollisimman pitkään.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Omaishoitajien virkistys:</strong> Tarjoamme luotettavaa ja rauhoittavaa tukea perheenjäsenille, jotta omaisenhoitaja saa tarvittavan levon.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Leikkauksen tai sairauden jälkeinen kuntoutus:</strong> Tilapäistä päivittäistä apua sairaalasta kotiutuessa, mikä nopeuttaa toipumista ja vähentää uudelleen sairaalahoitoja.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Mielenterveys- ja päihdekuntoutus:</strong> Rakennettuja päivittäisiä tukitoimia, asiointiapua ja kannustavaa läsnäoloa.
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Mihin kotihoitokäynti voi sisältää tukea?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {[
                  "Avustus pukemiseen",
                  "Aamiainen, lounas ja päivällinen",
                  "Peseytymis- ja suihkuapu",
                  "Lääkkeiden anto ja hyvinvoinnin seuranta",
                  "Kauppa- ja apteekkimatkat",
                  "Ulkoilu ja kevyt liikunta",
                  "Kodinhoito ja pyykinpesu",
                  "Kyydit lääkäriin",
                  "Keskustelu ja seurustelu",
                  "Säännölliset tiedotukset omaisille"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-100 text-xs text-cyan-950">
                <strong>Hoitajamme lupaus:</strong> Pyrimme siihen, että sama tuttu hoitaja käy kotonasi mahdollisimman usein, jotta hän tuntee sinut ja rutiinisi.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Domiciliary care */}
      <section className="overflow-hidden bg-white py-12 sm:py-16">
        <div className="relative mx-auto max-w-[1600px] pb-0 lg:pb-48">
          <div className="relative ml-0 h-72 w-full overflow-hidden sm:h-96 lg:ml-[20%] lg:h-[520px] lg:w-[80%]">
            <Image
              src="/Images/Hero%202.png"
              alt="Hoitaja jakaa lämpimän hetken ikääntyneen kanssa"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
          </div>

          <article className="relative z-10 -mt-12 mx-4 bg-[#287da2] p-6 text-white shadow-xl sm:mx-8 sm:p-9 lg:absolute lg:left-0 lg:top-[38%] lg:mx-0 lg:mt-0 lg:w-[82%] lg:p-12 xl:p-16">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Hoivaa juuri sinulle kotiin
              </span>
              <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Kotihoito arjen mukaan
              </h2>
              <p className="mt-5 max-w-4xl text-sm leading-7 text-white/90 sm:text-base">
                Kotihoito sopii ikääntyneiden lisäksi myös omaishoitajan sijaisuuksiin, mielenterveys- ja päihdekuntoutujille, vammaisille sekä sairaudesta tai leikkauksesta toipuville. Teemme yhteistyötä kunnallisen kotihoidon kanssa.
              </p>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-white/90 sm:text-base">
                Oma koti on kullan kallis. Monipuolinen hoiva- ja kuntoutuspalvelumme tukee kotona asumista ja arjessa selviytymistä. Jokainen palvelu räätälöidään sinun tarpeidesi mukaan, ja ammattitaitoiset hoitajat ovat käytettävissä ympäri vuorokauden sekä lyhytaikaisiin että pitkäaikaisiin tarpeisiin. Ota yhteyttä niin löydämme juuri sinun tilanteeseesi soveltuvan palveluratkaisun.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/25 pt-5">
                <span className="text-sm font-semibold text-white/80">
                  Sam&apos;s Care Ltd
                </span>
                <Link
                  href="/ota-yhteytta"
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Ota yhteyttä
                </Link>
              </div>
          </article>
        </div>
      </section>

      {/* Consultation form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm 
            title="Tilaa kotihoitoa tai varaa maksuton kartoitus"
            subtitle="Vastaamme saman arkipäivän aikana ja suunnittelemme toiveisiisi sopivan palveluratkaisun."
          />
        </div>
      </section>
    </div>
  );
}
