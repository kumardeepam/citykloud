import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = createProxyMiddleware({
  target: 'https://tools.citykloud.com',
  changeOrigin: true,
  pathRewrite: {
    '^/tool/instagram-story-download': '/tool/instagram-story-download',
  },
});

export default function handler(req, res) {
  proxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }
  });
}
