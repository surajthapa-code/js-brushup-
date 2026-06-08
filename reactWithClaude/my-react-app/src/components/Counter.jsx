import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>
        {count > 0 && count}
        {count === 0 && "Zero!"}
      </p>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          if (count === 0) {
            return setCount(0);
          }
          return setCount((prev) => prev - 1);
        }}
      >
        decrease
      </button>
    </>
  );
}

export default Counter;
