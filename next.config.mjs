/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode:false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd12ap2rg9u0mb.cloudfront.net',
            port: '',
            pathname: '/ottadmin/images/**',
          },
        ],
      },
};

export default nextConfig;
