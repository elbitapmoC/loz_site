/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'via.placeholder.com',
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './app'),
    };
    return config;
  },
  // Enable static exports for Vercel deployment
  output: 'standalone',
  // Disable strict mode for compatibility
  reactStrictMode: true,
  // Enable SWC minification
  swcMinify: true,
};

module.exports = nextConfig;