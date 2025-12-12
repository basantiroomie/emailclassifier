/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 🚀 não falhar no build por erros de ESLint
    ignoreDuringBuilds: true,
  },
  turbopack: {
    root: '/home/basantiroomie/projects/email-classifier-monorepo',
  },
};

module.exports = nextConfig;
