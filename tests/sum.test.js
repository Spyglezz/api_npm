import { sum } from "../helpers/sum.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("use function with non-number arguments", () => {
  expect(sum("1", 2)).toEqual("Arguments must be numbers !");
});

// test("use function with non-number arguments throw type error", () => {
//   expect(sum("1", 2)).toThrow(TypeError.message);
// });
