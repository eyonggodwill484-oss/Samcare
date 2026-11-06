import React from "react";
import Image from "next/image";
import { 
  Phone, 
  MapPin
} from "lucide-react";
import QuickConsultationForm from "@/components/QuickConsultationForm";

export const metadata = {
  title: "Contact Us & On-Call Numbers | Sam's Care Oy - Espoo, Lohja, Helsinki",
  description: "Contact Sam's Care Oy: Lohja 050 555 1187, Helsinki/Vantaa/Espoo 044 793 7886, Raasepori 044 763 1820. Email: info@samscare.fi.",
};

export default function OtaYhteyttaPage() {
  const branches = [
    {
      city: "Lohja Main Office",
      address: "Laurinkatu 51, 08100 Lohja",
      tel: "050 555 1187",
      email: "info@samscare.fi",
      role: "Lohja, Vihti, Karkkila & Clinical Nurses",
    },
    {
      city: "Espoo Regional Office",
      address: "Ansatie 18, 02940 Espoo",
      tel: "044 793 7886",
      email: "info@samscare.fi",
      role: "Espoo, Kauniainen, Kirkkonummi",
    },
    {
      city: "Helsinki & Vantaa Team",
      address: "In-home mobile nursing teams",
      tel: "044 793 7886",
      email: "info@samscare.fi",
      role: "Helsinki, Vantaa, and Central Uusimaa",
    },
    {
      city: "Raasepori Regional Team",
      address: "Swedish-language care & regional service",
      tel: "044 763 1820",
      email: "info@samscare.fi",
      role: "Raasepori (Tammisaari, Karjaa), Hanko, Inkoo",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Contact Sam's Care"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Phone className="w-3.5 h-3.5 text-cyan-300" />
              We Are Here For You
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Contact Us – Care is Always Nearby
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Have questions about our services, want to book a complimentary care evaluation, or wish to speak directly with a nurse? We are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Emergency & Direct Numbers */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Regional On-Call Lines
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Direct Phone Lines by Area
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((b, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-cyan-500/50 transition-all"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{b.city}</h3>
                    <div className="text-xs text-slate-500">{b.role}</div>
                  </div>
                  <div className="text-xs text-slate-600">{b.address}</div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <a
                    href={`tel:${b.tel.replace(/\s+/g, '')}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm shadow-xs transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{b.tel}</span>
                  </a>
                  <a
                    href={`mailto:${b.email}`}
                    className="w-full text-center text-xs text-slate-500 hover:text-cyan-700 block transition-colors"
                  >
                    {b.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickConsultationForm 
            title="Send Us a Message or Request a Consultation"
            subtitle="Fill out your details below and our head nurse will call you back promptly."
          />
        </div>
      </section>
    </div>
  );
}
