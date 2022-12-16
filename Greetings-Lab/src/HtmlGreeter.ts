import exp from "constants";
import { Greeter } from "./greeterClass";

class HtmlGreeter extends Greeter {
tagName?: string = "h1";

constructor(greeting:string, tagName:string = "h1"){
super(greeting);
this.tagName = tagName;
}

greet(name: string): string {
    console.log(`<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`);
    return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`;
}

}

export {HtmlGreeter};