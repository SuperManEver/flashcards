var gulp        = require('gulp');
var sass        = require('gulp-sass');

var bs          = require('browser-sync').create();
var webpack     = require('webpack-stream');
var config      = require('./webpack.config.js');

gulp.task('browser-sync', () => {
  bs.init({
    server : {
      baseDir : "./"
    }
  });
});

gulp.task('sass', () => {
  return gulp.src('scss/main.scss')
   .pipe(sass())
   .pipe(gulp.dest('build/'))
   .pipe(bs.reload({ stream : true }));
});

gulp.task('webpack', () => {
  return gulp.src('src/app.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('build/'))
    .pipe(bs.reload({ stream : true }));
});

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch('src/**/*.js', ['webpack']);
  gulp.watch('src/**/*.jsx', ['webpack']);
  gulp.watch('build/*.*').on('change', bs.reload);
});
