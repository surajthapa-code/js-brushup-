
## Your Next Component — Build From Scratch

No more Counter. New component: `src/components/UserCard.jsx`

**Requirements:**
- Accept these props: `name`, `role`, `isOnline`
- Display name and role
- Show a green dot + `"Online"` if `isOnline` is true, red dot + `"Offline"` if false
- If no `role` is passed, display `"No role assigned"` as default
- In `App.jsx`, render three `UserCard` components with different props

This tests: props, destructuring in parameters, conditional rendering — all in one component.

Paste `UserCard.jsx` and your `App.jsx` when done.

Works. Props and conditional rendering — correct.

---

## Code Review

**This pattern is repetitive:**
```javascript
{!role && "No role assigned"}
{role}
```

Cleaner with a ternary — one expression, one outcome:
```javascript
{role || "No role assigned"}
```

Even cleaner. If `role` is truthy, show it. If falsy, show the default. This is the standard pattern for default values in JSX.

**Emojis for status work but the requirement said "dot + text":**
```javascript
// You did:
{isOnline && "✅"}
{!isOnline && "🛑"}

// Production pattern — dot with label:
<span>{isOnline ? "🟢 Online" : "🔴 Offline"}</span>
```

One ternary. Not two separate conditions. When you have exactly two outcomes — always ternary, not two `&&` expressions.

---

## Two Patterns To Lock In

From today forward, use these:

```javascript
// Two outcomes → ternary
{isOnline ? "Online" : "Offline"}

// One outcome → &&
{hasError && <p>Something went wrong</p>}

// Default value → ||
{role || "No role assigned"}
```

