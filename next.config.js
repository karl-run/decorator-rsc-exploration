/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        serverComponentsExternalPackages: ['@navikt/next-logger', 'next-logger'],
        typedRoutes: true,
    },
}

module.exports = nextConfig
