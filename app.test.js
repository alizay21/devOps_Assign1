const test = require('node:test');
const assert = require('node:assert/strict');

const { add, subtract } = require('./app');

// Addition tests
test('adds two positive numbers', () => {
    assert.equal(add(5, 3), 8);
});

test('adds zero and a negative number', () => {
    assert.equal(add(0, -5), -5);
});

// Subtraction tests
test('subtracts two positive numbers', () => {
    assert.equal(subtract(10, 4), 6);
});

test('subtracts a larger number from a smaller number', () => {
    assert.equal(subtract(3, 8), -5);
});

test('subtracts zero', () => {
    assert.equal(subtract(5, 0), 5);
});