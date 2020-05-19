const paths = require('./path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const sassModuleRegex = /\.module\.(scss|sass)$/;
let moduleRuleList = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.(sa|sc|c)ss$/,
    exclude: sassModuleRegex,
    use: [
      {
        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        options: (paths.publicUrlOrPath.startsWith('.') && !devMode)
          ? {publicPath: '../../'}
          : {},
      },
      'css-loader',
      {
        loader: "postcss-loader",
        options: {
          plugins: [
            require('precss'),
            require('autoprefixer')
          ]
        }
      },
      'sass-loader'
    ]
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|bmp)$/,
    use: [{
      loader: "url-loader",
      options: {
        esModule: false,
        limit: 10000,
        name: 'assets/media/[name].[hash:8].[ext]',
      }
    }]
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader']
  },
  {
    test: /\.(csv|tsv|xls)$/,
    use: ['csv-loader']
  }
]

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: moduleRuleList
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
    })
  ],
  output: {
    // filename: devMode ? 'assets/js/bundle.js' : 'assets/js/bundle.js',
    path: devMode ? undefined : paths.appBuild
  }
}
