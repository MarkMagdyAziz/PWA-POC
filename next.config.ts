import type { NextConfig } from "next";

const nextConfig: NextConfig =  {
  poweredByHeader: false,
  output: 'standalone',
  async headers() {
    return [
      {
        // Apply these headers to all routes
        // source: '/(.*)',
        source: '/sw.js',

        headers: [
          // {
          //   key: 'Content-Security-Policy',
          //   value: cspHeader.replace(/\s{2,}/g, ' ').trim(),
          // },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
    ];
  },
};


export default nextConfig;
