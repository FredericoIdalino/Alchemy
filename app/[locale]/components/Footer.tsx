'use client';

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="border-t border-[#0A0A12]/10 bg-[#0A0A12]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Image 
                src="/CaldeirãoAmareloPNGTransparente.png" 
                alt="Alchemy Logo" 
                width={50} 
                height={50}
                className="h-20 w-20 object-contain"
              />
              <span className="text-xl font-bold text-[#F8F8F8]">
                Alchemy
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#F8F8F8]/80">
              {t('description')}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#FFD642]">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={`/${locale}/client`} className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  {t('forClients')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/editor`} className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  {t('forEditors')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/passiveIncome`} className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  {t('passiveIncome')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#FFD642]">Social</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://www.instagram.com/alchemyagency_/" className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/cast_bridge" className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@bridgecastmidia?is_from_webapp=1&sender_device=pc" className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[#F8F8F8]/10 pt-8">
          <p className="text-center text-sm text-[#F8F8F8]/60">
            &copy; 2025 Alchemy. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

