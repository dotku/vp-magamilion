/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Use environment variable in production, fallback to localhost in development
    API_URL: process.env.API_URL || 'http://localhost:5000'
  }
}

module.exports = nextConfig
