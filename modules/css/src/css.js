import gulp from 'gulp';
import postcss from 'gulp-postcss';
import cssimport from 'postcss-import';
import cssnext from 'postcss-cssnext';
import pxtorem from 'postcss-pxtorem';
import paths from './paths.js';
import error from './error.js';
import { server } from './serve.js';

const plugins = [
    cssimport(),
    cssnext(),
    pxtorem({
        propList: ['*']
    })
];

function css() {
    return gulp
    .src(paths.styles.src + paths.styles.main)
    .pipe(postcss(plugins))
    .on('error', function(err) {
        error(this, err);
    })
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream());
}

export default css;
