// 1. Counter starting at 0
function makeCounter() {
  let count = 0;
  const increaser = () => {
    count++;
    console.log(count);
  };
  return increaser;
}
const counter = makeCounter();
counter();
counter();
counter();

// 2. Greeter
function makeGreeter(name) {
  return function () {
    console.log(`Hello ${name}!`);
  };
}
const greetAman = makeGreeter("suraj");
greetAman();
greetAman();

// 3. Multiplier
function makeMultiplier(multiplier) {
  let val = multiplier;
  return function (num) {
    console.log(val * num);
  };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
double(3);
double(10);
triple(10);

// 4. Counter from a start number
function makeCounterFrom(startNumber) {
  let val = startNumber;
  return function () {
    val = val + 1;
    console.log(val);
  };
}
const counterFrom10 = makeCounterFrom(10);
counterFrom10();
counterFrom10();
counterFrom10();
