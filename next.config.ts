import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
        hostname: "covers.openlibrary.org",
        port: "",
        pathname: "/b/isbn/**",
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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
