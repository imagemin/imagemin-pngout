# imagemin-pngout [![Build Status](https://travis-ci.org/kevva/imagemin-pngout.svg?branch=master)](https://travis-ci.org/kevva/imagemin-pngout)

> pngout image-min plugin

## Install

```bash
$ npm install --save imagemin-pngout
```

## Usage

```js
var Imagemin = require('image-min');
var pngout = require('imagemin-pngout');

var imagemin = new Imagemin()
    .src('foo.png')
    .dest('foo-optimized.png')
    .use(pngout({ strategy: 1 }));

imagemin.optimize();
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

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
