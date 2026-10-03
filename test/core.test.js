import test from 'node:test';
import assert from 'node:assert/strict';

import { Widget, inspect } from '../public/core.js';
test('instances own independent names and share behavior', () => {
  const a = new Widget('Map'); const b = new Widget('Compass');
  assert.equal(a.describe, b.describe); a.name = 'Atlas';
  assert.equal(b.describe(), 'Widget: Compass');
  assert.equal(inspect(a).ownsName, true); assert.equal(inspect(a).ownsDescribe, false);
});
test('an own method shadows without changing another instance', () => {
  const a = new Widget('A'); const b = new Widget('B');
  a.describe = () => 'Custom'; assert.equal(inspect(a).description, 'Custom');
  assert.equal(b.describe(), 'Widget: B'); delete a.describe;
  assert.equal(a.describe(), 'Widget: A');
});
test('detached method needs an explicit receiver', () => {
  const method = Widget.prototype.describe;
  assert.throws(() => method(), /receiver/);
  assert.equal(method.call(new Widget('Map')), 'Widget: Map');
});
test('blank and non-string names fail at construction', () => {
  for (const value of ['', '   ', null, 2]) assert.throws(() => new Widget(value), TypeError);
  assert.equal(new Widget(' Map ').name, 'Map');
});
