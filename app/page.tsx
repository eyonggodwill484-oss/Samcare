import React from 'react';
import Image from 'next/image';
import { Globe, ArrowRight } from 'lucide-react';
import QuickConsultationForm from '@/components/QuickConsultationForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSlideshow from '@/components/HeroSlideshow';
import HomeHeroText from '@/components/HomeHeroText';
import ScrollReveal from '@/components/ScrollReveal';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[610px] w-full overflow-hidden bg-[#102c3b] sm:min-h-[660px] lg:min-h-[700px]">
        <div className="absolute inset-0">
          <HeroSlideshow />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(5,24,36,0.88)_0%,rgba(5,24,36,0.72)_48%,rgba(5,24,36,0.2)_100%)]" />

        <div className="relative z-20 mx-auto flex min-h-[610px] w-full max-w-7xl items-center px-5 py-16 sm:min-h-[660px] sm:px-8 lg:min-h-[700px] lg:px-12">
          <HomeHeroText />
        </div>
      </section>

      <section
        aria-label="Languages we serve in"
        className="bg-[#045184] text-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:px-8 sm:py-8 md:flex-row md:items-center lg:px-12">
          <div className="flex shrink-0 items-center gap-3 md:w-[250px]">
            <Globe aria-hidden="true" className="size-7 shrink-0 text-[#62ddc9]" />
            <p className="text-base font-semibold sm:text-lg md:max-w-[185px]">
              We offer our services in
            </p>
          </div>
          <div className="language-marquee min-w-0 flex-1" aria-hidden="false">
            <div className="language-marquee__track">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  className="language-marquee__group"
                  aria-hidden={copy === 1 ? 'true' : undefined}
                >
                  {[
                    { name: 'Finnish', flag: '🇫🇮' },
                    { name: 'Swedish', flag: '🇸🇪' },
                    { name: 'English', flag: '🇬🇧' },
                    { name: 'French', flag: '🇫🇷' },
                    { name: 'Spanish', flag: '🇪🇸' },
                  ].map(({ name, flag }) => (
                      <li
                        key={name}
                        className="inline-flex shrink-0 items-center gap-4 whitespace-nowrap px-6 text-lg font-semibold text-white/95 sm:text-xl"
                      >
                        <span aria-hidden="true" className="text-3xl leading-none sm:text-4xl">
                          {flag}
                        </span>
                        {name}
                      </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-[0_16px_40px_rgba(15,39,56,0.12)]"
              direction="left"
            >
              <Image
                src="/Images/hero-1.png"
                alt="Caregiver and client talking together at home"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </ScrollReveal>

            <ScrollReveal
              className="flex flex-col items-start lg:max-w-[560px]"
              direction="right"
              delay={120}
            >
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
                Care that fits your life
              </span>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.035em] text-slate-900 sm:text-5xl">
                Services
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Welcome to Sam&apos;s Care&apos;s diverse range of social and
                health services. Sam&apos;s Care brings a comprehensive range of
                care, rehabilitation and support services to the customer&apos;s
                home. We also offer reception services and tailored solutions to
                municipalities and companies. You can apply for our services
                directly or through your own municipality with a service voucher
                or as a purchase service. Contact us and together we will find a
                flexible service solution for your individual situation.
              </p>
              <Button
                href="/palvelut"
                className="mt-7 rounded-md"
              >
                Explore our services
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION 2: DOMICILIARY CARE */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content text */}
            <ScrollReveal
              className="lg:col-span-5 space-y-6"
              direction="left"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider">
                Domiciliary care
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                Home care that supports everyday life
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Home care is suitable not only for the elderly but also for
                substitute caregivers, people in mental health and substance
                abuse rehabilitation, people with disabilities, and those
                recovering from illness or surgery. We cooperate with municipal
                home care.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                A home is precious, which is why our service aims to support
                customers living at home and coping with everyday life through
                a diverse range of care and rehabilitation services. Sam&apos;s
                Care home care services are tailored to each customer&apos;s
                individual needs, and our professional caregivers are available
                24/7, for both temporary and long-term needs. Contact us and we
                will find a service solution that is right for your situation.
              </p>
              <p className="text-sm font-semibold text-slate-500">
                Sam&apos;s Care Ltd
              </p>
              <Button href="/ota-yhteytta" className="rounded-md">
                Contact us
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            </ScrollReveal>

            {/* Visual Image */}
            <ScrollReveal
              className="relative lg:col-span-7"
              direction="right"
              delay={140}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_28px_70px_-18px_rgba(4,81,132,0.42)] ring-1 ring-cyan-800/10 group sm:aspect-[16/10]">
                <Image
                  src="/Images/personalcare.png"
                  alt="Caregiver providing home care to an older adult"
                  fill
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#102c3b] text-white">
        <Image
          src="/Images/belowfooter.png"
          alt="A caregiver spending time with a client at home"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#062235]/80 via-[#062235]/45 to-[#062235]/20"
        />
        <ScrollReveal className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24" direction="left">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
              Familiar caregivers, unhurried visits
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Care that makes time for you
            </h2>
            <p className="text-base leading-relaxed text-white/90 sm:text-lg">
              Two of the things home care clients value most are familiar
              caregivers and visits that aren&apos;t rushed. Your regular
              caregiver has time not only to help, but also to sit down and
              share a conversation.
            </p>
            <p className="text-base leading-relaxed text-white/90 sm:text-lg">
              Our nurses don&apos;t hurry off to the next appointment. Spending
              time with you and talking through the small and important things
              are part of the care we provide. Many clients tell us how much
              they appreciate longer, more relaxed visits.
            </p>
            <p className="text-base leading-relaxed text-white/90 sm:text-lg">
              We want you to feel cared for and your family to feel confident
              that you&apos;re in the hands of trusted professionals. With
              reliable, familiar support, there&apos;s time to focus on what
              matters to you.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* REAL TESTIMONIALS */}
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      {/* FREE CONSULTATION ASSESSMENT & CONTACT BOOKING SECTION */}
      <section
        className="py-20 bg-slate-50 relative overflow-hidden"
        id="kartoitus"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Consultation Details */}
            <ScrollReveal className="lg:col-span-5 space-y-6" direction="left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-semibold uppercase tracking-wider">
                Getting Started is Simple
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                Complimentary In-Home Care Consultation
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Care needs can arise unexpectedly following surgery or develop
                gradually with age. Our free assessment visit is completely
                non-binding:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">
                      Meeting & Needs Assessment:
                    </strong>
                    <span className="text-slate-600 text-xs sm:text-sm">
                      Our head nurse visits your home to listen to your
                      preferences, daily routines, and health status.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">
                      Personalized Care Plan:
                    </strong>
                    <span className="text-slate-600 text-xs sm:text-sm">
                      We provide a transparent proposal outlining visit content,
                      schedule, and your designated personal nurse.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">
                      Vouchers & Tax Benefits Guidance:
                    </strong>
                    <span className="text-slate-600 text-xs sm:text-sm">
                      We walk you through municipal subsidies and make all costs
                      clear from day one.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct call banner */}
              <div className="p-5 rounded-2xl bg-cyan-900 text-white flex items-center justify-between gap-4 shadow-lg">
                <div>
                  <div className="text-xs text-cyan-200 uppercase font-semibold">
                    Prefer to speak with a nurse immediately?
                  </div>
                  <div className="text-lg font-extrabold text-white mt-0.5">
                    050 555 1187
                  </div>
                </div>
                <a
                  href="tel:0505551187"
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
                >
                  Call Now
                </a>
              </div>
            </ScrollReveal>

            {/* Consultation Form Component */}
            <div className="lg:col-span-7">
              <QuickConsultationForm
                title="Book a Free Care Consultation"
                subtitle="Fill out the form and our head nurse will get back to you within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL OFFICES & COVERAGE (using below-footer.png background) */}
      <section className="relative overflow-hidden bg-[#045184] py-20 text-white">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/Images/below-footer.png"
            alt="Sam's Care service area in Uusimaa Finland"
            fill
            className="object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/55 via-[#045184]/35 to-slate-950/60"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
              Service Areas in Finland
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Serving the Entire Uusimaa Region
            </h2>
            <p className="text-slate-300 text-base">
              Our regional offices and mobile nursing teams provide
              comprehensive in-home care in the following municipalities:
            </p>
          </ScrollReveal>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 text-center sm:grid-cols-3">
            {[
              { city: 'Lohja', tel: '050 555 1187' },
              { city: 'Helsinki', tel: '044 793 7886' },
              { city: 'Hanko & Inkoo', tel: '044 763 1820' },
            ].map((loc, i) => (
              <ScrollReveal key={loc.city} delay={i * 100}>
                <div className="bg-slate-800/80 backdrop-blur-xs p-5 rounded-2xl border border-slate-700/80 hover:border-cyan-500/50 transition-all">
                  <div className="font-bold text-white text-base mb-1">
                    {loc.city}
                  </div>
                  {loc.tel && (
                    <a
                      href={`tel:${loc.tel.replace(/\s+/g, '')}`}
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-medium block"
                    >
                      {loc.tel}
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
