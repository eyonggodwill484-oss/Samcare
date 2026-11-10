"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  ChevronRight
} from "lucide-react";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <footer className="border-t border-blue-300/30 bg-[#045184] pt-10 pb-6 text-blue-100 sm:pt-12">
      {/* Top Banner strip with caring visual */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-900 via-teal-900 to-slate-900 border border-cyan-800/40 p-6 sm:p-8 shadow-2xl">
          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
            <Image 
              src="/Images/footer.png" 
              alt="Sam's Care Hoiva" 
              fill 
              className="object-cover object-center" 
            />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
                Henkilökohtaista hoivaa sydämellä
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Tarvitsetko sinä tai läheisesi luotettavaa päivittäistä hoivaa?
              </h3>
              <p className="text-slate-300 text-base max-w-2xl">
                Ota yhteyttä meihin milloin tahansa. Mielellämme käymme teillä
                maksuttomassa kotikartoituksessa ja suunnittelemme juuri teille
                sopivan hoito- ja tukisuunnitelman.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Button
                href="/ajanvaraus"
                size="lg"
                className="rounded-xl text-center shadow-lg"
              >
                <span>Varaa kartoitus</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
              <a
                href="tel:0505551187"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold border border-slate-700 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Soita: 050 555 1187</span>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Main footer columns */}
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-7 pb-8 border-b border-blue-300/30">
          
          {/* Company info */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white p-1">
                <Image 
                  src="/Images/Logo.png" 
                  alt="Sam's Care Oy:n logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Sam&apos;s Care <span className="text-[#3dc9b2] text-lg">Oy</span>
              </span>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              Sam&apos;s Care tarjoaa laaja-alaista, rauhallista hoivaa,
              kuntoutusta ja kotihoitoa asiakkaan kotiin. Tutut hoitajat ja
              aito läsnäolo ovat työn perustana.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-200 block mb-2">
                Kielet, joilla puhumme
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Englanti", "Suomi", "Ruotsi", "Ranska", "Espanja"].map((lang) => (
                  <span key={lang} className="px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/20">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Services links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Palvelut
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link href="/palvelut/kotihoito" className="hover:text-[#3dc9b2] transition-colors flex items-center gap-1.5">
                  <span className="text-[#3dc9b2]">•</span>
                  <span>Kotihoito ja arjen tuki</span>
                </Link>
              </li>
              <li>
                <Link href="/palvelut/kotisairaanhoito" className="hover:text-[#3dc9b2] transition-colors flex items-center gap-1.5">
                  <span className="text-[#3dc9b2]">•</span>
                  <span>Kotisairaanhoito ja lääkkeet</span>
                </Link>
              </li>
              <li>
                <Link href="/palvelut/henkilokohtainen-apu" className="hover:text-[#3dc9b2] transition-colors flex items-center gap-1.5">
                  <span className="text-[#3dc9b2]">•</span>
                  <span>Henkilökohtainen apu</span>
                </Link>
              </li>
              <li>
                <Link href="/palvelut/palveluseteli" className="hover:text-[#3dc9b2] transition-colors flex items-center gap-1.5">
                  <span className="text-[#3dc9b2]">•</span>
                  <span>Palveluseteli</span>
                </Link>
              </li>
              <li>
                <Link href="/hinnasto" className="hover:text-[#3dc9b2] transition-colors flex items-center gap-1.5">
                  <span className="text-[#3dc9b2]">•</span>
                  <span>Hinnasto ja palvelumaksut</span>
                </Link>
              </li>
              <li>
                <Link href="/kielet" className="hover:text-[#3dc9b2] transition-colors flex items-center gap-1.5">
                  <span className="text-[#3dc9b2]">•</span>
                  <span>Monikielinen hoito</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional coverage & Offices */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Toimipisteet ja päivystys
            </h4>
            <div className="space-y-3 text-sm text-blue-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3dc9b2] mt-1 shrink-0" />
                <div>
                  <strong className="text-white block">Lohjan toimisto:</strong>
                  Laurinkatu 51, 08100 Lohja
                  <div className="text-xs text-[#3dc9b2] mt-0.5">Puh: 050 555 1187</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3dc9b2] mt-1 shrink-0" />
                <div>
                  <strong className="text-white block">Espoon toimisto:</strong>
                  Ansatie 18, 02940 Espoo
                </div>
              </div>
              <div className="pt-2 text-xs text-blue-100">
                <strong className="text-white block mb-1">Palvelualue Suomessa:</strong>
                Lohja, Espoo, Helsinki, Vantaa, Raasepori, Hanko, Inkoo ja Siuntio.
              </div>
            </div>
          </div>

          {/* Official Documents & Supervision */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Laatu ja vaatimustenmukaisuus
            </h4>
            <ul className="space-y-2 text-xs text-blue-100">
              <li>
                <Link href="/laatu-ja-hygienia" className="hover:text-[#3dc9b2] transition-colors flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3dc9b2]" />
                  <span>Hygieniaprotokollat</span>
                </Link>
              </li>
              <li>
                <Link href="/laatu-ja-hygienia" className="hover:text-[#3dc9b2] transition-colors flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-[#3dc9b2]" />
                  <span>Omavalvontasuunnitelma</span>
                </Link>
              </li>
              <li>
                <Link href="/laatu-ja-hygienia" className="hover:text-[#3dc9b2] transition-colors flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-[#3dc9b2]" />
                  <span>Virallinen tarkastuskertomus</span>
                </Link>
              </li>
              <li>
                <Link href="/laatu-ja-hygienia" className="hover:text-[#3dc9b2] transition-colors flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-[#3dc9b2]" />
                  <span>Tietosuojakäytäntö (GDPR)</span>
                </Link>
              </li>
              <li className="pt-2">
                <a 
                  href="https://www.facebook.com/samscare.fi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Sam's Care Facebookissa"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-2 text-[#3dc9b2] transition-colors hover:bg-white/10 hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="12" fill="#1877F2" />
                    <path
                      fill="white"
                      d="M13.35 21v-8.2h2.76l.41-3.2h-3.17V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14c-.3-.04-1.34-.14-2.55-.14-2.52 0-4.25 1.54-4.25 4.37V9.6H7v3.2h2.84V21h3.51Z"
                    />
                  </svg>
                  <span className="text-xs font-medium">Facebook</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="flex flex-col items-center gap-4 pt-5 text-xs text-blue-100">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/laatu-ja-hygienia" className="hover:text-white">Tietosuojakäytäntö</Link>
            <Link href="/laatu-ja-hygienia" className="hover:text-white">Laatustandardit</Link>
            <Link href="/hae-tyota" className="hover:text-white">Työpaikat</Link>
          </div>
          <div>&copy; 2026 Sam&apos;s Care Oy. Kaikki oikeudet pidätetään.</div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
