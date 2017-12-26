'use strict';

var build_way =   'build/',

    gulp =        require('gulp'), // npm install gulp
    rigger =      require('gulp-rigger'), // npm install gulp-rigger
    rename =      require('gulp-rename'), // npm install gulp-rename
    watch =       require('gulp-watch'), // npm install --save-dev gulp-watch
    prefixer =    require('gulp-autoprefixer'), // npm install --save-dev gulp-autoprefixer
    uglify =      require('gulp-uglify'), // npm install --save-dev gulp-uglify
    less =        require('gulp-less'), // npm install gulp-less
    cssmin =      require('gulp-csso'), // npm install --save-dev gulp-clean-css
    browserSync = require("browser-sync"), // npm install browser-sync
    reload =      browserSync.reload; 

var path = {
    build: {
        html:   build_way,
        js:     build_way + 'js/',
        css:    build_way + 'css/'
    },
    update: {
        html:  'src/',
        js:    'src/js/',
        css:   'src/css/'
    },
    src: {
        html:  'src/*.html',
        js:    'src/js/main.js',
        cntr:    'src/js/cntr.js',
        style: 'src/css/main.less',
        cntr_style: 'src/css/cntr.less'
    },
    watch: {
        html:  'src/**/*.html',
        js:    'src/js/**/*.js',
        style: 'src/css/**/*.less'
    },
    clean: './' + build_way
};

var config = {
    server: {
        baseDir: './' + build_way
    },
    tunnel: false,
    host: 'localhost',
    port: 8080,
    logPrefix: "koterion"
};

var plugins = {
     autoprefixer: {
        options: {
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
            ],
            cascade: false
        }
    }
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('cntr:build', function () {
    gulp.src(path.src.cntr)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(rename('cntr.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(less()) 
        .pipe(prefixer(plugins.autoprefixer.option))
        .pipe(gulp.dest(path.build.css))
        .pipe(rename('main.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('cntr_style:build', function () {
    gulp.src(path.src.cntr_style)
        .pipe(less())
        .pipe(prefixer(plugins.autoprefixer.option))
        .pipe(gulp.dest(path.build.css))
        .pipe(rename('cntr.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'js:build',
    'cntr:build',
    'style:build',
    'cntr_style:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function() {
        gulp.start('html:build');
    });
    watch([path.watch.style], function() {
        gulp.start('style:build');
        gulp.start('cntr_style:build');
    });
    watch([path.watch.js], function() {
        gulp.start('js:build');
        gulp.start('cntr:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', ['build', 'webserver', 'watch']);

