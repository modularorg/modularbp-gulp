import gulp from 'gulp';
import swig from 'gulp-swig';
import data from 'gulp-data';
import yaml from 'js-yaml';
import fs from 'fs';
import paths from '../mconfig.json';
import error from './error.js';

function views() {
    return gulp
        .src(paths.views.src + '*.html')
        .pipe(data(function(file) {
            return yaml.safeLoad(fs.readFileSync(paths.src + 'data/data.yml', 'utf8'));
        }))
        .pipe(swig({
            defaults: { cache: false }
        }))
        .on('error', function(err) {
            error(this, err);
        })
        .pipe(gulp.dest(paths.dest));
}

export default views;
