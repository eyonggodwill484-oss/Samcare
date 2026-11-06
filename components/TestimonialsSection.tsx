import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import TestimonialsReveal from "@/components/TestimonialsReveal";
import AnimatedStat from "@/components/AnimatedStat";

export default function TestimonialsSection() {
  const testimonials = [
    {
      author: "Päivi L.",
      role: "Family Relative (Lohja)",
      quote: "After many years of managing my parents' care, I feel that getting Sam's Care home care has given me my own life back! It is incredible with what immense heart and expertise my parents are looked after every single day.",
      highlight: "I have received my own life back!",
      rating: 5,
    },
    {
      author: "Marjatta & Eero",
      role: "Family Caregiver & Client (Espoo)",
      quote: "My husband is an ALS patient and having a trusting nurse relationship is vital for us. Sam's Care's service coordinator helped us find a fantastic, competent and empathetic nurse on very short notice. We give you nothing but praise!",
      highlight: "Nothing but praise for your service!",
      rating: 5,
    },
    {
      author: "Antti K.",
      role: "Home Care Client (Helsinki)",
      quote: "Special thanks for keeping the same familiar nurse. The nurses aren't rushing on a minute-by-minute schedule, so we have time to catch up, handle medications, and take care of daily routines in peace. Warmth and common sense shine through.",
      highlight: "The nurse stays the same with plenty of time.",
      rating: 5,
    },
    {
      author: "Gunilla S.",
      role: "Family Relative (Raasepori)",
      quote: "Att få vård på sitt modersmål svenska betyder oerhört mycket för min mamma. Vårdarna är punktliga, varma och oerhört kompetenta. Rekommenderar Sam's Care varmt till alla!",
      highlight: "Home care in Swedish with great dedication.",
      rating: 5,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 text-slate-900">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
            Client & Family Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Genuine Trust from Families and Clients
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Care services are always delivered from person to person. Satisfied clients and relieved families are the greatest testament to the quality of our care.
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
                  <span data-testimonial-part>Verified Review</span>
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
            <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">Familiar Personal Nurses</div>
          </div>
          <div>
            <AnimatedStat
              value={24}
              suffix="/7"
              className="text-3xl font-extrabold text-teal-700 sm:text-4xl"
            />
            <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">On-Call Readiness</div>
          </div>
          <div>
            <AnimatedStat
              value={5}
              className="text-3xl font-extrabold text-amber-700 sm:text-4xl"
            />
            <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">Care Languages</div>
          </div>
          <div>
            <AnimatedStat
              value={60}
              suffix="%"
              className="text-3xl font-extrabold text-emerald-700 sm:text-4xl"
            />
            <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">Finnish Tax Deduction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
