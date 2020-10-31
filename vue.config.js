module.exports = {
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  devServer: {
    port: '9000',
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        changOrigin: true,
      },
    },
  },
};
