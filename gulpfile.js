var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var cleanCSS = require('gulp-clean-css');
var environment = process.env.ENV;

gulp.task('build:html', function(){
	switch (environment) {
		case 'prod':
			return gulp.src('src/index.pug')
				.pipe(pug())
				.pipe(gulp.dest('dist'));
			break;
		case 'dev':
		default:
			return gulp.src('src/index.pug')
				.pipe(pug({
					pretty: '\t'
				}))
				.pipe(gulp.dest('dist'));
			break;
	}

});

gulp.task('build:css', function(){
	switch (environment) {
		case 'prod':
			return gulp.src('src/main.sass')
				.pipe(sass().on('error', sass.logError))
				.pipe(cleanCSS())
				.pipe(gulp.dest('dist'));
			break;
		case 'dev':
		default:
			return gulp.src('src/main.sass')
				.pipe(sass().on('error', sass.logError))
				.pipe(gulp.dest('dist'));
			break;
	}
});

gulp.task('build', ['build:html', 'build:css']);
