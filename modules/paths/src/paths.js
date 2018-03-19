const paths = {
    src: './src',
    dest: './dist',
    styles: {
        src: './src/styles/',
        dest: './dist/styles/',
        main: 'main.css'
    },
    scripts: {
        src: './src/scripts/',
        dest: './dist/scripts/',
        main: "main.js"
    },
    images: {
        src: './src/images/',
        sprite: './src/images/sprite/',
        dest: './dist/images/',
    },
    views: {
        src: './src/**/*.html',
        main: './src/*.html',
        partials: './src/partials/*.html'
    }
};

export default paths;
