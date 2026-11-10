import React from 'react';
import Image from 'next/image';
import { Globe, ArrowRight } from 'lucide-react';
import QuickConsultationForm from '@/components/QuickConsultationForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSlideshow from '@/components/HeroSlideshow';
import HomeHeroText from '@/components/HomeHeroText';
import ScrollReveal from '@/components/ScrollReveal';
import Button from '@/components/Button';
import { homeSEO } from '@/seo';

export const metadata = homeSEO;

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[610px] w-full overflow-hidden bg-[#102c3b] sm:min-h-[660px] lg:min-h-[700px]">
        <div className="absolute inset-0">
          <HeroSlideshow />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(5,24,36,0.88)_0%,rgba(5,24,36,0.72)_48%,rgba(5,24,36,0.2)_100%)]" />

        <div className="relative z-20 mx-auto flex min-h-[610px] w-full max-w-7xl items-center px-5 py-16 sm:min-h-[660px] sm:px-8 lg:min-h-[700px] lg:px-12">
          <HomeHeroText />
        </div>
      </section>

      <section
        aria-label="Kielet, joilla palvelua tarjotaan"
        className="bg-[#045184] text-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:px-8 sm:py-8 md:flex-row md:items-center lg:px-12">
          <div className="flex shrink-0 items-center gap-3 md:w-[250px]">
            <Globe aria-hidden="true" className="size-7 shrink-0 text-[#62ddc9]" />
            <p className="text-base font-semibold sm:text-lg md:max-w-[185px]">
              Tarjoamme palveluitamme
            </p>
          </div>
          <div className="language-marquee min-w-0 flex-1" aria-hidden="false">
            <div className="language-marquee__track">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  className="language-marquee__group"
                  aria-hidden={copy === 1 ? 'true' : undefined}
                >
                  {[
                    { name: 'suomeksi', flag: '🇫🇮' },
                    { name: 'ruotsiksi', flag: '🇸🇪' },
                    { name: 'englanniksi', flag: '🇬🇧' },
                    { name: 'ranskaksi', flag: '🇫🇷' },
                    { name: 'espanjaksi', flag: '🇪🇸' },
                  ].map(({ name, flag }) => (
                      <li
                        key={name}
                        className="inline-flex shrink-0 items-center gap-4 whitespace-nowrap px-6 text-lg font-semibold text-white/95 sm:text-xl"
                      >
                        <span aria-hidden="true" className="text-3xl leading-none sm:text-4xl">
                          {flag}
                        </span>
                        {name}
                      </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-[0_16px_40px_rgba(15,39,56,0.12)]"
              direction="left"
            >
              <Image
                src="/Images/hero-1.png"
                alt="Hoitaja ja asiakas keskustelevat kotona"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </ScrollReveal>

            <ScrollReveal
              className="flex flex-col items-start lg:max-w-[560px]"
              direction="right"
              delay={120}
            >
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
                Hoiva, joka sopii elämääsi
              </span>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.035em] text-slate-900 sm:text-5xl">
                Palvelut
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Tervetuloa Sam&apos;s Care -palveluiden monipuoliseen valikoimaan.
                Tarjoamme laaja-alaisia sosiaali- ja terveyspalveluita asiakkaan
                kotona. Palveluihimme kuuluvat myös vastaanottopalvelut ja
                kuntien sekä yritysten tarpeisiin räätälöidyt ratkaisut. Voit
                hakea palveluitamme suoraan tai oman kuntasi kautta palvelusetelillä
                tai ostopalveluna. Ota yhteyttä, niin etsimme yhdessä sinulle
                sopivan ja joustavan palveluratkaisun.
              </p>
              <Button
                href="/palvelut"
                className="mt-7 rounded-md"
              >
                Tutustu palveluihin
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION 2: DOMICILIARY CARE */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content text */}
            <ScrollReveal
              className="lg:col-span-5 space-y-6"
              direction="left"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider">
                Kotihoito
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                Kotihoito tukee arkea
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Kotihoito sopii paitsi ikäihmisille myös korvaaville omaisille,
                mielenterveys- ja päihdehoidossa oleville, vammaisille sekä
                sairauden tai leikkauksen jälkeen toipuville. Teemme yhteistyötä
                kunnan kotihoidon kanssa.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Koti on arvokas, joten palvelumme tavoitteena on tukea kotona
                asuvien asiakkaiden arkea ja selviytymistä monipuolisten hoito- ja
                kuntoutuspalveluiden avulla. Sam&apos;s Care -kotihoitopalvelut on
                räätälöity jokaisen asiakkaan tarpeiden mukaan, ja ammattitaitoiset
                hoitajat ovat tavoitettavissa ympäri vuorokauden sekä lyhytaikaisiin
                että pitkäaikaisiin tarpeisiin. Ota yhteyttä, niin löydämme juuri
                sinun tilanteeseesi sopivan palveluratkaisun.
              </p>
              <p className="text-sm font-semibold text-slate-500">
                Sam&apos;s Care Oy
              </p>
              <Button href="/ota-yhteytta" className="rounded-md">
                Ota yhteyttä
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            </ScrollReveal>

            {/* Visual Image */}
            <ScrollReveal
              className="relative lg:col-span-7"
              direction="right"
              delay={140}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_28px_70px_-18px_rgba(4,81,132,0.42)] ring-1 ring-cyan-800/10 group sm:aspect-[16/10]">
                <Image
                  src="/Images/personalcare.png"
                  alt="Hoitaja tarjoaa kotihoitoa ikääntyneelle"
                  fill
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#102c3b] text-white">
        <Image
          src="/Images/belowfooter.png"
          alt="Hoitaja viettää aikaa asiakkaan kanssa kotona"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#062235]/80 via-[#062235]/45 to-[#062235]/20"
        />
        <ScrollReveal className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24" direction="left">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
              Hoitoa, jossa sinulle on aikaa
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Hoitoa, jossa sinulle on aikaa
            </h2>
            <p className="text-base leading-relaxed text-white/90 sm:text-lg">
              Kotihoidon asiakkaat arvostavat erityisesti kahta asiaa: tuttuja
              hoitajia ja kiireettömiä hoitokäyntejä. Oma tuttu hoitajasi ei
              ainoastaan auta sinua päivittäisissä tarpeissasi, vaan hänellä on
              myös aikaa istahtaa alas ja vaihtaa kanssasi kuulumisia.
            </p>
            <p className="text-base leading-relaxed text-white/90 sm:text-lg">
              Hoitajamme eivät kiirehdi seuraavaan tapaamiseen. Sinun kanssasi
              vietetty aika ja keskustelu niin pienistä kuin tärkeistäkin asioista
              ovat olennainen osa tarjoamaamme hoitoa. Monet asiakkaamme kertovat
              arvostavansa erityisesti pidempiä ja rauhallisempia hoitokäyntejä.
            </p>
            <p className="text-base leading-relaxed text-white/90 sm:text-lg">
              Haluamme, että tunnet olosi huolehdituksi ja että perheesi voi
              luottaa siihen, että olet turvallisissa ja ammattitaitoisissa
              käsissä. Luotettavan ja tutun tuen avulla jää enemmän aikaa
              keskittyä siihen, mikä on sinulle elämässä tärkeintä.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* REAL TESTIMONIALS */}
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      {/* FREE CONSULTATION ASSESSMENT & CONTACT BOOKING SECTION */}
      <section
        className="py-20 bg-slate-50 relative overflow-hidden"
        id="kartoitus"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Consultation Details */}
            <ScrollReveal className="lg:col-span-5 space-y-6" direction="left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-semibold uppercase tracking-wider">
                Aloitus on helppoa
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                Maksuton kartoituskäynti kotona
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Hoitotarpeet voivat syntyä yllättäen leikkauksen jälkeen tai
                kehittyä vähitellen iän myötä. Maksuton kartoituskäyntimme on
                täysin sitoutumaton:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">
                      Tutustuminen ja tarpeen arviointi:
                    </strong>
                    <span className="text-slate-600 text-xs sm:text-sm">
                      Hoitaja käy kotonasi kuuntelemassa toiveitasi, päivittäisiä
                      rutiinejasi ja terveydentilaasi.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">
                      Henkilökohtainen hoitosuunnitelma:
                    </strong>
                    <span className="text-slate-600 text-xs sm:text-sm">
                      Annamme selkeän ehdotuksen käyntien sisällöstä, aikataulusta
                      ja nimetyistä hoitajista.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">
                      Palvelusetelit ja verohyödyt:
                    </strong>
                    <span className="text-slate-600 text-xs sm:text-sm">
                      Käymme yhdessä läpi kuntatukea ja selvitämme kaikki kustannukset
                      alusta asti.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct call banner */}
              <div className="p-5 rounded-2xl bg-cyan-900 text-white flex items-center justify-between gap-4 shadow-lg">
                <div>
                  <div className="text-xs text-cyan-200 uppercase font-semibold">
                    Haluatko puhua hoitajalle heti?
                  </div>
                  <div className="text-lg font-extrabold text-white mt-0.5">
                    050 555 1187
                  </div>
                </div>
                <a
                  href="tel:0505551187"
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
                >
                  Soita nyt
                </a>
              </div>
            </ScrollReveal>

            {/* Consultation Form Component */}
            <div className="lg:col-span-7">
              <QuickConsultationForm
                title="Varaa maksuton kartoituskäynti"
                subtitle="Täytä lomake, niin johtava hoitajamme ottaa sinuun yhteyttä 24 tunnin sisällä."
              />
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL OFFICES & COVERAGE (using below-footer.png background) */}
      <section className="relative overflow-hidden bg-[#045184] py-20 text-white">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/Images/belowfooter.png"
            alt="Sam's Caren palvelualue Uudellamaalla"
            fill
            className="object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/55 via-[#045184]/35 to-slate-950/60"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
              Palvelualueet Suomessa
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Palvelemme koko Uudenmaan aluetta
            </h2>
            <p className="text-slate-300 text-base">
              Alueelliset toimipisteemme ja mobiilit hoitotiimimme tarjoavat
              kattavaa kotihoitoa seuraavissa kunnissa:
            </p>
          </ScrollReveal>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 text-center sm:grid-cols-3">
            {[
              { city: 'Lohja', tel: '050 555 1187' },
              { city: 'Helsinki', tel: '044 793 7886' },
              { city: 'Hanko & Inkoo', tel: '044 763 1820' },
            ].map((loc, i) => (
              <ScrollReveal key={loc.city} delay={i * 100}>
                <div className="bg-slate-800/80 backdrop-blur-xs p-5 rounded-2xl border border-slate-700/80 hover:border-cyan-500/50 transition-all">
                  <div className="font-bold text-white text-base mb-1">
                    {loc.city}
                  </div>
                  {loc.tel && (
                    <a
                      href={`tel:${loc.tel.replace(/\s+/g, '')}`}
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-medium block"
                    >
                      {loc.tel}
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
