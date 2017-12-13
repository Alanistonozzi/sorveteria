var gulp = require('gulp');
var fileInclude = require('gulp-file-include');
var htmlmin = require('gulp-htmlmin');

gulp.task('incluir-html', function(){
	gulp.src('src/index.html')
		.pipe(fileInclude({
			prefix: '{{',
			suffix: '}}',
			basepath: '@file'
		}))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'));
});
