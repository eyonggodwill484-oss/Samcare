import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Activity,
  HeartPulse,
  Pill,
  Syringe,
  FileCheck
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";

export const metadata = {
  title: "Home Nursing | Sam's Care Oy - Professional In‑Home Healthcare",
  description: "Professional in‑home nursing: medication administration, injections, wound care, lab samples, and post‑surgery recovery support in Uusimaa.",
};

export default function KotisairaanhoitoPage() {
  const procedures = [
    { title: "Medication administration", desc: "Medication dispensing, prescription renewal, pharmacy errands and regular dosing.", icon: Pill },
    { title: "Injections and shots", desc: "Insulin, Klexane/anticoagulants, B12 vitamin injections and vaccinations safely at home.", icon: Syringe },
    { title: "Advanced wound care", desc: "Management of chronic and surgical wounds, dressing changes and healing monitoring.", icon: ShieldCheck },
    { title: "Home lab sampling", desc: "Blood and rapid tests (INR, CRP, glucose) without waiting at a laboratory.", icon: Activity },
    { title: "Suture & stitch removal", desc: "Pain‑free removal of post‑surgery stitches and sutures at home.", icon: FileCheck },
    { title: "Catheter & tube feeding", desc: "Urinary catheter changes and flushing as well as PEG tube care performed by experienced staff.", icon: HeartPulse },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Home nursing in a familiar environment"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Stethoscope className="w-3.5 h-3.5 text-cyan-300" />
              Licensed nurses & caregivers
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Home Nursing – Expertise & safety in your own home
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Avoid unnecessary trips to health centers or hospitals. Sam&apos;s Care&apos;s experienced nurses come to you and perform the required medical procedures in a familiar and comforting home environment.
            </p>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Comprehensive in‑home medical procedures
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              In addition to basic care we perform advanced procedures and collaborate closely with the treating physician and specialist services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-lg transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Post‑surgery and Palliative Care */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
                Post‑surgery recovery & Palliative care
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Support for the most vulnerable situations
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our professional nurses assist with post‑surgery care so the client can focus on recovery at home without additional strain.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We also provide compassionate palliative care, offering pain relief and respectful support for patients and their families.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Continuity and familiar caregiver create safety</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Effective pain and symptom monitoring & medication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Emotional and practical support for relatives</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">
                Home blood sampling without waiting
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We will come in the morning to collect physician‑ordered lab and blood samples at home. Price €62 per visit (no extra fees). Samples are delivered directly to the laboratory for analysis.
              </p>
              <div className="pt-2">
                <Link
                  href="/ajanvaraus"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
                >
                  Order home blood sampling
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm 
            title="Request home nursing"
            subtitle="Tell us the desired procedure or timing. Our nurse will contact you."
          />
        </div>
      </section>
    </div>
  );
}
