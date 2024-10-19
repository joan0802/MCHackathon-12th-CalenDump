// next.config.mjs
import withPWA from 'next-pwa';

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: process.env.BACKEND_URL + '/login',
        permanent: true,
        basePath: false,
      },
    ]
  },
  // Other Next.js settings (if any)
};

export default withPWA({
  dest: 'public',
  disable: false,
  register: true,
  skipWaiting: true,
})(nextConfig);
