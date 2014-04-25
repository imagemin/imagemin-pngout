'use strict';

var ExecBuffer = require('exec-buffer');
var imageType = require('image-type');
var pngout = require('pngout-bin').path;
var tempfile = require('tempfile');

/**
 * pngout image-min plugin
 *
 * @param {Object} opts
 * @api public
 */

module.exports = function (opts) {
    opts = opts || {};

    return function (file, imagemin, cb) {
        if (imageType(file.contents) !== 'png') {
            return cb();
        }

        var exec = new ExecBuffer();
        var args = [];
        
        exec.src(tempfile('.png'));
        exec.dest(tempfile('.png'));

        if (typeof opts.strategy === 'number') {
            args.push('-s', opts.strategy);
        }

        exec
            .use(pngout, args.concat([exec.src(), exec.dest()]))
            .run(file.contents, function (err, buf) {
                if (err) {
                    return cb(err);
                }

                file.contents = buf;
                cb();
            });
    };
};
