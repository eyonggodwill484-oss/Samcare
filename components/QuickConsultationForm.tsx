'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Phone,
} from 'lucide-react';
import Button from '@/components/Button';
import ScrollReveal from '@/components/ScrollReveal';
import { createMailtoLink } from '@/lib/mailto';

export default function QuickConsultationForm({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Espoo',
    service: 'home-care',
    message: '',
    consent: false,
  });

  const updateField = <K extends keyof typeof formData>(
    key: K,
    value: (typeof formData)[K],
  ) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  const mailtoLink = createMailtoLink(
    'Hoitopalvelupyyntö Sam’s Carelle',
    [
      `Nimi: ${formData.name}`,
      `Puhelinnumero: ${formData.phone}`,
      `Sähköposti: ${formData.email || 'Ei ilmoitettu'}`,
      `Kaupunki tai alue: ${formData.city}`,
      `Palvelu: ${formData.service}`,
      '',
      'Lisätiedot:',
      formData.message || 'Ei lisätietoja',
    ].join('\n'),
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.consent) {
      setError(
        'Täytä nimi, puhelinnumero ja hyväksy tietosuojakäytäntö.',
      );
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ScrollReveal className="overflow-hidden rounded-[28px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_14px_30px_rgba(5,150,105,0.25)]">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Sähköpostiluonnos valmis
          </p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Kiitos, {formData.name}.
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600">
            Verkkosivusto ei lähetä pyyntöä automaattisesti. Lähetä tiedot
            sähköpostitse alla olevasta painikkeesta; hoitotiimimme voi vastata
            vasta viestin saavuttua.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <HeartHandshake className="h-4 w-4" />
            Avaa sähköpostiluonnos
          </a>
          <a
            href="tel:0505551187"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <Phone className="h-4 w-4" />
            Soita 050 555 1187
          </a>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-cyan-100/70 blur-3xl" />
      <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-emerald-100/70 blur-2xl" />

      <div className="relative">
        <div className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-slate-900">
              {title || 'Varaa maksuton kartoituskäynti'}
            </h3>
          </div>
        </div>

        <p className="mb-6 text-sm leading-6 text-slate-600">
          {subtitle ||
            'Kerro, millaista tukea tarvitset, niin otamme sinuun yhteyttä sopivan kotikäynnin järjestämiseksi.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
                Nimi <span className="text-cyan-700">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Etu- ja sukunimi"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
                Puhelinnumero <span className="text-cyan-700">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="040 123 4567"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
                Sähköposti
              </label>
              <input
                type="email"
                placeholder="info@samscare.fi"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
                Kaupunki / alue
              </label>
              <select
                value={formData.city}
                onChange={(e) => updateField('city', e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="Espoo">Espoo</option>
                <option value="Helsinki">Helsinki</option>
                <option value="Vantaa">Vantaa</option>
                <option value="Lohja">Lohja</option>
                <option value="Raasepori">Raasepori</option>
                <option value="Hanko">Hanko</option>
                <option value="Inkoo">Inkoo</option>
                <option value="Siuntio">Siuntio</option>
                <option value="Muu">Muu Uusimaa</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
              Tarvittava palvelu
            </label>
            <select
              value={formData.service}
              onChange={(e) => updateField('service', e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            >
              <option value="home-care">Kotihoito</option>
              <option value="home-nursing">Kotisairaanhoito</option>
              <option value="personal-assistance">Henkilökohtainen apu</option>
              <option value="service-voucher">Palveluseteli</option>
              <option value="swedish">Ruotsinkielinen kotihoito</option>
              <option value="other">Tilapäinen tai räätälöity hoito</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
              Lisätiedot
            </label>
            <textarea
              rows={4}
              placeholder="Kerro tarpeistasi, mieltymyksistäsi tai sopivista ajoista..."
              value={formData.message}
              onChange={(e) => updateField('message', e.target.value)}
              className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            />
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
            <input
              type="checkbox"
              id="form-consent"
              required
              checked={formData.consent}
              onChange={(e) => updateField('consent', e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
            />
            <label
              htmlFor="form-consent"
              className="text-xs leading-5 text-slate-600"
            >
              Hyväksyn, että yhteystietojani voidaan käsitellä tätä hoitopyyntöä
              varten. Emme jaa tietojasi kolmansille osapuolille.
            </label>
          </div>

          {error && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-end">
            <Button
              type="submit"
              className="rounded-full"
            >
              Valmistele sähköpostipyyntö
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </ScrollReveal>
  );
}
