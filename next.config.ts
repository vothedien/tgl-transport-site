/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here 
};

export default nextConfig;*/
// next.config.ts
const isProd = process.env.NODE_ENV === "production";
const repo = "tgl-transport-site";

const nextConfig = {
  // tạo site tĩnh
  output: "export",
  // chạy dưới subpath của GitHub Pages
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  // cần cho next/image khi export tĩnh
  images: { unoptimized: true },
};
export default nextConfig;