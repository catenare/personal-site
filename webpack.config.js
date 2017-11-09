const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const vendorPackages = require('./package.json')
const combineLoaders = require('webpack-combine-loaders')

module.exports = {
  entry: {
    app: './src/app/home.ts',
    registration: './src/app/registration.ts',
    about: './src/app/about.ts',
    vendor: Object.keys(vendorPackages.dependencies).filter(name => (name !== 'font-awesome' && name !== 'csspin'))
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Foundation proto',
    //   template: 'src/site/layout.hbs',
    //   filename: 'index.html',
    //   cache: false,
    //   hash: true,
    //   chunks: ['home', 'shared', 'vendor']
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'Foundation About',
    //   template: 'src/site/about.hbs',
    //   filename: 'about.html',
    //   cache: false,
    //   hash: true,
    //   chunks: ['about', 'shared', 'vendor']
    // }),

    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      async: true,
      minChunks: Infinity
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
          use: combineLoaders([
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ])
        })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: combineLoaders([
            {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader'
            }
          ])
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules(\/?!foundation-sites)/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
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
    hot: false,
    historyApiFallback: true,
    watchContentBase: true,
    open: false,
    contentBase: 'dist/'
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new CleanWebPackPlugin(['./dist/assets']),
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
