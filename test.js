import fs from 'fs';
import path from 'path';
import test from 'ava';
import isPng from 'is-png';
import m from '.';

const fixture = fs.readFileSync(path.join(__dirname, 'fixture.png'));

test('optimize a PNG', async t => {
	const data = await m()(fixture);
	t.true(data.length < fixture.length);
	t.true(isPng(data));
});
