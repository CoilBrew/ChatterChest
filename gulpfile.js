var gulp = require("gulp");
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');

var config = require('./webpack.config.js');

gulp.task('developReact', ['webpack'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        startPath : "public/index.html"
    });
    gulp.watch('src/**/*', ['webpack-watch']);
});
gulp.task('webpack-watch', ['webpack'], function (done) {
    browserSync.reload();
    done();
});

gulp.task("webpack", function() {
    var stream =
        gulp.src(['src/index.jsx'])
        .pipe(named())
        .pipe(plumber())
        .pipe(webpack( config ))
        .pipe(gulp.dest("build/src"));
    return stream;
});

gulp.task("backendJS", function() {
    var stream =
        gulp.src(['public/backend.js'])
        .pipe(named())
        .pipe(plumber())
        .pipe(gulp.dest("build/src"));
        gulp.src(['public/index.html'])
        .pipe(named())
        .pipe(plumber())
        .pipe(gulp.dest("build/src"));
    return stream;
})

gulp.task('BSRefresh', function (done) {
    browserSync.reload();
    done();
});

gulp.task('develop', ['watch'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["build/**/*.*"],
        browser: "google chrome",
        port: 7000,
	});
});

gulp.task('watch', ['webpack', 'backendJS', 'BSRefresh'], function () {
  var stream = nodemon({
                 script: 'build/src/backend.js' // run ES5 code
               , watch: 'src' // watch ES2015 code
               , tasks: ['webpack','backendJS','BSRefresh'] // compile synchronously onChange
               })
           });
