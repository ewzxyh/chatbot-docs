import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    turbopackFileSystemCacheForBuild: true,
  },
  async rewrites() {
    return [
      {
        source: '/files/:path*',
        destination: 'https://guide.tiledesk.com/files/:path*',
      },
      {
        source: '/developer-files/:path*',
        destination: 'https://developer.tiledesk.com/files/:path*',
      },
    ];
  },
};

export default withMDX(config);
