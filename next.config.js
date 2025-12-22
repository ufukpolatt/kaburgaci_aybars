/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Specify the root directory to avoid workspace root warnings
    root: process.cwd(),
  },
  images: {
    // Updated from deprecated domains to remotePatterns
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig