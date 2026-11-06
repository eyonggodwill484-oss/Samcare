import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Ticket,
  Phone,
  HelpCircle,
  ShieldCheck
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";

export const metadata = {
  title: "Service Voucher | Sam's Care Oy - Use Your Wellbeing Region Service Voucher",
  description: "How to use the service voucher granted for home care and everyday assistance with Sam's Care. We guide and help you activate the voucher for free.",
};

export default function ServiceVoucherPage() {
  const steps = [
    {
      step: "1",
      title: "Municipal service decision",
      desc: "A social worker from your wellbeing region (e.g., West-Uusimaa, Helsinki or Vantaa‑Kerava) assesses your needs and grants a service voucher.",
    },
    {
      step: "2",
      title: "Voucher added to the portal",
      desc: "You receive an electronic voucher in the portal (e.g., Palse.fi or ParastaPalvelua.fi) showing the allocated hours or value.",
    },
    {
      step: "3",
      title: "Choose Sam's Care Oy",
      desc: "Select Sam's Care Oy as your service provider. You can indicate your choice directly in the portal or contact us and we’ll handle it for you.",
    },
    {
      step: "4",
      title: "Service starts at home",
      desc: "We arrange a schedule that fits your wishes and assign a familiar caregiver. The service begins safely and calmly.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Use your municipality service voucher with Sam's Care"
            fill
            className="page-header-image h-full w-full object-cover"
          />
        </div>
        <div className="page-header-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Ticket className="w-3.5 h-3.5 text-amber-300" />
              Officially approved service provider
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Sam&apos;s Care covers services with a service voucher
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Have you received a service voucher from your municipality or wellbeing region for home care or assistance? Choose us as the provider and receive familiar, unhurried caregivers at your home.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Steps Walkthrough */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              How to obtain and use your service voucher
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The process is designed to be as easy as possible for clients and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white font-black text-xl flex items-center justify-center shadow-md">
                    {st.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
                <div className="text-amber-600 text-xs font-semibold pt-2">
                  Step {st.step} / 4 →
                </div>
              </div>
            ))}
          </div>

          {/* FAQ & Information Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="bg-amber-50/60 border border-amber-200/80 rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-lg">
                <HelpCircle className="w-5 h-5 text-amber-600" />
                <span>What is a service voucher?</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                A service voucher is a financial commitment granted by a municipality or wellbeing region. It covers the cost of care, either fully or partially. The advantage is the freedom to choose a trusted, high‑quality provider instead of the public home‑care service.
              </p>
            </div>

            <div className="bg-cyan-50/60 border border-cyan-200/80 rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-2 text-cyan-900 font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-cyan-600" />
                <span>Who can receive a service voucher?</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Anyone with a demonstrated need for regular or temporary home care, personal assistance, or family caregiver support can receive a voucher. If you don’t have a voucher yet, contact your local social services office or ask us for guidance!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Consultation Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm 
            title="Ask about a service voucher or request a caregiver"
            subtitle="Tell us about your situation and voucher details. We’re happy to help."
          />
        </div>
      </section>
    </div>
  );
}
