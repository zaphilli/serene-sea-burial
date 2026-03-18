/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};
module.exports = nextConfig;
