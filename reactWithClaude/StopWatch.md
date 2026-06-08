Bro, now is actually the perfect time to learn `useRef()`. You've already learned:

- `useState()` → causes re-render
- `useEffect()` → runs side effects
- `useCallback()` → memoizes functions

Now comes:

# `useRef()`

## First, understand the problem.

Suppose you have:

```jsx
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}
```

Every time `setCount()` runs:

```txt
State changes
      ↓
React re-renders
      ↓
UI updates
```

But sometimes you want to store a value **without causing a re-render**.

That's exactly what `useRef` does.

---

# Syntax

```jsx
const myRef = useRef(initialValue);
```

Example:

```jsx
const countRef = useRef(0);
```

Internally:

```js
countRef = {
  current: 0,
};
```

Notice the `.current`.

You always read/write:

```js
countRef.current;
```

---

# Example 1 : Simple Variable Storage

```jsx
import { useRef } from "react";

function App() {
  const countRef = useRef(0);

  function increment() {
    countRef.current++;
    console.log(countRef.current);
  }

  return <button onClick={increment}>Increment</button>;
}
```

Output:

```txt
1
2
3
4
```

But the UI never updates because:

```txt
useRef
    ↓
No re-render
```

---

# Difference between useState and useRef

| useState         | useRef                   |
| ---------------- | ------------------------ |
| Stores value     | Stores value             |
| Causes re-render | Does NOT re-render       |
| Used for UI data | Used for internal values |

Example:

```jsx
const [count, setCount] = useState(0);
const countRef = useRef(0);
```

```js
setCount(5);
```

↓

```txt
UI updates
```

But:

```js
countRef.current = 5;
```

↓

```txt
No UI update
```

---

# The REAL use of useRef

## Accessing DOM elements.

Suppose:

```jsx
<input type="text" />
```

How do you directly access this input?

```jsx
const inputRef = useRef(null);

return <input ref={inputRef} type="text" />;
```

React automatically does:

```txt
inputRef.current
      ↓
Actual HTML Input Element
```

---

# Example 2 : Auto Focus

```jsx
import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

Flow:

```txt
Component Mounts
       ↓
inputRef.current gets input element
       ↓
useEffect runs
       ↓
focus()
       ↓
Cursor automatically appears
```

---

# Example 3 : Your Password Generator

Remember your copy button project?

Most tutorials do this:

```jsx
const passwordRef = useRef(null);

async function copyPassword() {
  passwordRef.current.select();

  await navigator.clipboard.writeText(passwordRef.current.value);
}

return (
  <>
    <input ref={passwordRef} value={password} readOnly />

    <button onClick={copyPassword}>Copy</button>
  </>
);
```

What happens?

```txt
Button Click
      ↓
passwordRef.current
      ↓
Gets input element
      ↓
select()
      ↓
Highlights text
      ↓
Copies to clipboard
```

This is probably why Chai aur Code introduced `useRef`.

---

# Visual Mental Model

```txt
const inputRef = useRef(null);

inputRef
   │
   ▼

{
   current: <input />
}
```

Whenever React renders:

```jsx
<input ref={inputRef} />
```

React fills:

```js
inputRef.current;
```

with the actual DOM element.

---

# Common Beginner Mistakes

### ❌

```js
console.log(inputRef);
```

You usually want:

```js
console.log(inputRef.current);
```

---

### ❌

```js
inputRef.focus();
```

Correct:

```js
inputRef.current.focus();
```

---

### ❌

```js
const ref = useRef();

ref = 5;
```

Never change the ref object itself.

Always:

```js
ref.current = 5;
```

---

# When should you use useRef?

## ✅ DOM Manipulation

- focus input
- select text
- scroll into view
- play/pause video

---

## ✅ Store values between renders

Example:

```js
const renderCount = useRef(0);

renderCount.current++;
```

---

## ❌ Don't use it for UI state

Bad:

```js
const count = useRef(0);

count.current++;

return <h1>{count.current}</h1>;
```

UI won't update.

Use state instead:

```js
const [count, setCount] = useState(0);
```

---

# Notebook Notes 📓

## useRef()

```jsx
const myRef = useRef(initialValue);
```

Creates an object:

```js
{
  current: initialValue;
}
```

---

## Characteristics

- Persists between renders.
- Does NOT cause re-renders.
- Commonly used to access DOM elements.

---

## DOM Example

```jsx
const inputRef = useRef(null);

<input ref={inputRef} />;

inputRef.current.focus();
```

---

## State vs Ref

```txt
useState
---------
Stores UI data
Triggers re-render

useRef
-------
Stores mutable value
No re-render
Often used for DOM access
```

---
