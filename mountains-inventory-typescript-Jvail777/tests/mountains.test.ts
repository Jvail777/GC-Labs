import { findNameOfTallestMountain } from "../src/mountains";

describe("findNameOfTallestMountain", () => {
  test("middle mountain", () => {
    const name = findNameOfTallestMountain([
      { name: "Kilimanjaro", height: 19341 },
      { name: "Everest", height: 29029 },
      { name: "Denali", height: 20310 }
    ]);
    expect(name).toBe("Everest");
  });
  test("first mountain", () => {
    const name = findNameOfTallestMountain([
      { name: "Everest", height: 29029 },
      { name: "Kilimanjaro", height: 19341 },
      { name: "Denali", height: 20310 }
    ]);
    expect(name).toBe("Everest");
  });
  test("last mountain", () => {
    const name = findNameOfTallestMountain([
      { name: "Kilimanjaro", height: 19341 },
      { name: "Denali", height: 20310 },
      { name: "Everest", height: 29029 }
    ]);
    expect(name).toBe("Everest");
  });
});