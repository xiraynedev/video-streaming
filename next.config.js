/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    dbHost: process.env.VIDEO_STREAMING_DB_HOST,
    dbCollection: process.env.VIDEO_STREAMING_DB_COLLECTION,
    videoStorageHost: process.env.VIDEO_STORAGE_HOST,
    videoStoragePort: process.env.VIDEO_STORAGE_PORT,
  },
};

module.exports = nextConfig;
