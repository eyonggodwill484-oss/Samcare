'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Calendar,
  HeartHandshake,
  Stethoscope,
  UserCheck,
  Ticket,
  Globe,
  Clock,
} from 'lucide-react';
import LanguageTranslator from './LanguageTranslator';
import Button from './Button';
import ThemeToggler from './ThemeToggler';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let previousScrollY = window.scrollY;
    let accumulatedScrollDelta = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - previousScrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY <= 20) {
        setNavHidden(false);
        accumulatedScrollDelta = 0;
      } else if (
        !mobileMenuOpen &&
        !servicesDropdownOpen &&
        !headerRef.current?.contains(document.activeElement)
      ) {
        if (scrollDelta && Math.sign(scrollDelta) !== Math.sign(accumulatedScrollDelta)) {
          accumulatedScrollDelta = scrollDelta;
        } else {
          accumulatedScrollDelta += scrollDelta;
        }

        if (Math.abs(accumulatedScrollDelta) >= 8) {
          setNavHidden(accumulatedScrollDelta > 0 && currentScrollY > 100);
          accumulatedScrollDelta = 0;
        }
      } else {
        accumulatedScrollDelta = 0;
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen, servicesDropdownOpen]);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/palvelut',
      dropdown: [
        {
          name: 'Home Care',
          href: '/palvelut/kotihoito',
          desc: 'Unhurried daily living support with familiar personal caregivers',
          icon: HeartHandshake,
        },
        {
          name: 'Home Nursing',
          href: '/palvelut/kotisairaanhoito',
          desc: 'Professional nursing care, medications, and recovery support',
          icon: Stethoscope,
        },
        {
          name: 'Personal Assistance',
          href: '/palvelut/henkilokohtainen-apu',
          desc: 'Disability support where you decide and we handle employer duties',
          icon: UserCheck,
        },
        {
          name: 'Service Vouchers',
          href: '/palvelut/palveluseteli',
          desc: 'Municipal service vouchers & public healthcare support',
          icon: Ticket,
        },
      ],
    },
    { name: 'Hygiene Instructions', href: '/laatu-ja-hygienia' },
    { name: 'Price list', href: '/hinnasto' },
    {
      name: 'More',
      href: '/more',
      dropdown: [
        {
          name: 'Appointment',
          href: '/ajanvaraus',
          desc: 'Book a free consultation or a home care visit',
          icon: Calendar,
        },
        {
          name: 'Testimonials',
          href: '/asiakkaat-kertovat',
          desc: 'Client stories and quality feedback',
          icon: HeartHandshake,
        },
        {
          name: 'Contact us',
          href: '/ota-yhteytta',
          desc: 'Get in touch with our care team',
          icon: Phone,
        },
        {
          name: 'Services',
          href: '/palvelut',
          desc: 'Explore our home care and nursing services',
          icon: Stethoscope,
        },
        {
          name: 'Swedish-speaking care',
          href: '/kielet',
          desc: 'Learn about our Swedish-speaking care support',
          icon: Globe,
        },
        {
          name: 'Apply for a job',
          href: '/hae-tyota',
          desc: "Join the Sam's Care care team",
          icon: UserCheck,
        },
      ],
    },
  ];

  return (
    <header
      ref={headerRef}
      inert={navHidden}
      className={`sticky top-0 z-50 w-full bg-white shadow-xs transition-transform duration-300 ease-in-out ${navHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* Top emergency & regional info bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Regional emergency lines */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold uppercase tracking-wider text-[11px]">
              <Clock className="w-3.5 h-3.5" />
              On-Call 24/7:
            </span>
            <a
              href="tel:0505551187"
              className="hover:text-amber-300 transition-colors inline-flex items-center gap-1"
            >
              <span className="text-slate-400">Lohja / Nurses:</span>
              <span className="font-medium">050 555 1187</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href="tel:0447937886"
              className="hover:text-amber-300 transition-colors inline-flex items-center gap-1"
            >
              <span className="text-slate-400">Helsinki / Vantaa / Espoo:</span>
              <span className="font-medium">044 793 7886</span>
            </a>
            <span className="text-slate-600 hidden lg:inline">•</span>
            <a
              href="tel:0447631820"
              className="hover:text-amber-300 transition-colors hidden sm:inline-flex items-center gap-1"
            >
              <span className="text-slate-400">Raasepori:</span>
              <span className="font-medium">044 763 1820</span>
            </a>
          </div>

          {/* Quick email and language translator */}
          <div className="flex items-center gap-3 text-[11px]">
            <a
              href="mailto:info@samscare.fi"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>info@samscare.fi</span>
            </a>
            <div className="h-3 w-px bg-slate-700 hidden sm:block" />
            <LanguageTranslator />
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div
        className={`transition-all duration-200 ${scrolled ? 'py-2.5 bg-white/95 backdrop-blur-md shadow-md' : 'py-4 bg-white'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Sam's Care home page"
          >
            <Image
              src="/Images/Logo.png"
              alt="Sam's Care Oy logo"
              width={280}
              height={90}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.dropdown && pathname.startsWith(link.href));

              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-cyan-700 bg-cyan-50/80 font-semibold'
                          : 'text-slate-700 hover:text-cyan-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Services Dropdown Menu */}
                    <div className="absolute top-full left-0 w-80 pt-2 transition-all duration-200 opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible pointer-events-none group-hover:pointer-events-auto">
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden ring-1 ring-slate-900/5">
                        <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                          {link.name === 'More'
                            ? "More from Sam's Care"
                            : 'Care & Nursing Services'}
                        </div>
                        {link.dropdown.map((subItem) => {
                          const Icon = subItem.icon;
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                isSubActive
                                  ? 'bg-cyan-50 text-cyan-900'
                                  : 'hover:bg-slate-50 text-slate-800'
                              }`}
                            >
                              <div
                                className={`p-2 rounded-lg ${isSubActive ? 'bg-cyan-600 text-white' : 'bg-cyan-50 text-cyan-700'}`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-900">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-slate-500 line-clamp-1">
                                  {subItem.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                        <div className="mt-2 pt-2 border-t border-slate-100 px-3 pb-1">
                          <Link
                            href="/palvelut"
                            className="text-xs font-medium text-cyan-700 hover:text-cyan-800 flex items-center justify-between"
                          >
                            <span>Explore all services</span>
                            <span>&rarr;</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-700 bg-cyan-50/80 font-semibold'
                      : 'text-slate-700 hover:text-cyan-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggler />
            <Button
              href="/ajanvaraus"
              size="sm"
              className="rounded-xl shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Consultation</span>
            </Button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <Button
              href="/ajanvaraus"
              size="sm"
              className="hidden rounded-lg sm:inline-flex"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consultation</span>
            </Button>
            <ThemeToggler />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[96px] z-50 bg-slate-900/60 backdrop-blur-xs flex flex-col justify-end">
          <div className="bg-white max-h-[85vh] overflow-y-auto w-full rounded-t-3xl p-6 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-base font-bold text-slate-900">Menu</span>
                <LanguageTranslator />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={closeMenus}
                className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
              >
                Home
              </Link>

              {/* Mobile services accordion */}
              <div className="flex flex-col">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {servicesDropdownOpen && (
                  <div className="pl-4 pr-2 py-2 flex flex-col gap-1.5 bg-slate-50 rounded-xl my-1">
                    <Link
                      href="/palvelut"
                      onClick={closeMenus}
                      className="text-xs font-semibold text-cyan-700 py-1"
                    >
                      All services overview &rarr;
                    </Link>
                    <Link
                      href="/palvelut/kotihoito"
                      onClick={closeMenus}
                      className="text-sm text-slate-700 py-1 hover:text-cyan-700"
                    >
                      • Home Care
                    </Link>
                    <Link
                      href="/palvelut/kotisairaanhoito"
                      onClick={closeMenus}
                      className="text-sm text-slate-700 py-1 hover:text-cyan-700"
                    >
                      • Home Nursing
                    </Link>
                    <Link
                      href="/palvelut/henkilokohtainen-apu"
                      onClick={closeMenus}
                      className="text-sm text-slate-700 py-1 hover:text-cyan-700"
                    >
                      • Personal Assistance
                    </Link>
                    <Link
                      href="/palvelut/palveluseteli"
                      onClick={closeMenus}
                      className="text-sm text-slate-700 py-1 hover:text-cyan-700"
                    >
                      • Service Vouchers
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/laatu-ja-hygienia"
                onClick={closeMenus}
                className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
              >
                Hygiene Instructions
              </Link>
              <Link
                href="/hinnasto"
                onClick={closeMenus}
                className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
              >
                Price list
              </Link>
              <Link
                href="/more"
                onClick={closeMenus}
                className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-100 font-medium flex items-center justify-between"
              >
                <span>More</span>
                <Globe className="w-4 h-4 text-cyan-600" />
              </Link>
            </div>

            {/* Mobile Call Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Button
                href="/ajanvaraus"
                onClick={closeMenus}
                className="w-full rounded-xl text-center shadow-md"
              >
                Book Free Consultation
              </Button>
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <a
                  href="tel:0505551187"
                  className="py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 font-semibold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Call: Lohja / Nurses</span>
                </a>
                <a
                  href="tel:0447937886"
                  className="py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 font-semibold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Call: Hki / Espoo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
