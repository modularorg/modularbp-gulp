import gulp from 'gulp';
import css from './tasks/css.js';
import js from './tasks/js.js';
import svg from './tasks/svg.js';
import hbs from './tasks/hbs.js';
import serve from './tasks/serve.js';
import watch from './tasks/watch.js';

const dev = gulp.series(css, js, svg, hbs, serve, watch);
export default dev;
