import { calcAverageProductPrice } from "../src/products";

describe("calcAverageProductPrice", () => {
  test("three products", () => {
    const value: number = calcAverageProductPrice([
      { name: "apples", price: 5 },
      { name: "oranges", price: 5 },
      { name: "mangos", price: 11 },
    ]);
    expect(value).toBe(7);
  });
  test("two products", () => {
    const value: number = calcAverageProductPrice([
      { name: "greens", price: 3 },
      { name: "cornbread", price: 4 },
    ]);
    expect(value).toBe(3.5);
  });
  test("one product", () => {
    const value: number = calcAverageProductPrice([
      { name: "desk", price: 120 },
    ]);
    expect(value).toBe(120);
  });
  test("zero products", () => {
    const value: number = calcAverageProductPrice([]);
    expect(value).toBe(0);
  });
});
