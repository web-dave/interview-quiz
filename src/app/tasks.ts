// Frontend Developer Multiple Choice – *************** – task 1 of 1
// Task description
// Time: 25 min
// No google etc.

export interface ITask {
  question: string;
  task: string;
  answers: [string, string, string, string];
  solution: -1 | 0 | 1 | 2 | 3;
}
export const tasks: ITask[] = [
  {
    question:
      'Which of the following is the syntax for an object literal with no properties',
    task: ``,
    answers: ['();', '{};', '[];', 'null;'],
    solution: 1,
  },
  {
    question: 'What is the value of x after running the code below',
    task: `
function foo(y) {
    var x = 10;
    var y = 7;
};
var x = foo('bar');
`,
    answers: ['10', 'bar', 'undefined', 'null'],
    solution: 2,
  },
  {
    question: 'What does the break statement do',
    task: ``,
    answers: [
      'It aborts the current iterative statement.',
      'It simulates a JavaScript crash.',
      'It aborts the current function.',
      'It cancels the current event.',
    ],
    solution: 0,
  },
  {
    question: 'What happens in the following code',
    task: `
Javascript
var x = { name: "hello" };
console.log(x.fame);
`,
    answers: [
      'Reference error',
      "'undefined' is written to the console",
      "'null' is written to the console",
      'An empty string is written to the console',
    ],
    solution: 0,
  },
  {
    question: 'Which of the following is NOT a logical operator',
    task: ``,
    answers: ['||', '!', '&', '&&'],
    solution: 2,
  },
  {
    question:
      'What happens when you throw an exception in the catch block, using nested try-catch blocks? For example',
    task: `
try {
    try {
        throw "Inside Exception";
    } catch (ex) {
        throw "exception in inner finally";
    }
} catch (ex) {
    console.log("Outer Catch: " + ex)
}
`,
    answers: [
      'Runtime error',
      "Exception isn't caught",
      'Syntax error',
      'Exception is caught by outer catch block',
    ],
    solution: 3,
  },
  {
    question: 'What does the following code write to the console',
    task: `
var x = false;
if (x && console.log("hello")) {
    console.log("done");
}
`,
    answers: [
      "'hello' and 'done' are both written",
      "Only 'hello'",
      "Only 'done'",
      'undefined',
    ],
    solution: 3,
  },
  {
    question:
      'Select the regular expression that will accept only numbers and at least one number must be provided',
    task: ``,
    answers: ['/^[0-9]+$/', '/^[0-9]*$/', '/^(0-9)+$/', '/[0-9]+/'],
    solution: 0,
  },
  {
    question: 'What is a Promise',
    task: ``,
    answers: [
      'A stream that may emit a single value some time in the future.',
      'A stream that may emit multiple values some time in the future.',
      'An object that may produce a single value some time in the future.',
      'An object that may produce multiple values some time in the future.',
    ],
    solution: 2,
  },
  {
    question:
      'What is the most compact way to resolve a promise with a value 1 from the list below',
    task: ``,
    answers: [
      'new Promise(resolve => resolve(1));',
      'new Promise(1)',
      'Promise.resolve(1)',
      'Promise(1)',
    ],
    solution: null,
  },
  {
    question: 'What will be logged to the console',
    task: `
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
`,
    answers: ['Nothing', 'error', 'hello error', 'hello world error'],
    solution: 2,
  },
  {
    question: 'What protocol does WebSocket use',
    task: ``,
    answers: [
      'It is using HTTP/1.1 protocol',
      'It is using HTTP/2 protocol',
      'It is using UDP protocol',
      'It is a protocol on its own over TCP connection',
    ],
    solution: 3,
  },
  {
    question:
      'What does this code write to the console assuming that our environment supports ES2016+',
    task: `
const a = { isBusy: false, counter: 0 };
console.log({
    ...a,
    counter: 1
});
`,
    answers: [
      'Object { a: { isBusy: false, counter: 0 }, counter: 1 }',
      'Object { isBusy: false, counter: 0, counter: 1 }',
      'Object { isBusy: false, counter: 0 }',
      'Object { isBusy: false, counter: 1 }',
    ],
    solution: 3,
  },
  {
    question:
      'What does this code write to the console assuming that our environment supports ES2015+',
    task: `
const [b] = [1, 2, 3];
const a = 2;
console.log({a, b});
`,
    answers: [
      'Syntax error',
      'Object { a: undefined, b: undefined }',
      'Object { a: 2, b: 1 }',
      'Object { a: 2, b: [1, 2, 3] }',
    ],
    solution: 0,
  },
  {
    question: 'What is not a keyword related to the ES2015 module format',
    task: ``,
    answers: ['import', ' from', 'using', 'export'],
    solution: 2,
  },
  {
    question: 'Which of the following is not accessible from a Web Worker',
    task: ``,
    answers: [
      'Function scope',
      'Document Object Model (DOM)',
      'Closures',
      'The global window object',
    ],
    solution: 3,
  },
  {
    question:
      'Which browser feature would you use from the list below to enable online experience',
    task: ``,
    answers: ['Service Worker', ' Web Worker', 'Webpack', 'localStorage'],
    solution: 0,
  },
  {
    question: 'Which HTML element is a container for metadata',
    task: ``,
    answers: ['<html>', '<head>', '<header>', '<footer>'],
    solution: 1,
  },
  {
    question: 'How can you make an email link',
    task: ``,
    answers: [
      '<a href="xxx@yyy">',
      '<mail href="xxx@yyy">',
      '<mail>xxx@yyy</mail>',
      '<a href="mailto:xxx@yyy">',
    ],
    solution: 3,
  },
  {
    question: 'Which HTML5 element can you use for pixel manipulations',
    task: ``,
    answers: ['<board>', '<canvas>', '<picture>', '<context>'],
    solution: 1,
  },
  {
    question: 'Which one of the following HTML code is semantically correct',
    task: ``,
    answers: [
      '<h1><a href="https://www.google.com"><em>Google</em></a></h1>',
      '<a href="https://www.google.com"><h1><em>Google</em></h1></a>',
      '<a href="https://www.google.com"><em><h1>Google</h1></em></a>',
      '<em><a href="https://www.google.com"><h1>Google</h1></a></em>',
    ],
    solution: null,
  },
  {
    question: 'Which color would you pick for grey',
    task: ``,
    answers: ['#000', '#777', '#255', '#fff'],
    solution: 1,
  },
  {
    question: 'How do you set the margin like this',
    task: `
Top: 10px, Bottom: 5px, Left: 15px, Right: 10px
`,
    answers: [
      'margin: 10px 10px 5px 15px;',
      'margin: 10px 15px 5px;',
      'margin: 10px 5px 15px 15px;',
      'margin: 15px 10px 15px 5px;',
    ],
    solution: 0,
  },
  {
    question: 'Which CSS property/properties is/are NOT part of the box model',
    task: ``,
    answers: ['width and height', ' padding and margin', 'border', 'display'],
    solution: 3,
  },
  {
    question:
      'Given the following example code which text color would be the one shown on the screen',
    task: `
<style>
    body { color: green; }
    a { color: purple; }
    .link { color: yellow; }
    span a { color: red; }
</style>
<span>
    <a class="link" href="https://google.com">Google</a>
</span>
`,
    answers: ['Green', ' Purple', 'Yellow', 'Red'],
    solution: null,
  },
  {
    question: 'What is going on in this CSS selector',
    task: `.contacts > ul a {}`,
    answers: [
      'Select anchor links that are decedents of an ordered list that is a direct child of an element with an id "contacts"',
      'Select anchor links that are decedents of an unordered list that is a direct child of an element with a class "contacts"',
      'Select anchor links that are decedents of an unordered list that is a direct child of an element with an id "contacts"',
      'Select anchor links that are decedents of an unordered list that is a decendent of an element with a class "contacts"',
    ],
    solution: null,
  },
  {
    question:
      'What verb and url should be used to create a new movie in a hypothetical RESTful API for movies',
    task: ``,
    answers: [
      'GET /api/movies/1?title="New title"',
      'POST /api/movies/1?title="New title"',
      'PUT /api/movies/1',
      'POST /api/movies',
    ],
    solution: 3,
  },
  {
    question:
      'Which one of the following HTTP verb changes the state of the server',
    task: ``,
    answers: ['GET', ' POST', 'OPTIONS', 'TRACE'],
    solution: 1,
  },
  {
    question: 'What is the correct syntax for type annotations in TypeScript',
    task: ``,
    answers: [
      'const number a;',
      'number a;',
      'const a: number;',
      'const a; // number',
    ],
    solution: 2,
  },
  {
    question: 'How can you run TypeScript code in the browser',
    task: ``,
    answers: [
      'All browsers support it, you can load it directly with a `<script>` tag.',
      'Some browsers support it, you can load it directly with a `<script>` tag.',
      'It needs to be minified by the TypeScript minifier.',
      'It needs to be compiled to executable JavaScript by the TypeScript compiler.',
    ],
    solution: 3,
  },
  {
    question:
      'What is the generated JavaScript output of a TypeScript interface',
    task: ``,
    answers: [
      'A function',
      'An object literal',
      'There are no interfaces in TypeScript',
      'Nothing',
    ],
    solution: 3,
  },
  {
    question: 'How can you create a variable in Sass',
    task: ``,
    answers: [
      '$width = 10px;',
      '$width: 10px;',
      'var width = "10px";',
      'var $width: 10px;',
    ],
    solution: 1,
  },
  {
    question: 'What control directive is not supported by Sass',
    task: ``,
    answers: ['@if', '@else', '@try', '@for'],
    solution: 2,
  },
  {
    question: 'What does the below Sass code do',
    task: `
.movie {
    &-title {
        color: red;
    }
}
`,
    answers: [
      'Set the text color of an element with a class "movie-title" inside an element with a class "movie"',
      'Set the text color of an element with a class "movie-title"',
      'Set the text color of an element with an id "movie-title"',
      'Set the background color of an element with a class "movie-title"',
    ],
    solution: 1,
  },
  {
    question: 'There are 4 versions of a library: 1.0.2, 1.1.1, 1.2.0, 2.0.1',
    task: `Which version will be installed by npm if you have version "^1.0.0" in your package.json?`,
    answers: ['1.0.2', '1.1.1', '1.2.0', '2.0.1'],
    solution: 2,
  },
  {
    question: 'How can you create a service in Angular 2+',
    task: ``,
    answers: [
      'Using `@Injectable()` decorator',
      'Using `@Component()` decorator',
      'Extending the NgService class',
      'Implementing the NgService interface',
    ],
    solution: 0,
  },
  {
    question: 'Which one is NOT a component lifecycle hook in Angular2+',
    task: ``,
    answers: ['ngOnInit', 'ngOnChanges', 'ngOnMount', 'ngOnDestroy'],
    solution: 2,
  },
  {
    question:
      'When writing a unit test using jasmine, how can you spy on a method of an object and provide a fake return value',
    task: ``,
    solution: 0,
    answers: [
      'spyOn(foo, "bar").and.returnValue(1);',
      'spyOn(foo.bar).and.returnValue(1);',
      'spyOn(foo, "bar").and.return(1);',
      'spyOn(foo.bar).and.return(1);',
    ],
  },
];
