import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
