// /////////////////////////////////////////////////
// GULP
// /////////////////////////////////////////////////

var gulp = require('gulp');

// /////////////////////////////////////////////////
// GULP tasks
// /////////////////////////////////////////////////

var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var browserSync = require("browser-sync");
var reload = browserSync.reload;

// /////////////////////////////////////////////////
// STYLES
// /////////////////////////////////////////////////

gulp.task('styles', function(){
  return gulp.src('src/sass/**/*.scss')
  	.pipe(plumber())
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('src/pre-css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream:true}));
});

// /////////////////////////////////////////////////
// HTML Task
// /////////////////////////////////////////////////

gulp.task("html", function(){
    gulp.src("dist/**/*.html")
    .pipe(reload({stream:true}));
});

// /////////////////////////////////////////////////
// Browser-Sync Task
// /////////////////////////////////////////////////

gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir:"./dist/"
    }
  })
});

// /////////////////////////////////////////////////
// WATCH
// /////////////////////////////////////////////////
gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['styles']); 
  gulp.watch('dist/*.html', ['html']);
});

// /////////////////////////////////////////////////
// UGLIFY MAIN.JS
// /////////////////////////////////////////////////

// gulp.task('uglify', function(){
// 	gulp.src('src/js/*')
// 		.pipe(uglify())
// 		.pipe(gulp.dest('dist/js/'));
// });


// /////////////////////////////////////////////////
// Default Task
// /////////////////////////////////////////////////

gulp.task('default',[ 'styles', 'html', 'browser-sync', 'watch' ]);