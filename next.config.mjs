/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/tools',
        destination: 'https://tools.citykloud.com',
      },
    ];
  },
};

export default nextConfig;
