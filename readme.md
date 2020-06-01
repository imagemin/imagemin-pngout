# imagemin-pngout [![Build Status](http://img.shields.io/travis/imagemin/imagemin-pngout.svg?style=flat)](https://travis-ci.org/imagemin/imagemin-pngout)

> pngout imagemin plugin


## Install

```
$ npm install imagemin-pngout
```


## Usage

```js
const imagemin = require('imagemin');
const imageminPngout = require('imagemin-pngout');

(async () => {
	await imagemin(['images/*.png'], {
		destination: 'build/images',
		plugins: [
			imageminPngout()
		]
	});

	console.log('Images optimized');
})();
```


## API

### imageminPngout([options])(buffer)

Returns a `Promise<Buffer>`.

#### options

Type: `Object`

##### strategy

Type: `number`<br>
Default: `0`

Select a strategy level between `0` and `4`:

`0.` Extreme
`1.` Intense
`2.` Longest match
`3.` Huffman only
`4.` Uncompressed


## License

MIT © Imagemin
