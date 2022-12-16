const promptly = require("promptly");

import { Greeter } from "./greeterClass";
import { JavaScriptGreeter } from "./javascriptGreeter";
import { LoudGreeter } from "./loudGreeter";
import { HtmlGreeter } from "./HtmlGreeter";

let greeting1 = new Greeter("Hello");
let greeting2 = new Greeter("Welcome To Walmart");
let javascriptGreeting1 = new JavaScriptGreeter("hello");
let loudGreeting1 = new LoudGreeter("hello");
let htmlGreeting1 = new HtmlGreeter("Hello", );

 greeting1.greet("James");
 greeting2.greet("David");
 javascriptGreeting1.greet("James");
 loudGreeting1.addVolume();
 loudGreeting1.greet("James");
 htmlGreeting1.greet("James");


(async () => {
    let name = await promptly.prompt('Name: ');
    let promptlyGreeting = new Greeter("Hello");
    promptlyGreeting.greet(name)
   
})();