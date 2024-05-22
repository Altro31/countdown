/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/countdown',
                permanent: true
            }
        ];
    }
};

export default nextConfig;
