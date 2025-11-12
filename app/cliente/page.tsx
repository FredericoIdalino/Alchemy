import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ClientePage() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-[#0A0A12] sm:text-6xl lg:text-7xl">
              Para{" "}
              <span className="bg-gradient-to-r from-[#FFD642] to-[#25E5C5] bg-clip-text text-transparent">
                Clientes
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#0A0A12]/80">
              Contrate serviços de marketing de alta qualidade e transforme sua presença digital
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#0A0A12]/10 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#25E5C5]/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#25E5C5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#25E5C5]/20 mb-6">
                  <svg className="h-7 w-7 text-[#25E5C5]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-3.75v3.75m-9 .75h.008v.008H9v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0A12] mb-4">
                  Gestão de Tráfego
                </h3>
                <p className="text-[#0A0A12]/70 leading-relaxed">
                  Otimizamos seus anúncios para maximizar ROI. Gestão completa de campanhas em Google Ads, Meta Ads e mais.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#0A0A12]/10 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#FFD642]/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD642]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD642]/20 mb-6">
                  <svg className="h-7 w-7 text-[#FFD642]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0A12] mb-4">
                  Criação de Conteúdo
                </h3>
                <p className="text-[#0A0A12]/70 leading-relaxed">
                  Conteúdo que converte. Vídeos, posts, reels e muito mais criados por nossa equipe de editores especializados.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#0A0A12]/10 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:border-[#25E5C5]/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#25E5C5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#25E5C5]/20 mb-6">
                  <svg className="h-7 w-7 text-[#25E5C5]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0A12] mb-4">
                  Estratégia Completa
                </h3>
                <p className="text-[#0A0A12]/70 leading-relaxed">
                  Planejamento estratégico personalizado. Análise de mercado, definição de personas e roadmap completo.
                </p>
              </div>
            </div>
          </div>

          {/* Formulário Cliente */}
          <div className="mt-20 mx-auto max-w-2xl">
            <div className="rounded-2xl bg-gradient-to-br from-[#25E5C5]/10 to-[#FFD642]/10 p-8 border border-[#0A0A12]/10">
              <h3 className="text-2xl font-bold text-[#0A0A12] mb-6 text-center">
                Solicite um Orçamento
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cliente-nome" className="block text-sm font-medium text-[#0A0A12] mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="cliente-nome"
                      name="cliente-nome"
                      className="w-full rounded-lg border-2 border-[#0A0A12]/20 bg-white px-4 py-3 text-[#0A0A12] focus:border-[#25E5C5] focus:ring-2 focus:ring-[#25E5C5]/20 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="cliente-empresa" className="block text-sm font-medium text-[#0A0A12] mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="cliente-empresa"
                      name="cliente-empresa"
                      className="w-full rounded-lg border-2 border-[#0A0A12]/20 bg-white px-4 py-3 text-[#0A0A12] focus:border-[#25E5C5] focus:ring-2 focus:ring-[#25E5C5]/20 transition-colors"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="cliente-email" className="block text-sm font-medium text-[#0A0A12] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="cliente-email"
                    name="cliente-email"
                    className="w-full rounded-lg border-2 border-[#0A0A12]/20 bg-white px-4 py-3 text-[#0A0A12] focus:border-[#25E5C5] focus:ring-2 focus:ring-[#25E5C5]/20 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="cliente-servico" className="block text-sm font-medium text-[#0A0A12] mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="cliente-servico"
                    name="cliente-servico"
                    className="w-full rounded-lg border-2 border-[#0A0A12]/20 bg-white px-4 py-3 text-[#0A0A12] focus:border-[#25E5C5] focus:ring-2 focus:ring-[#25E5C5]/20 transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="gestao">Gestão de Tráfego</option>
                    <option value="conteudo">Criação de Conteúdo</option>
                    <option value="estrategia">Estratégia Completa</option>
                    <option value="completo">Pacote Completo</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="cliente-mensagem" className="block text-sm font-medium text-[#0A0A12] mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="cliente-mensagem"
                    name="cliente-mensagem"
                    rows={4}
                    className="w-full rounded-lg border-2 border-[#0A0A12]/20 bg-white px-4 py-3 text-[#0A0A12] focus:border-[#25E5C5] focus:ring-2 focus:ring-[#25E5C5]/20 transition-colors"
                    placeholder="Conte-nos sobre seu projeto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#FFD642] px-6 py-4 text-base font-semibold text-[#0A0A12] shadow-sm transition-all hover:bg-[#FFD642]/90 hover:shadow-lg hover:scale-105"
                >
                  Solicitar Orçamento
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

