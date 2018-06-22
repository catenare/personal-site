const path = require('path')
const webpack = require('webpack')
const CleanWebPackPlugin = require('clean-webpack-plugin')
const vendorPackages = require('./package.json')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let hostEnv
const devMode = process.env.NODE_ENV !== 'production'
const setupEnv = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      hostEnv = true
      break
    default:
      hostEnv = false
      break
  }
}

setupEnv()

module.exports = {
  entry: {
    app: './src/app/ts/app.tsx',
    vendor: Object.keys(vendorPackages.dependencies).filter(name => (name !== 'font-awesome' && name !== 'csspin'))
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      __IS_PROD__: hostEnv
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader' },
      //     { loader: 'postcss-loader' }
      //   ]
      // },
      {
        test: /\.js$/,
        exclude: /node_modules(\/?!foundation-sites)/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'awesome-typescript-loader']
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
  devtool: 'cheap-module-source-map',
  devServer: {
    compress: true,
    hot: false,
    historyApiFallback: true,
    watchContentBase: true,
    open: false,
    host: '0.0.0.0',
    contentBase: 'dist/'
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production'
} else {
  module.exports.mode = 'development'
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
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
