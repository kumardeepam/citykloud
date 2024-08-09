/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/tools',
        destination: 'https://tools.citykloud.com/',
      },
      {
        source: '/tool/:slug*',
        destination: 'https://tools.citykloud.com/tool/:slug*',
      },
    ];
  },
  // allow origins
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
