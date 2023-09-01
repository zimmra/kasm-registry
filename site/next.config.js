/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Zimmras Kasm Registry',
    description: 'My Repo for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://zimmra.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
