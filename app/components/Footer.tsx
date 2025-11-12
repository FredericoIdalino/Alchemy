import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#0A0A12]/10 bg-[#0A0A12]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#FFD642] to-[#25E5C5]"></div>
              <span className="text-xl font-bold text-[#F8F8F8]">
                Alchemy
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#F8F8F8]/80">
              Transformando marketing em resultados desde 2024.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#FFD642]">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/cliente" className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  Para Clientes
                </Link>
              </li>
              <li>
                <Link href="/editor" className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  Para Editores
                </Link>
              </li>
              <li>
                <Link href="/rendaPassiva" className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  Renda Passiva
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#FFD642]">Social</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#F8F8F8]/70 hover:text-[#25E5C5] transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[#F8F8F8]/10 pt-8">
          <p className="text-center text-sm text-[#F8F8F8]/60">
            &copy; 2024 Alchemy. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

