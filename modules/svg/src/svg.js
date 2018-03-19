import gulp from 'gulp';
import path from 'path';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';
import paths from './paths.js';
import error from './error.js';

function svg() {
    return gulp
    .src(paths.images.sprite + '**/*.svg', { base: paths.images.sprite })
    .pipe(rename(function(file) {
        if (file.dirname != '.') {
            const name = file.dirname.split(path.sep);
            name.push(file.basename);
            file.basename = name.join('-');
        }
    }))
    .pipe(svgstore())
    .on('error', function(err) {
        error(this, err);
    })
    .pipe(gulp.dest(paths.images.dest))
}

export default svg;
