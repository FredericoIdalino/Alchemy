'use client';

import { useTranslations, useLocale } from 'next-intl';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function EditorPage() {
  const t = useTranslations('editor');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8 bg-[#0A0A12]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-[#F8F8F8] sm:text-6xl lg:text-7xl">
              {t.rich('title', {
                editors: (chunks) => (
                  <span className="bg-gradient-to-r from-[#FFD642] to-[#25E5C5] bg-clip-text text-transparent">
                    {chunks}
                  </span>
                )
              })}
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#F8F8F8]/80">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-[#0A0A12]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#F8F8F8]/10 bg-[#0A0A12] p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#25E5C5]/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#25E5C5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#25E5C5]/20 mb-6">
                  <svg className="h-7 w-7 text-[#25E5C5]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">
                  {t.rich('fastPayments', {
                    dollar: (chunks) => (
                      <span className="bg-gradient-to-r from-[#FFD642] to-[#25E5C5] bg-clip-text text-transparent">
                        {chunks}
                      </span>
                    )
                  })}
                </h3>
                <p className="text-[#F8F8F8]/70 leading-relaxed">
                  {t('fastPaymentsDesc')}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#F8F8F8]/10 bg-[#0A0A12] p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#FFD642]/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD642]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD642]/20 mb-6">
                  <svg className="h-7 w-7 text-[#FFD642]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">
                  {t('diverseProjects')}
                </h3>
                <p className="text-[#F8F8F8]/70 leading-relaxed">
                  {t('diverseProjectsDesc')}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#F8F8F8]/10 bg-[#0A0A12] p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#25E5C5]/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#25E5C5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#25E5C5]/20 mb-6">
                  <svg className="h-7 w-7 text-[#25E5C5]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.059 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">
                  {t('completeSupport')}
                </h3>
                <p className="text-[#F8F8F8]/70 leading-relaxed">
                  {t('completeSupportDesc')}
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://tally.so/r/7RlGR6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 mx-auto justify-center items-center flex rounded-lg bg-[#FFD642] px-6 py-4 text-base font-semibold text-[#0A0A12] shadow-sm transition-all hover:bg-[#FFD642]/90 hover:shadow-lg hover:scale-105 mt-10 text-center"
          >
            {t('submit')}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

