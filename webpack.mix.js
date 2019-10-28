const mix = require('laravel-mix')
const autoprefixer = require('autoprefixer')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

mix.js('src/js/countryList.js', 'dist')
  .react('src/js/main.js', 'dist/js')
  .react('src/react/countryList.js', 'dist/js')
  .sass('src/sass/countryList.sass', 'dist/css')
  .sass('src/sass/main.sass', 'dist/css')

mix.webpackConfig({
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] }
    })
  ],
})

  .options({
    processCssUrls: false,
    postCss: [
      autoprefixer
    ]
  })

if (mix.inProduction()) {
  mix.copy('*.html', '../demo/countryList')
    .copyDirectory('dist', '../demo/countryList/dist')

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
