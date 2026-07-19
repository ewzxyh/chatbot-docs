import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import Image from 'next/image';

function ImportedImage({ src, alt, width, height, className, style }: ImgHTMLAttributes<HTMLImageElement>) {
  if (typeof src !== 'string') return null;

  return (
    <Image
      src={src}
      alt={alt ?? ''}
      width={Number(width) || 1200}
      height={Number(height) || 800}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
      className={cn('rounded-lg', className)}
      style={{ maxWidth: '100%', height: 'auto', ...style }}
    />
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: ImportedImage,
    ...components,
  } satisfies MDXComponents;
}

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
