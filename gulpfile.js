"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();


var gulp = require('gulp'),
<<<<<<< HEAD
   svgSprite = require('gulp-svg-sprite');
var cheerio = require('gulp-cheerio');
=======
    svgSprite = require('gulp-svg-sprite');
>>>>>>> 82f12c88c297191d30fca3df2a49c8d9565a2ea4
var config = {
  shape: {
    dimension: {
      maxWidth: 500,
      maxHeight: 500
    },
      spacing: {
        padding: 0
      }
  },
  mode: {
    symbol:{
      dest: '.'
    }
  }
};

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.scss", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));


gulp.task('svg-sprite',function(cb){
<<<<<<< HEAD
	return gulp.src('source/img/*.svg')
	.pipe(svgSprite(config))
	.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[style]').removeAttr('style');
			},
			parserOptions: { xmlMode: true }
		}))
		// cheerio plugin create unnecessary string '>', so replace it.
	.pipe(gulp.dest('source/sprites/'));
=======
  return gulp.src('source/img/*.svg')
  .pipe(svgSprite(config))
  .pipe(gulp.dest('source/sprites/'));
>>>>>>> 82f12c88c297191d30fca3df2a49c8d9565a2ea4
});
