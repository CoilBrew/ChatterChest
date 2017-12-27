var gulp = require("gulp");
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var config = require('./webpack.config.js');
var exec = require('child_process').exec;

gulp.task("compile", function() {
    var stream =
        gulp.src(['src/index.jsx'])
        .pipe(named())
        .pipe(plumber())
        .pipe(webpack( config ))
        .pipe(gulp.dest("build/src"));
    return stream;
})

gulp.task('test', function() {
    exec('npm test', function (err, stdout, sterr) {
        console.log(stdout);
        console.log(sterr);
    });
});

gulp.task('develop', ['watch'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["build/**/*.*"],
        browser: "google chrome",
        port: 7000,
	});
    gulp.watch('src/**/*', ['compile-watch']);
});
gulp.task('compile-watch', ['compile', 'test'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch', ['compile', 'test'], function () {
  var stream = nodemon({
                 script: 'public/backend.js' // run ES5 code
               , watch: ['src/**/*','public/'] // watch ES2015 code
               , tasks: ['compile-watch'] // compile synchronously onChange
               })
           });
