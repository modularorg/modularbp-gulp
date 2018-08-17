# @modularbp/gulp-css
Transform [cssnext] in CSS with [PostCSS]

[cssnext]: https://github.com/MoOx/postcss-cssnext
[PostCSS]: https://github.com/postcss/postcss

## Install
```sh
npm install @modularbp/gulp-css --save-dev
```

## Dependencies
| Module | Description |
| ------ | ----------- |
| [@modularbp/gulp-error] | Error handling |
| [@modularbp/gulp-serve] | Auto inject styles in your browsers |
| [gulp] | The build system |
| [gulp-postcss] | Transform to CSS |
| [postcss-cssnext] | Use new CSS specs |
| [postcss-import] | Import other style modules |
| [postcss-pxtorem] | Convert pixel units to rem |

[@modularbp/gulp-error]: https://github.com/modularbp/modular-gulp/tree/master/modules/gulp-error
[@modularbp/gulp-serve]: https://github.com/modularbp/modular-gulp/tree/master/modules/gulp-serve
[gulp]: https://github.com/gulpjs/gulp
[gulp-postcss]: https://github.com/postcss/gulp-postcss
[postcss-cssnext]: https://github.com/MoOx/postcss-cssnext
[postcss-import]: https://github.com/postcss/postcss-import
[postcss-pxtorem]: https://github.com/cuth/postcss-pxtorem
