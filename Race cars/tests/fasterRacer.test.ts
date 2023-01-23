import { findRacersWithEmptyFuel } from "../Services/racer-functions";
import { SolarCar } from "../Models/SolarCar";
import { GasCar } from "../Models/GasCar";
import { IRacer } from "../Interfaces/IRacer"

describe("racer-function", () => {
    test("array of GasCar where some have no fuel", () => {
             const gasRacer1 = new GasCar("Gas1", 20);
             const gasRacer2 = new GasCar("Gas2", 10);
             const gasRacer3 = new GasCar("Gas3", 0);
             const gasRacer4 = new GasCar("Gas4", 0);
             const array = [gasRacer1, gasRacer2, gasRacer3, gasRacer4];
      expect(findRacersWithEmptyFuel(array)).toEqual([gasRacer3, gasRacer4]);
    });
    test("array of GasCar where all have no fuel", () => {
        const gasRacer1 = new GasCar("Gas1", 0);
        const gasRacer2 = new GasCar("Gas2", 0);
        const gasRacer3 = new GasCar("Gas3", 0);
        const gasRacer4 = new GasCar("Gas4", 0);
        const array = [gasRacer1, gasRacer2, gasRacer3, gasRacer4];
 expect(findRacersWithEmptyFuel(array)).toEqual([gasRacer1, gasRacer2, gasRacer3, gasRacer4]);
});
test("array of SolarCar", () => {
    const solarRacer1 = new SolarCar("Solar1");
    const solarRacer2 = new SolarCar("Solar2");
    const solarRacer3 = new SolarCar("Solar3");
    const solarRacer4 = new SolarCar("Solar4");
    const array = [solarRacer1, solarRacer2, solarRacer3, solarRacer4];
expect(findRacersWithEmptyFuel(array)).toEqual([]);
});
test("array of GasCar and SolarCar", () => {
    const solarRacer1 = new SolarCar("Solar1");
    const solarRacer2 = new SolarCar("Solar2");
    const gasRacer1 = new GasCar("Gas1", 0);
    const gasRacer2 = new GasCar("Gas2");
    const array = [solarRacer1, solarRacer2, gasRacer1, gasRacer2];
expect(findRacersWithEmptyFuel(array)).toEqual([gasRacer1]);
});
test("empty array", () => {
    const array: IRacer[] = [];
expect(findRacersWithEmptyFuel(array)).toEqual([]);
})
});