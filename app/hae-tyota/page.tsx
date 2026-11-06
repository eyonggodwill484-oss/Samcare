"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  CheckCircle2,
  Send,
  Heart,
  Clock,
  GraduationCap
} from "lucide-react";

export default function HaeTyotaPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "lähihoitaja",
    apotti: "kyllä",
    love: "kyllä",
    city: "Espoo",
    workload: "osa-aikainen",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Join the Sam's Care care team"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Briefcase className="w-3.5 h-3.5 text-teal-300" />
              Tule meille töihin
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Lähihoitaja tai sairaanhoitaja – Liity Sam&apos;s Caren tiimiin!
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Haluatko tehdä merkityksellistä hoitotyötä ilman jatkuvaa kiirettä? Tarjoamme kilpailukykyisen palkan, joustavat työajat elämäntilanteesi mukaan ja lämpimän työyhteisön.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Rauhalliset käyntiajat</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Emme juoksuta hoitajiamme minuuttiaikataululla. Voit keskittyä asiakkaaseen ja antaa parasta mahdollista hoivaa ilman uupumista.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Maksuton lääkelupa ja Apotti</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Puuttuuko LOVe/LOP-lääkelupa tai Apotti-osaaminen? Voit suorittaa lääkehoidon koulutuksen ja näyttökokeet maksuttomasti kauttamme.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Vaikuta omiin vuoroihisi</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Haluatko keikkailla opintojen ohella, tehdä osa-aikaista viikkoa tai säännöllistä kokoaikatyötä? Sinä päätät käytettävyytesi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-emerald-950">
                Kiitos hakemuksestasi, {formData.name}!
              </h2>
              <p className="text-emerald-800 text-sm max-w-md mx-auto">
                Olemme vastaanottaneet tietosi. Rekrytointivastaavamme ottaa sinuun yhteyttä muutaman arkipäivän sisällä sopiaksemme haastattelusta!
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                  Avoin työhakemus
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Jätä nopea hakemus meille
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Täytä lyhyt lomake alle. CV:tä ei vaadita heti alkuun – jutellaan ensin!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nimi *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Etunimi ja sukunimi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Puhelinnumero *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="040 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Sähköposti *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="etunimi.sukunimi@sahkoposti.fi"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Koulutus / Ammattinimike *
                    </label>
                    <select
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    >
                      <option value="lähihoitaja">Valmistunut lähihoitaja</option>
                      <option value="sairaanhoitaja">Valmistunut sairaanhoitaja</option>
                      <option value="opiskelija-lh">Lähihoitajaopiskelija</option>
                      <option value="opiskelija-sh">Sairaanhoitajaopiskelija</option>
                      <option value="avustaja">Henkilökohtainen avustaja / Hoiva-avustaja</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Apotti-osaaminen
                    </label>
                    <select
                      value={formData.apotti}
                      onChange={(e) => setFormData({ ...formData, apotti: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    >
                      <option value="kyllä">Kyllä (käytän Apottia)</option>
                      <option value="ei-mutta-haluan">Ei, haluan koulutuksen</option>
                      <option value="ei">Ei kokemusta</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Lääkehoitolupa (LOVe)
                    </label>
                    <select
                      value={formData.love}
                      onChange={(e) => setFormData({ ...formData, love: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    >
                      <option value="kyllä">Voimassa oleva lupa</option>
                      <option value="vanhentunut">Vanhentunut / uusittava</option>
                      <option value="haluan-suorittaa">Haluan suorittaa Sam&apos;s Carella</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Toivottu työalue
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    >
                      <option value="Espoo">Espoo</option>
                      <option value="Helsinki">Helsinki</option>
                      <option value="Lohja">Lohja</option>
                      <option value="Raasepori">Raasepori</option>
                      <option value="Vantaa">Vantaa</option>
                      <option value="Hanko/Inkoo">Hanko / Inkoo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Kerro lyhyesti taustastasi ja toiveistasi
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Minkälaisista vuoroista olet kiinnostunut ja milloin voisit aloittaa?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-teal-700/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Lähetä hakemus</span>
                </button>
              </form>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
