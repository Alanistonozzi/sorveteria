var gulp = require('gulp');
var fileInclude = require('gulp-file-include');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');

gulp.task('build:html', function(){
	gulp.src('src/index.html')
		.pipe(fileInclude({
			prefix: '{{',
			suffix: '}}',
			basepath: '@file'
		}))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build:css', function(){
	gulp.src('src/styles/main.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/styles'));
});