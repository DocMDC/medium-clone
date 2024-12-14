// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['robust-gerbil-129.convex.cloud']
//   }
// }

// export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cautious-robin-543.convex.cloud',
        port: '',
        pathname: '/api/storage/**',
      },
    ]
  }
}

export default nextConfig