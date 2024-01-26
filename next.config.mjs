/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        domains: ['i.ibb.co']
    },
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
        };
    },
};

export default nextConfig;
