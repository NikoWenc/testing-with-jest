import { sum } from "./sum";
import { capitalized } from "./sum";
import { reverseString } from "./sum";
import { Calculator } from "./sum";
import { analyzeArray } from "./sum";
import { caesarCipher } from "./sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// capitalized test
test('Capitalized first letter', () => {
    expect(capitalized('hello')).toBe("Hello");
});

// reverseString test
test('Reverse a string', () => {
    expect(reverseString("hello")).toBe("olleh");
});

// Calculator test
test('Calculator Add', () => {
    const calc = new Calculator;
    expect(calc.add(1, 2)).toBe(3);
});

test('Calculator Subtract', () => {
    const calc = new Calculator;
    expect(calc.sub(2, 1)).toBe(1);
});

test('Calculator Multiply', () => {
    const calc = new Calculator;
    expect(calc.mul(2, 2)).toBe(4);
});

test('Calculator Divide', () => {
    const calc = new Calculator;
    expect(calc.div(10, 2)).toBe(5);
});

// ceasarCipher test
test("CeasarCipher", () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});
 
// test("CeasarCipher", () => {
//     expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
// });
 
// test("CeasarCipher", () => {
//     expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
// });
 
// analyzeArray test
test("Array Average", () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.average).toBe(4);
});
 
test("Array Min", () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.min).toBe(1);
});
 
test("Array Max", () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.max).toBe(8);
});
 
test("Array Length", () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.length).toBe(6);
}); 
