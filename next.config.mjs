/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    skipTrailingSlashRedirect: true,
    trailingSlash: true,
    images: {
        domains: ['i.ibb.co']
    }
};

export default nextConfig;
