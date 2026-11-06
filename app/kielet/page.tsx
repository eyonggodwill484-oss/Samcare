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
            alt="Multilingual home services"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

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
              <span>Svenska (Hemvård på svenska)</span>
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
              <span>English (Home Care & Nursing)</span>
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
              <span>Français (Soins à domicile)</span>
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
              <span>Español (Atención domiciliaria)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Language Tab Content Area */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SVENSKA */}
          {activeTab === "sv" && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🇸🇪</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Hemvård och hemsjukvård på svenska i Nyland
                  </h2>
                  <div className="text-sm text-cyan-700 font-semibold">
                    Lojo, Raseborg, Esbo, Helsingfors, Vanda, Hangö och Ingå
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                Hos Sam&apos;s Care får du professionell hemvård på ditt modersmål svenska med högsta kvalitet och ett varmt bemötande. Det är viktigt för oss att möta varje klient i lugn och ro med respekt och genuint engagemang. Vi är en godkänd servicesedeltuottaja (tjänsteproducent för servicesedlar).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg">Våra tjänster på svenska:</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Hemvård:</strong> Stöd i vardagen, personlig hygien, måltider och sällskap.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Hemsjukvård:</strong> Läkemedelsutdelning, såromläggning, blodprov och rehabilitering.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Personlig assistans:</strong> Enligt handikappservicelagen, helt kostnadsfritt för klienten.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Servicesedlar:</strong> Vi accepterar servicesedlar från välfärdsområdet.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-cyan-950 text-lg">Kontakta oss på svenska</h3>
                    <p className="text-xs text-cyan-800 leading-relaxed mt-1">
                      Ring direkt till vår svenskspråkiga jour eller boka ett kostnadsfritt kartläggningsbesök i ditt hem.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <a
                      href="tel:0447631820"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Raseborg & Svenska: 044 763 1820</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ENGLISH */}
          {activeTab === "en" && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🇬🇧</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Professional Home Care & Nursing in English
                  </h2>
                  <div className="text-sm text-cyan-700 font-semibold">
                    Serving Espoo, Helsinki, Vantaa, Lohja and the Uusimaa region
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                Navigating elderly care or healthcare in Finland as an expatriate or English speaker can be challenging. Sam&apos;s Care provides compassionate, fluent English-speaking nurses and caregivers to support you or your loved ones in the comfort of your home.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg">Services provided:</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Home Nursing:</strong> Injections, wound dressing, medication dosage, blood testing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Personal Care:</strong> Dressing, bathing, meal preparation, accompaniment to doctor visits.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Tax Deduction:</strong> 60% household tax deduction applies to all care hours.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Service Vouchers:</strong> Accepted through city wellbeing service counties.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-cyan-950 text-lg">Book a free consultation</h3>
                    <p className="text-xs text-cyan-800 leading-relaxed mt-1">
                      We offer a complimentary in-home assessment visit to tailor a personalized care plan to your exact needs.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <a
                      href="tel:0505551187"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call our nurse: +358 50 555 1187</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FRANCAIS */}
          {activeTab === "fr" && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🇫🇷</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Soins à domicile et assistance personnelle en français
                  </h2>
                  <div className="text-sm text-cyan-700 font-semibold">
                    Description complète de nos services en langue française
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                Sam&apos;s Care propose des services complets d&apos;aide à domicile et de soins infirmiers adaptés à la communauté francophone en Finlande. Nos soignants expérimentés interviennent avec bienveillance et professionnalisme.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg">Prestations quotidiennes:</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Soins d&apos;hygiène quotidienne:</strong> Aide au lever, toilette, brossage des dents, soins de la peau.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Nutrition et repas:</strong> Préparation des repas, hydratation, assistance pour manger si nécessaire.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Médicaments:</strong> Prise sous contrôle, injections, pansements et suivi des constantes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Aide ménagère:</strong> Aspiration, lessive, rangement et courses de proximité.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-cyan-950 text-lg">Demandez une visite gratuite</h3>
                    <p className="text-xs text-cyan-800 leading-relaxed mt-1">
                      Nous venons vous rencontrer sans aucun engagement pour évaluer vos besoins. Déductible d&apos;impôts finlandais à 60% (kotitalousvähennys).
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <a
                      href="mailto:info@samscare.fi"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Contact par email: info@samscare.fi</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ESPANOL */}
          {activeTab === "es" && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🇪🇸</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Servicios de atención domiciliaria y enfermería en español
                  </h2>
                  <div className="text-sm text-cyan-700 font-semibold">
                    Cuidado profesional con calidez y cercanía humana
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                En Sam&apos;s Care ofrecemos cuidados a domicilio en español con los más altos estándares de calidad finlandeses. Cuidamos a nuestros pacientes como a nuestra propia familia, respetando sus costumbres y su lengua materna.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg">Nuestros servicios a domicilio:</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Cuidado personal e higiene:</strong> Ducha, lavado, vestirse, hidratación y cuidado de la piel.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Enfermería y medicación:</strong> Toma de medicinas controlada, inyecciones, curas de heridas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Alimentación y tareas:</strong> Preparación de comidas saludables, compras y orden en el hogar.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Acompañamiento:</strong> Visitas médicas, paseos y conversación tranquila sin prisas.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-cyan-950 text-lg">Solicite una visita sin costo</h3>
                    <p className="text-xs text-cyan-800 leading-relaxed mt-1">
                      Conozca a nuestros enfermeros en una visita de valoración gratuita en su propio domicilio.
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <a
                      href="tel:0447937886"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Llámenos: +358 44 793 7886</span>
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
