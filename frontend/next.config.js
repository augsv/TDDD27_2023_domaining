/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 's.gravatar.com' // For fetching default avatar pics that Auth0 uses
      }
    ]
  }
}

module.exports = nextConfig
