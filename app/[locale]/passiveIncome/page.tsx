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
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8 bg-[#0A0A12]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-[#F8F8F8] sm:text-6xl lg:text-7xl">
              {t.rich('title', {
                passiveIncome: (chunks) => (
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

      {/* Content Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-[#0A0A12]">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* Text Content */}
            <div className="space-y-10">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-[#F8F8F8] mb-6">
                  {t('opportunityTitle')}
                </h2>
                <p className="text-xl text-[#F8F8F8]/80 leading-relaxed max-w-3xl mx-auto">
                  {t('opportunityText')}
                </p>
              </div>
              
              <div className="pt-10 border-t border-[#F8F8F8]/10">
                <h2 className="text-4xl font-bold text-[#F8F8F8] mb-6 text-center">
                  {t('whyTitle')}
                </h2>
                <p className="text-xl text-[#F8F8F8]/80 leading-relaxed max-w-3xl mx-auto text-center">
                  {t('whyText')}
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center pt-8">
              <a
                href="https://tally.so/r/aQNVQW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FFD642] to-[#25E5C5] px-12 py-6 text-xl font-semibold text-[#0A0A12] shadow-2xl transition-all hover:shadow-[0_0_30px_rgba(255,214,66,0.5)] hover:scale-110"
              >
                {t('submit')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

