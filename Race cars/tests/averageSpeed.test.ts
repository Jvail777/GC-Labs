import { findAverageSpeed } from "../Services/racer-functions";
import { SolarCar } from "../Models/SolarCar";
import { GasCar } from "../Models/GasCar";
import { IRacer } from "../Interfaces/IRacer"

describe("Average speed", () => {
    test("Average speed of GasCars", () => {
             const gasRacer1 = new GasCar("Gas1", 2);
             gasRacer1.Accelerate();
             gasRacer1.Accelerate();
             const gasRacer2 = new GasCar("Gas2", 4);
             gasRacer2.Accelerate();
             gasRacer2.Accelerate();
             gasRacer2.Accelerate();
             gasRacer2.Accelerate();
             const gasRacer3 = new GasCar("Gas3", 0);
             const gasRacer4 = new GasCar("Gas4", 0);
             const array = [gasRacer1, gasRacer2, gasRacer3, gasRacer4];
      expect(findAverageSpeed(array)).toEqual(3);
    })
    test("Average speed of GasCars and SolarCars", () => {
        const gasRacer1 = new GasCar("Gas1", 2);
        gasRacer1.Accelerate();
        gasRacer1.Accelerate();
        const gasRacer2 = new GasCar("Gas2", 4);
        gasRacer2.Accelerate();
        gasRacer2.Accelerate();
        gasRacer2.Accelerate();
        gasRacer2.Accelerate();
        const solarRacer1 = new SolarCar("Solar1");
        solarRacer1.Accelerate();
        solarRacer1.Accelerate();
        solarRacer1.Accelerate();
        solarRacer1.Accelerate();
        const solarRacer2 = new SolarCar("Solar2");
        solarRacer2.Accelerate();
        solarRacer2.Accelerate();
        solarRacer2.Accelerate();
        solarRacer2.Accelerate();
        const array = [gasRacer1, gasRacer2, solarRacer1, solarRacer2];
 expect(findAverageSpeed(array)).toEqual(5);
})
test("Average speed of GasCars with 0 speed", () => {
    const gasRacer1 = new GasCar("Gas1", 2);
    const gasRacer2 = new GasCar("Gas2", 4);
    const gasRacer3 = new GasCar("Gas3", 0);
    const gasRacer4 = new GasCar("Gas4", 0);
    const array = [gasRacer1, gasRacer2, gasRacer3, gasRacer4];
expect(findAverageSpeed(array)).toEqual(0);
})
test("Empty array", () => {
    const array: IRacer[] = [];
expect(findAverageSpeed(array)).toEqual(0);
})
});