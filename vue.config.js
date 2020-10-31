module.exports = {
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  devServer: {
    proxy: 'http://ccgq.netshi.cn',
  },
};
