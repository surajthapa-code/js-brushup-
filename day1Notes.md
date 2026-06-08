What is a Closure — Under the Hood
Before you write anything, understand what you're writing.

In simple terms:
A closure is a function that remembers the variables from where it was created, even after that outer function has finished running.

Example:
```javascript
function outer() {
  let count = 0        // this variable lives here

  function inner() {
    count++            // inner function remembers 'count'
    console.log(count)
  }

  return inner         // we return the function itself
}

const counter = outer()   // outer() finished running
counter()   // logs 1
counter()   // logs 2
counter()   // logs 3
```
outer() finished. Normally `count` should be gone. But `inner` closed over it — it kept a reference alive. That's a closure.

Why does this matter for React?
Every single time you write this:
```javascript
const [count, setCount] = useState(0)

useEffect(() => {
  console.log(count)   // this function 'closes over' count
}, [count])
```
That arrow function inside `useEffect` is a closure. It remembers `count` from the render it was created in. This is exactly why the dependency array exists. If you don't understand closures, `useEffect` bugs will destroy you and you won't know why.

Exercises from day1.js
These exercises are all about how closure keeps a value alive and accessible to the returned function.

1. `makeCounter`
- The outer function creates `count` and starts it at `0`.
- It returns the inner function `increaser()`.
- Each time the returned function runs, `count` increments.
- Because of closure, `count` stays alive between calls.

```javascript
function makeCounter() {
  let count = 0;
  const increaser = () => {
    count++;
    console.log(count);
  };
  return increaser;
}
```

Exercise question explained:
- "Starts at 0" means the private variable inside `makeCounter` is initialized once.
- "Returns a function" means you get back a callable value that still has access to `count`.
- "Each time called, it increases count" is the behavior provided by the inner function.

2. `makeGreeter`
- The outer function takes a `name` argument.
- It returns an inner function that logs `Hello ${name}!`.
- The returned function remembers the original `name` even after `makeGreeter` is finished.

```javascript
function makeGreeter(name) {
  return function () {
    console.log(`Hello ${name}!`);
  };
}
```

Why this works:
- The returned function closes over the `name` argument.
- Even though `makeGreeter` is done, `name` stays available.

3. `makeMultiplier`
- The outer function receives a `multiplier`.
- It returns a function that uses that multiplier on a new number.
- The returned function remembers the original multiplier.

```javascript
function makeMultiplier(multiplier) {
  let val = multiplier;
  return function (num) {
    console.log(val * num);
  };
}
```

Exercise question explained:
- This shows that closures are not only for counters.
- The inner function can keep any data from the outer scope and use it later.

4. `makeCounterFrom`
- This is the same closure idea, but the counter starts from a given value.
- The outer function takes `startNumber` and stores it in `val`.
- The returned function increments `val` each time it runs.

```javascript
function makeCounterFrom(startNumber) {
  let val = startNumber;
  return function () {
    val = val + 1;
    console.log(val);
  };
}
```

Exercise question explained:
- "Takes a startNumber" means the closure begins with a custom initial value.
- Each call moves the counter forward from that start.
- This is useful when you want state that begins at a specific number instead of zero.

Key takeaway
Closures are how JavaScript keeps local variables alive for later use. In these exercises:
- `makeCounter` keeps a hidden `count`
- `makeGreeter` keeps a hidden `name`
- `makeMultiplier` keeps a hidden `multiplier`
- `makeCounterFrom` keeps a hidden `startNumber`

That hidden state is the whole point of closure. Once you understand that, the pattern is easy to reuse everywhere.