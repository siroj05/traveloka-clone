import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
    ],
  },
  async redirects(){
    return[
      {
        source:'/',
        destination: '/home',
        permanent:true
      }
    ]
  },
  typescript:{
    ignoreBuildErrors:true
  }
};

export default nextConfig;
