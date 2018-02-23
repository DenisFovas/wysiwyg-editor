let gulp = require('gulp');
let browserify = require('browserify');
let src = require('vinyl-source-stream');
let tsify = require('tsify');
let watchify = require('watchify');
let gutil = require('gulp-util');
let uglify = require('gulp-uglify');
let sourceMaps = require('gulp-sourcemaps');
let buffer = require('vinyl-buffer');

let paths = {
    pages: ['src/*.html']
};

let watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
})).plugin(tsify);

gulp.task("copy-html", () => {
    return gulp.src(paths.pages).pipe(gulp.dest('dist'));
});

function bundle() {
    return watchedBrowserify
        .plugin(tsify)
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts']
        })
        .bundle()
        .pipe(src('bundle.js'))
        .pipe(buffer())
        .pipe(sourceMaps.init({loadMaps: true}))
        // .pipe(uglify())
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest("dist"));
}

gulp.task('default', ['copy-html'], bundle);
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', gutil.log);
