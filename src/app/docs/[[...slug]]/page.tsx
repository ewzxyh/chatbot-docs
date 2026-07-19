import { getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound, redirect } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { Suspense } from 'react';

export default function Page(props: PageProps<'/docs/[[...slug]]'>) {
  return (
    <Suspense
      fallback={
        <DocsPage toc={[]}>
          <div className="space-y-4 pt-2" aria-label="Carregando documentação">
            <div className="h-9 w-2/5 animate-pulse rounded-lg bg-fd-muted" />
            <div className="h-5 w-3/5 animate-pulse rounded bg-fd-muted" />
            <div className="h-px bg-fd-border" />
            <div className="h-4 w-full animate-pulse rounded bg-fd-muted" />
            <div className="h-4 w-4/5 animate-pulse rounded bg-fd-muted" />
          </div>
        </DocsPage>
      }
    >
      <DocContent params={props.params} />
    </Suspense>
  );
}

async function DocContent({
  params,
}: {
  params: PageProps<'/docs/[[...slug]]'>['params'];
}) {
  const resolvedParams = await params;
  if (!resolvedParams.slug) redirect('/docs/guia');
  const page = source.getPage(resolvedParams.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
