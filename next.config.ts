import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learning.oreilly.com",
        port: "",
        pathname: "/library/cover/**",
      },
      {
        protocol: "https",
        hostname: "ndlsearch.ndl.go.jp",
        port: "",
        pathname: "/thumbnail/**",
      },
      {
        protocol: "https",
        hostname: "developers.redhat.com",
        port: "",
        pathname: "/sites/default/files/**",
      },
      {
        protocol: "https",
        hostname: "image.gihyo.co.jp",
        port: "",
        pathname: "/assets/images/cover/**",
      },
      {
        protocol: "https",
        hostname: "img.ips.co.jp",
        port: "",
        pathname: "/ij/**",
      },
      {
        protocol: "https",
        hostname: "www.lambdanote.com",
        port: "",
        pathname: "/cdn/shop/products/**",
      },
      {
        protocol: "https",
        hostname: "c.media-amazon.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
