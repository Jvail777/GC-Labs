import { GasCar } from "../Models/GasCar";

describe("Racer and GasCar", () => {
  test("The team and fuel properties are set from the constructor parameters", () => {
    let newRacer = new GasCar("Gas", 20);
    expect(newRacer).toEqual({ fuel: 20, speed: 0, team: "Gas" });
  });
  test("fuel defaults to 10, when the second constructor parameter is omitted", () => {
    let newRacer = new GasCar("Lightning McQueen");
    expect(newRacer.fuel).toEqual(10);
  });
  test("The speed property starts at 0", () => {
    let newRacer = new GasCar("Lightning McQueen");
    expect(newRacer.speed).toEqual(0);
  });
  test("Calling accelerate once brings speed to 2", () => {
    let newRacer = new GasCar("Lightning McQueen");
    newRacer.Accelerate();
    expect(newRacer.speed).toEqual(2);
  });
  test("Calling accelerate twice brings speed to 4", () => {
    let newRacer = new GasCar("Lightning McQueen");
    newRacer.Accelerate();
    newRacer.Accelerate();
    expect(newRacer.speed).toEqual(4);
  });
  test("Calling accelerate once reduces fuel by 1", () => {
    let newRacer = new GasCar("Lightning McQueen");
    newRacer.Accelerate();
    expect(newRacer.fuel).toEqual(9);
  });
  test("Calling accelerate twice reduces fuel by 2", () => {
    let newRacer = new GasCar("Lightning McQueen");
    newRacer.Accelerate();
    newRacer.Accelerate();
    expect(newRacer.fuel).toEqual(8);
  });
  test("isFuelEmpty returns true when fuel is 0.", () => {
    let newRacer = new GasCar("Lightning McQueen", 0);
    expect(newRacer.IsFuelEmpty()).toEqual(true);
  });
});
