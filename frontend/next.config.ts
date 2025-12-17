/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Don't fail build on ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail build on TypeScript errors (optional)
    ignoreBuildErrors: false,
  },
  outputFileTracingRoot: require('path').join(__dirname, '../'),
};

module.exports = nextConfig;
