'use strict';
const isPng = require('is-png');
const pngout = require('pngout-bin');
const execa = require('execa');

module.exports = opts => buf => {
	opts = Object.assign({strategy: 0}, opts);

	if (!Buffer.isBuffer(buf)) {
		return Promise.reject(new TypeError(`Expected a \`Buffer\`, got \`${typeof buf}\``));
	}

	if (!isPng(buf)) {
		return Promise.resolve(buf);
	}

	const args = [
		'-',
		'-',
		'-f0',
		'-y',
		'-force',
		'-q'
	];

	if (typeof opts.strategy === 'number') {
		args.push(`-s${opts.strategy}`);
	}

	return execa.stdout(pngout, args, {
		encoding: null,
		input: buf
	}).catch(err => {
		err.message = err.stderr || err.message;
		throw err;
	});
};
