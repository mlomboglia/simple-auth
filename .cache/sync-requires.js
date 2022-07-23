
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mlomboglia/Desktop/sandbox/gatsby/gatsby/examples/simple-auth/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/mlomboglia/Desktop/sandbox/gatsby/gatsby/examples/simple-auth/src/pages/404.js")),
  "component---src-pages-app-js": preferDefault(require("/Users/mlomboglia/Desktop/sandbox/gatsby/gatsby/examples/simple-auth/src/pages/app.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mlomboglia/Desktop/sandbox/gatsby/gatsby/examples/simple-auth/src/pages/index.js"))
}

