Frontend Developer Multiple Choice – ******\*\*\******* – task 1 of 1
Task description
Time: 25 min
No google etc.

---

### 1. Which of the following is the syntax for an object literal with no properties

- A) ();
- B) {};
- C) [];
- D) null;

---

### 2. What is the value of x after running the code below

Javascript
function foo(y) {
var x = 10;
var y = 7;
};
var x = foo("bar");

- A) 10
- B) "bar"
- C) undefined
- D) null

---

### 3. What does the break statement do

- A) It aborts the current iterative statement.
- B) It simulates a JavaScript crash.
- C) It aborts the current function.
- D) It cancels the current event.

---

### 4. What happens in the following code

Javascript
var x = { name: "hello" };
console.log(x.fame);

- A) Reference error
- B) 'undefined' is written to the console
- C) 'null' is written to the console
- D) An empty string is written to the console

---

### 5. Which of the following is NOT a logical operator

- A) `||`
- B) `!`
- C) `&`
- D) `&&`

---

### 6. What happens when you throw an exception in the catch block, using nested try-catch blocks? For example

Javascript
try {
try {
throw "Inside Exception";
} catch (ex) {
throw "exception in inner finally";
}
} catch (ex) {
console.log("Outer Catch: " + ex)
}

- A) Runtime error
- B) Exception isn't caught
- C) Syntax error
- D) Exception is caught by outer catch block

---

### 7. What does the following code write to the console

Javascript
var x = false;
if (x && console.log("hello")) {
console.log("done");
}

- A) 'hello' and 'done' are both written
- B) Only 'hello'
- C) Only 'done'
- D) Nothing

---

### 8. Select the regular expression that will accept only numbers and at least one number must be provided

- A) `/^[0-9]+$/`
- B) `/^[0-9]*$/`
- C) `/^(0-9)+$/`
- D) `/[0-9]+/`

---

### 9. What is a Promise

- A) A stream that may emit a single value some time in the future.
- B) A stream that may emit multiple values some time in the future.
- C) An object that may produce a single value some time in the future.
- D) An object that may produce multiple values some time in the future.

---

### 10. What is the most compact way to resolve a promise with a value 1 from the list below

- A) `new Promise(resolve => resolve(1));`
- B) `new Promise(1)`
- C) `Promise.resolve(1)`
- D) `Promise(1)`

---

### 11. What will be logged to the console

Javascript
new Promise(resolve => resolve())
.then(() => {
console.log("hello");
throw new Error();
})
.then(() => {
console.log("world");
return 2;
})
.catch(() => {
console.log("error");
});

- A) Nothing
- B) `error`
- C) `hello error`
- D) `hello world error`

---

### 12. What protocol does WebSocket use

- A) It is using HTTP/1.1 protocol
- B) It is using HTTP/2 protocol
- C) It is using UDP protocol
- D) It is a protocol on its own over TCP connection

---

### 13. What does this code write to the console assuming that our environment supports ES2016+

Javascript
const a = { isBusy: false, counter: 0 };
console.log({
...a,
counter: 1
});

- A) `Object { a: { isBusy: false, counter: 0 }, counter: 1 }`
- B) `Object { isBusy: false, counter: 0, counter: 1 }`
- C) `Object { isBusy: false, counter: 0 }`
- D) `Object { isBusy: false, counter: 1 }`

---

### 14. What does this code write to the console assuming that our environment supports ES2015+

Javascript
const [b] = [1, 2, 3];
const a = 2;
console.log({a, b});

- A) `Syntax error`
- B) `Object { a: undefined, b: undefined }`
- C) `Object { a: 2, b: 1 }`
- D) `Object { a: 2, b: [1, 2, 3] }`

---

### 15. What is not a keyword related to the ES2015 module format

- A) import
- B) from
- C) using
- D) export

---

### 16. Which of the following is not accessible from a Web Worker

- A) Function scope
- B) Document Object Model (DOM)
- C) Closures
- D) The global window object

---

### 17. Which browser feature would you use from the list below to enable o ine experience

- A) Service Worker
- B) Web Worker
- C) Webpack
- D) localStorage

---

### 18. Which HTML element is a container for metadata

- A) `<html>`
- B) `<head>`
- C) `<header>`
- D) `<footer>`

---

### 19. How can you make an email link

- A) `<a href="xxx@yyy">`
- B) `<mail href="xxx@yyy">`
- C) `<mail>xxx@yyy</mail>`
- D) `<a href="mailto:xxx@yyy">`

---

### 20. Which HTML5 element can you use for pixel manipulations

