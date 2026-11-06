import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Sparkles,
  Briefcase,
  GraduationCap,
  Palmtree,
  Home
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";

export const metadata = {
  title: "Personal Assistance | Sam's Care Oy - You Decide, We Handle Employer Responsibilities",
  description: "Personal assistance according to the Disability Services Act. Choose your own assistant without employer concerns. The service is always 100% free for the client.",
};

export default function PersonalAssistancePage() {
  const useCases = [
    { title: "Everyday chores at home", desc: "Help with cooking, cleaning, dressing and household tasks.", icon: Home },
    { title: "Work and employment", desc: "Assistant accompanies during workday, commutes and streamlines job tasks.", icon: Briefcase },
    { title: "Study and education", desc: "Support in lectures, note‑taking and school daily life.", icon: GraduationCap },
    { title: "Leisure and hobbies", desc: "Assistance with hobbies, theatre, culture, sports and travel.", icon: Palmtree },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Personal assistance and independent living"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Personal assistance under the Disability Services Act
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Personal assistance, where you decide
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              With our help you decide who enters your door tomorrow. Sam&apos;s Care acts as an experienced employer on your behalf, so you don&apos;t have to worry about payroll, taxes or substitute arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why choose Sam&apos;s Care for personal assistance?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A disabled person can sometimes find the traditional employer model burdensome. We remove the bureaucracy and make obtaining an assistant effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-slate-900">The right person in the right place</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We find a personal assistant that matches your preferences and chemistry. You always get to interview and approve the assistant before work starts.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold text-slate-900">No employer worries or paperwork</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We take care of employment contracts, payroll, holiday pay, occupational health and accident insurance. You only direct daily activities.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold text-slate-900">Reliable substitute arrangements</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                If your assistant falls ill or takes leave, we quickly provide a trained substitute so your day continues without interruption.
              </p>
            </div>
          </div>

          {/* Where can assistant help */}
          <div className="pt-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              In what areas can a personal assistant help?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((uc, i) => {
                const Icon = uc.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-slate-900">{uc.title}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{uc.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm 
            title="Request personal assistance"
            subtitle="We help you with the service decision and assist in choosing an assistant at no charge."
          />
        </div>
      </section>
    </div>
  );
}
