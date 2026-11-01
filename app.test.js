
const test = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('./app');

test('adds two positive numbers', () => {
  assert.equal(add(5, 3), 8);
});

test('adds zero and a negative number', () => {
  assert.equal(add(0, -5), -5);
});
