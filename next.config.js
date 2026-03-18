/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/understanding-studding-outlet-design-and-specifications',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/industrial-applications-for-studding-outlet',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/standards-and-quality-assurance-in-studding-outlet',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
