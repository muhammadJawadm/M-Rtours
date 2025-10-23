/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...existing config
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // ...existing config
}

module.exports = nextConfig
