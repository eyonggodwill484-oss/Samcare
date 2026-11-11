"use client";

import React, { useEffect, useState, useRef } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay: boolean; includedLanguages?: string },
          elementId: string
        ) => void;
      };
    };
  }
}

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: "en", name: "Englanti", nativeName: "Englanti", flag: "🇬🇧" },
  { code: "fi", name: "Suomi", nativeName: "Suomi", flag: "🇫🇮" },
  { code: "sv", name: "Ruotsi", nativeName: "Ruotsi", flag: "🇸🇪" },
  { code: "fr", name: "Ranska", nativeName: "Ranska", flag: "🇫🇷" },
  { code: "es", name: "Espanja", nativeName: "Espanja", flag: "🇪🇸" },
  { code: "ru", name: "Venäjä", nativeName: "Venäjä", flag: "🇷🇺" },
  { code: "et", name: "Viro", nativeName: "Viro", flag: "🇪🇪" },
  { code: "uk", name: "Ukraina", nativeName: "Ukraina", flag: "🇺🇦" },
  { code: "ar", name: "Arabia", nativeName: "Arabia", flag: "🇦🇪" },
];

function applyLanguageCookie(langCode: string) {
  if (typeof document === "undefined") return;
  if (langCode === "fi") {
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${window.location.hostname}; path=/;`;
    window.location.reload();
  } else {
    const cookieValue = `/fi/${langCode}`;
    document.cookie = `googtrans=${cookieValue}; path=/`;
    document.cookie = `googtrans=${cookieValue}; domain=.${window.location.hostname}; path=/`;

    const selectElem = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  }
}

export default function LanguageTranslator() {
  const [currentLang, setCurrentLang] = useState<string>(() => {
    if (typeof document === "undefined") return "fi";
    const match = document.cookie.match(/googtrans=\/([^/]+)\/([^;]+)/);
    return match && match[2] ? match[2] : "fi";
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLanguage = document.cookie.match(/googtrans=\/([^/]+)\/([^;]+)/)?.[2];
    if (
      savedLanguage &&
      !LANGUAGES.some((language) => language.code === savedLanguage)
    ) {
      applyLanguageCookie("fi");
      return;
    }

    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "fi",
              autoDisplay: false,
              includedLanguages: "en,fi,sv,fr,es,ru,et,uk,ar",
            },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    applyLanguageCookie(langCode);
  };

  const selectedLanguage =
    LANGUAGES.find((l) => l.code === currentLang) ||
    LANGUAGES.find((l) => l.code === "fi") ||
    LANGUAGES[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden container for Google Translate widget */}
      <div id="google_translate_element" className="hidden" />

      {/* Button to open dropdown */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/80 text-xs font-medium transition-all shadow-xs"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Valitse kieli"
      >
        <span className="text-sm leading-none">{selectedLanguage.flag}</span>
        <span className="font-semibold">{selectedLanguage.nativeName}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-2xl border border-slate-200 py-2 z-50 ring-1 ring-slate-900/10 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3 text-cyan-600" />
              Valitse kieli
            </span>
            <span className="text-[9px] text-cyan-700 font-normal">Sam&apos;s Care</span>
          </div>

          <div className="max-h-64 overflow-y-auto py-1 divide-y divide-slate-50">
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                    isSelected
                      ? "bg-cyan-50 text-cyan-900 font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-medium">{lang.nativeName}</span>
                      <span className="text-[10px] text-slate-400">{lang.name}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-cyan-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          <div className="px-3 pt-2 pb-1 border-t border-slate-100 text-[10px] text-slate-500 text-center">
            Kielet: FI • EN • SV • FR • ES
          </div>
        </div>
      )}
    </div>
  );
}
