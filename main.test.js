import {
  capitalize,
  reverseString,
  calculator,
  caesorCipher,
  analyzeArray,
} from "./main.js";

// test cases for capitalize
it("capitalize hello to Hello", () => {
  expect(capitalize("hello")).toMatch("Hello");
});

it("capitalize eric to Eric", () => {
  expect(capitalize("eric")).toMatch("Eric");
});

it("capitalize unEvEn to Uneven", () => {
  expect(capitalize("unEvEn")).toMatch("Uneven");
});

it("capitalize 'three letter Words' to 'Three letter words'", () => {
  expect(capitalize("three letter Words")).toMatch("Three letter words");
});

// test cases for reverseString
it("reverses hello to olleh", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

it("reverses eric to cire", () => {
  expect(reverseString("eric")).toMatch("cire");
});
it("reverses 'Three letter words' to 'sdrow rettel eerhT'", () => {
  expect(reverseString("Three letter words")).toMatch("sdrow rettel eerhT");
});

// test cases for calculator

// addition
it("adds 1 and 2 to be 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
it("adds 1.5 and 1.5 to be 3", () => {
  expect(calculator.add(1.5, 1.5)).toBe(3);
});
it("adds -1 and 2 to be 1", () => {
  expect(calculator.add(-1, 2)).toBe(1);
});
// subtraction
it("subtracts 2 - 1 to be 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});
it("subtracts -2 - 1 to be -3", () => {
  expect(calculator.subtract(-2, 1)).toBe(-3);
});
it("subtracts -10 - (-20) to be 10", () => {
  expect(calculator.subtract(-10, -20)).toBe(10);
});

//multiply
it("multiply 2 * 1 to be 2", () => {
  expect(calculator.multiply(2, 1)).toBe(2);
});
it("multiply 2 * -1 to be -2", () => {
  expect(calculator.multiply(2, -1)).toBe(-2);
});
it("multiply 2 * 0 to be 0", () => {
  expect(calculator.multiply(2, 0)).toBe(0);
});
it("multiply 2 * 10 to be 2", () => {
  expect(calculator.multiply(2, 10)).toBe(20);
});

//divide

it("divides 2 / 1 to be 2", () => {
  expect(calculator.divide(2, 1)).toBe(2);
});
it("divides 2 / 0 to be infinity", () => {
  expect(calculator.divide(2, 0)).toBe(Infinity);
});
it("divides 2 / 10 to be 0.2", () => {
  expect(calculator.divide(2, 10)).toBe(0.2);
});
it("divides 21 / 7 to be 3", () => {
  expect(calculator.divide(21, 7)).toBe(3);
});

// Test cases for caesorCipher
it("ciphers Eric to be Fsjd when factor is 1", () => {
  expect(caesorCipher("Eric", 1)).toMatch("Fsjd");
});
it("ciphers 'Three letter word' to be 'Risff mfrrfs xpse' when factor is 1", () => {
  expect(caesorCipher("Three letter word", 1)).toMatch("Uisff mfuufs xpse");
});
it("ciphers 'Hello World!!!' to be 'Ifmmp Xpsme!!!' when factor is 1", () => {
  expect(caesorCipher("Hello World!!!", 1)).toMatch("Ifmmp Xpsme!!!");
});

// Test cases for analyzeArray
const arrayAnalysis = analyzeArray([1, 8, 3, 4, 2, 6]);
it("analyzes the average to be 4", () => {
  expect(arrayAnalysis.average).toBe(4);
});
it("analyzes the min to be 1", () => {
  expect(arrayAnalysis.min).toBe(1);
});
it("analyzes the max to be 8", () => {
  expect(arrayAnalysis.max).toBe(8);
});
it("analyzes the length to be 6", () => {
  expect(arrayAnalysis.length).toBe(6);
});
