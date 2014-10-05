var fs = require('fs');
var gulp = require('gulp');
var esperanto = require('gulp-esperanto');
var imports = require('gulp-imports');
var esnext = require('gulp-esnext');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

var del = require('del');

var paths = {
  src: 'src/**/*.js',
  src_dest: 'lib',
  lib: 'lib/**/*.js',
  lib_dest: 'dist',
  html: 'src/**/*.html',
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['lib', 'src/**/imports.js'], cb);
});


//  copies all the component index files
gulp.task('copy-cmp-index', function() {

  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.src_dest));
});


//  creates an imports file
gulp.task('create-imports', function() {

  return gulp.src(paths.src)
    .pipe(imports())
    .pipe(concat('imports.js'))
    .pipe(gulp.dest('src'));

  });

});


//  converts node node compatible es6 to es5
gulp.task('es6-node', function() {

  return gulp.src(paths.src)
    .pipe(esperanto())
    .pipe(esnext({
      generator: false,
      modules: false
    }))
    .pipe(gulp.dest(paths.src_dest));
});


//  before starting we need to prepare the filesytem
gulp.task('prestart', ['clean'], function (cb) {

  runSequence(
    'create-imports',
    'copy-cmp-index',
    'es6-node' ,
    cb
  );
});


// Rerun the task when a file changes
gulp.task('watch', function() {

  gulp.watch(paths.src, ['es6-node']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'prestart']);
