'use strict';

var ExecBuffer = require('exec-buffer');
var isPng = require('is-png');
var pngout = require('pngout-bin').path;

/**
 * pngout image-min plugin
 *
 * @param {Object} opts
 * @api public
 */

module.exports = function (opts) {
	opts = opts || {};

	return function (file, imagemin, cb) {
		if (!isPng(file.contents)) {
			cb();
			return;
		}

		var exec = new ExecBuffer();
		var args = [];

		if (typeof opts.strategy === 'number') {
			args.push('-s', opts.strategy);
		}

		exec
			.src(exec.src() + '.png')
			.dest(exec.dest() + '.png')
			.use(pngout, args.concat([exec.src(), exec.dest()]))
			.run(file.contents, function (err, buf) {
				if (err) {
					cb(err);
					return;
				}

				file.contents = buf;
				cb();
			});
	};
};
