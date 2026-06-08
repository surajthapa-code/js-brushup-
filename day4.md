Clean. All three correct. Async JS is done.

---

## Week 1 Progress

| Concept | Status |
|---|---|
| Closures | ✅ |
| `map` / `filter` / `reduce` | ✅ |
| Promises + `async/await` + `fetch` | ✅ |
| Destructuring + Spread | 🔜 Next — 30 mins |

---

Destructuring and spread are fast. No long explanation needed — you'll use these every single day in React so just learn the syntax cold.

---

## Destructuring

**Object destructuring — pull values out cleanly:**

```javascript
const user = { name: "Suraj", age: 21, city: "Amritsar" }

// Old way
const name = user.name
const age = user.age

// Destructuring
const { name, age } = user
console.log(name, age) // "Suraj" 21

// Rename while destructuring
const { name: userName } = user
console.log(userName) // "Suraj"

// Default value if property doesn't exist
const { country = "India" } = user
console.log(country) // "India"
```

**Array destructuring:**

```javascript
const colors = ["red", "green", "blue"]

const [first, second] = colors
console.log(first)  // "red"
console.log(second) // "green"

// Skip items
const [, , third] = colors
console.log(third)  // "blue"
```

**Destructuring in function parameters — you'll see this constantly in React:**

```javascript
// Instead of this:
function greet(user) {
  console.log(user.name)
}

// Do this:
function greet({ name, age }) {
  console.log(name, age)
}

greet({ name: "Suraj", age: 21 })
```

---

## Spread Operator

**Copying and merging objects:**

```javascript
const user = { name: "Suraj", age: 21 }

// Copy
const copy = { ...user }

// Merge + add new property
const updated = { ...user, city: "Amritsar" }
console.log(updated) // { name: "Suraj", age: 21, city: "Amritsar" }

// Override a property
const older = { ...user, age: 25 }
console.log(older) // { name: "Suraj", age: 25 }
```

**Copying arrays:**

```javascript
const nums = [1, 2, 3]
const more = [...nums, 4, 5]
console.log(more) // [1, 2, 3, 4, 5]
```

**Why this matters in React:** You never mutate state directly. Spread is how you create updated copies:

```javascript
// Updating one field in a state object
setUser({ ...user, age: 25 })

// Adding item to a state array
setItems([...items, newItem])
```

---

## Your Exercise — `day4.js`

No hand-holding on these. Figure it out:

```javascript
const product = {
  id: 1,
  name: "Laptop",
  price: 55000,
  specs: { ram: "16GB", storage: "512GB" }
}
```

1. Destructure `name` and `price` from `product`
2. Destructure `ram` from inside `specs` in one line
3. Write a function `displayProduct` that takes a product object as parameter — destructure `name` and `price` directly in the function signature
4. Create a new object `updatedProduct` that spreads `product` and changes `price` to `49000`
5. Add a new property `inStock: true` to `updatedProduct` using spread — in one line combined with step 4

```javascript
const cart = ["shirt", "shoes"]
```

6. Add `"watch"` to cart without mutating the original — use spread, store in `newCart`
7. Merge these two arrays using spread: `["a", "b"]` and `["c", "d"]`

Paste when done. After this — **you're done with JS week. We start React tomorrow.**