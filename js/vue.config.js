const path = require('path')
const base = path.resolve(__dirname, '../../../../../')

module.exports = {
  publicPath: '/vendor/superv/',

  outputDir: path.resolve(base, 'public/vendor/superv/'),
  assetsDir: 'acp/',

  indexPath: process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, '../resources/views/home.php')
    : 'index.html',

  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      if (process.env.NODE_ENV === 'development') {
        args[0].template = './public/development.html'
      }
      return args
    })
  }
}