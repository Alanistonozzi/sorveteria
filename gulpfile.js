var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var cleanCSS = require('gulp-clean-css');
var environment = process.env.ENV;
var uglify = require('uglify-js')

var files = {
	sass: ['./src/**/*.sass'],
	pug: ['./src/**/*.pug']
	script: ["./src/**/script.js"]
};

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

gulp.task("build:js", function(){
	switch (environment) {
		case 'prod':
			return gulp.src('src/script/script.js')
				.pipe(uglify())
				.pipe(gulp.dest('dist'));
			break;
		case 'dev':
		default:
			return gulp.src('src/script/script.js')
				.pipe(uglify({
					pretty: '\t'
				}))
				.pipe(gulp.dest('dist'));
			break;
	
	}
});

gulp.task('build', ['build:html', 'build:css', 'build:js']);

gulp.task('build:watch', ['build'], function (){
	gulp.watch(files.sass, ['build:css']);
	gulp.watch(files.pug, ['build:html']);
	gulp.watch(files.script, ['build:js']);
});


