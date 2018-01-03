var gulp = require('gulp')
var sass = require('gulp-sass')
var pug = require('gulp-pug')
var cleanCSS = require('gulp-clean-css')
var environment = process.env.ENV
var uglify = require('gulp-uglify')
var imgmin = require('gulp-imagemin')

var files = {
	sass: ['./src/**/*.sass'],
	pug: ['./src/**/*.pug'],
	script: ['./src/**/*.js'],
	imgs: ['./src/imgs/**/*']
}

gulp.task('build:html', function(){
	switch (environment) {
		case 'prod':
			return gulp.src('src/index.pug')
				.pipe(pug())
				.pipe(gulp.dest('dist'))
			breaks
		case 'dev':
		default:
			return gulp.src('src/index.pug')
				.pipe(pug({
					pretty: '\t'
				}))
				.pipe(gulp.dest('dist'))
			break
	}

})

gulp.task('build:css', function(){
	switch (environment) {
		case 'prod':
			return gulp.src('src/main.sass')
				.pipe(sass().on('error', sass.logError))
				.pipe(cleanCSS())
				.pipe(gulp.dest('dist'))
			break
		case 'dev':
		default:
			return gulp.src('src/main.sass')
				.pipe(sass().on('error', sass.logError))
				.pipe(gulp.dest('dist'))
			break
	}
})

gulp.task('build:js', function(){
	switch (environment) {
		case 'prod':
			return gulp.src('src/script/**/*.js')
				.pipe(uglify())
				.pipe(gulp.dest('dist'))
			break
		case 'dev':
		default:
			return gulp.src('src/script/**/*.js')
				.pipe(gulp.dest('dist'))
			break
	}
})

gulp.task('build:imgs',function(){
	switch (environment){
		case 'prod':
			return gulp.src('src/imgs/**/*')
				.pipe(imgmin())
				.pipe(gulp.dest('dist/imgs'))
			break
		case 'dev':
		default:
			return gulp.src('src/imgs/**/*')
				.pipe(gulp.dest('dist/imgs'))
			break
	}
})


gulp.task('build', ['build:html', 'build:css', 'build:js', 'build:imgs'])

gulp.task('build:watch', ['build'], function (){
	gulp.watch(files.sass, ['build:css'])
	gulp.watch(files.pug, ['build:html'])
	gulp.watch(files.script, ['build:js'])
	gulp.watch(files.imgs, ['build:imgs'])
})


