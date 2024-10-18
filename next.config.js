// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
};
