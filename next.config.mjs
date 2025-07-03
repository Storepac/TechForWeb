/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configurações para melhorar o deploy no Vercel
  output: 'standalone',
  experimental: {
    optimizeCss: true,
  },
  // Configurações de cache e performance
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

export default nextConfig
