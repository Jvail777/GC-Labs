import { Greeter } from "./greeterClass";

class JavaScriptGreeter extends Greeter {
  constructor(greeting: string) {
    super(greeting);
  }
  greet(name: string): string {
    console.log(`console.log(${this.greeting}, ${name}!)`);
    return `console.log('${this.greeting}, ${name}!')`;
  }
}

export { JavaScriptGreeter };
