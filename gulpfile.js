var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var webpackConfig = require('./webpack.config.js');

console.log('\u001b[32m' + '✓ NODE_ENV = ' + process.env.NODE_ENV);

gulp.task('clean', function() {
  return del.sync(['dist']);
});

gulp.task('build', function() {
  return gulp.src('./js/*.js')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js-minify', function() {
  return gulp.src('./dist/js/*.js')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(uglify())
    .pipe(concat('application.min.js'))
    .pipe(gulp.dest('./dist/min'));
});

gulp.task('css-minify', function() {
  return gulp.src('./dist/js/*.css')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(uglify())
    .pipe(concat('bundle.min.css'))
    .pipe(gulp.dest('./dist/min'));
});

gulp.task('watch', function() {
  gulp.watch(['./js/*.js'], ['build']);
  gulp.watch(['./js/*.vue'], ['build']);
  gulp.watch(['./js/*.html'], ['build']);
  gulp.watch(['./sass/*.scss'], ['sass']);
});

gulp.task('default', ['clean', 'build', 'sass', 'watch']);
gulp.task('minify', ['js-minify', 'css-minify']);
gulp.task('production', ['clean', 'build', 'sass', 'minify']);
