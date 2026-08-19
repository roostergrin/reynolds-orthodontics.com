// The app is served by WordPress (dist/ is the theme), so a relative path is
// always same-origin: staging reads staging, production reads production, and
// one build is correct in both. In dev, webpack-dev-server proxies this to the
// staging API and attaches its HTTP auth (see proxyTable in config/index.js).
const route = '/wp-json'

const api = () => {
  return route
}

export default api()
