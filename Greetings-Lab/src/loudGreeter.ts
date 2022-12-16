import { Greeter } from "./greeterClass";

class LoudGreeter extends Greeter {
  private extra: string = "!!";

  constructor(greeting: string) {
    super(greeting);
  }

  addVolume(): void {
    this.extra += "!";
  }

  greet(name: string): string {
    console.log(`${this.greeting}, ${name}${this.extra}`);
    return `${this.greeting}, ${name}${this.extra}`;
  }
}
export { LoudGreeter };
