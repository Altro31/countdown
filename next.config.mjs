/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/happy-birthday',
                permanent: true
            },
            {
                source: '/countdown',
                destination: '/happy-birthday',
                permanent: true
            }
        ];
    }
};

export default nextConfig;
