/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    // AVIF first (~20% smaller than WebP), WebP for browsers without AVIF support.
    formats: ["image/avif", "image/webp"],
    // 60 for thumbnails, 75 (default) for page imagery, 85 for full-screen lightboxes.
    qualities: [60, 75, 85],
    // Source photos are at most 1920px wide, so larger breakpoints would only duplicate the 1920 variant.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Statically imported images are content-hashed and cached immutably; this covers /public images (logo).
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
