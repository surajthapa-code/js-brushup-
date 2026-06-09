## Week 2 Progress

| Concept                     | Status   |
| --------------------------- | -------- |
| `useState`                  | ✅       |
| `useEffect` + data fetching | ✅       |
| `useRef`                    | ✅       |
| Custom Hooks                | 🔜 Next  |
| React Router                | 🔜 After |
| Context API                 | 🔜 After |

---

## Custom Hooks — Why They Exist

Right now your `DataFetcher` has fetching logic inside the component. Every component that needs to fetch data would repeat the same `loading`, `error`, `data` pattern. That's the problem custom hooks solve.

**Rule:** If you find yourself writing the same stateful logic in multiple components — extract it into a custom hook.

A custom hook is just a function that:

- Starts with `use`
- Can call other hooks inside it

```javascript
// Instead of this in every component:
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

useEffect(() => {
  // fetch logic...
}, []);

// You write this once:
const { data, loading, error } = useFetch(url);
```

---

## Your Exercise

Create `src/hooks/useFetch.js`

**Requirements:**

- Takes a `url` as parameter
- Handles `data`, `loading`, `error` state internally
- Returns all three
- Refetch when `url` changes — dependency array

Then create `src/components/PostList.jsx`:

- Uses your `useFetch` hook with `https://jsonplaceholder.typicode.com/posts`
- Shows loading, error, and a list of post titles
- Limit display to first 10 posts using `.slice(0, 10)`

Paste both files when done.
