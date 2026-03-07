/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isDocker = process.env.DOCKER_BUILD === 'true';

const nextConfig = {
    output: isProd ? 'export' : undefined,
    distDir: isProd ? (isDocker ? 'out' : '../static') : undefined,
    basePath: isProd && !isDocker ? '/static' : undefined,
    assetPrefix: isProd && !isDocker ? '/static' : undefined,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "17177",
            },
        ],
    },
};

export default nextConfig;
