const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const vendorPackages = require('./package.json')

module.exports = {
  entry: {
    home: './src/home.ts',
    about: './src/about.ts',
    vendor: Object.keys(vendorPackages.dependencies).filter(name => (name !== 'font-awesome'))
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Foundation proto',
      template: 'src/site/layout.hbs',
      filename: 'index.html',
      cache: false,
      hash: true,
      chunks: ['home', 'shared', 'vendor']
    }),
    new HtmlWebpackPlugin({
      title: 'Foundation About',
      template: 'src/site/about.hbs',
      filename: 'about.html',
      cache: false,
      hash: true,
      chunks: ['about', 'shared', 'vendor']
    }),
    new CleanWebPackPlugin(['./assets']),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'shared',
      minChunks: 2
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: {
      //     loaders: {
      //       scss: ['vue-style-loader', {
      //         loader: 'css-loader',
      //         options: {
      //           minimize: false,
      //           sourceMap: false
      //         }
      //       },
      //       {
      //         loader: 'sass-loader',
      //         exclude: /styles/,
      //         options: {
      //           includePaths: ['./src/assets/vue/styles'],
      //           data: '@import "./src/assets/vue/styles/app";',
      //           sourceMap: false
      //         }
      //       }
      //       ],
      //       ts: 'awesome-typescript-loader'
      //     }
      //   }
      // },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules(\/?!foundation-sites)/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: 'handlebars-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules(\/?!font-awesome)/,
        loader: 'file-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        exclude: /node_modules(\/?!font-awesome)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: true,
    watchContentBase: true,
    open: false
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
