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
          //"d229kpbsb5jevy.cloudfront.net"
          {
            protocol: 'https',
            hostname: 'd229kpbsb5jevy.cloudfront.net',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
