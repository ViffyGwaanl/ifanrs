/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 静态导出
  images: {
    unoptimized: true,  // Cloudflare Pages不支持Next.js的图像优化
  },
  trailingSlash: false,
};

module.exports = nextConfig;