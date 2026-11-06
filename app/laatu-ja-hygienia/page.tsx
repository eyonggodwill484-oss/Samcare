import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Quality & Hygiene | Sam's Care Oy - Patient Safety and Self-Monitoring",
  description: "Sam's Care Oy hygiene guidelines, patient safety, infection control, self-monitoring plan and inspection reports.",
};

export default function LaatuJaHygieniaPage() {
  const hygienePoints = [
    {
      title: "Careful hand hygiene",
      desc: "Disinfect hands before and after every client contact and treatment. The hand sanitizer is always carried by the caregiver.",
    },
    {
      title: "Appropriate protective equipment",
      desc: "Disposable gloves, surgical facemasks, visors and protective clothing as needed to protect both the client and the caregiver.",
    },
    {
      title: "Clean work order",
      desc: "Work proceeds from clean to dirty. Aseptic working methods in medication distribution, wound care and catheter care.",
    },
  ];

  const documents = [
    {
      title: "Self-monitoring plan – Sam's Care Oy",
      desc: "Official self-monitoring plan in accordance with the Social Welfare Act and the Health Care Act to ensure quality and patient safety.",
      type: "PDF Report",
    },
    {
      title: "Helsinki city home care inspection report",
      desc: "Official inspection report from the municipal authority on the quality and compliance of Sam's Care operations.",
      type: "Inspection Record",
    },
    {
      title: "Personal assistance self-monitoring plan",
      desc: "Quality plan and ethical guidelines for support services under the Disability Services Act.",
      type: "Official Document",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Hygiene guidance and client safety"
            fill
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Quality, Hygiene & Self-Monitoring
            </h1>
            <p className="mx-auto max-w-2xl text-slate-100 text-base sm:text-lg leading-relaxed">
              Hygiene is an essential part of client and patient safety as well as occupational safety. We follow precise standard infection prevention precautions at every home visit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <Image
                src="/Images/Hygiene.png"
                alt="Home care hygiene guidance for care clients"
                width={1200}
                height={900}
                priority
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>

            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-[#62ddc9]/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0b7a68]">
                Hygiene instructions for home care
              </span>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Sam&apos;s Care Oy
              </h2>
              <h3 className="text-xl font-bold text-slate-800 sm:text-2xl">
                Hygiene practices during home visits for all clients
              </h3>
              <div className="space-y-4 text-slate-700">
                <p className="text-base leading-relaxed">
                  <span className="font-bold text-slate-900">STANDARD PRECAUTIONS</span> in care procedures.
                </p>
                <p className="text-base leading-relaxed">
                  Hygiene is part of patient/client safety and occupational safety.
                </p>
                <p className="text-base leading-relaxed text-slate-600">
                  Basic level of infection control, which cuts off the transmission of microbes in normal home care and assistance situations and, for example, during a pandemic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
            <div className="space-y-7 text-slate-700">
              <div>
                <h3 className="text-xl font-black uppercase tracking-[0.08em] text-slate-900 sm:text-2xl">
                  Standard precautions in care procedures
                </h3>
                <p className="mt-3 text-base leading-relaxed">
                  All customer contacts, including ESBL, MRSA carriers, known carriers of blood viruses (hepatitis B and C and HIV) and when handling blood or other secretions (vomit, urine, feces, skin dander, sweat and saliva).
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Blood precautions are included in standard precautions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Hand hygiene</h4>
                <p className="mt-3 text-base leading-relaxed">
                  To ensure successful hand hygiene, customers must not wear wristbands, bracelets, active wristbands, rings, artificial or gel nails, long nails or nail polish. For the same reason, the sleeves of work clothes must be short or rolled up to the forearm.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Take care of the good condition of the skin on your hands. Wash your hands with liquid soap or a washcloth at the beginning of work and whenever your hands are dirty, when the customer has diarrhea and/or vomiting, wash your hands with water and liquid soap and dry them on kitchen paper (not on the customer&apos;s hand towel) or clean them with a washcloth after removing protective gloves before disinfection.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Hand disinfection with hand sanitizer</h4>
                <p className="mt-3 text-base leading-relaxed">
                  Disinfect hands with hand sanitizer when the customer arrives and leaves home, and always before performing cleaning tasks: handling and distribution of medications, handling of food, before and after wound care, handling of diapers, urinary catheters, drains, etc., before putting on and after taking off protective gloves and other protective equipment.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Take enough hand sanitizer, at least 2–3 squeezes (3–5 ml), or as much as will fit in your “hand cup”. Apply the hand sanitizer by massaging it all over your hands: fingertips, thumbs, between your fingers, outer edges of your hands, and palms, paying attention to the life lines and creases in your wrists. Massage until your hands are dry. Do not wipe the hand sanitizer off your hands. It takes about 30 seconds to apply effective hand sanitizer.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Use of protective gloves</h4>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed">
                  <li>When handling wounds, broken skin, mucous membranes, blood, urine, feces and other secretions, dirty laundry.</li>
                  <li>Wound care, diaper changing, handling urinary catheter bags or drains, handling disinfectants or wipes.</li>
                  <li>Whenever you are in physical contact with a client being treated with contact precautions and their immediate environment.</li>
                </ul>
                <p className="mt-3 text-base leading-relaxed">
                  Protective gloves are changed when moving from a dirty work phase to a clean one and when gloves are damaged. Protective gloves are removed as soon as they are no longer needed and hands are disinfected.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Use of other protective equipment</h4>
                <p className="mt-3 text-base leading-relaxed">
                  Disposable plastic apron when there is a risk of staining work clothes with secretions. Disposable plastic apron with sleeves for frequent customer washing and close care situations, as well as for scabies and other parasite removal treatments and for clients treated with contact precautions.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Disposable mouth and nose mask when there is a risk of blood or other secretions splashing, when treating wounds and when treating a coughing/sneezing client. If a continuous face shield is used, it is disinfected after each customer visit. Shoe covers are used on every visit. Only your own shoe covers are used, which are discarded after all visits for the day. Protective equipment is removed immediately after use and hands are disinfected.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Prevention of blood accidents</h4>
                <p className="mt-3 text-base leading-relaxed">
                  Only exposures to blood where the blood can cause infection in the employee are considered blood accidents, i.e. a cut or puncture from a bloody needle or other bloody object, blood getting on the mucous membranes of the mouth or the conjunctiva of the eye, and blood getting on ulcerated or eczematous skin.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Local treatment is always carried out immediately. Mucous membrane splashes are rinsed with plenty of running water. Puncture or incision areas are also cleaned with plenty of running water and immediately afterwards with 80% alcohol (A12T Dilutus80%). The wound must not be squeezed. The alcohol bath is left on the skin for two minutes. In every case of blood loss and exposure, healthcare is contacted, from which an infectious disease specialist is consulted if necessary.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Treatment and research equipment, waste sorting and processing</h4>
                <p className="mt-3 text-base leading-relaxed">
                  Disposable instruments are used. Treatment and examination equipment: disinfection after use. Blood pressure monitor and cuff, stethoscope, etc. instruments are disinfected by wiping with rubbing alcohol, a disinfectant wipe or A12T 80% ethanol before use on the next client. If the customer has access to healthcare equipment such as a suction device, supplies for administering supplemental oxygen, and an O2 bottle, there are instructions for using and disinfecting them for each device. Follow the instructions.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Hypodermic needles, curettes and other sharp instruments are placed directly in the sharps container after use. The waste containers are delivered to a local collection point, from where they are taken for proper disposal. Disposable care equipment and supplies, as well as used protective equipment, are placed in a waste bag after use. Infectious waste is disposed of as hazardous waste according to separate instructions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Other things to remember during a home visit</h4>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed">
                  <li>The protective equipment is collected in plastic bags with clean, disinfected hands.</li>
                  <li>Always remove the protective equipment from the bag with disinfected hands.</li>
                  <li>Clean protective equipment that has not been contaminated from previous customer visits should be provided for each customer.</li>
                  <li>At home, a towel from a washcloth package is used to wash hands and to clean surfaces where needed.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Supervision & Documents */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
              Public reports & supervision
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Legal self-monitoring and inspection reports
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Sam&apos;s Care Oy operates with full transparency. We welcome feedback and continuously improve our operations in line with official guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md flex items-start justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-cyan-700 text-xs font-bold uppercase tracking-wider">
                    <FileText className="w-4 h-4" />
                    <span>{doc.type}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">{doc.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{doc.desc}</p>
                </div>
                <div className="shrink-0 p-3 rounded-2xl bg-slate-100 text-slate-500">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
