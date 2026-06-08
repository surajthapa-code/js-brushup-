Works. Props and conditional rendering — correct.

## Progress Check — Week 2 So Far

| Concept | Status |
|---|---|
| Virtual DOM + reconciliation | ✅ |
| `useState` mental model | ✅ |
| Props + destructuring | ✅ |
| Conditional rendering | ✅ |
| `useEffect` | 🔜 Next |

---

## Next — `useEffect`

This is the most misused hook in React. Most developers use it wrong for years. You'll learn it right today.

**The mental model:**

`useEffect` is not a lifecycle method. It's a **synchronisation tool.** It synchronises your component with something outside React — an API, a timer, localStorage, a DOM event.

```javascript
useEffect(() => {
  // runs after render
}, [dependency])
```

**The dependency array controls when it runs:**

```javascript
// No array — runs after EVERY render (almost never what you want)
useEffect(() => { ... })

// Empty array — runs once after first render only
useEffect(() => { ... }, [])

// With dependencies — runs when those values change
useEffect(() => { ... }, [count, userId])
```

**The most important rule — cleanup:**

Some effects create things that need to be destroyed — timers, subscriptions, event listeners. If you don't clean them up, they keep running after the component is gone. That's a memory leak.

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log("tick")
  }, 1000)

  return () => clearInterval(timer)  // cleanup function
}, [])
```

Whatever you return from `useEffect` runs when the component unmounts or before the effect runs again.

---

## Your Exercise — `src/components/DataFetcher.jsx`

**Requirements:**
- On mount, fetch from `https://jsonplaceholder.typicode.com/users`
- Show a `"Loading..."` text while fetching
- Once loaded, display each user's `name` and `email` in a list
- If fetch fails, show `"Something went wrong"`
- Use `useEffect` + `useState` — three state variables: `data`, `loading`, `error`

This is the exact pattern used in every real React app that talks to an API.

Paste `DataFetcher.jsx` when done.