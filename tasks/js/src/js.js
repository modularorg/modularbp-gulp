import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import paths from './paths.js';
import error from './error.js';

function js() {
    return browserify({
        entries: paths.scripts.src + paths.scripts.main,
        debug: true
    })
    .transform(babelify, { presets: ['env'] })
    .bundle()
    .on('error', function(err) {
        error(this, err, 'stack');
    })
    .pipe(source(paths.scripts.main))
    .pipe(buffer())
    .pipe(gulp.dest(paths.scripts.dest));
}

export default js;
