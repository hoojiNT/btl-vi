/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "i.ibb.co",
      "i.postimg.cc",
      "firebasestorage.googleapis.com",
      "product.hstatic.net"
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;
