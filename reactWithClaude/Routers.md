## Week 2 Progress

| Concept                     | Status   |
| --------------------------- | -------- |
| `useState`                  | ✅       |
| `useEffect` + data fetching | ✅       |
| `useRef`                    | ✅       |
| Custom Hooks                | ✅       |
| React Router                | 🔜 Next  |
| Context API                 | 🔜 After |

---

## Next — React Router

Install it first:

```bash
npm install react-router-dom
```

**The mental model:**

React is a single page application. There's only one HTML file. React Router fakes navigation by watching the URL and rendering different components based on it. No page reloads — just component swaps.

**Basic setup in `main.jsx`:**

```javascript
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

**Defining routes in `App.jsx`:**

```javascript
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
```

**Navigating between pages:**

```javascript
import { Link, useNavigate } from "react-router-dom";

// Declarative — use in JSX
<Link to="/about">About</Link>;

// Programmatic — use in functions
const navigate = useNavigate();
navigate("/dashboard");
```

**Dynamic routes:**

```javascript
<Route path="/users/:id" element={<UserDetail />} />;

// Inside UserDetail:
import { useParams } from "react-router-dom";
const { id } = useParams(); // gets the id from URL
```

---

## Your Exercise

Build a mini multi-page app. Create these files:

```
src/
  pages/
    Home.jsx
    Users.jsx
    UserDetail.jsx
  components/
    Navbar.jsx
```

**Requirements:**

`Navbar.jsx` — links to `/` and `/users`, visible on every page

`Home.jsx` — just a heading "Welcome Home"

`Users.jsx`:

- Fetch from `https://jsonplaceholder.typicode.com/users`
- Display list of user names
- Each name is a `Link` to `/users/:id`
- Use your `useFetch` hook

`UserDetail.jsx`:

- Get `id` from URL using `useParams`
- Fetch from `https://jsonplaceholder.typicode.com/users/${id}`
- Display name, email, phone, company name
- Back button that navigates to `/users`

`App.jsx` — wire up all routes

Paste all files when done. This is the biggest exercise so far — take your time.
