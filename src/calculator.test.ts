import test from 'node:test';
import assert from 'node:assert/strict';

import {
  add,
  subtract,
  multiply,
  divide,
  power,
  squareRoot,
  getMenuLines,
} from './calculator.js';

test('given two valid numbers when adding them then returns their sum', () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-2, 5), 3);
});

test('given two valid numbers when subtracting them then returns the difference', () => {
  assert.equal(subtract(10, 4), 6);
  assert.equal(subtract(0, 8), -8);
});

test('given two valid numbers when multiplying them then returns the product', () => {
  assert.equal(multiply(4, 5), 20);
  assert.equal(multiply(-3, 2), -6);
});

test('given two valid numbers when dividing them then returns the quotient', () => {
  assert.equal(divide(20, 4), 5);
  assert.equal(divide(9, 2), 4.5);
});

test('given a zero divisor when dividing then throws an error', () => {
  assert.throws(() => divide(10, 0), /No se puede dividir entre cero/);
});

test('given a base and an exponent when calculating power then returns the result', () => {
  assert.equal(power(2, 3), 8);
  assert.equal(power(5, 0), 1);
});

test('given a non-negative number when calculating square root then returns the root', () => {
  assert.equal(squareRoot(9), 3);
  assert.equal(squareRoot(0), 0);
});

test('given a negative number when calculating square root then throws an error', () => {
  assert.throws(() => squareRoot(-1), /número negativo/);
});

test('given the main menu when printing it then shows the expected options', () => {
  const menu = getMenuLines();

  assert.deepEqual(menu[0], '========================================');
  assert.deepEqual(menu[1], '          GESTIONEMOS CALCULATOR       ');
  assert.deepEqual(menu[3], '1. Add');
  assert.deepEqual(menu[4], '2. Subtract');
  assert.deepEqual(menu[5], '3. Multiply');
  assert.deepEqual(menu[6], '4. Divide');
  assert.deepEqual(menu[7], '5. Power');
  assert.deepEqual(menu[8], '6. Square root');
  assert.deepEqual(menu[9], '7. Exit');
});
