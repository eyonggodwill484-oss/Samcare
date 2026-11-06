"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  CheckCircle2, 
  Send,
  HeartHandshake,
  Stethoscope,
  UserCheck,
  Ticket
} from "lucide-react";

export default function AjanvarausPage() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("kartoitus");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Espoo",
    preferredDate: "",
    timeSlot: "morning",
    address: "",
    notes: "",
    termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.termsAccepted) {
      alert("Please fill in required fields and accept the service terms.");
      return;
    }
    setSubmitted(true);
  };

  const services = [
    { id: "kartoitus", name: "Free Care Consultation", desc: "0 € – Our head nurse visits your home to assess needs", icon: HeartHandshake },
    { id: "kotihoito", name: "Home Care Visit", desc: "Daily living care, bathing, meals & companionship", icon: HeartHandshake },
    { id: "kotisairaanhoito", name: "Home Nursing Visit", desc: "Wound care, injections, medications & clinical recovery", icon: Stethoscope },
    { id: "verinayte", name: "In-Home Blood Testing", desc: "62 € – Lab samples collected in your living room", icon: Stethoscope },
    { id: "avustaja", name: "Personal Assistance", desc: "Disability support or daily living assistant", icon: UserCheck },
    { id: "palveluseteli", name: "Service Voucher Activation", desc: "Municipal voucher onboarding and setup", icon: Ticket },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] w-full bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Images/Services%20image1.png"
            alt="Care service booking and consultation"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.62)_42%,rgba(15,23,42,0.1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-slate-100 text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-sm">
              <Calendar className="w-3.5 h-3.5 text-cyan-300" />
              Simple & Fast Booking
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#62ddc9] leading-tight">
              Order Care or Book a Free Consultation
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">
              Order the care service you need or schedule a complimentary, non-binding in-home assessment. We always confirm appointments personally by phone.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950">
                Thank you for your order, {formData.name}!
              </h2>
              <p className="text-emerald-800 text-sm sm:text-base max-w-lg mx-auto">
                We have received your booking request. Our head nurse will phone you to confirm your schedule and tailor the visit details.
              </p>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl space-y-8">
              
              {/* Step 1: Select Service */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-cyan-600 text-white text-xs font-bold flex items-center justify-center">
                    1
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Select Care Service</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {services.map((srv) => {
                    const isSelected = service === srv.id;
                    const Icon = srv.icon;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setService(srv.id)}
                        className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                          isSelected
                            ? "bg-cyan-50/80 border-cyan-600 ring-2 ring-cyan-600/20"
                            : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className={`p-2 rounded-xl ${isSelected ? "bg-cyan-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-600" />}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900">{srv.name}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{srv.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Date & Time details */}
              <form onSubmit={handleSubmit} className="space-y-6 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-cyan-600 text-white text-xs font-bold flex items-center justify-center">
                    2
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Preferred Time & Contact Details</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Time of Day
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    >
                      <option value="morning">Morning (08:00 – 12:00)</option>
                      <option value="afternoon">Afternoon (12:00 – 16:00)</option>
                      <option value="evening">Evening (16:00 – 21:00)</option>
                      <option value="flexible">Flexible / Any time</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Client / Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First and last name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
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
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Municipality in Finland *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                    >
                      <option value="Espoo">Espoo</option>
                      <option value="Helsinki">Helsinki</option>
                      <option value="Vantaa">Vantaa</option>
                      <option value="Lohja">Lohja</option>
                      <option value="Raasepori">Raasepori</option>
                      <option value="Hanko">Hanko</option>
                      <option value="Inkoo">Inkoo</option>
                      <option value="Siuntio">Siuntio</option>
                      <option value="Muu">Other Uusimaa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Street Address & Door Code (if applicable)
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. Ansatie 18 B 4, 02940 Espoo"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Care Requirements or Client Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the client's current condition or desired support..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm outline-hidden resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={formData.termsAccepted}
                    onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                    className="w-4 h-4 mt-0.5 rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <label htmlFor="terms" className="text-xs text-slate-600 leading-relaxed">
                    I have read and agree to Sam&apos;s Care service terms and privacy policy. We will confirm all order details by phone before care commences.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-cyan-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Booking / Consultation Request</span>
                </button>
              </form>

            </div>
          )}

        </div>
      </section>
    </div>
  );
}
