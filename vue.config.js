module.exports = {
  // 生产环境 sourceMap
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue2-telegram/'
    : '/'
}
