/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {
    if (!options.isServer) {
      config.resolve.fallback.fs = false;
    }
    config.experiments = { asyncWebAssembly: true };
    return config;
  },
};

module.exports = nextConfig;
/*
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}*/