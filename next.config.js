/** @type {import('next').NextConfig} */

const isGithubPages =
  process.env.GITHUB_ACTIONS || process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,

  basePath: isGithubPages ? '/pangasinan-heritage' : '',
  assetPrefix: isGithubPages ? '/pangasinan-heritage/' : '',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
