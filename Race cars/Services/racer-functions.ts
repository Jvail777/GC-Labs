import { IRacer } from "../Interfaces/IRacer";
import { GasCar } from "../Models/GasCar";
import { SolarCar } from "../Models/SolarCar";
function findRacersWithEmptyFuel(racers: IRacer[]): IRacer[] {
  let emptyFuelArray: IRacer[] = [];
  racers.filter((element) => {
    if (element.IsFuelEmpty()) {
      return emptyFuelArray.push(element);
    }
  });
  return emptyFuelArray;
}



function findAverageSpeed(racers: IRacer[]): number {
  let totalSpeed = 0;

  if (racers.length === 0) {
    return 0;
  }

  for (let racer of racers) {
    totalSpeed += racer.speed;
  }
  return totalSpeed / racers.length;
}



function getFasterRacer(racerA: IRacer, racerB: IRacer): IRacer | null {
  if (racerA.speed > racerB.speed) {
    return racerA;
  } else if (racerA.speed < racerB.speed) {
    return racerB;
  } else {
    return null;
  }
}

export { findRacersWithEmptyFuel, findAverageSpeed, getFasterRacer };
