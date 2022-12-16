import { Greeter } from "../src/greeterClass";
import { HtmlGreeter } from "../src/HtmlGreeter";
import { JavaScriptGreeter } from "../src/javascriptGreeter";
import { LoudGreeter } from "../src/loudGreeter";

describe(`Greeter class`, () => {
  test(`returns howdy`, () => {
    // arrange
    let greeting1: Greeter = new Greeter("howdy");
    // act (n/a)
    // assert
    expect(greeting1.greeting).toBe("howdy");
  });
  test(`returns "hi, david!"`, () => {
    // arrange - set up data
    let newGreeting: Greeter = new Greeter("hi");
    // act - call method
    let returnString: string = newGreeting.greet("david");
    // assert
    expect(returnString).toBe("hi, david!");
  });
});

describe(`JavaScript Greeter`, () => {
  test(`returns "console.log('hello, jackson!')`, () => {
    // arrange
    let JavaScript1: JavaScriptGreeter = new JavaScriptGreeter("hello");
    // act
    let result: string = JavaScript1.greet("jackson");
    // assert
    expect(result).toBe("console.log('hello, jackson!')");
  });
  test(`returns "console.log('sup, James!')`, () => {
    // arrange
    let JavaScript1: JavaScriptGreeter = new JavaScriptGreeter("sup");
    // act
    let result: string = JavaScript1.greet("James");
    // assert
    expect(result).toBe("console.log('sup, James!')");
  });
});

describe(`Loud Greeter`, () => {
  test(`calling addVolume once returns "whats up, Josh!!!"`, () => {
    // arrange
    let louder: LoudGreeter = new LoudGreeter("whats up");
    // act
    louder.addVolume();
    let result: string = louder.greet("Josh");
    // assert
    expect(result).toBe("whats up, Josh!!!");
  });
  test(`without calling addVolume returns "whats up, Josh!!"`, () => {
    // arrange
    let louder: LoudGreeter = new LoudGreeter("whats up");
    // act
    let result: string = louder.greet("Josh");
    // assert
    expect(result).toBe("whats up, Josh!!");
  });
  test(`calling addVolume three times returns "whats up, Josh!!!!!"`, () => {
    // arrange
    let louder: LoudGreeter = new LoudGreeter("whats up");
    // act
    louder.addVolume();
    louder.addVolume();
    louder.addVolume();
    let result: string = louder.greet("Josh");
    // assert
    expect(result).toBe("whats up, Josh!!!!!");
  });
});

describe(`Html Greeter`, () => {
  test(`default tagName returns "<h1>hello, world!</h1>`, () => {
    let hello: HtmlGreeter = new HtmlGreeter("hello");
    let result: string = hello.greet("world");
    expect(result).toBe("<h1>hello, world!</h1>");
  });
  test(`greet method: greeting "hello" and "world" with a tagName of p returns "<p>hello, world!</p>`, () => {
    let hello: HtmlGreeter = new HtmlGreeter("hello", "p");
    let result: string = hello.greet("world");
    expect(result).toBe("<p>hello, world!</p>");
  });
});
