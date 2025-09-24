import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow disabling the built-in image optimizer (useful in some container/CDN environments)
    unoptimized:
      process.env.NEXT_IMAGE_UNOPTIMIZED === "1" ||
      process.env.NEXT_IMAGE_UNOPTIMIZED === "true",
    domains: ["images.unsplash.com", "randomuser.me"],
    formats: ["image/webp", "image/avif"],
    qualities: [75, 85, 95],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@heroicons/react"],
  },
};

export default nextConfig;
