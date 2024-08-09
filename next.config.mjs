/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/tool/instagram-story-download',
        destination:
          'https://tools.citykloud.com/tool/instagram-story-download',
      },
    ];
  },
};

export default nextConfig;
