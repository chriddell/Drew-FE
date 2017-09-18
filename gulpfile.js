'use strict';

// Packages

const gulp 					= require( 'gulp' ),
			sass 					= require( 'gulp-sass' ),
			concat				= require( 'gulp-concat' ),
			uglify				= require( 'gulp-uglify' ),
			jshint				= require( 'gulp-jshint' ),
			pump					= require( 'pump' ),
			replace				= require( 'gulp-replace' ),
			rename				= require( 'gulp-rename' ),
			autoprefixer	= require( 'gulp-autoprefixer' ),
			browserSync		= require( 'browser-sync' ).create(),
			reload				= browserSync.reload;

// Directories

const appDir		= 'app',
			cssDir		= appDir + '/css',
			jsDir			= appDir + '/js',
			buildDir	= 'dist';

// Watch / Browser-sync

gulp.task( 'watch', function(){

	browserSync.init({
		server: {
			baseDir: appDir
		}
	});

	gulp.watch( cssDir + '/scss/**/*.scss', [ 'sass:dev' ] );
	gulp.watch( appDir + '/index.html' ).on( 'change', browserSync.reload);
	gulp.watch( [ jsDir + '/*.js', '!' + jsDir + '/app.js' ], [ 'js' ] );
});

// Styles

gulp.task( 'sass:dev', function(){

	return gulp.src( cssDir + '/scss/**/*.scss')
		.pipe( sass({ 
				outputStyle: 'expanded',
				includePaths: [ 'node_modules/susy/sass' ]
			})
			.on( 'error', sass.logError )
		)
		.pipe( autoprefixer({
				browsers: [ 'last 2 versions' ],
				cascade: false
		}))
		.pipe( gulp.dest( cssDir ) )
		.pipe( reload( { stream: true } ) );
});

gulp.task( 'sass:dist', function(){

	return gulp.src( cssDir + '/scss/**/*.scss')
		.pipe(
			sass({ 
				outputStyle: 'compact',
				includePaths: [ 'node_modules/susy/sass' ]
			 })
			.on( 'error', sass.logError )
		)
		.pipe( autoprefixer({
				browsers: [ 'last 2 versions' ],
				cascade: false
		}))
		.pipe( rename( 'style.min.css' ) )
		.pipe( gulp.dest( buildDir ) );
});

// Scripts

gulp.task( 'js', function(){

	return gulp.src( [ jsDir + '/*.js', '!' + jsDir + '/app.js' ] )
		.pipe( jshint() )
		.pipe( jshint.reporter( 'jshint-stylish' ) )
		.pipe( concat( 'app.js' ) )
		.pipe( gulp.dest( jsDir ) )
		.pipe( reload( { stream: true } ) );
});

gulp.task( 'compress', [ 'js' ], function(){

	return gulp.src( jsDir + '/app.js' )
		.pipe( uglify() )
		.pipe( rename( 'app.min.js' ) )
		.pipe( gulp.dest( buildDir ) );
})

// Copy (HTML & media)

gulp.task( 'copy', function(){

	gulp.src( appDir + '/index.html' )
		.pipe( replace( 'css/style.css', 'style.min.css' ) )
		.pipe( replace( 'js/app.js', 'app.min.js' ) )
		.pipe( gulp.dest( buildDir ) );
});

// Commands

gulp.task( 'default', [ 'watch' ] );
gulp.task( 'dist', [ 'sass:dist', 'compress', 'copy' ] );