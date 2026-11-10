'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuCloseButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

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

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    mobileMenuCloseButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements =
        mobileMenuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const toggleButton = menuButtonRef.current;

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      toggleButton?.focus();
    };
  }, [mobileMenuOpen]);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Etusivu', href: '/' },
    {
      name: 'Palvelut',
      href: '/palvelut',
      dropdown: [
        {
          name: 'Kotihoito',
          href: '/palvelut/kotihoito',
          desc: 'Rauhallista arjen tukea tutulta hoitajalta',
          icon: HeartHandshake,
        },
        {
          name: 'Kotisairaanhoito',
          href: '/palvelut/kotisairaanhoito',
          desc: 'Ammatillista hoitoa, lääkkeidenhallintaa ja kuntoutusta',
          icon: Stethoscope,
        },
        {
          name: 'Henkilökohtainen apu',
          href: '/palvelut/henkilokohtainen-apu',
          desc: 'Tukipalvelu, jossa päätät ja me hoidamme työnantajavelvollisuudet',
          icon: UserCheck,
        },
        {
          name: 'Palveluseteli',
          href: '/palvelut/palveluseteli',
          desc: 'Kuntien palvelusetelit ja julkisen terveydenhuollon tuki',
          icon: Ticket,
        },
      ],
    },
    { name: 'Laatu ja hygienia', href: '/laatu-ja-hygienia' },
    { name: 'Hinnasto', href: '/hinnasto' },
    {
      name: 'Lisää',
      href: '/more',
      dropdown: [
        {
          name: 'Ajanvaraus',
          href: '/ajanvaraus',
          desc: 'Varaa maksuton kartoituskäynti tai kotikäynti',
          icon: Calendar,
        },
        {
          name: 'Asiakkaat kertovat',
          href: '/asiakkaat-kertovat',
          desc: 'Asiakaskertomuksia ja laatupalaute',
          icon: HeartHandshake,
        },
        {
          name: 'Ota yhteyttä',
          href: '/ota-yhteytta',
          desc: 'Ota yhteyttä hoitotiimiimme',
          icon: Phone,
        },
        {
          name: 'Projektit',
          href: '/palvelut',
          desc: 'Tutustu kotihoito- ja hoivapalveluihimme',
          icon: Stethoscope,
        },
        {
          name: 'Ruotsinkielinen hoito',
          href: '/kielet',
          desc: 'Lue ruotsinkielisestä hoitotuestamme',
          icon: Globe,
        },
        {
          name: 'Hae työtä',
          href: '/hae-tyota',
          desc: 'Liity Sam&apos;s Care -hoitotiimiin',
          icon: UserCheck,
        },
      ],
    },
  ];

  return (
    <header
      ref={headerRef}
      inert={navHidden}
      className={`sticky top-0 z-50 w-full bg-white shadow-xs transition-transform duration-300 ease-in-out ${navHidden && !mobileMenuOpen ? '-translate-y-full' : ''}`}
    >
      {/* Top emergency & regional info bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Quick email and language translator */}
          <div className="ml-auto flex items-center gap-3 text-[11px]">
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
            aria-label="Sam's Caren etusivu"
          >
            <Image
              src="/Images/Logo.png"
              alt="Sam's Care Oy:n logo"
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
                          {link.name === 'Lisää'
                            ? "Lisää Sam's Caresta"
                            : 'Hoiva- ja hoitopalvelut'}
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
                            <span>Tutustu kaikkiin palveluihin</span>
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
              <span>Varaa kartoitus</span>
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
              <span>Kartoitus</span>
            </Button>
            <ThemeToggler />
            <button
              ref={menuButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
              aria-label={mobileMenuOpen ? 'Sulje valikko' : 'Avaa valikko'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
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
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
          className="mobile-menu-backdrop xl:hidden fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-xs flex justify-end touch-manipulation"
          onClick={closeMenus}
        >
          <motion.div
            ref={mobileMenuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            initial={{ x: shouldReduceMotion ? 0 : '100%' }}
            animate={{ x: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.24,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            onClick={(event) => event.stopPropagation()}
            className="mobile-menu-panel bg-white h-full max-h-[100dvh] w-[min(88vw,24rem)] overflow-y-auto overscroll-contain rounded-l-3xl p-6 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span id="mobile-menu-title" className="text-base font-bold text-slate-900">Valikko</span>
                <LanguageTranslator />
              </div>
              <button
                ref={mobileMenuCloseButtonRef}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Sulje valikko"
                className="p-2 rounded-full text-slate-400 hover:text-slate-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
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
                Etusivu
              </Link>

              {/* Mobile services accordion */}
              <div className="flex flex-col">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
                >
                  <span>Palvelut</span>
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
                      Kaikki palvelut &rarr;
                    </Link>
                    <Link
                      href="/palvelut/kotihoito"
                      onClick={closeMenus}
                      className="text-sm text-slate-700 py-1 hover:text-cyan-700"
                    >
                      • Kotihoito
                    </Link>
                    <Link
                      href="/palvelut/kotisairaanhoito"
                      onClick={closeMenus}
                      className="text-sm text-slate-700 py-1 hover:text-cyan-700"
                    >
                      • Kotisairaanhoito
                    </Link>
                    <Link
                      href="/palvelut/henkilokohtainen-apu"
                      onClick={closeMenus}
                      className="text-sm text-slate-700 py-1 hover:text-cyan-700"
                    >
                      • Henkilökohtainen apu
                    </Link>
                    <Link
                      href="/palvelut/palveluseteli"
                      onClick={closeMenus}
                      className="text-sm text-slate-700 py-1 hover:text-cyan-700"
                    >
                      • Palveluseteli
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/laatu-ja-hygienia"
                onClick={closeMenus}
                className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
              >
                Laatu ja hygienia
              </Link>
              <Link
                href="/hinnasto"
                onClick={closeMenus}
                className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
              >
                Hinnasto
              </Link>
              <Link
                href="/more"
                onClick={closeMenus}
                className="py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-100 font-medium flex items-center justify-between"
              >
                <span>Lisää</span>
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
                Varaa kartoitus
              </Button>
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <a
                  href="tel:0505551187"
                  className="py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 font-semibold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Soita: Lohja / hoitajat</span>
                </a>
                <a
                  href="tel:0447937886"
                  className="py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 font-semibold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Soita: Helsinki / Espoo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
