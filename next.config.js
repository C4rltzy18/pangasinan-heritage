/** @type {import('next').NextConfig} */

<<<<<<< HEAD
const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === 'production';
=======
const isGithubPages =
  process.env.GITHUB_ACTIONS || process.env.NODE_ENV === 'production';
>>>>>>> 8186467 (Fix GitHub Pages CSS paths)

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