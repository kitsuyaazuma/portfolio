import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "books.google.com",
        port: "",
        pathname: "/books/**",
      },
      {
        protocol: "https",
        hostname: "learning.oreilly.com",
        port: "",
        pathname: "/library/cover/**",
      },
      {
        protocol: "https",
        hostname: "www.oreilly.co.jp",
        port: "",
        pathname: "/books/images/**",
      },
      {
        protocol: "https",
        hostname: "arxiv.org",
        port: "",
        pathname: "/html/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/vi/**",
      },
    ],
  },
  reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
