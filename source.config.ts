import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import rehypeRaw from 'rehype-raw';
import type { Root, RootContent } from 'hast';

function rehypeLegacyAnchorIds() {
  return (tree: Root) => {
    const visit = (nodes: RootContent[]) => {
      for (const node of nodes) {
        if (node.type !== 'element') continue;

        if (
          node.tagName === 'a' &&
          node.children.length === 0 &&
          typeof node.properties.id === 'string'
        ) {
          node.tagName = 'span';
          delete node.properties.href;
        }

        visit(node.children);
      }
    };

    visit(tree.children);
  };
}

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
      rehypeLegacyAnchorIds,
      ...plugins,
    ],
  },
});
