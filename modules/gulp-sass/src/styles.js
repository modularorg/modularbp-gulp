import gulp from 'gulp';
import sass from 'gulp-sass';
import paths from './paths.js';
import error from './error.js';
import { server } from './serve.js';

function styles() {
    return gulp
        .src(paths.styles.src + '**/*.scss')
        .pipe(sass())
        .on('error', function(err) {
            error(this, err, 'stack');
        })
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(server.stream());
}

export default styles;
