/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  // Static hosting has no image optimization server.
  images: { unoptimized: true },
};

export default nextConfig;
