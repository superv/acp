const path = require('path')
const base = path.resolve(__dirname, '../../../../../')

const isDevel = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDevel ? '/' : '/vendor/superv/acp/',

  // outputDir: path.resolve(base, 'public/vendor/superv/'),
  outputDir: path.resolve(__dirname, '../resources/assets/'),

  indexPath: !isDevel
    ? path.resolve(__dirname, '../resources/views/home.php')
    : 'index.html',

  configureWebpack: {
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      host: 'acp.supreme.dev.io',
      publicPath: '/',
      port: 8090,
      proxy: {
        '/api': {
          target: 'http://supreme.dev.io',
          pathRewrite: { '^/api': 'sv-api' },
          changeOrigin: true,
        },
      },
    },
  },

  chainWebpack: config => {
    config.plugin('html')
    .tap(args => {
      if (isDevel) {
        args[0].template = './public/development.html'
      }
      return args
    })

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('html-loader').loader('html-loader')

    const alias = config.resolve.alias
    alias.set('@app', path.resolve(__dirname, 'src/app'))
    alias.set('@assets', path.resolve(__dirname, 'public/assets'))

    if (process.env.NODE_ENV === 'development') {
      alias.set('superv-js', 'superv-js/src/main')
    }
  }
}