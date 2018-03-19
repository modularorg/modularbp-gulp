import browserSync from 'browser-sync';
import paths from './paths.js';

export const server = browserSync.create();

function serve(done) {
    server.init({
        server: {
            baseDir: paths.dest,
            serveStaticOptions: {
                extensions: ['html']
            }
        }
    });
    done();
}

export default serve;
