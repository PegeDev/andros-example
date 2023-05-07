/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["chart.googleapis.com"],
  },
};

module.exports = nextConfig;
