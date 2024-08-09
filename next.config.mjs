/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/tools',
        destination: 'https://citykloud.com',
      },
      {
        source: '/tool/:slug*',
        destination: 'https://tools.citykloud.com/tool/:slug*',
      },
    ];
  },
};

export default nextConfig;
