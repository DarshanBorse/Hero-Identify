/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URL:
      "mongodb+srv://<Username>:<Password>@cluster0.noxf2.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
