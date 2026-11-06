import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  HeartHandshake, 
  Stethoscope, 
  UserCheck, 
  Ticket, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";

export const metadata = {
  title: "Services | Sam's Care Oy - Comprehensive Home Care & Nursing in Finland",
  description: "Explore our full range of care services: Home Care, Home Nursing, Personal Assistance, and Municipal Service Vouchers in the Uusimaa region.",
};

export default function PalvelutPage() {
  const serviceList = [
    {
      title: "Home Care",
      href: "/palvelut/kotihoito",
      icon: HeartHandshake,
      color: "from-cyan-600 to-teal-600",
      intro: "Compassionate support to live comfortably and safely at home.",
      details: "Home care is tailored for seniors, substitute care for family caregivers, individuals recovering from illness or surgery, and mental health rehabilitation. We work closely with municipal healthcare teams.",
      items: [
        "Morning routines, dressing, and personal hygiene assistance",
        "Nutritious meal preparation and dining support",
        "Grocery shopping, errands, pharmacy, and outdoor walks",
        "Companionship, meaningful conversation, and mental stimulation",
        "Health monitoring, safety assurance, and family updates"
      ]
    },
    {
      title: "Home Nursing",
      href: "/palvelut/kotisairaanhoito",
      icon: Stethoscope,
      color: "from-blue-600 to-cyan-600",
      intro: "Clinical procedures in the comfort of your own home.",
      details: "Our licensed registered nurses visit your home to carry out medical procedures calmly, respectfully, and with clinical excellence, saving you stressful trips to clinics.",
      items: [
        "Medication dosing, administration, and injections",
        "Wound management, dressing changes, and suture removal",
        "In-home blood draws and rapid lab diagnostics",
        "Blood pressure, glucose, and vital sign monitoring",
        "Catheterization and post-surgical recovery care",
        "Palliative care and compassionate end-of-life support"
      ]
    },
    {
      title: "Personal Assistance",
      href: "/palvelut/henkilokohtainen-apu",
      icon: UserCheck,
      color: "from-teal-600 to-emerald-600",
      intro: "Support under the Disability Services Act where you stay in control.",
      details: "You decide who assists you. Sam's Care acts as the responsible employer partner, taking care of payroll, insurance, and substitute arrangements so you can live independently without paperwork.",
      items: [
        "Assistance with daily activities at home and outdoors",
        "Support in the workplace and educational institutions",
        "Hobbies, cultural events, and social participation",
        "Careful matching of assistant personality and client needs",
        "Always 100% free of charge for eligible clients"
      ]
    },
    {
      title: "Service Vouchers (Palveluseteli)",
      href: "/palvelut/palveluseteli",
      icon: Ticket,
      color: "from-amber-500 to-orange-600",
      intro: "Utilize your municipal wellbeing services county voucher.",
      details: "A service voucher is an official commitment from your municipality that allows you to choose Sam's Care as your private care provider. We guide you through every step at no charge.",
      items: [
        "Approved in Western Uusimaa, Helsinki, and Vantaa-Kerava",
        "Choose high-quality private care with familiar nurses",
        "Any co-payment portion is eligible for a 60% tax deduction",
        "Free voucher advisory and guidance service"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Our care services supporting independent living"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              Comprehensive In-Home Care
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Our Care Services Supporting Independent Living
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Sam&apos;s Care brings a full spectrum of home care, rehabilitation, and clinical nursing to your doorstep. Familiar nurses, unhurried visits, and multilingual support ensure the highest standard of care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {serviceList.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${srv.color} text-white shadow-md`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        {srv.title}
                      </h2>
                      <div className="text-sm font-semibold text-cyan-700">
                        {srv.intro}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {srv.details}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Service includes:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.items.map((it, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/70 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      How to get started?
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      Free Consultation or Inquiry
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Let&apos;s discuss your needs or those of your family. You can purchase services privately or with municipal service vouchers.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href={srv.href}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <span>Read detailed service info</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </Link>

                    <Link
                      href="/ajanvaraus"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <span>Book Free Consultation</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Booking Form Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm />
        </div>
      </section>
    </div>
  );
}
