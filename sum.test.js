import { sum } from "./sum";
import { capitalized } from "./sum";
import { reverseString } from "./sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Capitalized first letter', () => {
    expect(capitalized('hello')).toBe("Hello");
});

test('Reverse a string', () => {
    expect(reverseString("hello")).toBe("olleh");
});