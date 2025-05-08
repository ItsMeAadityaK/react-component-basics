// src/utils/math.test.js
import { add } from './maths';

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('returns 0 when adding 0 + 0', () => {
  expect(add(0, 0)).toBe(0);
});
