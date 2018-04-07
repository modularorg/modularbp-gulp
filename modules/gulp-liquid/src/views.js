import gulp from 'gulp';
import liquify from 'gulp-liquify';
import rename from 'gulp-rename';
import paths from './paths.js';
import error from './error.js';

const data = {
    title: 'Title'
}

const filters = {
    t: function(val) {
        return val;
    }
}

function views() {
    return gulp
        .src(paths.views.src + '**/*.liquid')
        .pipe(liquify(data, {
            base: paths.views.partials,
            filters: filters
        }))
        .on('error', function(err) {
            error(this, err);
        })
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest(paths.dest));
}

export default views;
