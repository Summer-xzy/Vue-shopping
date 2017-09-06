var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|eot|woff)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(tpl|ejs)$/,
          loader: 'ejs'
      },
      {
        test: /\.ttf$/,
          loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.css$/,
          loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
    }
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port : 8080
  },
  performance: {  //异步多级缓存
    hints: false
  },
  devtool: '#eval-source-map'
}
