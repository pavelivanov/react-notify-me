module.exports = {
  app: './example/App.js',
  webpackConfig: {
    loaders: [
      {
        test: /\.(png|ico|jpg|jpeg|gif)$/,
        loader: 'url',
        query: {
          limit: 8192
        }
      }
    ]
  }
}
