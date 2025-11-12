import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#0A0A12]/10 bg-[#F8F8F8]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#FFD642] to-[#25E5C5]"></div>
            <span className="text-xl font-bold text-[#0A0A12]">
              Alchemy
            </span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/cliente" className="text-sm font-medium text-[#0A0A12]/70 hover:text-[#0A0A12] transition-colors">
              Cliente
            </Link>
            <Link href="/editor" className="text-sm font-medium text-[#0A0A12]/70 hover:text-[#0A0A12] transition-colors">
              Editor
            </Link>
            <Link href="/rendaPassiva" className="text-sm font-medium text-[#0A0A12]/70 hover:text-[#0A0A12] transition-colors">
              Renda Passiva
            </Link>
          </div>
          <Link 
            href="/cliente"
            className="rounded-lg bg-[#FFD642] px-4 py-2 text-sm font-medium text-[#0A0A12] transition-all hover:bg-[#FFD642]/90 hover:shadow-lg"
          >
            Começar
          </Link>
        </div>
      </div>
    </nav>
  );
}

