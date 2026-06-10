Perfect. Context API is exactly the next thing you should learn after:

```txt
useState
↓
Props
↓
Component Tree
↓
Context API
```

Because Context API solves a problem you've probably not fully felt yet.

---

# The Problem

Imagine this component tree:

```txt
App
│
├── Navbar
│
└── Dashboard
    │
    └── Profile
        │
        └── UserInfo
```

Suppose user data lives in App:

```js
const [user, setUser] = useState({
  name: "Suraj",
  role: "Student",
});
```

Now `UserInfo` needs that data.

Without Context API:

```txt
App
 ↓ props
Dashboard
 ↓ props
Profile
 ↓ props
UserInfo
```

Code:

```jsx
<App user={user} />

<Dashboard user={user} />

<Profile user={user} />

<UserInfo user={user} />
```

This is called:

## Prop Drilling

Passing props through components that don't even need them.

---

# Context API Solution

Instead:

```txt
Context
   ↓

App
│
├── Navbar
│
└── Dashboard
    │
    └── Profile
        │
        └── UserInfo
```

Any component can directly access the data.

No prop drilling.

---

# Think of Context Like WiFi

Without Context:

```txt
App
 ↓ cable
Dashboard
 ↓ cable
Profile
 ↓ cable
UserInfo
```

With Context:

```txt
           WiFi

App
│
├── Navbar
│
├── Dashboard
│
├── Profile
│
└── UserInfo
```

Everyone can access it directly.

---

# Creating Context

Create:

```txt
src/context/UserContext.js
```

```jsx
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

---

# What is createContext?

```js
const UserContext = createContext();
```

creates a global container.

Think:

```txt
UserContext
        ↓
Empty box
```

Later we'll put data inside.

---

# Provider

In App.jsx

```jsx
import UserContext from "./context/UserContext";

function App() {
  const user = {
    name: "Suraj",
    role: "Student",
  };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}
```

---

## Provider Meaning

```txt
Provider
   ↓
Makes data available
to all children
```

Think:

```txt
UserContext.Provider

value =
{
  name: "Suraj",
  role: "Student"
}
```

---

# Consuming Context

Inside UserInfo.jsx

```jsx
import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserInfo() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.role}</p>
    </>
  );
}
```

---

# Visual Flow

```txt
Provider
   │
   ▼

value={
  name:"Suraj"
}

   │
   ▼

useContext(UserContext)

   │
   ▼

{
 name:"Suraj"
}
```

---

# Most Common Real Example

Theme

```txt
Dark Mode
Light Mode
```

Without Context:

```txt
App
 ↓
Navbar
 ↓
Sidebar
 ↓
Button
```

Pass theme everywhere.

With Context:

```txt
ThemeContext
```

Every component reads theme directly.

---

# Another Real Example

Authentication

```js
{
  name: "Suraj",
  email: "...",
  isLoggedIn: true
}
```

Store it in Context.

Any page can access:

```js
const user = useContext(AuthContext);
```

---

# Updating Context

Context can also contain state.

```jsx
const [theme, setTheme] = useState("light");

<ThemeContext.Provider
  value={{
    theme,
    setTheme
  }}
>
```

Now any component can do:

```js
const { theme, setTheme } = useContext(ThemeContext);
```

and change global state.

---

# Mental Model

```txt
useState
-------
Local State

Context API
-----------
Global State

Component State
---------------
Button Click Count

Context State
-------------
User
Theme
Language
Auth
```

---

# Notebook Notes 📓

## createContext()

Creates a Context object.

```js
const UserContext = createContext();
```

---

## Provider

Makes data available to child components.

```jsx
<UserContext.Provider
  value={user}
>
```

---

## useContext()

Reads data from Context.

```js
const user = useContext(UserContext);
```

---

## Why Context API?

Avoids:

```txt
Prop Drilling
```

Example:

```txt
App
 ↓
A
 ↓
B
 ↓
C
 ↓
D
```

Passing props through A, B, C just to reach D.

---

# Your First Context API Exercise

Build a Theme Switcher.

### Requirements

Create:

```txt
ThemeContext.js
```

Store:

```js
theme;
setTheme;
```

App should:

```txt
Current Theme: Light

[Toggle Theme]
```

Click button:

```txt
Light → Dark
Dark → Light
```

And the button should access the state using `useContext`, not props.

This is the classic beginner Context API project and will make the Provider → useContext flow click immediately. 🚀

suraj Comment ->{this is different notes not connected much with the min-project i made}
