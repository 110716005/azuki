/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images :{
    domains: ["www.azuki.com"],
  },
  env: {
    PRIVATE_KEY: process.env.NEXT_PUBLIC_PRIVATE_KEY
  }
  
}
