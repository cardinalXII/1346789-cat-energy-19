var gulp = require('gulp'),
   svgSprite = require('gulp-svg-sprite');
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

gulp.task('svg-sprite',function(cb){
	return gulp.src('source/img/*.svg')
	.pipe(svgSprite(config))
	.pipe(gulp.dest('sprites'));
});
