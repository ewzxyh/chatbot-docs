import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Documentação ChatCase',
    template: '%s | ChatCase',
  },
  description: 'Guias, APIs, SDKs e integrações do ChatCase.',
  manifest: '/site.webmanifest',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{ enabled: false }}
          i18n={{
            locale: 'pt-BR',
            translations: {
              'Back to Home(404 page)': 'Voltar ao início',
              'Close Search(search dialog)(aria-label)': 'Fechar busca',
              'Close Sidebar(sidebar)(aria-label)': 'Fechar menu lateral',
              'Collapse Sidebar(sidebar)(aria-label)': 'Recolher menu lateral',
              'Copied Text(code block)(aria-label)': 'Texto copiado',
              'Copy Anchor Link(heading anchor)(aria-label)': 'Copiar link desta seção',
              'Copy Link(accordion)(aria-label)': 'Copiar link',
              'Copy Markdown(page actions)': 'Copiar Markdown',
              'Copy Text(code block)(aria-label)': 'Copiar texto',
              'Default(type table)': 'Padrão',
              'Last updated on(page footer)': 'Atualizado em',
              'Next Page(pagination)': 'Próxima página',
              'No Headings(table of contents)': 'Nenhum título',
              'No results found(search dialog)': 'Nenhum resultado encontrado',
              'On this page(table of contents)': 'Nesta página',
              'Open Search(search trigger)(aria-label)': 'Abrir busca',
              'Open Sidebar(sidebar)(aria-label)': 'Abrir menu lateral',
              'Open(page actions)': 'Abrir',
              'Page Not Found(404 page)': 'Página não encontrada',
              'Parameters(type table)': 'Parâmetros',
              'Previous Page(pagination)': 'Página anterior',
              'Prop(type table)': 'Propriedade',
              'Returns(type table)': 'Retorno',
              'Search(search dialog)': 'Buscar na documentação',
              'Search(search trigger)': 'Buscar',
              'Table of Contents(inline table of contents)': 'Sumário',
              'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 page)':
                'A página pode ter sido removida, renomeada ou estar temporariamente indisponível.',
              'Toggle Menu(mobile menu)(aria-label)': 'Alternar menu',
              'Type(type table)': 'Tipo',
              'View as Markdown(page actions)': 'Ver como Markdown',
              displayName: 'Português (Brasil)',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
