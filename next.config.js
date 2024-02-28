/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost','127.0.0.1:8000', 'api.sascube.ltd','https://api.sascube.ltd/',"http://127.0.0.1:8000/",'http://localhost:8000','*'],
    },
}

module.exports = nextConfig
