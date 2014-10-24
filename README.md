# imagemin-pngout [![Build Status](http://img.shields.io/travis/imagemin/imagemin-pngout.svg?style=flat)](https://travis-ci.org/imagemin/imagemin-pngout) [![Build status](https://ci.appveyor.com/api/projects/status/mqx38sxvr436et4j)](https://ci.appveyor.com/project/ShinnosukeWatanabe/imagemin-pngout)

> pngout imagemin plugin


## Install

```bash
$ npm install --save imagemin-pngout
```


## Usage

```js
var Imagemin = require('imagemin');
var pngout = require('imagemin-pngout');

var imagemin = new Imagemin()
	.src('images/*.png')
	.dest('build/images')
	.use(pngout({ strategy: 1 }));

imagemin.run(function (err, files) {
	if (err) {
		throw err;
	}

	console.log('Files optimized successfully!'); 
});
```

You can also use this plugin with [gulp](http://gulpjs.com):

```js
var gulp = require('gulp');
var pngout = require('imagemin-pngout');

gulp.task('default', function () {
	return gulp.src('images/*.png')
		.pipe(pngout({ strategy: 1 })())
		.pipe(gulp.dest('build/images'));
});
```


## Options

### strategy

Type: `Number`  
Default: `0`

Select a strategy level between `0` and `4`:

`0.` Extreme  
`1.` Intense  
`2.` Longest match  
`3.` Huffman only  
`4.` Uncompressed  

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
