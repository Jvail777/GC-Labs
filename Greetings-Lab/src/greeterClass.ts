class Greeter {
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }

  greet(name: string): string {
    console.log(
      `${this.greeting}, ${name}!`
    );
    return `${this.greeting}, ${name}!`;
  }
}

export { Greeter };

