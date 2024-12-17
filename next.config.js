/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed experimental.appDir as it's no longer needed in Next.js 14
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = `${__dirname}/app`;
    return config;
  }
}

module.exports = nextConfig
