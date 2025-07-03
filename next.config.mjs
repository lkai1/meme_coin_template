/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/meme_coin_template' : '',
    assetPrefix: isProd ? '/meme_coin_template/' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
