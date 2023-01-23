import { SolarCar } from "../Models/SolarCar";

describe("Racer and SolarCar", () => {
  test("The team property is set from the constructor parameter.", () => {
    let newRacer = new SolarCar("Hudson Hornet");
    expect(newRacer.team).toEqual("Hudson Hornet");
  });
  test("Speed starts at 0", () => {
    let newRacer = new SolarCar("Hudson Hornet");
    expect(newRacer.speed).toEqual(0);
  });
  test("Speed is 1 after calling Accelerate", () => {
    let newRacer = new SolarCar("Hudson Hornet");
    newRacer.Accelerate();
    expect(newRacer.speed).toEqual(1);
  });
  test("Speed is 2 after calling Accelerate twice", () => {
    let newRacer = new SolarCar("Hudson Hornet");
    newRacer.Accelerate();
    newRacer.Accelerate();
    expect(newRacer.speed).toEqual(2);
  });
  test("isFuelEmpty returns false", () => {
    let newRacer = new SolarCar("Hudson Hornet");
    expect(newRacer.IsFuelEmpty()).toEqual(false);
  });
});
