var DIPlugin = require('./plugins/DIPlugin');

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
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
        // query: {
        //   presets: ['es2015']
        // }
      }
    ]
  },
  resolve: {
    extensions: [ "", ".vue", ".js" ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new DIPlugin()
  ]
};
