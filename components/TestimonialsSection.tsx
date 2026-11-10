import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import TestimonialsReveal from "@/components/TestimonialsReveal";
import AnimatedStat from "@/components/AnimatedStat";

export default function TestimonialsSection() {
  const testimonials = [
    {
      author: "Päivi L.",
      role: "Perheenjäsen (Lohja)",
      quote: "Monien vuosien ajan vanhempieni hoidosta huolehtiminen oli raskasta, mutta Sam's Care -kotihoito on antanut minulle takaisin oman elämäni. On uskomatonta, kuinka sydämellisesti ja asiantuntevasti vanhempani saavat hoitoa joka päivä.",
      highlight: "Olen saanut takaisin oman elämäni!",
      rating: 5,
    },
    {
      author: "Marjatta & Eero",
      role: "Omaishoitaja & asiakas (Espoo)",
      quote: "Mieheni on ALS-potilas, joten luotettavan hoitosuhteen rakentaminen on elintärkeää. Sam's Care -palvelukoordinaattori auttoi meitä löytämään loistavan, pätevän ja empaattisen hoitajan erittäin nopeasti. Meillä ei ole kuin ylistäviä sanoja!",
      highlight: "Meillä ei ole kuin ylistäviä sanoja!",
      rating: 5,
    },
    {
      author: "Antti K.",
      role: "Kotihoidon asiakas (Helsinki)",
      quote: "Erityiskiitos siitä, että sama tuttu hoitaja on pysynyt mukana. Hoitajat eivät kiirehdi minuutti minuutilta, vaan meillä on aikaa jutella, hoitaa lääkkeet ja tehdä päivittäiset rutiinit rauhassa. Lämmöllä ja järjellä on suuri merkitys.",
      highlight: "Hoitaja pysyy samana ja aikaa on riittävästi.",
      rating: 5,
    },
    {
      author: "Gunilla S.",
      role: "Perheenjäsen (Raasepori)",
      quote: "On tärkeää saada hoitoa omalla äidinkielellään ruotsiksi. Hoitajat ovat täsmällisiä, lämpimiä ja erittäin päteviä. Suosittelen Sam's Carea lämpimästi kaikille!",
      highlight: "Kotihoitoa ruotsiksi suurella sydämellä.",
      rating: 5,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 text-slate-900">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
            Asiakkaiden ja perheiden kokemuksia
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Aitoa luottamusta perheiltä ja asiakkailta
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hoivapalvelut toteutetaan aina henkilöstä toiseen. Tyytyväiset asiakkaat ja helpottuneet perheet kertovat parhaiten hoivamme laadusta.
          </p>
        </div>

        <TestimonialsReveal className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              data-testimonial-card
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10 sm:p-8"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        data-testimonial-part
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote
                    data-testimonial-part
                    className="w-8 h-8 text-cyan-700/30 transition-colors group-hover:text-cyan-700/60"
                  />
                </div>

                <div
                  data-testimonial-part
                  className="text-cyan-800 font-semibold text-sm"
                >
                  &ldquo;{item.highlight}&rdquo;
                </div>

                <p
                  data-testimonial-part
                  className="text-slate-600 text-sm sm:text-base leading-relaxed italic"
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-6">
                <div>
                  <div
                    data-testimonial-part
                    className="font-bold text-slate-900 text-base"
                  >
                    {item.author}
                  </div>
                  <div
                    data-testimonial-part
                    className="text-xs text-slate-500"
                  >
                    {item.role}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-emerald-700">
                  <CheckCircle2
                    data-testimonial-part
                    className="w-4 h-4"
                  />
                  <span data-testimonial-part>Vahvistettu arvio</span>
                </div>
              </div>
            </div>
          ))}
        </TestimonialsReveal>

        {/* Stats highlight bar */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-slate-200 bg-[#f2fbf9] p-6 text-center sm:p-8 md:grid-cols-4">
          <div>
            <AnimatedStat
              value={100}
              start={50}
              suffix="%"
              className="text-3xl font-extrabold text-cyan-800 sm:text-4xl"
            />
            <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">Tuttuja hoitajia</div>
          </div>
          <div>
            <AnimatedStat
              value={24}
              suffix="/7"
              className="text-3xl font-extrabold text-teal-700 sm:text-4xl"
            />
            <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">Valmius 24/7</div>
          </div>
          <div>
            <AnimatedStat
              value={5}
              className="text-3xl font-extrabold text-amber-700 sm:text-4xl"
            />
            <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">Hoitokielet</div>
          </div>
          <div>
            <AnimatedStat
              value={60}
              suffix="%"
              className="text-3xl font-extrabold text-emerald-700 sm:text-4xl"
            />
            <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">Suomalainen verovähennys</div>
          </div>
        </div>
      </div>
    </section>
  );
}
