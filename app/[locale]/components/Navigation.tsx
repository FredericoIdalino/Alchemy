'use client';

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <nav className="sticky top-0 z-50 border-b border-[#0A0A12]/10 bg-[#F8F8F8]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image 
              src="/CaldeirãoPretoPNGTransparente.png" 
              alt="Alchemy Logo" 
              width={50} 
              height={50}
              className="h-20 w-20 object-contain"
            />
            <span className="text-xl font-bold text-[#0A0A12]">
              Alchemy
            </span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href={`/${locale}/client`} className="text-sm font-medium text-[#0A0A12]/70 hover:text-[#0A0A12] transition-colors">
              {t('client')}
            </Link>
            <Link href={`/${locale}/editor`} className="text-sm font-medium text-[#0A0A12]/70 hover:text-[#0A0A12] transition-colors">
              {t('editor')}
            </Link>
            <Link href={`/${locale}/passiveIncome`} className="text-sm font-medium text-[#0A0A12]/70 hover:text-[#0A0A12] transition-colors">
              {t('passiveIncome')}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

