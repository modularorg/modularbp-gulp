<p align="center">
    <a href="https://github.com/modularorg/modularbp-gulp">
        <img src="https://user-images.githubusercontent.com/4596862/37635200-aa3271b2-2bd0-11e8-8a65-9cafa0addd67.png" height="140">
    </a>
</p>
<h1 align="center">modularBP gulp</h1>
<p align="center"><a href="https://github.com/gulpjs/gulp/">gulp</a> modules for <a href="https://github.com/modularorg/modularbp">modularBP</a>.</p>

## Installation
```sh
# install gulp
npm install gulp -g

# install mbp
npm install mbp -g

# init a mbp project and choose gulp
mbp init
```

## Usage
```sh
# default watch task
gulp
```

## Modules
| Module | Description |
| ------ | ----------- |
| [gulp] | The main gulpfile |

### Styles
| Module | Description |
| ------ | ----------- |
| [gulp-css] | [cssnext] with [PostCSS] |
| [gulp-sass] | scss with [Sass] |

### Scripts
| Module | Description |
| ------ | ----------- |
| [gulp-js] | ES6 modules with [Babel] |

### Views
| Module | Description |
| ------ | ----------- |
| [gulp-hbs] | [Handlebars] templates |
| [gulp-liquid] | [Liquid] templates |

### Others
| Module | Description |
| ------ | ----------- |
| [gulp-build] | Minify files |
| [gulp-error] | Error handling |
| [gulp-notify] | Notification handling |
| [gulp-serve] | Live reload and sync browsers with [Browsersync] |
| [gulp-svg] | Generate svg icons sprite |
| [gulp-watch] | Watch for files changes |

[modularBP]: https://github.com/modularorg/modularbp#readme
[gulp]: https://github.com/modularorg/modularbp-gulp
[gulp-css]: https://github.com/modularorg/modularbp-gulp/tree/master/modules/gulp-css
[gulp-sass]: https://github.com/modularorg/modularbp-gulp/tree/master/modules/gulp-sass
[gulp-js]: https://github.com/modularorg/modularbp-gulp/tree/master/modules/gulp-js
[gulp-hbs]: https://github.com/modularorg/modularbp-gulp/tree/master/modules/gulp-hbs
[gulp-liquid]: https://github.com/modularorg/modularbp-gulp/tree/master/modules/gulp-liquid
[gulp-build]: https://github.com/modularorg/modularbp-gulp/tree/master/modules/gulp-build
[gulp-error]: https://github.com/modularorg/modularbp-gulp/tree/master/modules/gulp-error
[gulp-notify]: https://github.com/modularorg/modularbp-gulp/tree/master/modules/gulp-notify
[gulp-serve]: https://github.com/modularorg/modularbp-gulp/tree/master/modules/gulp-serve
[gulp-svg]: https://github.com/modularorg/modularbp-gulp/tree/master/modules/gulp-svg
[gulp-watch]: https://github.com/modularorg/modularbp-gulp/tree/master/modules/gulp-watch

[cssnext]: https://github.com/MoOx/postcss-cssnext
[PostCSS]: https://github.com/postcss/postcss
[Sass]: https://github.com/sass/libsass
[Handlebars]: https://github.com/wycats/handlebars.js
[Liquid]: https://github.com/Shopify/liquid
[Babel]: https://github.com/babel/babel
[Browsersync]: https://github.com/Browsersync/browser-sync
