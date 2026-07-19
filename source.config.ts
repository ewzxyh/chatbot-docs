import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import rehypeRaw from 'rehype-raw';

// You can customize Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkImageOptions: false,
    rehypePlugins: (plugins) => [
      [
        rehypeRaw,
        {
          passThrough: [
            'mdxjsEsm',
            'mdxFlowExpression',
            'mdxTextExpression',
            'mdxJsxFlowElement',
            'mdxJsxTextElement',
          ],
        },
      ],
      ...plugins,
    ],
  },
});
