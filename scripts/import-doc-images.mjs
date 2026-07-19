import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const docsDir = path.join(root, 'content', 'docs', 'guia');
const imagesDir = path.join(root, 'public', 'doc-images');
const dryRun = process.argv.includes('--dry-run');
const localImagePattern = /<img\b[^>]*\bsrc="(\/files\/[^"?]+)"/gi;
const remoteImagePattern = /<img\b[^>]*\bsrc="([^"]+)"/gi;

async function listMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory()
        ? listMarkdownFiles(entryPath)
        : entry.name.endsWith('.md')
          ? [entryPath]
          : [];
    }),
  );

  return files.flat();
}

async function mapLimit(items, limit, callback) {
  let nextIndex = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (nextIndex < items.length) {
        const index = nextIndex++;
        await callback(items[index], index);
      }
    }),
  );
}

function sourceUrl(file) {
  const relative = path.relative(docsDir, file).replaceAll(path.sep, '/');
  const route = relative
    .replace(/\.md$/, '')
    .replace(/(^|\/)index$/, '$1')
    .replace(/\/$/, '');

  return `https://guide.tiledesk.com/${route}`;
}

async function fetchSourcePage(file) {
  const url = sourceUrl(file);
  const candidates = [url, url.replaceAll(/chatcase/gi, 'tiledesk')];

  for (const candidate of new Set(candidates)) {
    const response = await fetch(candidate);
    if (response.ok) return { response, url: candidate };
    if (response.status !== 404) {
      throw new Error(`${response.status} ao abrir ${candidate}`);
    }
  }

  throw new Error(`Página original não encontrada para ${url}`);
}

function decodeAttribute(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&#x26;', '&')
    .replaceAll('&#38;', '&');
}

function originalImageUrl(src, pageUrl) {
  const url = new URL(decodeAttribute(src), pageUrl);
  return url.searchParams.get('url') ?? url.href;
}

function extensionFor(contentType, url) {
  const byType = {
    'image/gif': 'gif',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/svg+xml': 'svg',
    'image/webp': 'webp',
  };
  const type = contentType.split(';')[0].toLowerCase();
  if (byType[type]) return byType[type];

  const extension = path.extname(new URL(url).pathname).slice(1).toLowerCase();
  if (['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp'].includes(extension)) {
    return extension === 'jpeg' ? 'jpg' : extension;
  }

  throw new Error(`Tipo de imagem desconhecido: ${contentType} (${url})`);
}

const files = await listMarkdownFiles(docsDir);
const pages = [];

for (const file of files) {
  const markdown = await readFile(file, 'utf8');
  const references = [...markdown.matchAll(localImagePattern)].map(
    (match) => match[1],
  );
  if (references.length > 0) pages.push({ file, markdown, references });
}

const mappings = new Map();
await mapLimit(pages, 6, async (page, index) => {
  const { response, url } = await fetchSourcePage(page.file);

  const html = await response.text();
  const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0];
  if (!main) throw new Error(`Conteúdo principal não encontrado em ${url}`);

  const sources = [...main.matchAll(remoteImagePattern)].map((match) =>
    originalImageUrl(match[1], url),
  );
  if (sources.length !== page.references.length) {
    throw new Error(
      `${url}: ${page.references.length} referências locais e ${sources.length} imagens originais`,
    );
  }

  page.references.forEach((reference, imageIndex) => {
    const existing = mappings.get(reference);
    const source = sources[imageIndex];
    if (existing && existing !== source) {
      throw new Error(`${reference} aponta para duas imagens diferentes`);
    }
    mappings.set(reference, source);
  });

  if ((index + 1) % 20 === 0 || index + 1 === pages.length) {
    console.log(`Mapeadas ${index + 1}/${pages.length} páginas`);
  }
});

console.log(`${mappings.size} imagens únicas validadas`);
if (dryRun) process.exit(0);

await mkdir(imagesDir, { recursive: true });
const replacements = new Map();
const entries = [...mappings.entries()];

await mapLimit(entries, 10, async ([reference, url], index) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ao baixar ${url}`);

  const bytes = Buffer.from(await response.arrayBuffer());
  const extension = extensionFor(response.headers.get('content-type') ?? '', url);
  const filename = `${path.posix.basename(reference)}.${extension}`;
  await writeFile(path.join(imagesDir, filename), bytes);
  replacements.set(reference, `/doc-images/${filename}`);

  if ((index + 1) % 100 === 0 || index + 1 === entries.length) {
    console.log(`Baixadas ${index + 1}/${entries.length} imagens`);
  }
});

for (const page of pages) {
  let markdown = page.markdown;
  for (const reference of new Set(page.references)) {
    markdown = markdown.replaceAll(reference, replacements.get(reference));
  }
  await writeFile(page.file, markdown);
}

console.log(`${pages.length} páginas atualizadas`);
