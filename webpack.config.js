const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const vendorPackages = require('./package.json')
const combineLoaders = require('webpack-combine-loaders')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: {
    // app: './src/app/index.tsx',
    // about: './src/app/about.ts',
    app: './src/app/home.ts',
    vendor: Object.keys(vendorPackages.dependencies).filter(name => (name !== 'font-awesome' && name !== 'csspin'))
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      holder: '~holderjs/holder.js'
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      async: true,
      minChunks: Infinity
    }),
    new StylelintPlugin({syntax: 'scss', emitErrors: false, lintDirtyModulesOnly: true})
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: combineLoaders([
            {
              loader: 'css-loader'
              // options: {
              //   modules: true,
              //   localIdentName: '[sha512:hash:base32]-[name]-[local]',
              //   importLoaders: 2
              // }
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
              loader: 'css-loader'
              // options: {
              //   modules: true,
              //   localIdentName: '[sha512:hash:base32]-[name]-[local]',
              //   importLoaders: 1
              // }
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

if (process.env.NODE_ENV !== 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.ProvidePlugin({
      'Holder': 'holderjs',
      'holder': 'holderjs',
      'window.Holder': 'holderjs',
      'window.holder': 'holderjs'
    })
  ])
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