- A) `<board>`
- B) `<canvas>`
- C) `<picture>`
- D) `<context>`

---

### 21. Which one of the following HTML code is semantically correct

- A) `<h1><a href="https://www.google.com"><em>Google</em></a></h1>`
- B) `<a href="https://www.google.com"><h1><em>Google</em></h1></a>`
- C) `<a href="https://www.google.com"><em><h1>Google</h1></em></a>`
- D) `<em><a href="https://www.google.com"><h1>Google</h1></a></em>`

---

### 22. Which color would you pick for grey

- A) `#000`
- B) `#777`
- C) `#255`
- D) `#fff`

---

### 23. How do you set the margin like this

Top: 10px, Bottom: 5px, Left: 15px, Right: 10px

- A) `margin: 10px 10px 5px 15px;`
- B) `margin: 10px 15px 5px;`
- C) `margin: 10px 5px 15px 15px;`
- D) `margin: 15px 10px 15px 5px;`

---

### 24. Which CSS property/properties is/are NOT part of the box model

- A) width and height
- B) padding and margin
- C) border
- D) display

---

### 25. Given the following example code which text color would be the one shown on the screen

HTML

<style>
    body { color: green; }
    a { color: purple; }
    .link { color: yellow; }
    span a { color: red; }
</style>
<span>
    <a class="link" href="https://google.com">Google</a>
</span>
- A) Green
- B) Purple
- C) Yellow
- D) Red
---
### 26. What is going on in this CSS selector
CSS
    .contacts > ul a {}
- A) Select anchor links that are decedents of an ordered list that is a direct child of an element with an id "contacts"
- B) Select anchor links that are decedents of an unordered list that is a direct child of an element with a class "contacts"
- C) Select anchor links that are decedents of an unordered list that is a direct child of an element with an id "contacts"
- D) Select anchor links that are decedents of an unordered list that is a decendent of an element with a class "contacts"
---
### 27. What verb and url should be used to create a new movie in a hypothetical RESTful API for movies
- A) `GET /api/movies/1?title="New title"`
- B) `POST /api/movies/1?title="New title"`
- C) `PUT /api/movies/1`
- D) `POST /api/movies`
---
### 28. Which one of the following HTTP verb changes the state of the server
- A) GET
- B) POST
- C) OPTIONS
- D) TRACE
---
### 29. What is the correct syntax for type annotations in TypeScript
- A) const number a;
- B) number a;
- C) const a: number;
- D) const a; // number
---
### 30. How can you run TypeScript code in the browser
- A) All browsers support it, you can load it directly with a `<script>` tag.
- B) Some browsers support it, you can load it directly with a `<script>` tag.
- C) It needs to be mini ed by the TypeScript mini er.
- D) It needs to be compiled to executable JavaScript by the TypeScript compiler.
---
### 31. What is the generated JavaScript output of a TypeScript interface
- A) A function
- B) An object literal
- C) There are no interfaces in TypeScript
- D) Nothing
---
### 32. How can you create a variable in Sass
- A) `$width = 10px;`
- B) `$width: 10px;`
- C) `var width = "10px";`
- D) `var $width: 10px;`
---
### 33. What control directive is not supported by Sass
- A) `@if`
- B) `@else`
- C) `@try`
- D) `@for`
---
### 34. What does the below Sass code do
less
.movie {
    &-title {
        color: red;
    }
}
- A) Set the text color of an element with a class "movie-title" inside an element with a class "movie"
- B) Set the text color of an element with a class "movie-title"
- C) Set the text color of an element with an id "movie-title"
- D) Set the background color of an element with a class "movie-title"
---
### 35. There are 4 versions of a library: 1.0.2, 1.1.1, 1.2.0, 2.0.1
Which version will be installed by npm if you have version "^1.0.0" in your package.json?
- A) 1.0.2
- B) 1.1.1
- C) 1.2.0
- D) 2.0.1
---
### 36. How can you create a service in Angular 2+
- A) Using `@Injectable()` decorator
- B) Using `@Component()` decorator
- C) Extending the NgService class
- D) Implementing the NgService interface
---
### 37. Which one is NOT a component lifecycle hook in Angular2+
- A) ngOnInit
- B) ngOnChanges
- C) ngOnMount
- D) ngOnDestroy
---
### 38. When writing a unit test using jasmine, how can you spy on a method of an object and provide a fake return value
- A) `spyOn(foo, "bar").and.returnValue(1);`
- B) `spyOn(foo.bar).and.returnValue(1);`
- C) `spyOn(foo, "bar").and.return(1);`
- D) `spyOn(foo.bar).and.return(1);`
