const mix = require('laravel-mix')
const autoprefixer = require('autoprefixer')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

mix.js('src/js/countryList.js', 'dist/js/index.js')
  .react('src/js/main.js', 'dist/js')
  .react('src/react/index.js', 'dist')
  .sass('src/sass/styles.sass', 'dist')
  .sass('src/sass/main.sass', 'dist/css')

  .webpackConfig({
    plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['./'] }
      })
    ]
  })

  .options({
    processCssUrls: false,
    postCss: [
      autoprefixer
    ]
  })

if (mix.inProduction()) {
  mix.webpackConfig({
      externals: {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        },
        'prop-types': {
          root: 'PropTypes',
          commonjs: 'prop-types',
          commonjs2: 'prop-types',
          amd: 'prop-types'
        }
      },
      output: {
        libraryTarget: 'umd'
      }
    })
}
