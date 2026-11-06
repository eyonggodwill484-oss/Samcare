import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Phone,
  Heart
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";

export const metadata = {
  title: "Home Care | Sam's Care Oy - Warm and Unhurried Home Care",
  description: "Warm and unhurried home care from familiar caregivers. We support seniors, family caregivers and recoverees in Espoo, Lohja, Helsinki and Uusimaa.",
};

export default function KotihoitoPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Home care and familiar caregivers"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
              Compassionate care at home
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Home Care – Friendly visits from familiar caregivers
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Your home is priceless. Sam&apos;s Care aims to support safe living at home and everyday independence through a warm and diverse care offering.
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
                Who can benefit from our home care services?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our home care is tailored to each client’s individual wishes and needs. Our professional nurses and caregivers are available around the clock:
              </p>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Elderly:</strong> Assistance with washing, medication, meals and safe everyday living so they can stay at home as long as possible.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Family caregiver relief:</strong> We provide a reliable respite break for family caregivers. Your loved one is in capable, familiar hands.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Post‑surgery or illness recovery:</strong> Temporary daily assistance after a hospital stay accelerates recovery and helps prevent readmissions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Mental health and substance‑use recovery:</strong> Structured daily support, errands assistance and encouraging presence.
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                What can be included in a home care visit?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {[
                  "Assistance with dressing",
                  "Breakfast, lunch and dinner",
                  "Washing and shower assistance",
                  "Medication administration & wellbeing monitoring",
                  "Grocery and pharmacy runs",
                  "Outdoor walks and light exercise",
                  "Home tidying and laundry care",
                  "Accompanying to doctor appointments",
                  "Conversation and companionship",
                  "Regular updates to relatives"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-100 text-xs text-cyan-950">
                <strong>Our personal caregiver promise:</strong> We always aim to have the same familiar caregiver visit your home, someone who knows you and your routine.
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
              src="/Images/hero-2.png"
              alt="A caregiver sharing a warm moment with an older adult"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
          </div>

          <article className="relative z-10 -mt-12 mx-4 bg-[#287da2] p-6 text-white shadow-xl sm:mx-8 sm:p-9 lg:absolute lg:left-0 lg:top-[38%] lg:mx-0 lg:mt-0 lg:w-[82%] lg:p-12 xl:p-16">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Care that meets you at home
              </span>
              <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Domiciliary care, shaped around your everyday life
              </h2>
              <p className="mt-5 max-w-4xl text-sm leading-7 text-white/90 sm:text-base">
                Home care is for more than older adults. We also support family
                caregivers who need a break, people in mental health or
                substance-use rehabilitation, people with disabilities, and
                those recovering from illness or surgery. We work in cooperation
                with municipal home care.
              </p>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-white/90 sm:text-base">
                Home is precious. Our wide range of care and rehabilitation
                services helps you manage everyday life and continue living at
                home. Every plan is tailored to your needs, with professional
                caregivers available 24/7 for both short-term and ongoing
                support. Contact us and we&apos;ll find the right solution for
                your situation.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/25 pt-5">
                <span className="text-sm font-semibold text-white/80">
                  Sam&apos;s Care Ltd
                </span>
                <Link
                  href="/ota-yhteytta"
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact us
                </Link>
              </div>
          </article>
        </div>
      </section>

      {/* Consultation form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm 
            title="Order home care or a free assessment"
            subtitle="We will respond within the same business day and design a solution tailored to your wishes."
          />
        </div>
      </section>
    </div>
  );
}
