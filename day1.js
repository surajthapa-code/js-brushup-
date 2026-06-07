/*Exercise 1:
Write a function called makeCounter that:

Starts at 0
Returns a function
Every time that returned function is called, it increases count by 1 and logs it

Expected behavior:
const counter = makeCounter()
counter()  // logs 1
counter()  // logs 2
counter()  // logs 3 */

// const makeCounter = () => {
//   let count = 0;
//   const increaser = () => {
//     count++;
//     console.log(count);
//   };
//   return increaser;
// };
// const counter = makeCounter();

// counter();
// counter();
// counter();

/* Exercise 2:
Write a function called makeGreeter that:

Takes a name as argument
Returns a function
That returned function, when called, logs "Hello, [name]!"

Expected behavior:
const greetAman = makeGreeter("Aman")
greetAman()  // logs "Hello, Aman!"
greetAman()  // logs "Hello, Aman!" */

function makeGreeter(name) {
  return function () {
    console.log(`Hello ${name}!`);
  };
}
const greetAman = makeGreeter("suraj");

// greetAman();
// greetAman();

/*
Exercise 3 — Practical Closure:
Build a function called makeMultiplier that:

Takes a number called multiplier
Returns a function
That returned function takes any number and returns it multiplied by the original multiplier

Expected behavior:
javascriptconst double = makeMultiplier(2)
const triple = makeMultiplier(3)

console.log(double(5))   // 10
console.log(triple(5))   // 15
console.log(double(9))   // 18 */

function makeMultiplier(multiplier) {
  let val = multiplier;
  return function (num) {
    console.log(val * num);
  };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

// console.log(double(3));
// console.log(double(10));
// console.log(triple(10));

/*
Exercise 4 — Closure with a twist:
Build a function makeCounterFrom that:

Takes a startNumber
Returns a function
Each call increments from that start, not from 0

Expected:
javascriptconst counter = makeCounterFrom(10)
counter()  // 11
counter()  // 12
counter()  // 13 */

function makeCounterFrom(startNumber) {
  let val = startNumber;
  return function () {
    val = val + 1;
    console.log(val);
  };
}
const counter = makeCounterFrom(10);
counter(); //11
counter(); //12
counter(); //13
