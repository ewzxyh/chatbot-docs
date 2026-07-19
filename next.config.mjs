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
        source: '/files/Vmh3DiPy6ytjYZPPeXAB',
        destination:
          'https://1328774413-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FVguk6y5OMn3pAaHZSiwU%2Fuploads%2FnPq0nG4gYH1JP8I3UCpT%2Fimages.png?alt=media&token=[REDACTED_TOKEN]',
      },
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
