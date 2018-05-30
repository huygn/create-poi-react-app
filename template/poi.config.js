const path = require('path')

module.exports = {
  env: true,
  entry: 'src/index.js',
  html: {
    template: path.resolve('public', 'index.html')
  },
  staticFolder: 'public',
  plugins: [
    require('@poi/plugin-eslint')(),
    require('@poi/plugin-sw-precache')()
  ]
}
