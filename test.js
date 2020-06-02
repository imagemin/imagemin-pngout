const fs = require('fs');
const path = require('path');
const test = require('ava');
const isPng = require('is-png');
const m = require('.');

const fixture = fs.readFileSync(path.join(__dirname, 'fixture.png'));

test('optimize a PNG', async t => {
	const data = await m()(fixture);
	t.true(data.length < fixture.length);
	t.true(isPng(data));
});
