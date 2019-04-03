const mix = require('laravel-mix')
const autoprefixer = require('autoprefixer')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

mix.js('src/js/countryList.js', 'dist')
  .js('src/js/main.js', 'dist/js')
  .sass('src/sass/countryList.sass', 'dist/css')
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
  mix.copy('*.html', '../demo/countryList')
    .copyDirectory('dist', '../demo/countryList/dist')
}
