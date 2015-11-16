'use strict';
	
	var gulp = require('gulp'),
		webserver = require('gulp-webserver'),
		concat = require('gulp-concat');

	var bc = './bower_components/';
	
	gulp.task('js', function() {
	  gulp.src('dev/app/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/app/'))
	});
	
	gulp.task('html', function() {
		gulp.src('dev/**/*.html')
		.pipe(gulp.dest('dist/'))
	});
	gulp.task('css', function() {
	  gulp.src('dev/css/**/*')
		.pipe(gulp.dest('dist/css/'));
	});

	gulp.task('img', function() {
	  gulp.src('dev/images/**/*')
		.pipe(gulp.dest('dist/images/'));
	});
	
	gulp.task('watch', function() {
		gulp.watch('dev/app/*.js', ['js']);
		gulp.watch('dev/css/*.css', ['css']);
		gulp.watch('dev/*.html', ['html']);
	});
	
	gulp.task('libs', function() {
		gulp.src(bc+'jquery/dist/jquery.js')
		.pipe(gulp.dest('./dist/libs/jquery/'));
		
		gulp.src([bc+'angular/angular.js',
		bc+'angular-animate/angular-animate.js',
		bc+'angular-cookies/angular-cookies.js',
		bc+'angular-loader/angular-loader.js',
		bc+'angular-resource/angular-resource.js',
		bc+'angular-route/angular-ui-router.js',
		bc+'firebase/firebase.js',
		bc+'angularfire/dist/angularfire.js'
		])
		.pipe(gulp.dest('./dist/libs/angular/'));
	});
	
	gulp.task('webserver', function() {
		gulp.src('dist/')
			.pipe(webserver({
			livereload: true,
			open: true
		}));
	});
	
	gulp.task('default', [
		'libs',
		'css',
		'html',
		'img',
		'js',
		'webserver',
		'watch'
	]);