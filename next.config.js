/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['product.hstatic.net', 'cdn.shopify.com', 'hanoicomputercdn.com', 'img.joomcdn.net'],
    },
};

module.exports = nextConfig;
