/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/timegrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
])

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
