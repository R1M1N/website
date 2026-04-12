/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "sharp$": false,
      "onnxruntime-node$": false,
    }
    
    // Ignore .wasm files missing from internal Next.js bundler
    config.module.rules.push({
      test: /\.wasm$/,
      type: "asset/resource",
    })
    
    return config;
  },
}

module.exports = nextConfig