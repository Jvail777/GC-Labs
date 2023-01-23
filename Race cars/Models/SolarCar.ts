import { IRacer } from "../Interfaces/IRacer";

class SolarCar implements IRacer {
  //Properties
  team: string;
  speed: number = 0;

  //Constructor
  constructor(team: string) {
    this.team = team;
  }

  //Methods
  Accelerate(): void {
    this.speed += 1;
  }
  IsFuelEmpty(): boolean {
    return false;
  }
}

export { SolarCar };
