'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var gulpNSP = require('gulp-nsp');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('babel', function () {
  return gulp.src('./lib/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('nsp', function(cb) {
  gulpNSP('./package.json', cb);
});

gulp.task('prepublish', ['nsp', 'babel']);
