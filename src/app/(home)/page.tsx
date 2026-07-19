import Link from 'next/link';
import Image from 'next/image';
import ArrowRight from '@solar-icons/react/ssr/arrows/ArrowRight';
import Code2 from '@solar-icons/react/ssr/it/Code2';
import Magnifier from '@solar-icons/react/ssr/search/Magnifier';
import Book2 from '@solar-icons/react/ssr/school/Book2';

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="brand-hero px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl">
          <Image
            src="/chatcase-logo-white.png"
            alt="ChatCase"
            width={469}
            height={97}
            priority
            className="h-auto w-64 md:w-80"
          />
          <h1 className="mt-10 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Tudo o que você precisa para usar e integrar o ChatCase.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Encontre guias práticos, referências de API, SDKs e exemplos de integração.
          </p>
          <Link
            href="/docs/guia"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-[#1238f2] transition hover:bg-white/90"
          >
            Explorar a documentação <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-5 px-6 py-14 md:grid-cols-2 md:py-20">
        <Link href="/docs/guia" className="doc-card group">
          <Book2 className="size-7 text-[#00a95f]" />
          <h2>Guia</h2>
          <p>Configuração, automações, canais, base de conhecimento e atendimento.</p>
          <span>Começar <ArrowRight /></span>
        </Link>
        <Link href="/docs/desenvolvedor" className="doc-card group">
          <Code2 className="size-7 text-[#ffad00]" />
          <h2>Desenvolvedor</h2>
          <p>APIs REST, Widget SDK, autenticação, eventos e integrações.</p>
          <span>Ver referências <ArrowRight /></span>
        </Link>
        <div className="col-span-full mt-4 flex items-center justify-center gap-2 text-sm text-fd-muted-foreground">
          <Magnifier className="size-4" /> Use a busca em qualquer página para encontrar um tópico.
        </div>
      </section>
    </main>
  );
}
