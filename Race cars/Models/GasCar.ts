import { IRacer } from "../Interfaces/IRacer";

class GasCar implements IRacer {
  //Properties
  team: string;
  speed: number = 0;
  fuel: number = 10;

  //Constructor
  constructor(team: string, fuel?: number) {
    this.team = team;

    if (fuel !== undefined) {
      this.fuel = fuel;
    }
  }

  //Methods
  Accelerate(): void {
    this.speed += 2;
    this.fuel -= 1;
  }

  IsFuelEmpty(): boolean {
    if (this.fuel <= 0) {
      return true;
    } else {
      return false;
    }
  }
}

export { GasCar };
