const {
  sumNumbersAndSquareResult
} = require("./sumNumbersAndSquareResult");

test("sums [1, 2, 3] and squares the result", () => {
  expect(sumNumbersAndSquareResult([1, 2, 3])).toBe(36);
});

test("sums [0, 0, 0] and squares the result", () => {
  expect(sumNumbersAndSquareResult([0, 0, 0])).toBe(0);
});

test("sums [-1, -2, -3] and squares the result", () => {
  expect(sumNumbersAndSquareResult([-1, -2, -3])).toBe(36);
});

test("sums [10, 20, 30] and squares the result", () => {
  expect(sumNumbersAndSquareResult([10, 20, 30])).toBe(3600);
});

test("sums an empty array and squares the result", () => {
  expect(sumNumbersAndSquareResult([])).toBe(0);
});

test("throws an error when array contains non-numeric characters", () => {
  expect(() => sumNumbersAndSquareResult(["a", "b", "c"])).toThrow(TypeError);
  expect(() => sumNumbersAndSquareResult([1, "b", 3])).toThrow(TypeError);
  expect(() => sumNumbersAndSquareResult(["1", "2", "3"])).toThrow(TypeError);
});

test("throws an error when input is not an array", () => {
  expect(() => sumNumbersAndSquareResult(null)).toThrow(TypeError);
  expect(() => sumNumbersAndSquareResult(123)).toThrow(TypeError);
  expect(() => sumNumbersAndSquareResult("abc")).toThrow(TypeError);
});
