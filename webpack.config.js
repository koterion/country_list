const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

function generateHtmlPlugins (templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map(item => {
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false
    })
  })
}

const htmlPlugins = generateHtmlPlugins('./src/view')

module.exports = {
  entry: {
    main: ['./src/js/main.js', './src/sass/main.sass'],
    countryList: ['./src/js/countryList.js', './src/sass/countryList.sass']
  },
  output: {
    filename: (chunkData) => {
      return chunkData.chunk.name === 'main' ? 'js/[name].js' : '[name].js'
    }
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src/js'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              modules: false
            }]
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    },
    {
      test: /\.(sass|scss)$/,
      include: path.resolve(__dirname, 'src/sass'),
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {}
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          url: false
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          sourceMap: true,
          plugins: () => [
            require('autoprefixer')({
              browsers: [
                'last 2 version',
                'Chrome >= 20',
                'Firefox >= 20',
                'Opera >= 12',
                'Android 2.3',
                'Android >= 4',
                'iOS >= 6',
                'Safari >= 6',
                'Explorer >= 8'
              ]
            }),
            require('cssnano')({
              preset: ['default', {
                discardComments: {
                  removeAll: true
                }
              }]
            })
          ]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }]
    },
    {
      test: /\.html$/,
      include: path.resolve(__dirname, 'src/temp'),
      use: ['raw-loader']
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/img',
        to: 'img'
      }
    ]),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ].concat(htmlPlugins)
}
