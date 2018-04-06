import gulp from 'gulp';
import hb from 'gulp-hb';
import layouts from 'handlebars-layouts';
import paths from './paths.js';
import error from './error.js';

function views() {
    return gulp
        .src(paths.views.src + '*.html')
        .pipe(hb()
            .partials(paths.views.partials + '*.html')
            .helpers(layouts)
        )
        .on('error', function(err) {
            error(this, err);
        })
        .pipe(gulp.dest(paths.dest));
}

export default views;
