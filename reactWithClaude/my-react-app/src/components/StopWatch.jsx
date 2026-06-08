/*
Build a working stopwatch:
Requirements:

Display time in seconds — starts at 0
Three buttons — Start, Stop, Reset
Start begins counting up every second
Stop pauses it
Reset stops and returns to 0
The interval ID must be stored in a useRef — not state
seconds is stored in useState

Why ref for interval ID: If you store it in state, every setInterval call triggers a re-render, which creates a new interval, which triggers another re-render. Infinite loop. Ref holds it silently.
*/
import { useRef } from "react";
import { useState } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);
  const timeref = useRef(null);
  function start() {
    if (timeref.current) return;
    timeref.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }
  function stop() {
    clearInterval(timeref.current);
  }
  function reset() {
    clearInterval(timeref.current);
    setCount(0);
    timeref.current = null;
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default StopWatch;
