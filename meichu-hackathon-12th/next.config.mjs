// next.config.mjs
import withPWA from 'next-pwa';

const nextConfig = {
  // Other Next.js settings (if any)
};

export default withPWA({
  dest: 'public',
  disable: false,
  register: true,
  skipWaiting: true,
})(nextConfig);
