import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/facilities",
        destination: "/#facilities",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/programs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
