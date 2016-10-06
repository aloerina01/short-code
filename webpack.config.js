module.exports = {
  context: __dirname + '/js',
  entry: {
    'main': './main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: './js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
