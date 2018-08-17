import gulp from 'gulp';
import styles from './build/styles.js';
import scripts from './build/scripts.js';
import views from './build/views.js';
import svgs from './build/svgs.js';
import serve from './build/serve.js';
import watch from './build/watch.js';
import { buildStyles, buildScripts, buildViews } from './build/build.js';

const compile = gulp.series(styles, scripts, views, svgs);
const main = gulp.series(compile, serve, watch);
const build = gulp.series(compile, buildStyles, buildScripts, buildViews);

gulp.task('default', main);
gulp.task('compile', compile);
gulp.task('build', build);
