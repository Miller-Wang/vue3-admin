module.exports = {
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  devServer: {
    port: '7000',
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        changOrigin: true,
      },
    },
  },
};
