var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var cleanCSS = require('gulp-clean-css');

gulp.task('build:html', function(){
	return gulp.src('src/index.pug')
		.pipe(pug())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build:css', function(){
	return gulp.src('src/main.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist'));
});

gulp.task('build', ['build:html', 'build:css']);