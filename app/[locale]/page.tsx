'use client';

import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-[#0A0A12] sm:text-6xl lg:text-7xl">
              {t.rich('hero.title', {
                marketing: (chunks) => (
                  <span className="bg-gradient-to-r from-[#FFD642] to-[#25E5C5] bg-clip-text text-transparent">
                    {chunks}
                  </span>
                )
              })}
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#0A0A12]/80">
              {t('hero.subtitle')}
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link 
                href={`/${locale}/client`}
                className="rounded-lg bg-[#FFD642] px-8 py-4 text-base font-semibold text-[#0A0A12] shadow-sm transition-all hover:bg-[#FFD642]/90 hover:shadow-lg hover:scale-105"
              >
                {t('hero.hireServices')}
              </Link>
              <Link 
                href={`/${locale}/editor`}
                className="rounded-lg border-2 border-[#0A0A12] bg-white px-8 py-4 text-base font-semibold text-[#0A0A12] transition-all hover:bg-[#0A0A12] hover:text-[#F8F8F8]"
              >
                {t('hero.workWithUs')}
              </Link>
              <Link 
                href={`/${locale}/passiveIncome`}
                className="rounded-lg bg-[#25E5C5] px-8 py-4 text-base font-semibold text-[#0A0A12] shadow-sm transition-all hover:bg-[#25E5C5]/90 hover:shadow-lg hover:scale-105"
              >
                {t('hero.passiveIncome')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0A12] sm:text-4xl">
              {t('home.choosePath')}
            </h2>
            <p className="mt-4 text-lg text-[#0A0A12]/80">
              {t('home.threeWays')}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Client Card */}
            <Link href={`/${locale}/client`} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-[#0A0A12]/10 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#25E5C5]/50 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#25E5C5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#25E5C5]/20 mb-6">
                    <svg className="h-7 w-7 text-[#25E5C5]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-3.75v3.75m-9 .75h.008v.008H9v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A0A12] mb-4">
                    {t('home.forClients')}
                  </h3>
                  <p className="text-[#0A0A12]/70 leading-relaxed">
                    {t('home.forClientsDesc')}
                  </p>
                </div>
              </div>
            </Link>

            {/* Editor Card */}
            <Link href={`/${locale}/editor`} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-[#0A0A12]/10 bg-[#0A0A12] p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#FFD642]/50 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD642]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD642]/20 mb-6">
                    <svg className="h-7 w-7 text-[#FFD642]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">
                    {t('home.forEditors')}
                  </h3>
                  <p className="text-[#F8F8F8]/70 leading-relaxed">
                    {t('home.forEditorsDesc')}
                  </p>
                </div>
              </div>
            </Link>

            {/* Passive Income Card */}
            <Link href={`/${locale}/passiveIncome`} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-[#0A0A12]/10 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#25E5C5]/50 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD642]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD642]/20 mb-6">
                    <svg className="h-7 w-7 text-[#FFD642]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A0A12] mb-4">
                    {t('home.passiveIncome')}
                  </h3>
                  <p className="text-[#0A0A12]/70 leading-relaxed">
                    {t('home.passiveIncomeDesc')}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

