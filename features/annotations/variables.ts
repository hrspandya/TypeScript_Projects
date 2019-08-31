let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: number[] = [1, 2, 3];
let colorsString: string[] = ['1', '2'];
let boolList: boolean[] = [true];

// classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// NOTE: When to use annotations

// 1) Function that returns any type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare varibale on line one and initialize variable later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i += 1) {
  if (words[i] == 'green') {
    foundWord = true;
  }
}

// 3) Variables whose types can not be inffered correctly.
let numbers = [-10, 1, 2];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
  }
}
