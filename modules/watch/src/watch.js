import gulp from 'gulp';
import paths from './paths.js';
import css from './css.js';
import js from './js.js';
import svg from './svg.js';
import hbs from './hbs.js';
import { server } from './serve.js';

function watch() {
    gulp.watch(paths.styles.src, css);
    gulp.watch(paths.scripts.src, gulp.series(js, reload));
    gulp.watch(paths.images.src, gulp.series(svg, reload));
    gulp.watch(paths.views.src, gulp.series(hbs, reload));
}

function reload(done) {
    server.reload();
    done();
}

export default watch;
