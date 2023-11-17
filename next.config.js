/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    webpack(webpackConfig) {
        return {
            ...webpackConfig,
            optimization: {
                minimize: false,
            },
        }
    },
    experimental: {
        serverComponentsExternalPackages: ['@navikt/next-logger', 'next-logger'],
        typedRoutes: true,
    },
}

module.exports = nextConfig
