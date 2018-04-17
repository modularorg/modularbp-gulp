import gulp from 'gulp';
import hb from 'gulp-hb';
import rename from 'gulp-rename';
import layouts from 'handlebars-layouts';
import paths from '../mconfig.json';
import error from './error.js';

const data = {
    title: 'Title'
}

function views() {
    return gulp
        .src(paths.views.src + '*.hbs')
        .pipe(hb()
            .partials(paths.views.partials + '*.hbs')
            .helpers(layouts)
            .data(data)
        )
        .on('error', function(err) {
            error(this, err);
        })
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest(paths.dest));
}

export default views;
