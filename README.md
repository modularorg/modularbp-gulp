<p align="center">
    <a href="https://github.com/modularbp/modular-gulp">
        <img src="https://user-images.githubusercontent.com/4596862/37633827-4ed88a28-2bca-11e8-9f5e-f0ce25c30f0e.png" height="140">
    </a>
</p>
<h1 align="center">Modular Gulp</h1>
<p align="center"><a href="https://github.com/gulpjs/gulp/">Gulp</a> modules for <a href="https://github.com/modularbp/modular-boilerplate">Modular Boilerplate</a>'s build system</p>

## Installation
```sh
# install gulp
npm install gulp -g

# init a mbp project and choose gulp
mbp init

# or add it to an existing mbp project
mbp install gulp

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

### Scripts
| Module | Description |
| ------ | ----------- |
| [gulp-js] | ES6 modules with [Babel] |

### Views
| Module | Description |
| ------ | ----------- |
| [gulp-hbs] | [Handlebars] static site generator style |

### Others
| Module | Description |
| ------ | ----------- |
| [gulp-error] | Error handling |
| [gulp-notify] | Notification handling |
| [gulp-paths] | Your project files paths |
| [gulp-serve] | Live reload and sync browsers with [Browsersync] |
| [gulp-svg] | Generate svg icons sprite |
| [gulp-watch] | Watch for files changes |

[Modular Boilerplate]: https://github.com/modularbp/modular-boilerplate#readme
[gulp]: https://github.com/modularbp/modular-gulp
[gulp-css]: https://github.com/modularbp/modular-gulp/tree/master/modules/gulp-css
[gulp-error]: https://github.com/modularbp/modular-gulp/tree/master/modules/gulp-error
[gulp-hbs]: https://github.com/modularbp/modular-gulp/tree/master/modules/gulp-hbs
[gulp-js]: https://github.com/modularbp/modular-gulp/tree/master/modules/gulp-js
[gulp-notify]: https://github.com/modularbp/modular-gulp/tree/master/modules/gulp-notify
[gulp-paths]: https://github.com/modularbp/modular-gulp/tree/master/modules/gulp-paths
[gulp-serve]: https://github.com/modularbp/modular-gulp/tree/master/modules/gulp-serve
[gulp-svg]: https://github.com/modularbp/modular-gulp/tree/master/modules/gulp-svg
[gulp-watch]: https://github.com/modularbp/modular-gulp/tree/master/modules/gulp-watch

[cssnext]: https://github.com/MoOx/postcss-cssnext
[PostCSS]: https://github.com/postcss/postcss
[Handlebars]: https://github.com/wycats/handlebars.js
[Babel]: https://github.com/babel/babel
[Browsersync]: https://github.com/Browsersync/browser-sync
