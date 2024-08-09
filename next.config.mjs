/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/:slug*',
        destination: 'https://tools.citykloud.com/:slug*',
      },
      {
        source: '/web-stories/:slug*',
        destination: 'https://citykloud.com/web-stories/:slug*',
      },
    ];
  },
};

export default nextConfig;
