/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configurações de cache e performance
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

export default nextConfig
