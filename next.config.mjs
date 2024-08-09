/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/instagram-story-download',
        destination: 'https://tools.citycloud.com/instagram-story-download',
      },
    ];
  },
};

export default nextConfig;
