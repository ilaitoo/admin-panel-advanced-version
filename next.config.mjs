/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "nextjs15-ecommerce.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
