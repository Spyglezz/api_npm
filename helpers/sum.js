export function sum(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      // return "Arguments must be numbers !";
      throw new TypeError("Arguments must be numbers !");
    } else {
      return a + b;
    }
  } catch (error) {
    return error.message;
  }
}
