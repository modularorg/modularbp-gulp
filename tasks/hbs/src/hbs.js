import gulp from 'gulp';
import hb from 'gulp-hb';
import layouts from 'handlebars-layouts';
import paths from './paths.js';
import error from './error.js';

function hbs() {
    return gulp
    .src(paths.views.main)
    .pipe(hb()
        .partials(paths.views.partials)
        .helpers(layouts)
    )
    .on('error', function(err) {
        error(this, err);
    })
    .pipe(gulp.dest(paths.dest));
}

export default hbs;
