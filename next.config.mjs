/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/:slug*',
        destination: 'https://tools.citykloud.com/:slug*',
      },
    ];
  },
};

export default nextConfig;
