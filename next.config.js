/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/order',
        permanent: false,
      },
    ]
  },

}

module.exports = nextConfig
