/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/grillz-meme' : '',
    assetPrefix: isProd ? '/grillz-meme/' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
