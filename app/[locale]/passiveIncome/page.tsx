'use client';

import { useTranslations, useLocale } from 'next-intl';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function PassiveIncomePage() {
  const t = useTranslations('passiveIncome');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-[#0A0A12] sm:text-6xl lg:text-7xl">
              {t.rich('title', {
                passiveIncome: (chunks) => (
                  <span className="bg-gradient-to-r from-[#FFD642] to-[#25E5C5] bg-clip-text text-transparent">
                    {chunks}
                  </span>
                )
              })}
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#0A0A12]/80">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-[#F8F8F8]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#0A0A12]/10 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#FFD642]/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD642]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD642]/20 mb-6">
                  <svg className="h-7 w-7 text-[#FFD642]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0A12] mb-4">
                  {t('recurringEarnings')}
                </h3>
                <p className="text-[#0A0A12]/70 leading-relaxed">
                  {t('recurringEarningsDesc')}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#0A0A12]/10 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#25E5C5]/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#25E5C5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#25E5C5]/20 mb-6">
                  <svg className="h-7 w-7 text-[#25E5C5]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0A12] mb-4">
                  {t('financialFreedom')}
                </h3>
                <p className="text-[#0A0A12]/70 leading-relaxed">
                  {t('financialFreedomDesc')}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#0A0A12]/10 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#FFD642]/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD642]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD642]/20 mb-6">
                  <svg className="h-7 w-7 text-[#FFD642]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0A12] mb-4">
                  {t('continuousGrowth')}
                </h3>
                <p className="text-[#0A0A12]/70 leading-relaxed">
                  {t('continuousGrowthDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Prospect Form */}
          <div className="mt-20 mx-auto max-w-2xl">
            <div className="rounded-2xl bg-gradient-to-br from-[#FFD642]/10 to-[#25E5C5]/10 p-8 border border-[#0A0A12]/10">
              <h3 className="text-2xl font-bold text-[#0A0A12] mb-6 text-center">
                {t('interested')}
              </h3>
              <p className="text-center text-[#0A0A12]/70 mb-8">
                {t('interestedDesc')}
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="prospect-name" className="block text-sm font-medium text-[#0A0A12] mb-2">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      id="prospect-name"
                      name="prospect-name"
                      className="w-full rounded-lg border-2 border-[#0A0A12]/20 bg-white px-4 py-3 text-[#0A0A12] focus:border-[#25E5C5] focus:ring-2 focus:ring-[#25E5C5]/20 transition-colors"
                      placeholder={t('name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="prospect-age" className="block text-sm font-medium text-[#0A0A12] mb-2">
                      {t('age')}
                    </label>
                    <input
                      type="number"
                      id="prospect-age"
                      name="prospect-age"
                      className="w-full rounded-lg border-2 border-[#0A0A12]/20 bg-white px-4 py-3 text-[#0A0A12] focus:border-[#25E5C5] focus:ring-2 focus:ring-[#25E5C5]/20 transition-colors"
                      placeholder="Ex: 25"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="prospect-email" className="block text-sm font-medium text-[#0A0A12] mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    id="prospect-email"
                    name="prospect-email"
                    className="w-full rounded-lg border-2 border-[#0A0A12]/20 bg-white px-4 py-3 text-[#0A0A12] focus:border-[#25E5C5] focus:ring-2 focus:ring-[#25E5C5]/20 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="prospect-whatsapp" className="block text-sm font-medium text-[#0A0A12] mb-2">
                    {t('whatsapp')}
                  </label>
                  <input
                    type="tel"
                    id="prospect-whatsapp"
                    name="prospect-whatsapp"
                    className="w-full rounded-lg border-2 border-[#0A0A12]/20 bg-white px-4 py-3 text-[#0A0A12] focus:border-[#25E5C5] focus:ring-2 focus:ring-[#25E5C5]/20 transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="prospect-interest" className="block text-sm font-medium text-[#0A0A12] mb-2">
                    {t('whyInterested')}
                  </label>
                  <textarea
                    id="prospect-interest"
                    name="prospect-interest"
                    rows={4}
                    className="w-full rounded-lg border-2 border-[#0A0A12]/20 bg-white px-4 py-3 text-[#0A0A12] focus:border-[#25E5C5] focus:ring-2 focus:ring-[#25E5C5]/20 transition-colors"
                    placeholder={t('whyInterestedPlaceholder')}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-[#FFD642] to-[#25E5C5] px-6 py-4 text-base font-semibold text-[#0A0A12] shadow-sm transition-all hover:shadow-lg hover:scale-105"
                >
                  {t('submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

