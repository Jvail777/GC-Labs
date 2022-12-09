import { calcInventoryValue } from "../src/inventory";

describe("calcInventoryValue", () => {
  test("three products", () => {
    const value: number = calcInventoryValue([
      { product: { name: "apples", price: 5 }, quantity: 4 },
      { product: { name: "oranges", price: 5 }, quantity: 5 },
      { product: { name: "mangos", price: 5 }, quantity: 6 }
    ]);
    expect(value).toBe(75);
  });
  test("two products", () => {
    const value: number = calcInventoryValue([
      { product: { name: "greens", price: 3 }, quantity: 10 },
      { product: { name: "cornbread", price: 4 }, quantity: 15 }
    ]);
    expect(value).toBe(90);
  });
  test("one product", () => {
    const value: number = calcInventoryValue([
      { product: { name: "desk", price: 120 }, quantity: 2 }
    ]);
    expect(value).toBe(240);
  });
  test("zero products", () => {
    const value: number = calcInventoryValue([]);
    expect(value).toBe(0);
  });
});