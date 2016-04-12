var gulp = require('gulp')
, fs = require('fs')
, gutil = require('gulp-util')
, browserify = require('browserify')
, watchify = require('watchify')
, babelify = require('babelify')
, uglify = require('gulp-uglify');

gulp.task('default', function () {
    var b = browserify({
        entries: ['./src/app.jsx'],
        extensions: ['.jsx'],
        debug: true,
        packageCache: {},
        plugin: [watchify]
    });

    function bundle(file) {
        return b.transform("babelify", {presets: ["es2015", "react"]})
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(fs.createWriteStream("./main.js"));
    };

    bundle();
    b.on('update', bundle);
});
