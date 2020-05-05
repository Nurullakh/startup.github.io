let gulp = require('gulp')
let rename = require('gulp-rename')
let sass = require('gulp-sass')
let autoprefixer  = require('gulp-autoprefixer')
let sourcemaps  = require('gulp-sourcemaps')
let browsersync  = require('browser-sync').create()

function css_style(done) {
	gulp.src('./sass/**/*.sass')
		.pipe(sourcemaps.init())
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css/'))
		.pipe(browsersync.stream())
	done()
}

function sync(done) {
	browsersync.init({
		server: {
			baseDir: "./"
		},
		port: 3000
	})
}

function browserReload(done) {
	browsersync.reload()
	done()
}

function watchSass() {
	gulp.watch("./sass/**/*", css_style)
}

function watchFiles() {
	gulp.watch("./sass/**/*", css_style)
	gulp.watch("./**/*.html", browserReload)
	gulp.watch("./**/*.js", browserReload)
}

gulp.task('default', gulp.parallel(watchFiles, sync))
