import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevcount) => prevcount + 1);
  };

  useEffect(() => {
    const Interval = setInterval(tick, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, []);

  return <div>{count}</div>;
}

export default IntervalHookCounter;
