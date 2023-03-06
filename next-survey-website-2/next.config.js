/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

rewrites: async () => [
  {
    source: "/public/survey-3.html",
    destination: "/pages/api/survey-3.js",
  },
],

module.exports = nextConfig
