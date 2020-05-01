import gulp from 'gulp';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import paths from '../mconfig.json';
import error from './error.js';
import { server } from './serve.js';

function styles() {
    return gulp
        .src(paths.styles.src + paths.styles.main + '.less')
        .pipe(less())
        .on('error', function(err) {
            error(this, err, 'stack');
        })
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(server.stream());
}

export default styles;
