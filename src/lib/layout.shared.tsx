import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(includeSectionLinks = true): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <Image src="/android-chrome-192x192.png" alt="" width={28} height={28} />
          ChatCase <span className="text-fd-muted-foreground font-normal">Docs</span>
        </span>
      ),
      url: '/',
    },
    links: includeSectionLinks
      ? [
          { text: 'Guia', url: '/docs/guia', active: 'nested-url' },
          { text: 'Desenvolvedor', url: '/docs/desenvolvedor', active: 'nested-url' },
        ]
      : [],
    themeSwitch: { enabled: false },
  };
}
